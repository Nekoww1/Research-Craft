# -*- coding: utf-8 -*-
"""检查人工来源审计的呈现覆盖；不声称自动验证引用的语义支持。"""
from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}


class Tree(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root = {'tag': '', 'attrs': {}, 'children': []}
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'children': []}
        self.stack[-1]['children'].append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_endtag(self, tag):
        assert len(self.stack) > 1 and self.stack[-1]['tag'] == tag, f'标签未配对: {tag}'
        self.stack.pop()

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)


def has(node, cls):
    return cls in node['attrs'].get('class', '').split()


def descendants(node):
    for child in node['children']:
        yield child
        yield from descendants(child)


def main():
    ledger = (ROOT / 'docs/WRITING_AUDIT.md').read_text(encoding='utf-8')
    expected = set(re.findall(r'\.html#audit-([\w-]+)\)', ledger))
    registry = (ROOT / 'index.html').read_text(encoding='utf-8')
    seen, kinds = set(), {}
    body_count = core_count = 0
    for path in sorted((ROOT / 'content/writing').glob('*.html')):
        parser = Tree()
        parser.feed(path.read_text(encoding='utf-8'))
        assert len(parser.stack) == 1, f'未结束标签: {path.name}'
        nodes = list(descendants(parser.root))
        notes = [n for n in nodes if has(n, 'source-note')]
        assert notes, f'{path.name}: 缺少逐段来源，页末来源组不足以通过'
        for n in notes:
            uid = n['attrs'].get('data-audit-unit')
            kind = n['attrs'].get('data-evidence-kind')
            assert uid and uid not in seen, f'审计单元缺失或重复: {uid}'
            seen.add(uid)
            assert kind in ('paraphrase', 'inference', 'case', 'teaching'), f'身份未区分: {uid}'
            kinds[kind] = kinds.get(kind, 0) + 1
            sources = [a for a in descendants(n) if has(a, 'cite')]
            assert sources and any(c['tag'] == 'small' for c in n['children']), f'出处或边界缺失: {uid}'
            for a in sources:
                sid = a['attrs'].get('href', '').split('#')[-1]
                assert re.fullmatch(r'S\d{3}', sid) and f'id="{sid}"' in registry, f'来源未登记: {uid}'
        for sec in (n for n in nodes if has(n, 'lesson-section')):
            children = sec['children']
            for i, child in enumerate(children):
                if child['tag'] == 'h2' or has(child, 'source-note'):
                    continue
                if has(child, 'sourced-prose'):
                    assert [c['tag'] for c in child['children']] == ['p', 'aside'], f'段落旁注缺失: {path.name}'
                    assert has(child['children'][1], 'source-note'), f'段落无来源: {path.name}'
                else:
                    assert i + 1 < len(children) and has(children[i + 1], 'module-source'), f'模块来源缺失: {path.name}'
        for point in (n for n in nodes if has(n, 'core-point')):
            assert any(has(n, 'source-note') for n in point['children']), f'要领仅有页底依据: {path.name}'
        body = [n['attrs']['data-audit-unit'] for n in notes if '-core-' not in n['attrs']['data-audit-unit']]
        body_count += len(body)
        core_count += len(notes) - len(body)
    assert seen == expected, f'人工审计与正文单元不同: 缺{expected - seen} 多{seen - expected}'
    print(f'PASS: {body_count} 个正文段落/模块、{core_count} 个核心说明均有定位出处与身份；{kinds}。')
    print('此检查不判断原文是否支持结论；语义审查见 docs/WRITING_AUDIT.md。')


if __name__ == '__main__':
    main()
