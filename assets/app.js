// 正文、来源和原生折叠内容均由 HTML 提供；脚本只增强查阅。
document.body.classList.add('js-enabled');

const menu = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('#sidebar');
menu.hidden = false;
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '收起目录' : '展开目录';
  sidebar.classList.toggle('is-open', open);
});

const navLinks = [...document.querySelectorAll('nav a')];
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = '展开目录';
  sidebar.classList.remove('is-open');
}
function markSection(id) {
  navLinks.forEach(link => {
    if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
navLinks.forEach(link => link.addEventListener('click', () => {
  closeMenu();
  markSection(link.hash.slice(1));
}));
// 依据当前几何位置判定章节，跨越长章节快速跳转时也保持一致。
const chapters = [...document.querySelectorAll('main > section[id], main > article[id]')];
function markCurrentChapter() {
  const current = chapters.reduce((selected, chapter) =>
    chapter.getBoundingClientRect().top <= innerHeight * 0.3 ? chapter : selected, chapters[0]);
  markSection(current.id);
}
window.addEventListener('scroll', markCurrentChapter, { passive: true });
window.addEventListener('resize', markCurrentChapter);
window.addEventListener('hashchange', markCurrentChapter);
requestAnimationFrame(markCurrentChapter);

const annotationButton = document.querySelector('#annotation-toggle');
annotationButton.hidden = false;
annotationButton.addEventListener('click', () => {
  const show = annotationButton.getAttribute('aria-pressed') !== 'true';
  annotationButton.setAttribute('aria-pressed', String(show));
  annotationButton.textContent = show ? '隐藏批注' : '显示批注';
  document.querySelectorAll('.annotations').forEach(note => { note.hidden = !show; });
});

const searchBox = document.querySelector('#search-box');
const searchInput = document.querySelector('#search-input');
const results = document.querySelector('#search-results');
// 以小节为单位查找正文，同时避免大章重复命中相同的内容。
const searchItems = [...document.querySelectorAll('h3[id], section.source-entry[id], div.source-entry[id]')].map(node => {
  const parts = [node.textContent];
  if (node.matches('h3')) {
    let sibling = node.nextElementSibling;
    while (sibling && sibling.tagName !== 'H3') {
      parts.push(sibling.textContent);
      sibling = sibling.nextElementSibling;
    }
  }
  return { id: node.id, title: node.matches('h3') ? node.textContent : node.querySelector('h3').textContent, text: parts.join(' ').toLocaleLowerCase() };
});
searchBox.hidden = false;
searchInput.addEventListener('input', () => {
  results.replaceChildren();
  const query = searchInput.value.trim().toLocaleLowerCase();
  if (!query) return;
  const matches = searchItems.filter(item => item.text.includes(query));
  const status = document.createElement('p');
  status.textContent = matches.length ? `找到 ${matches.length} 处${matches.length > 8 ? '，显示前 8 处' : ''}` : '未找到；可试试更短的词，如“证据”。';
  results.append(status);
  matches.slice(0, 8).forEach(item => {
    const link = document.createElement('a');
    link.href = `#${item.id}`;
    link.textContent = item.title;
    link.addEventListener('click', closeMenu);
    results.append(link);
  });
});
