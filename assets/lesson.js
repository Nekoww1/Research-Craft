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
