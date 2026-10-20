// HTML 保留全部正文；脚本提供章节切换和就近查阅。
const menu = document.querySelector('#menu-toggle');
const sidebar = document.querySelector('#sidebar');
const views = [...document.querySelectorAll('main > section[id], main > article[id]')];
const navLinks = [...sidebar.querySelectorAll('nav a')];
const outline = document.querySelector('#page-outline');
const outlineLinks = document.querySelector('#outline-links');
const sourceDialog = document.querySelector('#source-dialog');
const sourceContent = document.querySelector('#source-content');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.textContent = '展开目录';
  sidebar.classList.remove('is-open');
}

function showRoute() {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1))) || views[0];
  const current = views.find(view => view === target || view.contains(target)) || views[0];
  views.forEach(view => { view.hidden = view !== current; });
  document.body.dataset.view = current.id;
  navLinks.forEach(link => {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  outlineLinks.replaceChildren();
  [...current.querySelectorAll('h3[id]')].forEach(heading => {
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    outlineLinks.append(link);
  });
  outline.hidden = current.id === 'orientation' || current.id === 'sources';
  closeMenu();
  if (sourceDialog.open) sourceDialog.close();
  requestAnimationFrame(() => {
    if (target === current) window.scrollTo({ top: 0, behavior: 'instant' });
    else target.scrollIntoView({ behavior: 'instant', block: 'start' });
    document.title = `${current.querySelector('h1, h2').textContent.replace(/\s+/g, ' ').trim()} · Research Craft`;
  });
}

menu.hidden = false;
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '收起目录' : '展开目录';
  sidebar.classList.toggle('is-open', open);
});

const annotationButton = document.querySelector('#annotation-toggle');
annotationButton.hidden = false;
annotationButton.addEventListener('click', () => {
  const show = annotationButton.getAttribute('aria-pressed') !== 'true';
  annotationButton.setAttribute('aria-pressed', String(show));
  annotationButton.textContent = show ? '隐藏批注' : '显示批注';
  document.querySelectorAll('.annotations').forEach(note => { note.hidden = !show; });
});

document.querySelectorAll('.cite').forEach(citation => {
  citation.addEventListener('click', event => {
    const source = document.querySelector(citation.hash);
    event.preventDefault();
    const copy = source.cloneNode(true);
    copy.removeAttribute('id');
    sourceContent.replaceChildren(copy);
    sourceDialog.showModal();
  });
});
sourceDialog.querySelector('.all-sources-link').addEventListener('click', () => sourceDialog.close());

const searchBox = document.querySelector('#search-box');
const searchInput = document.querySelector('#search-input');
const results = document.querySelector('#search-results');
const searchItems = [...document.querySelectorAll('h3[id], .source-entry[id]')].map(node => {
  const section = node.closest('.writing-part');
  const parts = [section ? section.textContent : node.textContent];
  if (node.matches('h3') && !section) {
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
  status.textContent = matches.length ? `找到 ${matches.length} 处${matches.length > 8 ? '，显示前 8 处' : ''}` : '未找到；可试试“证据”“摘要”等词。';
  results.append(status);
  matches.slice(0, 8).forEach(item => {
    const link = document.createElement('a');
    link.href = `#${item.id}`;
    link.textContent = item.title;
    results.append(link);
  });
});

// 同一锚点也可再次点击返回章首；浏览器前进/后退仍由 hash 保持。
document.querySelectorAll('a[href^="#"]:not(.cite)').forEach(link => {
  link.addEventListener('click', () => {
    if (link.hash === location.hash) showRoute();
  });
});
window.addEventListener('hashchange', showRoute);
showRoute();
document.body.classList.add('js-enabled');
