// 独立写作页面保留原生链接；脚本仅增强目录、搜索和就近来源查看。
const lessonMenu = document.querySelector('#menu-toggle');
const lessonSidebar = document.querySelector('#sidebar');
lessonMenu.hidden = false;
lessonMenu.addEventListener('click', () => {
  const open = lessonMenu.getAttribute('aria-expanded') !== 'true';
  lessonMenu.setAttribute('aria-expanded', String(open));
  lessonMenu.textContent = open ? '收起目录' : '展开目录';
  lessonSidebar.classList.toggle('is-open', open);
});

const lessonDialog = document.querySelector('#source-dialog');
document.querySelectorAll('.cite').forEach(link => {
  link.addEventListener('click', event => {
    const source = document.getElementById(link.hash.slice(1));
    if (!source) return;
    event.preventDefault();
    const copy = source.cloneNode(true);
    copy.removeAttribute('id');
    document.querySelector('#source-content').replaceChildren(copy);
    lessonDialog.showModal();
  });
});

const lessonSearch = document.querySelector('#search-input');
const lessonResults = document.querySelector('#search-results');
document.querySelector('#search-box').hidden = false;
lessonSearch.addEventListener('input', () => {
  lessonResults.replaceChildren();
  const query = lessonSearch.value.trim().toLocaleLowerCase();
  if (!query) return;
  const matches = window.writingSearch.filter(item => item.text.includes(query));
  const status = document.createElement('p');
  status.textContent = matches.length ? `找到 ${matches.length} 处，显示前 ${Math.min(8, matches.length)} 处` : '未找到；可尝试“比较”“图注”等词。';
  lessonResults.append(status);
  matches.slice(0, 8).forEach(item => {
    const link = document.createElement('a');
    link.href = '../' + item.href;
    link.textContent = item.title;
    lessonResults.append(link);
  });
});

// 窄屏选择本页目录后收起导航，避免遮挡目标。
document.querySelectorAll('.lesson-local-toc a').forEach(link => {
  link.addEventListener('click', () => {
    lessonMenu.setAttribute('aria-expanded', 'false');
    lessonMenu.textContent = '展开目录';
    lessonSidebar.classList.remove('is-open');
  });
});
document.body.classList.add('js-enabled');

// 同一功能色连接摘要句子与旁批；默认保留全部批注。
document.querySelectorAll('[data-annotation-studio]').forEach(studio => {
  const fragments = [...studio.querySelectorAll('[data-focus-role]')];
  const notes = [...studio.querySelectorAll('[data-note-role]')];
  const reset = studio.querySelector('[data-reset-annotations]');
  const focus = role => {
    studio.dataset.focus = role || 'all';
    fragments.forEach(fragment => fragment.setAttribute('aria-pressed', String(fragment.dataset.focusRole === role)));
    notes.forEach(note => { note.hidden = Boolean(role) && note.dataset.noteRole !== role; });
  };
  fragments.forEach(fragment => {
    fragment.setAttribute('role', 'button');
    fragment.setAttribute('tabindex', '0');
    fragment.setAttribute('aria-pressed', 'false');
    const activate = () => focus(fragment.getAttribute('aria-pressed') === 'true' ? null : fragment.dataset.focusRole);
    fragment.addEventListener('click', activate);
    fragment.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });
  });
  reset.hidden = false;
  reset.addEventListener('click', () => focus(null));
});

// 人工矩阵的三种聚合，始终保留右列的逐行最大值用于对读。
document.querySelectorAll('[data-score-demo]').forEach(demo => {
  const cells = [...demo.querySelectorAll('[data-score-value]')];
  const rows = [...demo.querySelectorAll('tbody tr')].map(row => [...row.querySelectorAll('[data-score-value]')]);
  const maximum = group => group.reduce((best, cell) => Number(cell.dataset.scoreValue) > Number(best.dataset.scoreValue) ? cell : best);
  const update = mode => {
    const selected = mode === 'sum' ? cells : mode === 'global-max' ? [maximum(cells)] : rows.map(maximum);
    cells.forEach(cell => {
      cell.classList.remove('chosen');
      cell.classList.toggle('is-selected', selected.includes(cell));
    });
    const values = selected.map(cell => Number(cell.dataset.scoreValue));
    const score = values.reduce((sum, value) => sum + value, 0).toFixed(1);
    const descriptions = {
      'row-max': ['逐行取最大，再相加', '每个查询位置保留一个最强匹配，再累加两个位置的得分。'],
      'global-max': ['只保留一个最强匹配', '整个查询只留下一个最强匹配，另一个查询位置不再贡献得分。'],
      sum: ['所有相似度一起相加', '每个弱匹配也参与累加，保留的信息与 MaxSim 不同。']
    };
    demo.querySelector('[data-score-output]').textContent = score;
    demo.querySelector('[data-score-label]').textContent = descriptions[mode][0];
    demo.querySelector('[data-score-calculation]').textContent = values.map(value => value.toFixed(1)).join(' + ') + ' = ' + score;
    demo.querySelector('[data-score-explanation]').textContent = descriptions[mode][1];
  };
  demo.querySelector('.score-modes').hidden = false;
  demo.querySelectorAll('input[name="aggregation"]').forEach(input => input.addEventListener('change', () => update(input.value)));
  update('row-max');
});
