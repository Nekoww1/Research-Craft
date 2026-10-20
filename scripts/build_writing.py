# -*- coding: utf-8 -*-
"""将写作教学正文生成独立静态页面；仅用 Python 标准库。"""
from html import escape
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / 'content/writing'
PAGES = json.loads((CONTENT / 'pages.json').read_text(encoding='utf-8'))


class SearchSections(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []
        self.current = None
        self.in_heading = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h2' and attrs.get('id'):
            self.current = {'anchor': attrs['id'], 'title': '', 'text': ''}
            self.items.append(self.current)
            self.in_heading = True

    def handle_endtag(self, tag):
        if tag == 'h2':
            self.in_heading = False

    def handle_data(self, data):
        if self.current:
            self.current['text'] += ' ' + data.strip()
            if self.in_heading:
                self.current['title'] += data


def write(path, text):
    if '--check' in sys.argv:
        assert path.is_file() and path.read_text(encoding='utf-8') == text, f'生成文件未同步: {path.relative_to(ROOT)}'
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(text.encode('utf-8'))


def generate():
    index = (ROOT / 'index.html').read_text(encoding='utf-8')
    registry = {key: html for html, key in re.findall(r'(<div class="source-entry" id="(S\d{3})">.*?</div></div>)', index)}
    search = []
    for number, page in enumerate(PAGES, 1):
        slug = page['slug']
        body = (CONTENT / f'{slug}.html').read_text(encoding='utf-8')
        parser = SearchSections()
        parser.feed(body)
        sources = list(dict.fromkeys(re.findall(r'class="cite" href="../index.html#(S\d{3})"', body)))
        for source in sources:
            assert source in registry, f'index.html 缺少来源: {source}'
        nav = ''.join(f'<a href="{p["slug"]}.html"' + (' aria-current="page"' if p == page else '') + f'><span>{i:02d}</span>{escape(p["label"])}<small>{escape(p["english"])}</small></a>' for i, p in enumerate(PAGES, 1))
        toc = ''.join(f'<a href="#{s["anchor"]}">{escape(s["title"])}</a>' for s in parser.items)
        for section in parser.items:
            search.append({'href': f'writing/{slug}.html#{section["anchor"]}', 'title': page['label'] + ' · ' + section['title'], 'text': section['text'].lower()})
        neighbours = []
        if number > 1:
            previous = PAGES[number - 2]
            neighbours.append(f'<a href="{previous["slug"]}.html"><span>← 上一页</span><strong>{previous["label"]}</strong></a>')
        else:
            neighbours.append('<a href="../index.html#writing"><span>← 返回</span><strong>写作总览</strong></a>')
        if number < len(PAGES):
            following = PAGES[number]
            neighbours.append(f'<a href="{following["slug"]}.html"><span>下一页 →</span><strong>{following["label"]}</strong></a>')
        else:
            neighbours.append('<a href="../index.html#writing"><span>返回 →</span><strong>写作总览</strong></a>')
        source_html = ''.join(registry[s] for s in sources)
        html = f'''<!doctype html>
<html lang="zh-CN">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="{escape(page['summary'], quote=True)}"><title>{escape(page['label'])} · 论文写作 · Research Craft</title><link rel="icon" href="../assets/mark.svg" type="image/svg+xml"><link rel="stylesheet" href="../assets/style.css"><link rel="stylesheet" href="../assets/writing.css"><script src="../assets/writing-search.js" defer></script><script src="../assets/lesson.js" defer></script></head>
<body class="lesson-page" data-view="writing">
<a class="skip-link" href="#main">跳到正文</a>
<header class="site-header"><a class="header-brand" href="../index.html#orientation"><img src="../assets/mark.svg" width="34" height="34" alt=""><strong>Research Craft</strong><span>科研方法与实践</span></a><div class="header-actions"><a href="../index.html#writing">写作总览</a><a href="../index.html#sources">来源与阅读记录</a><button id="menu-toggle" type="button" aria-expanded="false" aria-controls="sidebar" hidden>展开目录</button></div></header>
<aside class="sidebar lesson-sidebar" id="sidebar" aria-label="写作模块导航"><a class="back-book" href="../index.html#writing">← 写作模块总览</a><div class="search" id="search-box" hidden><label for="search-input">在写作模块中查找</label><input id="search-input" type="search" placeholder="试试：摘要、比较、动词" autocomplete="off" aria-controls="search-results"><div id="search-results" aria-live="polite"></div></div><nav aria-label="写作页面"><p class="nav-label">论文写作 / 11 个独立页面</p>{nav}</nav><a class="repo-link" href="https://github.com/Nekoww1/Research-Craft">GitHub · 内容与修订 ↗</a></aside>
<main id="main"><article class="lesson"><header class="lesson-header"><p class="eyebrow">论文写作 / {number:02d} / {escape(page['english'])}</p><h1>{escape(page['title'])}</h1><p class="lesson-deck">{escape(page['deck'])}</p><div class="lesson-orientation"><span>本页重点</span><p>{escape(page['summary'])}</p></div></header><nav class="lesson-local-toc" aria-label="本页内容">{toc}</nav><div class="lesson-body">{body}</div><details class="lesson-sources"><summary>本页依据与阅读范围</summary><p>观点和案例的具体页码见正文中的引用。教学示例与编辑方法均有标注；例子中的假设数据不能作为真实研究结果。</p>{source_html}</details><nav class="lesson-pagination" aria-label="前后页面">{''.join(neighbours)}</nav></article><footer><span>Research Craft · 持续修订的教学正文</span><a href="../index.html#writing">写作总览 ↑</a></footer></main>
<aside class="page-outline" aria-label="本页内容"><p>本页内容</p><nav>{toc}</nav><a class="outline-sources" href="../index.html#sources">查阅原始材料 ↗</a></aside><dialog id="source-dialog" aria-label="原始来源与阅读范围"><div class="dialog-header"><span>原始来源与阅读范围</span><form method="dialog"><button type="submit" aria-label="关闭来源">关闭 ×</button></form></div><div id="source-content"></div><a class="all-sources-link" href="../index.html#sources">全部来源与阅读记录 →</a></dialog>
</body></html>
'''
        write(ROOT / 'writing' / f'{slug}.html', html)
    write(ROOT / 'assets/writing-search.js', '// 由 scripts/build_writing.py 生成；正文维护在 content/writing/。\nwindow.writingSearch = ' + json.dumps(search, ensure_ascii=False, separators=(',', ':')) + ';\n')
    action = '校验' if '--check' in sys.argv else '生成'
    print(f'{action} {len(PAGES)} 个写作页面、{len(search)} 个可搜索的教学小节。')


if __name__ == '__main__':
    generate()
