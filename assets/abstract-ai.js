// 静态规范页的任务选择与复制；不调用模型，不收集研究材料。
(() => {
  const nav = document.querySelector('.ai-task-nav');
  const buttons = [...nav.querySelectorAll('[data-task]')];
  const panels = [...document.querySelectorAll('[data-panel]')];
  const choose = name => {
    for (const button of buttons) {
      const current = button.dataset.task === name;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', String(current));
      button.tabIndex = current ? 0 : -1;
    }
    for (const panel of panels) panel.hidden = panel.dataset.panel !== name;
  };
  nav.hidden = false;
  choose('draft');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => choose(button.dataset.task));
    button.addEventListener('keydown', event => {
      const next = { ArrowRight: (index + 1) % buttons.length, ArrowLeft: (index + buttons.length - 1) % buttons.length, Home: 0, End: buttons.length - 1 }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      choose(buttons[next].dataset.task);
      buttons[next].focus();
    });
  });
  const materials = JSON.parse(document.getElementById('abstract-task-materials').textContent);
  const selectedExtras = panel => [...panel.querySelectorAll('[data-extra-rule]:checked')].map(input => input.value).sort();
  const currentMaterial = panel => materials[panel.dataset.panel][selectedExtras(panel).join(',')];
  panels.forEach(panel => {
    const link = panel.querySelector('.ai-download');
    const defaultHref = link.getAttribute('href');
    let blobUrl;
    const update = () => {
      const extras = selectedExtras(panel);
      panel.querySelectorAll('[data-optional-rule]').forEach(rule => { rule.hidden = !extras.includes(rule.dataset.optionalRule); });
      panel.querySelector('.task-optional-details').hidden = !extras.length;
      panel.querySelector('[data-rule-count]').textContent = panel.querySelectorAll('.task-rule:not([hidden])').length;
      panel.querySelector('.task-selection-note').textContent = extras.length ? '已补选：' + extras.join('、') + '。复制和下载已同步。' : '使用默认选材；共通核对仍按各规则的适用条件执行。';
      panel.querySelector('.ai-copy-status').textContent = '';
      if (blobUrl) URL.revokeObjectURL(blobUrl);
      blobUrl = extras.length ? URL.createObjectURL(new Blob([currentMaterial(panel)], { type: 'text/markdown;charset=utf-8' })) : undefined;
      link.href = blobUrl || defaultHref;
      link.download = panel.dataset.panel + (extras.length ? '-custom' : '') + '.md';
    };
    panel.querySelector('.task-options').hidden = false;
    panel.querySelectorAll('[data-extra-rule]').forEach(input => input.addEventListener('change', update));
    update();
  });
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const status = button.parentElement.querySelector('.ai-copy-status');
      try {
        await navigator.clipboard.writeText(currentMaterial(button.closest('[data-panel]')));
        status.textContent = '已复制任务规范；请另附填写好的当前研究材料。';
      } catch {
        status.textContent = '当前浏览器未允许自动复制，请使用下载的Markdown材料。';
      }
    });
  });
  const reveal = () => {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target) return;
    for (let node = target; node; node = node.parentElement) {
      if (node.tagName === 'DETAILS') node.open = true;
    }
    target.scrollIntoView({ block: 'start' });
  };
  window.addEventListener('hashchange', reveal);
  reveal();
})();
