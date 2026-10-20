"""检查静态交付中会破坏阅读和追溯的链接、编码与内容缺口。"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re

ROOT = Path(__file__).resolve().parents[1]


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.links = []
        self.assets = []
        self.citations = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'a' and 'href' in attrs:
            self.links.append(attrs['href'])
            if 'cite' in attrs.get('class', '').split():
                self.citations.append(attrs['href'])
        if tag in ('link', 'script', 'img'):
            self.assets.append(attrs.get('src', attrs.get('href', '')))


def main():
    parser = SiteParser()
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    parser.feed(html)
    assert len(parser.ids) == len(set(parser.ids)), '重复 ID 会使跳转不确定'
    ids = set(parser.ids)
    for target in parser.links + parser.assets:
        url = urlsplit(target)
        if url.scheme or url.netloc:
            continue
        if url.path:
            assert (ROOT / unquote(url.path)).is_file(), f'文件缺失: {target}'
        elif url.fragment:
            assert unquote(url.fragment) in ids, f'锚点缺失: {target}'
    registry = (ROOT / 'docs/SOURCES.md').read_text(encoding='utf-8')
    for target in parser.citations:
        assert re.fullmatch(r'#S\d{3}', target), f'来源格式异常: {target}'
        assert target[1:] in registry, f'来源目录未登记: {target}'
    for chapter in ('taste', 'reading', 'evidence', 'writing'):
        assert f'<article id="{chapter}"' in html, f'章节缺失: {chapter}'
    for path in ROOT.rglob('*'):
        if any(part in ('.git', '.local', 'node_modules', '__pycache__') for part in path.parts):
            continue
        if path.suffix in ('.md', '.html', '.css', '.js', '.svg', '.py', '.cjs'):
            data = path.read_bytes()
            assert not data.startswith(b'\xef\xbb\xbf'), f'UTF-8 BOM: {path.name}'
            data.decode('utf-8', errors='strict')
    print(f'PASS: {len(ids)} 个唯一锚点、{len(parser.links)} 个链接、'
          f'{len(parser.citations)} 处就近引用；本地文件与 UTF-8 无 BOM 检查通过。')


if __name__ == '__main__':
    main()
