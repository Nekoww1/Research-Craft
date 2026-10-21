# -*- coding: utf-8 -*-
"""Abstract 规范的可调用行为；语义支持另由人工原文审查。"""
from pathlib import Path
import copy
import importlib.util
import json
import subprocess
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]


def load_builder():
    spec = importlib.util.spec_from_file_location('abstract_pack', ROOT / 'scripts/build_abstract_pack.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


class AbstractPackTests(unittest.TestCase):
    def test_build_writing_produces_abstract_task_packages(self):
        result = subprocess.run([sys.executable, '-X', 'utf8', 'scripts/build_writing.py'], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
        self.assertEqual(result.returncode, 0, result.stderr)
        for name in ('README.md', 'draft.md', 'revise.md', 'audit.md', 'knowledge.md', 'input.example.json', 'index.html'):
            self.assertTrue((ROOT / 'ai/abstract' / name).is_file(), '缺少可交付任务材料: ' + name)

    def test_task_loads_only_selected_rules_and_examples(self):
        m = load_builder()
        data = m.load_knowledge()
        text = m.task_markdown(data, 'audit')
        self.assertIn('R-ABS-08', text)
        self.assertNotIn('EX-ABS-01', text)
        self.assertIn('EX-ABS-03', text)
        self.assertIn('教学案例不得作为当前项目事实', text)

    def test_tasks_share_fact_guards_but_have_different_default_guidance(self):
        m = load_builder()
        data = m.load_knowledge()
        draft = {r['id'] for r in m.selected(data, 'draft')[1]}
        revise = {r['id'] for r in m.selected(data, 'revise')[1]}
        self.assertNotEqual(draft, revise, '起草与修改不能继续无差别载入全部规则')
        self.assertIn('R-ABS-02', draft)
        self.assertNotIn('R-ABS-02', revise)
        self.assertIn('R-ABS-07', revise)
        for task in data['tasks']:
            rules = {r['id'] for r in m.selected(data, task)[1]}
            self.assertTrue({'R-ABS-01', 'R-ABS-04', 'R-ABS-05', 'R-ABS-08', 'R-ABS-09'} <= rules)
            for example in m.selected(data, task)[2]:
                self.assertTrue({r for s in example['segments'] for r in s['rule_ids']} <= rules)

    def test_optional_guidance_changes_export_without_losing_fact_guards(self):
        m = load_builder()
        data = m.load_knowledge()
        default = m.task_markdown(data, 'revise')
        extended = m.task_markdown(data, 'revise', ['R-ABS-03'])
        self.assertNotIn('#### R-ABS-03', default)
        self.assertIn('#### R-ABS-03', extended)
        self.assertIn('#### R-ABS-08', extended)
        with self.assertRaisesRegex(ValueError, '可选'):
            m.task_markdown(data, 'draft', ['R-NOT-AVAILABLE'])

    def test_missing_rule_basis_is_rejected_before_build(self):
        m = load_builder()
        data = copy.deepcopy(m.load_knowledge())
        data['rules'][0]['basis'] = []
        with self.assertRaisesRegex(ValueError, '缺少来源依据'):
            m.validate_knowledge(data)

    def test_broken_example_reference_is_rejected(self):
        m = load_builder()
        data = copy.deepcopy(m.load_knowledge())
        data['tasks']['draft']['example_ids'] = ['EX-NOT-FOUND']
        with self.assertRaisesRegex(ValueError, '案例引用不存在'):
            m.validate_knowledge(data)

    def test_preparation_keeps_fact_ids_and_never_fills_missing_results(self):
        m = load_builder()
        facts = json.loads((ROOT / 'evals/abstract/research-input.json').read_text(encoding='utf-8'))
        text = m.prepare_prompt(m.load_knowledge(), 'draft', facts, 'structured')
        self.assertIn('F-COL-05', text)
        self.assertIn('10,700', text)
        facts['facts'] = [f for f in facts['facts'] if f['role'] != 'evidence']
        with self.assertRaisesRegex(ValueError, '缺少已完成研究的证据'):
            m.prepare_prompt(m.load_knowledge(), 'draft', facts, 'structured')

    def test_baseline_and_structured_share_task_and_research_input(self):
        m = load_builder()
        data = m.load_knowledge()
        facts = json.loads((ROOT / 'evals/abstract/research-input.json').read_text(encoding='utf-8'))
        a = m.prepare_prompt(data, 'revise', facts, 'chapter')
        b = m.prepare_prompt(data, 'revise', facts, 'structured')
        self.assertEqual(a.split('## 当前研究材料\n')[1], b.split('## 当前研究材料\n')[1])
        self.assertEqual(a.split('## 写作参考材料\n')[0], b.split('## 写作参考材料\n')[0])
        self.assertLess(len(b), len(a))

    def test_knowledge_is_linked_to_existing_lesson_and_verified_sources(self):
        m = load_builder()
        data = m.load_knowledge()
        m.validate_knowledge(data)
        page = (ROOT / 'writing/abstract.html').read_text(encoding='utf-8')
        self.assertIn('../ai/abstract/index.html', page)
        self.assertIn('R-ABS-03', page)


if __name__ == '__main__':
    unittest.main()
