# 初始来源目录

## 2026-10-21 写作区来源审计：本轮实际阅读

此段为最新状态，覆盖下文历史范围。先阅读、判断支持关系、记录改写决定，再修正文；逐段映射见 [WRITING_AUDIT.md](WRITING_AUDIT.md)。新增的是补具体缺口的来源，不能把它们的建议归给刘洋或 Jones。

| ID | 原文与载体 | 实际阅读与用途 | 边界 |
| --- | --- | --- | --- |
| S025 | [NeurIPS Paper Checklist Guidelines](https://nips.cc/public/guides/PaperChecklist) | 官方页条目1–8：主张、局限、假设证明、复核、数据代码、设置、不确定性、计算资源 | 当前网页，访问日2026-10-21；机器学习会议报告要求，不是全学科写作定律 |
| S026 | [Purdue OWL Reverse Outlining](https://owl.purdue.edu/owl/general_writing/the_writing_process/reverse_outlining.html) | 方法正文两步及修订用途：段落实际主题、怎样推进论证 | 本站表格与跨节对读是练习；未照搬固定词数 |
| S027 | [Mensh & Kording 2017](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005619) | Overview、Introduction、Rule1–10、Discussion；贡献、结构、结果、讨论、修改 | 作者建议文章，未追读其全部参考文献；另核实[2017勘误](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005830)仅补图1图例 |
| S028 | Manchester Academic Phrasebank：[结果](https://www.phrasebank.manchester.ac.uk/reporting-results/)、[讨论](https://www.phrasebank.manchester.ac.uk/discussing-findings/)、[结论](https://www.phrasebank.manchester.ac.uk/writing-conclusions/) | 三页解释性导言，兼看功能标题；定位／突出观察、讨论循环、回顾／最终判断 | 未通读全部例句、未读付费书；先前尝试的 being-cautious 路径404，未作为依据 |
| S029 | [ASA 2016-03-07 官方发布说明](https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf) | 3页PDF的说明正文及p.2六项原则，尤其原则3–6 | 官方协会说明，不是期刊声明全文；期刊页403。没有据此推荐统一检验或运行次数 |
| S030 | [Rougier、Droettboom、Bourne 2014](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003833) | Rule1–10与相关图注；用于受众、信息、媒介、图注、颜色、视觉误导 | 写作／设计建议，不冒称普遍效果实验；历史工具列表不作今日推荐 |

S020 重读 arXiv v2 的 §3.1、§3.3–3.6、§4研究问题，核对 §4.1–4.5 采用段落。公式与训练在 §3.3（式3），离线索引在 §3.4，固定候选重排在 §3.5，全库检索在 §3.6；旧引用过宽之处已修。S010 重读 §3.1–3.2，保留“猜测可以有价值，但不能冒充证实解释”与“消融非必要亦非充分”的条件。

S021 重读文件pp.7–8／会议pp.592–593：§5、图4、表3–4、脚注7、§6；S023复核§2的两路线与具体差异。S002复核官方整理写作段；S009用本地52页原PDF核对所引页，S019沿既有选页记录并再次视觉核对文件p.41、p.160。未对勘S019与原站版本，未复现论文实验、未新增读者效果证据。

## 2026-10-20 写作模块分页扩写：本次新增证据

本段覆盖下文较早状态。**S001 原站下载仍失败；S019 已实际取得并选读，二者的版本关系尚未完全核实。** 六份 PDF 保存在忽略目录 `.local/pdfs/` 供本机核对，不随站点提交或再分发；可追溯的观点与页码记在仓库中。

- **S009**：官方 52 页 PDF 本地保存，通读可提取文字，视觉核对文件 pp.1、13、23、38、48、50；部分封面／截图页提取为空，不能称全页视觉精读。写作、贡献、直觉、相关工作、反馈、视觉结构、主动语态与直接语言用于本轮教学。
- **S019**：GitHub raw 文件实际为 **188 个文件页**，含多次重复动画页，封面为刘洋《机器翻译学术论文写作方法和技巧》，第十届全国机器翻译研讨会，2014 年 11 月，中国澳门。文件名含“总结”，不能据此当成第三方独立方法总结；也不能未经比对当作原站 244 页版本完整镜像。中文字形映射异常，文本提取不能可靠恢复中文；本轮使用选页渲染与视觉核对，未猜测乱码。实际页码表见 `READING_NOTES.md`。
- **S021**：原 9 页论文保存；扩读文件 pp.1–2、7–8 的摘要、引言、§2、§5–6、图 4、表 3、脚注 7，视觉核对 p.7。仍未阅读全文或复现实验。
- **S002**：再次核对官方整理的写作段落。S020 沿用已读的 §3.1、§3.4、§4 研究问题和相关实验段落，没有冒记新全文阅读。

### S022 · Improving Tree-to-Tree Translation with Packed Forests

- 作者／年份：Yang Liu、Yajuan Lü、Qun Liu，ACL-IJCNLP 2009，pp.558–566。
- 原始入口：https://aclanthology.org/P09-1063/ ；PDF：https://aclanthology.org/P09-1063.pdf
- 从 S019 页脚 31–33 的示例追源；下载 9 页 PDF，读取文件 p.1 摘要与引言。
- 用途：标题信息安排、引言从已有能力到两项挑战再到方法的结构分析。未将其当作现代机器翻译性能结论，未阅读全文。

### S023 · Parsing with Compositional Vector Grammars

- 作者／年份：Richard Socher、John Bauer、Christopher D. Manning、Andrew Y. Ng，ACL 2013，pp.455–465。
- 原始入口：https://aclanthology.org/P13-1045/ ；PDF：https://aclanthology.org/P13-1045.pdf
- 从 S019 页脚 62–63 追源；下载 11 页 PDF，读取文件 pp.2–3 的 §2 相关工作及前后衔接段。
- 用途：两条研究路线的分组、明确承认继承、与最近模型的具体差异。未完整评审模型和实验。

### S024 · Cooooooooooooooollllllllllllll!!!!!!!!!!!!!! Using Word Lengthening to Detect Sentiment in Microblogs

- 作者／年份：Samuel Brody、Nicholas Diakopoulos，EMNLP 2011，pp.562–570。
- 原始入口：https://aclanthology.org/D11-1052/ ；PDF：https://aclanthology.org/D11-1052.pdf
- 从 S019 页脚 24 追源；下载 9 页 PDF，只核对首页标题与摘要，确认创意形式和研究现象的关系。
- 用途：标题页的短案例；未阅读全文、未复现情感识别实验。

## 2026-10-20 首版实施核实

写作章重构补充：重新核对 S002 的全部写作部分；S009 增补结构、相关工作、credit 与反馈的局部文字阅读，主要定位为文件 pp.15–24、27–32、36–44；S020 增补 §4 研究问题及部分实验段落。来源身份不变，仍不称课件逐页精读或论文复现。对应教学与边界见 [WRITING_STRUCTURE.md](WRITING_STRUCTURE.md)。

下表是本轮的新证据；后文初始记录保留为历史，不把过去的局部阅读升级为本轮全文阅读。**访问核实不等于材料已读完。** 核心材料的具体论点、定位与边界见 [READING_NOTES.md](READING_NOTES.md)。本轮没有建立本地全文库。

| ID | 本轮访问与阅读结果 | 身份与归并／本版使用 |
| --- | --- | --- |
| S001 | 原始 PDF 抓取报大小超限，返回约 15.9 MB；未读正文 | 保留独立教程；不以 S002 或 S019 代替它 |
| S002 | 官方整理文字全文读取；图片、视频未完整阅读 | 核心；写作模块，非完整演讲课件 |
| S003 | 作者 Markdown 正文六节全文读取 | 核心；选题与项目观，ColBERT 回顾追到 S020 |
| S004 | README 与 getting_started / getting_advanced 两份实质 Markdown 全文读取 | 核心；后两份为同一仓库子材料，不另充独立来源数量 |
| S005 | 两种入口在网页工具失败；公开 HTTP 只有 JS 提示；随后浏览器成功展开并读取主页面三张表 | 两个地址同一页面 ID，合并线索；核心补读。子教程未逐篇阅读，不称全库已读 |
| S006 | 网页工具曾有解析失败；直接读取官方 PDF 成功，三页提取文字全文读完 | 核心；问题选择。PDF 在内存处理，未保存全文 |
| S007 | 大学托管演讲转录可访问；本轮仅查看开头和身份说明 | 候选；未作为本版正文论据，历史局部阅读另见下文 |
| S008 | 作者主文及附录读取，评论区未读 | 核心；投入边界，保留数学职业背景 |
| S009 | 官方入口及 52 页 PDF 可访问；选读文件 pp.4–7、12–15、18–24、36–41 | 核心；写作。提取器标题与官方页面主题不同，未按错误元数据改名 |
| S010 | arXiv HTML §1、§2、§3.1–3.2 读取 | 核心；证据与解释，其他章节未读完 |
| S011 | Caltech 馆藏页面可访问；本轮未读扫描正文 | 候选；记录与 HTML 转录是同一作品的不同载体 |
| S012 | 第三方托管 PDF 可解析为 10 页；本轮未深入阅读 | 候选；不能称为作者本人网站托管 |
| S013 | 课程托管三页 PDF 的可提取文字全文读取 | 补充；阅读模块。课程副本不是另一个作者观点 |
| S014 | 作者原文可访问；本轮仅核实入口，未逐节阅读 | 候选；不作为本版实验模块的具体训练建议 |
| S015 | 作者网站 55 页 PDF；文件 pp.1–34 文字读取，未逐一读取图片 | 核心；S004 关联课件，封面题名与目录说明分别记录 |
| S016 | 作者网站 60 页 PDF 可解析；本轮仅核实入口，未深入阅读 | S004 关联课件；不作为独立观点票数 |
| S017 | 官方课程入口可访问；本轮未逐份读取 week_1/3/5 PDF | 课程集合；子课件单列阅读状态，不能将入口当整门课已读 |
| S018 | 汇编 PDF 访问仍返回 Internal Error；未取得正文 | 与 S002 是相关会议材料，不能当同一份完整讲义 |
| S019 | GitHub 文件入口可访问；未读取 PDF、未核实编者与版本关系 | 第三方备用；不能当已核实的刘洋原课件或独立方法来源 |

### 新增的原始案例来源

#### S020 · ColBERT

- 作者：Omar Khattab、Matei Zaharia。SIGIR 2020；arXiv:2004.12832v2，2020-06-04。
- 原文：https://arxiv.org/html/2004.12832v2
- 入口：https://arxiv.org/abs/2004.12832
- 原因：沿 S003 的真实选题案例追溯技术选择和实验边界。
- 阅读：摘要、§1、§3.1、§3.4、§4.4–4.5、§5；其他实验部分仅局部查看。未复现实验。
- 使用：网页 `#colbert`；保留架构、质量与成本的取舍，不使用跨设置速度倍数。

#### S021 · Forest Reranking: Discriminative Parsing with Non-Local Features

- 作者：Liang Huang。ACL 2008，pp.586–594。
- 入口：https://aclanthology.org/P08-1067/
- 原 PDF：https://aclanthology.org/P08-1067.pdf
- 原因：沿 S002 文末参考文献 [1] 核实真实摘要的结构。
- 阅读：原 PDF p.1 的摘要与引言、p.2 开头；未阅读全文。
- 使用：网页 `#abstract` 后的结构释义；不复制整段摘要，不当成当前最优结果。

## 初始记录（实施前）

整理日期：2026-10-20。以下记录来自建仓前本次讨论中的网络检索，不代表所有材料已完整阅读或已下载。

后续使用时核对实际原文，并在相应记录补上具体页码或小节、阅读范围与分析。访问失败是当时工具的结果，不能等同于链接永久失效。

“局部阅读”表示本次工具中看到了部分正文或文本提取；不声称逐页阅读了整份材料。以下尚未形成研究 taste、写作等模块的正式分类。

## A. 用户提供或明确重视的起始材料

### S001 · 刘洋：机器翻译学术论文写作方法和技巧

- 材料：2014 年第十届全国机器翻译研讨会教程。
- 原始 PDF：https://nlp.csai.tsinghua.edu.cn/~ly/talks/cwmt14_tut.pdf
- 资料入口：https://hub.baai.ac.cn/view/14514
- 状态：确认搜索收录和外部资料介绍，原站 PDF 在本次抓取失败；未保存本地文件。244 页是公开介绍所列页数，本次未从成功打开的原始 PDF 核验。
- 后续方向：选题、标题与摘要、引言逻辑、方法解释、图表与论文呈现。需取得原文后再定位具体案例。

### S002 · 刘洋：如何撰写高质量科技论文

- 材料：2021 北京智源大会青源学术年会报告的清华 AIR 官方图文整理。
- 官方页面：https://air.tsinghua.edu.cn/info/1007/1359.htm
- 状态：已看到官方整理正文；尚未获得该演讲的独立完整 PDF 课件。
- 用户定位：用户特别认可，希望作为未来论文写作的学习范本。
- 后续方向：服务读者、信息组织、摘要与引言、Running Example、图表、相关工作与写作过程。
- 注意：引用时标明这是官方整理，不能将其称为已获得的完整讲义或原始报告全文。

### S003 · Omar Khattab：研究影响力与长期项目

- 用户提供：https://github.com/okhat/blog/blob/main/2024.09.impact.md
- 材料：作者仓库中的方法论文章。
- 状态：已看到正文，尚未形成完整的逐节分析或本地副本。
- 后续方向：长期项目、问题的时机与改进空间、下游价值、快速迭代、开源采用与持续投入。
- 注意：其中数值和例子属于作者在相应背景下的论述，不直接转化为普遍的项目门槛。

### S004 · 彭思达：Learning Research

- 用户提供：https://github.com/pengsida/learning_research/tree/master
- 仓库入口：https://github.com/pengsida/learning_research
- 已打开 README：https://raw.githubusercontent.com/pengsida/learning_research/master/README.md
- 材料：作者公开的科研经验与课程资料目录。
- 状态：README 已读；本次还打开过部分关联 Markdown，但未完整阅读仓库及其所有外链。
- 后续方向：科研起步、研究能力、领域视野、问题与方案、实验、写作、报告和长期目标。
- 注意：README 提醒材料与作者所在实验室的经历相关，也说明部分更新可能发生在 Notion 中；后续应核对实际使用页面。

### S005 · 彭思达：Research Project

- 用户提供：https://pengsida.notion.site/Research-Project-b43507ef26d044bd888ac29f4736e116
- README 对应链接：https://pengsida.notion.site/research-project-b43507ef26d044bd888ac29f4736e116
- 材料：作者 Notion 中的 Research Project 页面。
- 状态：本次两种链接形式均未能通过网页工具读取；正文待获取。
- 后续方向：待实际读到内容后再定位；不能仅凭页面名称或关联 README 补写正文观点。

## B. 已找到的互补方法论材料

### S006 · Uri Alon：How to Choose a Good Scientific Problem

- 年份与形式：2009，3 页 PDF。
- 作者机构托管：https://www.weizmann.ac.il/mcb/alon/sites/mcb.UriAlon/files/uploads/nurturing/howtochoosegoodproblem.pdf
- 状态：PDF 成功打开并提取文本，已局部阅读。
- 后续方向：问题的可行性、兴趣与知识收益、研究阶段差异、个人兴趣、实际研究路径。可与长期投入和研究 taste 材料对照。

### S007 · Richard Hamming：You and Your Research

- 年份与形式：1986，演讲转录。
- 大学托管：https://www.cs.virginia.edu/~robins/YouAndYourResearch.html
- 状态：已打开并局部阅读；这是演讲转录的大学托管页面。
- 后续方向：重要问题、长期积累、交流、勇气、模糊性与研究投入。
- 注意：个人经验与历史背景需要保留；不能将演讲中的经验判断当作已验证的普遍因果规律。

### S008 · 陶哲轩：Don’t prematurely obsess on a single “big problem” or “big theory”

- 作者原文：https://terrytao.wordpress.com/career-advice/dont-prematurely-obsess-on-a-single-big-problem-or-big-theory/
- 系列入口：https://terrytao.wordpress.com/career-advice/
- 状态：特定文章已打开并局部阅读；系列目录不等于系列全部已读。
- 后续方向：研究准备程度、投入边界、保持其他工作进展。适合与 Hamming、Omar 的长期方向讨论并读，具体关系属于后续编辑分析。

### S009 · Simon Peyton Jones：How to Write a Great Research Paper

- 官方入口：https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper/
- 官方 PDF：https://www.microsoft.com/en-us/research/wp-content/uploads/2016/07/How-to-write-a-great-research-paper.pdf
- 状态：官方页面与 PDF 成功打开；PDF 返回 52 页，已局部阅读。
- 后续方向：用写作发展想法、清楚的核心思想、贡献表述、主张与证据、例子与读者反馈。
- 注意：PDF 检索工具的标题元数据与页面主题有差异，使用时依据封面及正文核对，不据元数据改变材料名称。

### S010 · Zachary C. Lipton、Jacob Steinhardt：Troubling Trends in Machine Learning Scholarship

- 年份：2018。
- 作者论文入口：https://arxiv.org/abs/1807.03341
- PDF：https://arxiv.org/pdf/1807.03341
- 状态：已查看 arXiv 页面和摘要；尚未完整阅读 PDF。
- 后续方向：解释与猜测的区分、性能增益来源、数学表达与术语、论文的知识贡献和读者价值。

### S011 · Richard P. Feynman：Cargo Cult Science

- 年份：1974。
- Caltech 馆藏页面：https://calteches.library.caltech.edu/3043/
- 原始发表版本 PDF：https://calteches.library.caltech.edu/3043/1/CargoCult.pdf
- Caltech HTML 转录：https://calteches.library.caltech.edu/51/2/CargoCult.htm
- 状态：馆藏记录已核对；PDF 返回 4 页但无可提取文本，不能据此声称已读扫描正文。已看到 HTML 转录和检索中的部分内容。
- 后续方向：避免自我欺骗、替代解释、对结论不利的因素、科研诚实。

### S012 · Michael A. Nielsen：Principles of Effective Research

- 年份与形式：2004，10 页 PDF。
- 彭思达网站托管：https://pengsida.net/files/Michael_Nielsen_How_to_do_research.pdf
- 状态：PDF 成功打开并提取文本，已局部阅读；这是他人网站托管的作者文档。
- 后续方向：习惯、长期能力发展、短期产出与长期积累、个人能力组合。
- 注意：作者在文中说明与自身职业情境相关，教学时应保留适用范围。

### S013 · S. Keshav：How to Read a Paper

- 形式：3 页 PDF。
- 斯坦福课程托管：https://web.stanford.edu/class/cs114/reading-keshav.pdf
- 状态：PDF 成功打开并提取文本，已局部阅读；这是课程托管的作者文章。
- 后续方向：三遍阅读、阅读投入分配、文献调研。具体时间建议须核对所用版本和上下文。

### S014 · Andrej Karpathy：A Recipe for Training Neural Networks

- 年份：2019。
- 作者原文：https://karpathy.github.io/2019/04/25/recipe/
- 状态：已打开并局部阅读，尚无本地副本。
- 后续方向：理解数据、从简单系统开始、逐步引入复杂度、提出并验证预期、实验调试。
- 注意：区分过程方法与当时的具体训练建议，不将旧技术细节自动当作当前推荐。

## C. 关联课件与补充入口

### S015 · 彭思达：领域视野与科研课题选择专题

- PDF：https://pengsida.net/files/research_topic_selection.pdf
- 状态：链接由作者仓库 README 提供，本次未打开完整 PDF。
- 后续方向：待阅读后定位；可优先核对与研究 taste、选题的关联。

### S016 · 彭思达：Learning Research 讲义

- PDF：https://pengsida.net/files/learning_research_v4.pdf
- 状态：链接由作者仓库 README 提供，本次未打开完整 PDF。

### S017 · GAMES003：图形视觉科研基本素养

- 官方课程入口：https://pengsida.net/games003/
- 科研流程概述与领域视野建立：https://pengsida.net/games003/GAMES003_files/week_1.pdf
- 技术方案的设计方法：https://pengsida.net/games003/GAMES003_files/week_3.pdf
- 面向实验结果的方案优化：https://pengsida.net/games003/GAMES003_files/week_5.pdf
- 状态：课程入口已打开，课件链接由作者 README 提供；本次未逐份读取课件。
- 关联讲者：彭思达、高俊、彭崧猷、王倩倩，依据作者仓库介绍记录。

### S018 · 2021 北京智源大会报告汇编

- PDF：https://event-cdn.baai.ac.cn/file/2021-07-19/Report_of_2021_BAAI_Conference.pdf
- 状态：检索索引包含刘洋报告摘要，本次直接抓取超时；未核验全文和具体页码。
- 注意：会议汇编中收录的摘要，不是刘洋个人的完整课件。

### S019 · 第三方仓库收录：如何撰写学术论文—刘洋（清华大学）—总结

- 文件页面：https://github.com/fei-aiart/TechNotes/blob/master/如何撰写学术论文-刘洋（清华大学）-总结.pdf
- 状态：GitHub 文件页面可访问并显示约 13.2 MB；本次未读 PDF 正文。
- 注意：与刘洋原始课件的具体关系、编者和内容完整性均未核验。只作待查备用入口。

## 后续补充方式

实际使用一份材料时，在其记录下补充：

- 本次实际读到的版本与范围、可定位的页码或小节。
- 可用于教学的具体概念和原文案例。
- 适用条件、分歧或尚不能确认的部分。
- 与教学正文的关联位置。

原始链接、局部阅读和完整分析要分别记录。来源数量不是教学内容完成度的替代指标。
