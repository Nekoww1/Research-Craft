# Abstract AI写作材料入口

本目录由 knowledge/writing/abstract.json 生成，勿独立修改；网页另复用 content/writing/abstract.html 中已审计的改稿与来源。网页默认先读例子和解释，AI任务与操作字段在“给AI用”中按需展开。网页与本材料保留同一知识编号供链接追溯，不要求读者记忆。原文核实与编辑推演见 docs/ABSTRACT_AI_AUDIT.md。

1. 按任务读取 draft.md（起草）、revise.md（修改）或 audit.md（审查），不必同时加载三份。
2. 另附填好的 input.example.json：完成状态、贡献类型、带事实编号及依据的当前研究材料；修改／审查附草稿。
3. 按任务交付摘要、简短事实映射和缺口。规则编号可放过程说明，写作规范来源不自动进入论文研究引文。
4. 需要更多背景时再读 knowledge.md 或网页教学。教学案例不得作为当前项目事实。

通用对话模型可直接读取Markdown；有文件访问的agent可从本入口按需打开文件。本版没有模型API、自动投稿或平台专属依赖，尚未封装成安装式Skill。

维护：修改知识JSON，运行 python -X utf8 scripts/build_writing.py；检查使用同一命令加 --check。脚本只检查引用结构与生成同步，不能判断来源语义。CLI可用 scripts/build_abstract_pack.py --task draft --input 当前材料.json --output .local/abstract-prompt.md 组装一份完整输入。
