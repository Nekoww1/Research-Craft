# -*- coding: utf-8 -*-
"""冻结六份独立写作输入并记录规模；此脚本不调用模型。"""
from pathlib import Path
import argparse
import json
import subprocess
import build_abstract_pack as pack


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--run-dir', type=Path, required=True, help='仓库内新的评估目录')
    args = p.parse_args()
    target = args.run_dir.resolve()
    if pack.ROOT not in target.parents:
        p.error('评估目录必须位于当前仓库内')
    if target.exists():
        p.error('请指定新的评估目录；不覆盖已有输入和结果')
    target.mkdir(parents=True)
    facts = json.loads((pack.ROOT / 'evals/abstract/research-input.json').read_text(encoding='utf-8'))
    data = pack.load_knowledge()
    pack.validate_knowledge(data)
    try:
        import tiktoken
        encoder = tiktoken.get_encoding('o200k_base')
    except (ImportError, OSError):
        encoder = None
    samples = [('draft', 'chapter'), ('audit', 'structured'), ('revise', 'structured'),
               ('draft', 'structured'), ('audit', 'chapter'), ('revise', 'chapter')]
    items = []
    for i, (task, mode) in enumerate(samples, 1):
        text = pack.prepare_prompt(data, task, facts, mode)
        name = f'sample-{i:02d}'
        path = target / 'prompts' / (name + '.md')
        path.parent.mkdir(exist_ok=True)
        path.write_bytes(text.encode('utf-8'))
        items.append({'sample': name, 'task': task, 'condition': mode, 'prompt': 'prompts/' + name + '.md',
                      'response': 'responses/' + name + '.md', 'characters': len(text),
                      'utf8_bytes': len(text.encode('utf-8')), 'reference_tokens': len(encoder.encode(text)) if encoder else None})
    base = subprocess.run(['git', 'rev-parse', 'HEAD'], cwd=pack.ROOT, capture_output=True, text=True, check=True).stdout.strip()
    manifest = {'date': '2026-10-21', 'status': 'prepared_not_run', 'source_base_commit': base,
                'model': 'inherit_parent_model_separate_sessions', 'repetitions_per_condition': 1,
                'tokenizer': 'o200k_base' if encoder else None,
                'token_note': '分词数只作指定分词器的输入规模参照，不是当前模型实际计费或上下文用量。',
                'design': '同一任务契约与研究事实；写作参考分别是现有摘要全文或按任务选择的规范；六个样本不共享聊天历史。',
                'limitations': ['单模型每条件一次的探索性试验', '不测服务延迟或统计显著性', '规则编号不作为A/B共同质量得分；A条件没有同一编号体系'],
                'samples': items}
    (target / 'manifest.json').write_bytes((json.dumps(manifest, ensure_ascii=False, indent=2) + '\n').encode('utf-8'))
    print(json.dumps([{'sample': x['sample'], 'task': x['task'], 'condition': x['condition'], 'reference_tokens': x['reference_tokens']} for x in items], ensure_ascii=False))


if __name__ == '__main__':
    main()
