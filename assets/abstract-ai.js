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
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const status = button.parentElement.querySelector('.ai-copy-status');
      try {
        await navigator.clipboard.writeText(materials[button.dataset.copy]);
        status.textContent = '已复制任务规范；请另附填写好的当前研究材料。';
      } catch {
        status.textContent = '当前浏览器未允许自动复制，请使用下载的Markdown材料。';
      }
    });
  });
  const reveal = () => {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target?.tagName === 'DETAILS') target.open = true;
  };
  window.addEventListener('hashchange', reveal);
  reveal();
})();
