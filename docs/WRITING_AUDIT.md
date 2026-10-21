# 写作区正文来源审计

新增层说明（2026-10-21）：Abstract概念、操作规则和任务包的来源先行决定另见 [ABSTRACT_AI_AUDIT.md](ABSTRACT_AI_AUDIT.md)，逐项支持关系保存在[知识底稿](../knowledge/writing/abstract.json)。本次连续教学正文未改写，只增加生成入口和规则链接；下方274个正文单元与66个核心映射仍对应原教学源。不能把新规范的结构检查误称为第二次全文语义审计。

日期：2026-10-21。范围：11 页、81 个展开小节及 11 个核心入口。

本记录先于本轮正文改写建立：先逐段阅读现有正文，回到可定位原文判断支持关系，列出改写／撤下决定，再据已读来源修正文。不是给旧文寻找相似标题作为背书。

这是本轮人工审计判断，不是外部同行评审或真实性认证。软件只检查映射和引用是否齐全，不能判断原文是否蕴含教学判断。来源页码以所读载体为准；S019 为第三方托管课件，未对勘原站版本。

## 改写前的处理决定

| 位置 | 旧内容的问题 | 执行决定 |
| --- | --- | --- |
| method#training-inference | 原稿以编辑常识列训练／推断和复核要求，刘洋/Jones 引用不能覆盖。 | 重写为 ColBERT §3.3–3.6 的实际三元组、损失与阶段，再用 NeurIPS 4–8 交代报告责任。 |
| experiments#uncertainty | 原稿含多种统计方法的条件，原引文只提显著性检验。 | 按 NeurIPS 7 与 ASA 官方说明 pp.1–2 重写；撤下未经展开核实的配对／多重比较方法清单。 |
| revision#reverse-outline | 逆向提纲原来只有“编辑方法”，没有原始方法依据。 | 按 Purdue 的“段落主题＋如何推进论证”两步重写，保留自编演示与跨节推演。 |
| discussion#discussion-task | 整章只有零散解释强度依据，不能冒称刘洋/Jones 的讨论教程。 | 先读 Mensh Rule8 与 Manchester 导言，依其结果意义、文献、局限与延伸职责重写。 |
| conclusion#conclusion-purpose | 结论职责只有实文案例，缺少方法来源。 | 根据 Manchester 结论导言重写回顾与最终判断，明确论文可不独立设置结论。 |
| experiments#result-writing-pattern | 四职责组织没有独立来源；不能称为大家共同提出的框架。 | 重写引导，分别说明 Mensh Rule7、Manchester 的定位／突出观察与 NeurIPS 范围要求如何形成本站练习。 |
| figures#caption-workshop | 图中两点代表方法，练习图注却说各点代表候选数设置。 | 改为基线／预编码两种方法，统一两处图注，补原文对图注的具体支持。 |
| figures#choose-visual | “双轴取舍图通常更容易”缺少直接比较依据。 | 改为用横纵坐标分别表示两个量的散点可同时展示取舍；保留少量精确值用表格的选项，不作普遍效果比较。 |
| figures#visual-misleading | 坐标与颜色常识超出原刘洋引用。 | 依据 Rougier Rule6–8 重新限定，去掉未经来源展开的统一条形／曲线规则。 |
| method#worked-maxsim | 原文公式位置不够精确，§3.4 也不是完整检索流程。 | 式(3)定位 §3.3；索引 §3.4、重排 §3.5、完整检索 §3.6 分开。 |
| abstract#problem-compression | “重复计算文档表示”易误解联合编码产生与查询无关的同一表示。 | 改成每组查询—文档重新联合编码文档 token；独立编码才允许离线复用。 |
| method#formalization | 概率校准／全局最优等专业断言缺少相应来源。 | 撤下这些扩展例，改为区分定义、训练目标、定理及各自的算法／证明责任。 |
| all#core | 33 项要领只靠底部笼统依据，读者无法知道支持哪一点。 | 逐项给出具体出处及推演身份，训练复核／结果组织／局限／逆向提纲改用实际支持它们的来源。 |
| all#body | 页末来源组不能覆盖所有正文，实例、编辑模板和原作者建议身份混杂。 | 逐段／逐模块记录支持范围与就近旁注，教学构造不作为来源中的真实事实或作者原话。 |

## 原文范围与身份

- S025：NeurIPS 官方清单条目 1–8；面向机器学习论文的会议规范，不能升级为所有学科统一标准。
- S026：Purdue OWL 逆向提纲页的两步方法及修改用途。未照搬其固定词数建议。
- S027：Mensh、Kording 2017 正文 Overview、Introduction、Rule1–10、Discussion；图1的2017勘误只补图例，已核实。属于写作建议文章，不是读者效果实验。
- S028：Manchester Academic Phrasebank 的 Reporting results、Discussing findings、Writing conclusions 三页导言，兼看功能标题；未声称通读全部例句或付费书。
- S029：ASA 2016-03-07 官方发布说明，共3页；六原则在p.2。它是协会自己的说明，不是本轮未取得的期刊声明全文。
- S030：Rougier 等 2014 正文 Rule1–10；本轮教学使用 Rule1–9，工具清单不当成今日推荐。
- S020：重读 v2 的 §3.1、§3.3–3.6、§4 研究问题，并核对 §4.1–4.5 所用段落。§3.3 是公式和训练，§3.4 是索引，§3.6 才是全库检索。
- S021：重读文件pp.7–8（会议pp.592–593）的§5、图4、表3–4、脚注7、§6；其他真实案例沿用已核实的具体阅读范围。

## 段落与模块的审计映射

P 为本小节直接正文段（含说明性图注），B 为整体教学模块；模块内部的句子、表格、列表、折叠解释一并审查。每行的依据范围说明哪些是原文、哪些仅是推演／示例。网页旁注保留同一审计单元 ID，可据位置核对。

### argument

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [one-idea-p1](../writing/argument.html#audit-one-idea-p1)：论文的中心不必是一个模块，也不必是一项最高分。它可以是一个新的表示方式、一项适用条件更清楚的… | S009 Jones · 文件 pp.4–13；S027 Mensh、Kording · Rule 1 | 据此推演。核心贡献可以有不同形态；不限制算法或实验数量。 |
| [one-idea-p2](../writing/argument.html#audit-one-idea-p2)：Simon Peyton Jones 用一个清楚、尖锐的核心思想来组织论文，强调把可复用的见… | S009 Jones · 文件 pp.4–13 | 原文转述。Jones 的早写、聚焦及可复用见解。 |
| [one-idea-b1](../writing/argument.html#audit-one-idea-b1)：工作清单 · 教学示例 我们完成了什么 实现编码器，增加交互层，优化检索程序，进行了三个实验… | S009 Jones · 文件 pp.4–13；S027 Mensh、Kording · Rule 1 | 教学构造。原文倡导聚焦可复用的核心思想；一句话填空与检索措辞为本站练习。 |
| [one-idea-p3](../writing/argument.html#audit-one-idea-p3)：尝试把文章压缩成一句“在条件 C 下，改变 X 可以带来 Y，因为我们采用了 Z，并用 E … | S009 Jones · 文件 pp.4–13 | 教学构造。本站填空练习，不是原作者模板。 |
| [paper-responsibilities-p1](../writing/argument.html#audit-paper-responsibilities-p1)：摘要是一份独立可读的压缩说明；引言建立问题与贡献；方法让读者理解改变如何发生；实验或证明承担… | S009 Jones · 文件 pp.15–16、27–30；S027 Mensh、Kording · Rule 5–8 | 据此推演。综合各部分职责，不规定统一章序。 |
| [paper-responsibilities-b1](../writing/argument.html#audit-paper-responsibilities-b1)：标题／摘要 研究对象、核心改变、主要依据。 避免：只有方法缩写与“效果优秀”。 引言 为什么… | S009 Jones · 文件 pp.15–16、27–30；S027 Mensh、Kording · Rule 5–8 | 教学构造。综合不同部分的信息职责；原文面向的论文类型与章序不同，本站流程图不规定统一顺序。 |
| [paper-responsibilities-p2](../writing/argument.html#audit-paper-responsibilities-p2)：同一项贡献在不同位置怎样变化 · 编辑归纳… | S009 Jones · 文件 pp.15–16、27–30；S027 Mensh、Kording · Rule 5–8 | 教学构造。流程标签和连线由本站组织。 |
| [paper-responsibilities-p3](../writing/argument.html#audit-paper-responsibilities-p3)：这不是强制章序。Jones 的报告给出会议论文的一种组织示意，并建议先让读者理解核心思想，再… | S009 Jones · 文件 pp.15–16、27–30 | 原文转述。会议论文结构示意与后置相关工作建议。 |
| [challenge-chain-p1](../writing/argument.html#audit-challenge-chain-p1)：刘洋课件用“问题—挑战—贡献—方法—实验”的对应图说明全局连贯性。它的价值在于暴露断点：某项… | S019 刘洋课件副本 · 文件 p.94／页脚 46；S009 Jones · 文件 p.24 | 原文转述。刘洋对应图；断点诊断据证据责任展开。 |
| [challenge-chain-b1](../writing/argument.html#audit-challenge-chain-b1)：挑战 固定候选列表可能把好的候选排除在外。 改变 用共享结构紧凑地保留更多候选。 方法责任 … | S019 刘洋课件副本 · 文件 p.94／页脚 46；S009 Jones · 文件 p.24；S021 Forest Reranking · §1–2、§5 | 教学构造。刘洋给出问题至实验的对应；Jones 要求每项主张有证据；森林案例的对应图是结构分析。 |
| [challenge-chain-p2](../writing/argument.html#audit-challenge-chain-p2)：Forest Reranking 的结构释义与编辑对应。原论文分别讨论 packed for… | S021 Forest Reranking · §1–2、§5 | 案例释义。对应原论文内容，不是作者过程记录。 |
| [challenge-chain-p3](../writing/argument.html#audit-challenge-chain-p3)：不要强行把每个挑战配成一个新组件。有些挑战由同一机制缓解，有些贡献由多个实验共同支撑。更有用… | S009 Jones · 文件 p.24 | 据此推演。主张可依赖多份证据，不能强凑组件。 |
| [challenge-chain-p4](../writing/argument.html#audit-challenge-chain-p4)：同样，去掉一组实验后主论证仍然完整，并不说明它必然多余。它可能承担边界分析或复核责任。判断是… | S009 Jones · 文件 p.24 | 据此推演。边界或复核证据也有职责，篇幅判断为推演。 |
| [claims-not-activities-p1](../writing/argument.html#audit-claims-not-activities-p1)：“我们研究了系统性质”只报告活动。读者无法判断研究了什么、发现了什么。Jones 用语言与系… | S009 Jones · 文件 pp.21–24 | 原文转述。可核查贡献及多种证据形式有原文例子。 |
| [claims-not-activities-b1](../writing/argument.html#audit-claims-not-activities-b1)：贡献句的具体化 · 以下均为教学示例 含糊草稿 可以判断的版本 随之增加的责任 提出一种高效… | S009 Jones · 文件 pp.21–24；S025 NeurIPS Checklist · 条目 1、3 | 教学构造。原文要求可核查的贡献与证据；表中复杂度、机制等内容均为虚构写作示例。 |
| [claims-not-activities-p2](../writing/argument.html#audit-claims-not-activities-p2)：具体不等于强。一个有边界、能被检查的负面发现，也可能比“全面提升”更有信息。贡献的强弱应由新… | S009 Jones · 文件 pp.21–24；S025 NeurIPS Checklist · 条目 1、3 | 据此推演。有边界的发现也有信息；不用形容词证明贡献。 |
| [reader-route-p1](../writing/argument.html#audit-reader-route-p1)：作者可能先遇到一个报错，再发现数据偏差，最后才理解核心问题。但论文通常需要先交代问题和必要背… | S009 Jones · 文件 pp.36–39；S002 刘洋官方整理 · 降低理解难度 | 原文转述。作者发现过程与读者理解路径有别。 |
| [reader-route-p2](../writing/argument.html#audit-reader-route-p2)：可以对每个概念问两个问题：读者在哪里第一次遇到它？在那一刻是否已经具备理解它的前提？例如引言… | S009 Jones · 文件 pp.36–39；S027 Mensh、Kording · Rule 2 | 教学构造。两个首次遇到概念的问题为本站检查。 |
| [reader-route-p3](../writing/argument.html#audit-reader-route-p3)：不同读者可以走不同深度。只读摘要的人应知道做了什么；读到方法概览的人应能复述思想；继续看算法… | S027 Mensh、Kording · Rule 2；S025 NeurIPS Checklist · 条目 3、6 | 据此推演。按深度分配细节，关键条件仍须可找到。 |
| [writing-deliverable-p1](../writing/argument.html#audit-writing-deliverable-p1)：先写核心见解和两三项最重要的主张，再给每项主张标出已有依据与尚缺依据。接着拟出各节标题，并在… | S009 Jones · 文件 pp.21–24；S027 Mensh、Kording · Rule 9–10 | 教学构造。一页、两三条及每节一句是练习设置。 |
| [writing-deliverable-b1](../writing/argument.html#audit-writing-deliverable-b1)：写作练习 编辑练习 / 一页即可开始 把一份工作清单改成论证 从自己的草稿中选三条“我们做了… | S009 Jones · 文件 pp.21–24；S027 Mensh、Kording · Rule 9–10 | 教学构造。以主张和证据建立提纲、迭代修改；一页、两三条和核对动作是练习设置，不是作者硬性数量。 |
| [writing-deliverable-p2](../writing/argument.html#audit-writing-deliverable-p2)：这页草图在写作期间可以变化。变化本身没有问题；需要避免的是引言仍承诺旧目标，实验却已转向新目… | S009 Jones · 文件 pp.21–24 | 据此推演。主张变化后检查证据对应，属修订推演。 |

### title

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [title-job-p1](../writing/title.html#audit-title-job-p1)：读者从检索结果、参考文献或会议目录看见一篇文章时，标题往往是最早的信息。它需要交代研究对象，… | S019 刘洋课件副本 · 文件 pp.37–39／页脚 22–24 | 原文转述。概括、关键词与创意有依据；比例仅为课件说明。 |
| [title-job-p2](../writing/title.html#audit-title-job-p2)：标题不能容纳整个方法，但可以帮助合适的人找到它。假设论文研究的是文档检索中的编码与交互安排，… | S027 Mensh、Kording · Rule 1 | 教学构造。假设检索标题用于演示信息选择。 |
| [title-job-b1](../writing/title.html#audit-title-job-b1)：编辑原则：先决定你希望读者认出哪项区别，再删减措辞。 删字时优先删除“新颖”“有效”“基于人… | S019 刘洋课件副本 · 文件 pp.37–39／页脚 22–24；S027 Mensh、Kording · Rule 1 | 教学构造。标题概括工作并保留关键词；删修饰词是据此设计的编辑动作，未声称有读者实验支持。 |
| [real-titles-b1](../writing/title.html#audit-real-titles-b1)：真实标题分析 Forest Reranking: Discriminative Parsin… | S021 Forest Reranking · p.586，标题；S022 Tree-to-Tree · p.558，§1 | 案例释义。核实两个实际标题的信息；重心、冒号与读者识别的分析属于本站，不推测命名动机。 |
| [real-titles-p1](../writing/title.html#audit-real-titles-p1)：以上仅分析标题的信息安排，不推测作者为什么选择它。 原论文 · p.586 标题… | S021 Forest Reranking · p.586，标题 | 案例释义。只分析真实标题，不推测作者动机。 |
| [real-titles-p2](../writing/title.html#audit-real-titles-p2)：另一例是 Improving Tree-to-Tree Translation with P… | S022 Tree-to-Tree · p.558，§1 | 案例释义。原题同时包含任务与 packed forests。 |
| [real-titles-p3](../writing/title.html#audit-real-titles-p3)：可抽象的共同点是“研究对象与关键变化同时可识别”，而不是“标题必须有冒号”或“必须以 Imp… | S021 Forest Reranking · p.586，标题；S022 Tree-to-Tree · p.558，§1 | 据此推演。抽象信息关系，不将两例当标题定律。 |
| [title-choices-b1](../writing/title.html#audit-title-choices-b1)：可尝试的写法及其使用条件 · 编辑方法 重心 教学示例 需要核对 问题＋方法 面向长文档检索… | S027 Mensh、Kording · Rule 1–2；S025 NeurIPS Checklist · 条目 1 | 教学构造。核心贡献与标题相称，主张范围匹配证据；四类标题是练习选项，不是原文分类。 |
| [title-choices-p1](../writing/title.html#audit-title-choices-p1)：这些示例用于练习信息选择，不对应已经完成的项目。题目若包含“解释”“因果”“通用”“可靠”等… | S027 Mensh、Kording · Rule 1–2；S025 NeurIPS Checklist · 条目 1 | 教学构造。自编题目，范围词须由研究支撑。 |
| [title-choices-p2](../writing/title.html#audit-title-choices-p2)：命名也有成本。第一次使用的缩写需要占用摘要或引言的解释空间。如果标题中连续出现三个只在本文使… | S027 Mensh、Kording · Rule 1–2 | 据此推演。缩写解释成本据面向陌生读者原则推演。 |
| [title-revision-b1](../writing/title.html#audit-title-revision-b1)：草稿 一种新颖高效的智能检索框架 对象宽泛；没有交代什么使它高效；修饰词不能帮助筛选。 第一… | S027 Mensh、Kording · Rule 1；S020 ColBERT v2 · §1、§3.1、§3.4 | 教学构造。据聚焦贡献原则设计改稿；预编码描述参考实际架构，但三个标题均非真实论文题目。 |
| [title-revision-p1](../writing/title.html#audit-title-revision-p1)：这不是声称最后一版一定最好。如果论文的核心发现是内存代价，最后一版仍可能失焦。改标题之前应先… | S027 Mensh、Kording · Rule 1 | 教学构造。改稿应随贡献重心而变，未验证最优题目。 |
| [title-revision-p2](../writing/title.html#audit-title-revision-p2)：英文标题可以用同样方法检查。教学示例 A Novel and Effective Frame… | S027 Mensh、Kording · Rule 1；S020 ColBERT v2 · §1、§3.1、§3.4 | 教学构造。英文题目自编，不是 ColBERT 原题。 |
| [creative-titles-p1](../writing/title.html#audit-creative-titles-p1)：刘洋课件用一篇关于词语拉长与情感识别的论文展示创意标题。原论文标题以一个被拉长的 “cool… | S019 刘洋课件副本 · 文件 p.39／页脚 24；S024 Brody、Diakopoulos · p.562，标题与摘要 | 案例释义。创意形式确与原论文研究现象有关。 |
| [creative-titles-p2](../writing/title.html#audit-creative-titles-p2)：可以据此问：这个双关、比喻或缩写是否真的提示研究内容？移除它后，读者是否仍然知道文章研究什么… | S024 Brody、Diakopoulos · p.562，标题与摘要；S027 Mensh、Kording · Rule 2 | 教学构造。移除创意后的检查问题由本站设置。 |
| [creative-titles-p3](../writing/title.html#audit-creative-titles-p3)：标题中的幽默也受语境影响。对熟悉同一术语的同行可能有效，对跨领域读者可能增加障碍。内容清楚是… | S027 Mensh、Kording · Rule 2 | 据此推演。幽默的理解取决于读者背景，保留条件。 |
| [title-practice-p1](../writing/title.html#audit-title-practice-p1)：写三个不同重心的标题：一个以问题开头，一个以方法开头，一个以发现开头。把每个标题承诺的内容标… | S027 Mensh、Kording · Rule 1；S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 教学构造。三版题目与反向核对是本站练习。 |
| [title-practice-b1](../writing/title.html#audit-title-practice-b1)：写作练习 练习：删除形容词以后还剩什么 选自己的标题，删除“新颖、高效、鲁棒、先进、统一”等… | S027 Mensh、Kording · Rule 1；S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 教学构造。将标题中心贡献与主张证据匹配用于练习；三版题目与删除词列表由本站设置。 |

### abstract

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [abstract-purpose-p1](../writing/abstract.html#audit-abstract-purpose-p1)：只读摘要的人，应当能够回答：研究处理什么具体问题，作者改变了什么，关键做法是什么，依据支持了… | S019 刘洋课件副本 · 文件 pp.41–42／页脚 26–27；S027 Mensh、Kording · Rule 5 | 据此推演。摘要独立说明研究，不承担全部复现细节。 |
| [abstract-purpose-p2](../writing/abstract.html#audit-abstract-purpose-p2)：刘洋以 Forest Reranking 为例，将摘要的信息职责分为问题、核心工作、实现方法… | S019 刘洋课件副本 · 文件 pp.41–42／页脚 26–27；S002 刘洋官方整理 · 摘要 | 原文转述。刘洋四项职责，不用四句话作硬性规则。 |
| [abstract-purpose-b1](../writing/abstract.html#audit-abstract-purpose-b1)：问题 哪里还不够，带来什么后果 改变 本文增加了什么可识别的东西 做法 凭什么可以产生这个改… | S019 刘洋课件副本 · 文件 pp.41–42／页脚 26–27；S002 刘洋官方整理 · 摘要；S027 Mensh、Kording · Rule 5 | 教学构造。刘洋的四项职责与简明用语可直接定位；本站标签及相互制约关系是归纳，不强制四句。 |
| [abstract-purpose-p3](../writing/abstract.html#audit-abstract-purpose-p3)：这四项相互限制。问题若强调在线计算，结果却只报告准确率，论证还未闭合；方法若只写“使用先进模… | S019 刘洋课件副本 · 文件 pp.41–42／页脚 26–27；S027 Mensh、Kording · Rule 5 | 据此推演。信息相互对应是本站进一步的检查。 |
| [abstract-analysis-p1](../writing/abstract.html#audit-abstract-analysis-p1)：下面按原摘要四句的职责进行中文释义，并作编辑分析。释义用于看清结构，不是逐字翻译。论文发表于… | S021 Forest Reranking · p.586，Abstract | 案例释义。四句为原摘要结构释义，历史范围保留。 |
| [abstract-analysis-b1](../writing/abstract.html#audit-abstract-analysis-b1)：FOREST RERANKING / 真实论文结构释义 四句话，四项信息职责 显示全部批注 … | S021 Forest Reranking · p.586，Abstract；S027 Mensh、Kording · Rule 5；S025 NeurIPS Checklist · 条目 3–4 | 案例释义。四句中文为原摘要结构释义；旁批是本站分析；跨论文类型的调整根据贡献类型保留条件。 |
| [abstract-analysis-p2](../writing/abstract.html#audit-abstract-analysis-p2)：可以复用的并不是“问题一句、方法两句、结果一句”的表面形状，而是三个连接：瓶颈决定改变；改变… | S021 Forest Reranking · p.586，Abstract；S027 Mensh、Kording · Rule 5 | 据此推演。三个连接由本站抽象，不是原文命名法。 |
| [abstract-analysis-p3](../writing/abstract.html#audit-abstract-analysis-p3)：也应看到它的情境条件。对数据资源论文，关键做法可能是采集与标注方案，依据可能是覆盖、质量和使… | S025 NeurIPS Checklist · 条目 3–4 | 据此推演。依贡献类型调整证据，不能补造实验。 |
| [problem-compression-p1](../writing/abstract.html#audit-problem-compression-p1)：摘要开头常见的失误是写出读者早已知道的背景，再把真正的瓶颈压缩为“然而仍存在挑战”。例如“信… | S019 刘洋课件副本 · 文件 pp.41–42；S009 Jones · 文件 pp.19–20 | 据此推演。具体问题优先，例句为自编。 |
| [problem-compression-b1](../writing/abstract.html#audit-problem-compression-b1)：开头改写 / 教学示例 把“效率问题”写成具体的计算瓶颈 原稿 信息不足 随着大模型的发展，… | S019 刘洋课件副本 · 文件 pp.41–42；S009 Jones · 文件 pp.19–20；S020 ColBERT v2 · §1、§3.1、§3.5 | 教学构造。从具体问题到动作的教学改稿；逐对模型重复联合编码，不能误称为所有模型都重复同一种可缓存表示。 |
| [problem-compression-p2](../writing/abstract.html#audit-problem-compression-p2)：改写增加了一个因果结构：为什么产生开销，本文改变了哪一步。它并没有声称所有逐对编码方法的成本… | S020 ColBERT v2 · §1、§3.1、§3.5 | 教学构造。联合编码与预计算的简化例，未测实际成本。 |
| [problem-compression-p3](../writing/abstract.html#audit-problem-compression-p3)：有时背景仍然必要。面对跨领域读者，先用一个短语解释任务，可以避免后文失去对象；面对高度专业的… | S019 刘洋课件副本 · 文件 pp.41–42；S009 Jones · 文件 pp.19–20 | 据此推演。背景保留多少取决于理解需要。 |
| [method-versus-label-p1](../writing/abstract.html#audit-method-versus-label-p1)：“提出 ABC 框架”只是命名；“结合注意力、图网络和对比学习”只是组件列表。读者还不知道这… | S019 刘洋课件副本 · 文件 p.42／页脚 27；S027 Mensh、Kording · Rule 5 | 据此推演。实现应有信息，动作写法由本站展开。 |
| [method-versus-label-b1](../writing/abstract.html#audit-method-versus-label-b1)：把标签改为可理解的动作 · 教学示例 草稿 可继续改进的版本 关键变化 提出一种多阶段框架。… | S019 刘洋课件副本 · 文件 p.42／页脚 27；S027 Mensh、Kording · Rule 5；S025 NeurIPS Checklist · 条目 1 | 教学构造。摘要说明关键工作和实现，而非只命名；动作句与数据假设检查是本站示例。 |
| [method-versus-label-p2](../writing/abstract.html#audit-method-versus-label-p2)：动作也要与真实实现一致。例如“保持标签不变”是需要论证的数据假设；如果变换可能改变语义，不能… | S025 NeurIPS Checklist · 条目 1 | 教学构造。标签保持是假设示例，需独立论证。 |
| [method-versus-label-p3](../writing/abstract.html#audit-method-versus-label-p3)：可以采用“我们将 X 与 Y 分开／在 Z 条件下保留 W／通过步骤 A 避免重复 B”一类… | S019 刘洋课件副本 · 文件 p.42／页脚 27；S025 NeurIPS Checklist · 条目 1 | 教学构造。动作句型不承担新颖性证明。 |
| [result-sentences-p1](../writing/abstract.html#audit-result-sentences-p1)：结果中最需要保留的通常是任务或数据范围、关键指标、比较对象，以及会改变结论的重要条件。无需把… | S025 NeurIPS Checklist · 条目 1、7–8 | 据此推演。压缩时保留改变主张范围的条件。 |
| [result-sentences-b1](../writing/abstract.html#audit-result-sentences-b1)：练习用虚构设定 以下项目与数字全部为教学编写：在文档集合 A 的固定候选重排序中，同一硬件、… | S025 NeurIPS Checklist · 条目 1、7–8；S029 ASA 官方说明 · p.2，原则 3–6；S020 ColBERT v2 · §4.1–4.5 | 教学构造。结果范围及不确定性需准确；A 集合数字全部虚构，不据差值断言等价或统计显著。 |
| [result-sentences-b2](../writing/abstract.html#audit-result-sentences-b2)：不成立的概括 我们的方法显著提升检索效率，并保持相同精度，在各类任务上具有广泛适用性。 “显… | S025 NeurIPS Checklist · 条目 1、7–8；S029 ASA 官方说明 · p.2，原则 3–6；S020 ColBERT v2 · §4.1–4.5 | 教学构造。结果范围及不确定性需准确；A 集合数字全部虚构，不据差值断言等价或统计显著。 |
| [result-sentences-p2](../writing/abstract.html#audit-result-sentences-p2)：摘要并非必须列出每项代价，但若论文以效率为核心贡献，而索引成本会实质改变使用判断，完全略去它… | S025 NeurIPS Checklist · 条目 1、7–8；S029 ASA 官方说明 · p.2，原则 3–6 | 教学构造。虚构差值不支持等价，不应掩盖重要代价。 |
| [result-sentences-p3](../writing/abstract.html#audit-result-sentences-p3)：真实论文中的结果同样需要回看实验定义。ColBERT 分别分析质量与查询成本、端到端检索、组… | S020 ColBERT v2 · §4.1–4.5 | 案例释义。原论文分开分析不同流程与成本。 |
| [abstract-worked-revision-p1](../writing/abstract.html#audit-abstract-worked-revision-p1)：仍使用上一节的虚构设定，并假定方法确实将文档预编码与查询时交互分开。下面展示的是教学写作过程… | S019 刘洋课件副本 · 文件 pp.41–42；S027 Mensh、Kording · Rule 5 | 教学构造。A 集合与全部数字均为教学设定。 |
| [abstract-worked-revision-b1](../writing/abstract.html#audit-abstract-worked-revision-b1)：修改前 看得见活动，看不见论证 本文针对信息检索的效率问题提出了一个 新颖 框架。框架包括文… | S019 刘洋课件副本 · 文件 pp.41–42；S027 Mensh、Kording · Rule 5；S025 NeurIPS Checklist · 条目 1 | 教学构造。依据原文的信息职责与范围要求编写完整改稿；方法与数字为同一个虚构设定。 |
| [abstract-worked-revision-b2](../writing/abstract.html#audit-abstract-worked-revision-b2)：定位缺失信息。 “效率问题”没有成因；三个模块没有说明关键计算变化；“大量”没有说明测什么；… | S019 刘洋课件副本 · 文件 pp.41–42；S027 Mensh、Kording · Rule 5；S025 NeurIPS Checklist · 条目 1 | 教学构造。依据原文的信息职责与范围要求编写完整改稿；方法与数字为同一个虚构设定。 |
| [abstract-worked-revision-p2](../writing/abstract.html#audit-abstract-worked-revision-p2)：末句不再宣称“普遍有效”，而说明读者应怎样理解结果。若字数有限，可以删末句，因为前三句已经提… | S027 Mensh、Kording · Rule 5；S025 NeurIPS Checklist · 条目 1 | 教学构造。删改理由据范围匹配，未验证改稿效果。 |
| [abstract-adaptations-p1](../writing/abstract.html#audit-abstract-adaptations-p1)：对于方法论文，可以按“限制—关键改变—可行性做法—结果及条件”组织；对于分析论文，可以按“未… | S027 Mensh、Kording · Rule 5；S025 NeurIPS Checklist · 条目 1、3–4 | 教学构造。三类骨架由本站编排，不是作者分类。 |
| [abstract-adaptations-p2](../writing/abstract.html#audit-abstract-adaptations-p2)：负面结果也能形成摘要，但需要具体说明被检查的对象与条件。“某方法无效”通常过宽；“在设置 C… | S010 Lipton、Steinhardt · §3.1–3.2 | 教学构造。模块和预算例是假设，原因仍待区分。 |
| [abstract-adaptations-p3](../writing/abstract.html#audit-abstract-adaptations-p3)：工作尚未完成时，可以写计划用摘要以发现缺口，但要将预期与已观察结果分开。不能为了把四项职责填… | S025 NeurIPS Checklist · 条目 1、3–4 | 据此推演。预期目标不能写成已经取得的成果。 |
| [abstract-practice-b1](../writing/abstract.html#audit-abstract-practice-b1)：写作练习 用四种标记读自己的摘要 分别标出问题、改变、做法、依据。一个句子可以承担多个职责；… | S019 刘洋课件副本 · 文件 pp.41–42；S009 Jones · 文件 p.24、p.41；S025 NeurIPS Checklist · 条目 1 | 教学构造。用信息职责、主张证据与读者反馈设计练习；四色、强词清单和三处对读为本站操作。 |
| [abstract-practice-p1](../writing/abstract.html#audit-abstract-practice-p1)：最后做标题—摘要—结论对读。三处可以详略不同，但研究对象、主张强度和适用范围不应冲突。若摘要… | S025 NeurIPS Checklist · 条目 1 | 据此推演。对读范围是主张匹配要求的延伸。 |

### introduction

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [intro-contract-p1](../writing/introduction.html#audit-intro-contract-p1)：引言不能只把摘要拉长。摘要让读者迅速判断内容，引言则要补足理由：这个问题为什么值得处理，已有… | S019 刘洋课件副本 · 文件 pp.44–46／页脚 29–30；S009 Jones · 文件 pp.18–24；S027 Mensh、Kording · Rule 6 | 据此推演。综合问题缺口与贡献的证据责任。 |
| [intro-contract-p2](../writing/introduction.html#audit-intro-contract-p2)：刘洋将较好的推进概括为“问题—当前工作的挑战—本文如何缓解”；Jones 则强调明确问题和贡… | S019 刘洋课件副本 · 文件 pp.44–46／页脚 29–30；S009 Jones · 文件 pp.18–24 | 原文转述。两位讲者互补，不规定三段或固定页数。 |
| [intro-contract-b1](../writing/introduction.html#audit-intro-contract-b1)：研究对象 问题是什么，出现在哪个条件下 已有能力 当前方法已经解决什么 具体挑战 哪项限制阻… | S019 刘洋课件副本 · 文件 pp.44–46／页脚 29–30；S009 Jones · 文件 pp.18–24；S027 Mensh、Kording · Rule 6 | 教学构造。引言建立问题缺口和贡献；不能从领域重要直接推出本文重要，也不把讲座示意页数当规范。 |
| [intro-contract-p3](../writing/introduction.html#audit-intro-contract-p3)：“领域重要”不能直接推出“本文贡献重要”。需要补上中间一段：某类读者或任务确实受到某个限制，… | S027 Mensh、Kording · Rule 6 | 据此推演。背景需收束到本文能填的具体缺口。 |
| [real-intro-p1](../writing/introduction.html#audit-real-intro-p1)：刘洋课件用自己的树到树机器翻译论文示范这条逻辑。这里追到原论文首页，按段落职责释义，而不推测… | S022 Tree-to-Tree · p.558，§1 | 案例释义。只核实原论文首页引言的实际推进。 |
| [real-intro-b1](../writing/introduction.html#audit-real-intro-b1)：真实引言结构分析 / ACL-IJCNLP 2009 从潜在优势，到尚未实现的能力 第一段：… | S022 Tree-to-Tree · p.558，§1；S009 Jones · 文件 p.24 | 案例释义。树到树原文 §1 的能力、两项挑战与森林思路可核实；对证据粒度的要求为据 Jones 推演。 |
| [real-intro-p2](../writing/introduction.html#audit-real-intro-p2)：这里可复用的是“先承认已有能力，再明确未满足条件”的写法。不要把所有前人方法写成毫无价值的障… | S022 Tree-to-Tree · p.558，§1 | 据此推演。承认已有能力是由案例抽象的写法。 |
| [real-intro-p3](../writing/introduction.html#audit-real-intro-p3)：还要留意挑战与证据是否同层级。引言若强调误差传播，最终只展示一个平均分，并不能单独说明误差传… | S009 Jones · 文件 p.24 | 据此推演。总体效果与机制解释的证据责任不同。 |
| [opening-example-p1](../writing/introduction.html#audit-opening-example-p1)：Jones 对比泛泛强调程序错误重要的开头与直接展示一个有意义错误的开头，建议用例子介绍问题… | S009 Jones · 文件 pp.19–20、36–38 | 原文转述。Jones 示范具体错误，不强制故事开场。 |
| [opening-example-b1](../writing/introduction.html#audit-opening-example-b1)：背景堆叠 · 教学示例 搜索系统在现代社会十分重要。随着数据规模扩大，搜索效率成为重大挑战。… | S009 Jones · 文件 pp.19–20、36–38；S020 ColBERT v2 · §1、§3.5 | 教学构造。Jones 示范用有意义例子介绍问题；十万文档与改写均为假设，不是性能测量。 |
| [opening-example-p2](../writing/introduction.html#audit-opening-example-p2)：“十万篇”在这里是教学设定，不是公开系统测量。它只用于建立计算场景，不能据此宣称方法在实际规… | S020 ColBERT v2 · §1、§3.5 | 教学构造。十万文档为自编场景，不是真实规模测量。 |
| [opening-example-p3](../writing/introduction.html#audit-opening-example-p3)：选例时应保留核心困难。若研究要处理多义查询，却举一个只有唯一相关文档的例子，就可能把最难的部… | S009 Jones · 文件 pp.19–20、36–38 | 据此推演。保留关键困难是解释例子的检查条件。 |
| [paragraph-logic-p1](../writing/introduction.html#audit-paragraph-logic-p1)：刘洋区分论断性的中心句、围绕中心展开的支撑句，以及连接下一部分的衔接句。支撑可以来自已发表工… | S019 刘洋课件副本 · 文件 p.57／页脚 34、p.63／页脚 37 | 原文转述。中心、支撑、衔接在课件中可定位。 |
| [paragraph-logic-b1](../writing/introduction.html#audit-paragraph-logic-b1)：中心： 仅扩大候选列表，未必能够以合理成本覆盖足够丰富的结构变化。 支撑： 应在此放入与候选… | S019 刘洋课件副本 · 文件 p.57／页脚 34、p.63／页脚 37；S027 Mensh、Kording · Rule 3–4 | 教学构造。刘洋的中心／支撑／衔接与 Mensh 的段落逻辑供对照；本站骨架的支撑仍待填。 |
| [paragraph-logic-p2](../writing/introduction.html#audit-paragraph-logic-p2)：编辑写作骨架。中间的证据尚待填写，不能把空缺骨架当作已经成立的研究论证。… | S019 刘洋课件副本 · 文件 p.57／页脚 34、p.63／页脚 37 | 教学构造。骨架证据待填，不是已成立的论证。 |
| [paragraph-logic-p3](../writing/introduction.html#audit-paragraph-logic-p3)：中心句决定支撑的相关性。如果中心是“现有方法成本过高”，后文全是准确率比较，即使每篇文献都真… | S019 刘洋课件副本 · 文件 p.57／页脚 34、p.63／页脚 37；S027 Mensh、Kording · Rule 3–4 | 据此推演。支撑须服务中心，条件也应匹配。 |
| [paragraph-logic-p4](../writing/introduction.html#audit-paragraph-logic-p4)：段落末尾不一定都需要衔接句。关系明确时，让下一段直接推进即可；关系不明确时，应补足实际推理，… | S027 Mensh、Kording · Rule 3–4 | 据此推演。关系先成立，不靠固定末句或连接词。 |
| [contribution-statements-p1](../writing/introduction.html#audit-contribution-statements-p1)：贡献列表不是必需形式，但明确贡献是必需任务。Jones 的示例将“我们研究系统性质”改成具体… | S009 Jones · 文件 pp.21–25；S019 刘洋课件副本 · 文件 pp.92–94／页脚 44–46 | 原文转述。可检查贡献与正文位置对应有原例。 |
| [contribution-statements-b1](../writing/introduction.html#audit-contribution-statements-b1)：引言中的贡献承诺 · 教学示例 贡献句 支持位置应提供 措辞风险 提出可分离的编码与匹配安排… | S009 Jones · 文件 pp.21–25；S019 刘洋课件副本 · 文件 pp.92–94／页脚 44–46；S010 Lipton、Steinhardt · §3.2 | 教学构造。贡献可检查并指向证据；三条检索主张为教学构造，组件归因不能超过对照。 |
| [contribution-statements-p2](../writing/introduction.html#audit-contribution-statements-p2)：不要强制凑成三条。如果两条贡献实际上只是“提出算法”和“算法有一个模块”，应合并或说明二者为… | S009 Jones · 文件 pp.21–25；S019 刘洋课件副本 · 文件 pp.92–94／页脚 44–46 | 据此推演。三条非数量规则；首次须另核实文献范围。 |
| [contribution-statements-p3](../writing/introduction.html#audit-contribution-statements-p3)：正文位置的前向引用可以帮助读者快速找到证据，但不能代替解释。写“见 §4”之前，先说清 §4… | S009 Jones · 文件 pp.21–25 | 据此推演。前向引用应指向具体支持而不只列章名。 |
| [intro-revision-b1](../writing/introduction.html#audit-intro-revision-b1)：初稿 · 假设研究计划 模型标签替代了具体判断 神经检索取得了巨大进展。双编码器速度快，但精… | S009 Jones · 文件 pp.21–24；S020 ColBERT v2 · §1、§3.1、§3.4–3.5；S025 NeurIPS Checklist · 条目 1 | 教学构造。依据计算安排与贡献证据关系构造计划稿；未取得结果，不借 ColBERT 背书虚构成绩。 |
| [intro-revision-p1](../writing/introduction.html#audit-intro-revision-p1)：这是计划型文本，所以使用“研究”“计划评估”，不能冒充完成稿。取得结果后，应将最后两句改为真… | S009 Jones · 文件 pp.21–24；S025 NeurIPS Checklist · 条目 1 | 教学构造。计划稿不能冒充已经取得的结果。 |
| [intro-revision-p2](../writing/introduction.html#audit-intro-revision-p2)：改写中最重要的不是句子更长，而是把设计与证据连接起来。还可以继续补充最近方法和具体数据，使关… | S009 Jones · 文件 pp.21–24；S020 ColBERT v2 · §1、§3.1、§3.4–3.5 | 教学构造。骨架仍待真实近邻与数据填充。 |
| [intro-placement-p1](../writing/introduction.html#audit-intro-placement-p1)：只要某项背景是理解问题所必需，就应在需要时提供；但引言不必承担所有技术定义。可以先给直观解释… | S009 Jones · 文件 pp.27–30、36–39 | 据此推演。按理解需要分配背景；首图建议为推演。 |
| [intro-placement-p2](../writing/introduction.html#audit-intro-placement-p2)：相关工作同样如此。引言需要核实最近工作以建立缺口，但不一定需要先展开完整的技术比较。Jone… | S009 Jones · 文件 pp.27–30、36–39；S023 CVG · pp.456–457，§2 | 案例释义。Jones后置建议与CVG第二节安排不同。 |
| [intro-placement-p3](../writing/introduction.html#audit-intro-placement-p3)：修改时把每段压成一句，连起来读。若得到“领域很重要—很多人研究—我们用了 A—我们用了 B”… | S026 Purdue OWL · 两步逆向提纲 | 教学构造。实际段落中心用于逆向提纲练习。 |
| [intro-practice-b1](../writing/introduction.html#audit-intro-practice-b1)：写作练习 把每项承诺改写成读者的检查动作 为每条贡献续写：“如果这句话成立，正文至少应让我看… | S009 Jones · 文件 pp.21–24、41 | 教学构造。把可核查贡献和首次读者反馈转成检查练习，示例判断由本站展开。 |

### method

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [method-contract-p1](../writing/method.html#audit-method-contract-p1)：读者首先需要理解输入是什么、输出是什么，以及为什么这个改变与问题有关；随后才会检查算法是否完… | S019 刘洋课件副本 · 文件 pp.96–102／页脚 48–51；S009 Jones · 文件 pp.35–39；S025 NeurIPS Checklist · 条目 3–6 | 原文转述。理解顺序与复核要求来自不同材料。 |
| [method-contract-p2](../writing/method.html#audit-method-contract-p2)：刘洋建议必要时先解释背景和基线，利用贯穿示例建立对比，再进入形式化。Jones 也强调先传达… | S019 刘洋课件副本 · 文件 pp.96–102／页脚 48–51；S009 Jones · 文件 pp.36–39 | 原文转述。例子先于形式化，不代替严格定义。 |
| [method-contract-b1](../writing/method.html#audit-method-contract-b1)：任务 已知什么，要输出什么 改变 基线在哪一步不同 机制 算例怎样经过每个关键步骤 一般化 … | S019 刘洋课件副本 · 文件 pp.96–102／页脚 48–51；S009 Jones · 文件 pp.35–39；S025 NeurIPS Checklist · 条目 3–6；S020 ColBERT v2 · §3.1、§3.3–3.6 | 教学构造。刘洋与 Jones 支持直觉和一般定义的顺序；复核要求另据 NeurIPS，不能混归两位讲者。 |
| [method-contract-p3](../writing/method.html#audit-method-contract-p3)：方法的叙述顺序可以与程序执行顺序不同。训练可能在真实系统中先发生，但为了理解推断行为，读者可… | S020 ColBERT v2 · §3.1、§3.3–3.6 | 据此推演。叙述可服务理解，ColBERT实际分开不同阶段。 |
| [baseline-first-p1](../writing/method.html#audit-baseline-first-p1)：当新方法是对熟悉方案的一项修改时，最直接的组织往往是：简述基线的信息流，指出本文改变哪一步，… | S019 刘洋课件副本 · 文件 p.96／页脚 48 | 据此推演。先讲基线，篇幅由理解差异的需要决定。 |
| [baseline-first-b1](../writing/method.html#audit-baseline-first-b1)：基线叙述 · 教学示例 逐对联合计算 给定查询 q 和候选文档 d，将二者一起送入编码模型，… | S019 刘洋课件副本 · 文件 p.96／页脚 48；S020 ColBERT v2 · §1、§3.1、§3.4–3.6 | 教学构造。基线先行来自刘洋；两个计算框为实际架构的简化教学对照，未覆盖完整检索。 |
| [baseline-first-p2](../writing/method.html#audit-baseline-first-p2)：这个对照解释的是计算安排，而不是宣称某类模型必然更优。它省略了候选生成、索引和训练细节。真实… | S020 ColBERT v2 · §1、§3.1、§3.4–3.6 | 教学构造。简化框不能替代索引、重排与完整检索。 |
| [baseline-first-p3](../writing/method.html#audit-baseline-first-p3)：介绍每个组件时，先说它接受什么、产生什么，以及为什么需要它。若三段都以“为了进一步提升性能，… | S019 刘洋课件副本 · 文件 p.96／页脚 48 | 教学构造。组件输入、输出、目标是本站检查动作。 |
| [running-example-p1](../writing/method.html#audit-running-example-p1)：贯穿示例的价值在于反复使用同一个对象：引入输入，走过基线，展示改变，再把符号映射回同一对象。… | S019 刘洋课件副本 · 文件 pp.97–102／页脚 49–51；S009 Jones · 文件 pp.36–38；S021 Forest Reranking · p.587，§2 | 原文转述。同例贯穿有课件原例，森林先给歧义句。 |
| [running-example-p2](../writing/method.html#audit-running-example-p2)：选择示例时先问：本文关键决策发生在哪一步？如果方法处理歧义，例子必须有歧义；如果方法依赖约束… | S019 刘洋课件副本 · 文件 pp.97–102／页脚 49–51；S009 Jones · 文件 pp.36–38 | 教学构造。困难与边界例的选择条件由本站设置。 |
| [running-example-b1](../writing/method.html#audit-running-example-b1)：贯穿教学示例 / 不是真实检索输出 查询：“申请 奖学金” 候选文档片段：“奖学金 申请 截… | S019 刘洋课件副本 · 文件 pp.97–102／页脚 49–51；S009 Jones · 文件 pp.36–38；S021 Forest Reranking · p.587，§2；S020 ColBERT v2 · §3.1–3.3 | 教学构造。复用同一例子并进入一般情形；词语、切分与简化由本站编写，未冒充真实输出。 |
| [running-example-p3](../writing/method.html#audit-running-example-p3)：这里简化了编码过程，但没有删除“每个查询位置分别寻找匹配”的关键关系。若把整篇文档先平均成一… | S020 ColBERT v2 · §3.1–3.3 | 据此推演。平均为单向量已改变这里的聚合定义。 |
| [worked-maxsim-p1](../writing/method.html#audit-worked-maxsim-p1)：ColBERT 的一个核心打分关系，是对每个查询 token 找出文档 token 的最大相… | S020 ColBERT v2 · §3.1、§3.3，式 (3) | 原文转述。原文式(3)；矩阵不是模型输出。 |
| [worked-maxsim-b1](../writing/method.html#audit-worked-maxsim-b1)：MAXSIM / 人工相似度算例 选取哪些数，决定了分数的含义 教学数值 比较三种聚合规则 … | S020 ColBERT v2 · §3.1、§3.3，式 (3) | 教学构造。公式取自原文；矩阵、聚合比较及非一一配对为定义推演，不是模型效果实验。 |
| [worked-maxsim-b2](../writing/method.html#audit-worked-maxsim-b2)：MaxSim 的一般打分关系 S(q, d) = ∑ i max j sim(q i , d… | S020 ColBERT v2 · §3.1、§3.3，式 (3) | 教学构造。公式取自原文；矩阵、聚合比较及非一一配对为定义推演，不是模型效果实验。 |
| [worked-maxsim-p2](../writing/method.html#audit-worked-maxsim-p2)：q i 、d j 分别表示查询和文档第 i、j 个位置的向量；sim 是相似度。内层 max… | S020 ColBERT v2 · §3.1、§3.3，式 (3) | 据此推演。中文解释内外运算，省略编码与索引。 |
| [worked-maxsim-b3](../writing/method.html#audit-worked-maxsim-b3)：为什么不是取整个矩阵的最大值，或把全部格子相加？ 整个矩阵的最大值只有 0.9，会让一个查询… | S020 ColBERT v2 · §3.1、§3.3，式 (3) | 教学构造。公式取自原文；矩阵、聚合比较及非一一配对为定义推演，不是模型效果实验。 |
| [worked-maxsim-p3](../writing/method.html#audit-worked-maxsim-p3)：这个关系也不要求一一配对：两个查询位置可以选择同一个文档位置。它还不直接编码查询词序之间的全… | S020 ColBERT v2 · §3.1、§3.3，式 (3) | 据此推演。非一一配对由公式推得，聚合与编码器分开。 |
| [formalization-p1](../writing/method.html#audit-formalization-p1)：例子建立直觉后，需要补全一般情形：输入集合、表示维度、候选范围、目标函数和算法步骤。每个新符… | S019 刘洋课件副本 · 文件 p.160／页脚 76；S025 NeurIPS Checklist · 条目 3–6 | 原文转述。符号定义有直接要求，完整方法还需设置。 |
| [formalization-b1](../writing/method.html#audit-formalization-b1)：形式化信息怎样分层 · 编辑方法 层次 该说明什么 常见遗漏 任务定义 输入、输出、可用信息… | S019 刘洋课件副本 · 文件 p.160／页脚 76；S025 NeurIPS Checklist · 条目 3–6；S020 ColBERT v2 · §3.3，式 (3)及训练目标 | 教学构造。符号定义有直接依据；形式化分层、图／算法分工为编辑组织，不替代证明或实现。 |
| [formalization-p2](../writing/method.html#audit-formalization-p2)：公式的职责也需要明确：它是在定义一个分数，表达一个优化目标，还是陈述一个已证明的性质？写出目… | S025 NeurIPS Checklist · 条目 3–6；S020 ColBERT v2 · §3.3，式 (3)及训练目标 | 据此推演。定义、训练目标与定理承担不同责任。 |
| [formalization-p3](../writing/method.html#audit-formalization-p3)：伪代码适合表达顺序、分支和循环，公式适合表达关系，图适合表达数据流与结构。三者不必把相同细节… | S019 刘洋课件副本 · 文件 p.160／页脚 76；S025 NeurIPS Checklist · 条目 3–6 | 教学构造。图、公式和伪代码的职责分配由本站建议。 |
| [training-inference-p1](../writing/method.html#audit-training-inference-p1)：机器学习方法章尤其需要交代训练用什么样本、标签或反馈，优化什么目标，如何产生负例或候选；推断… | S020 ColBERT v2 · §3.3，训练段 | 原文转述。§3.3的实际三元组、损失与参数分工。 |
| [training-inference-p2](../writing/method.html#audit-training-inference-p2)：一个典型信息缺口是：方法图展示了推断流程，损失函数却默认存在一个没有介绍的负例集合。读者无法… | S020 ColBERT v2 · §3.4–3.6 | 据此推演。§3.4–3.6阶段可核实，缺对象检查为推演。 |
| [training-inference-p3](../writing/method.html#audit-training-inference-p3)：效率分析也应分阶段。预计算减少查询时计算，可能增加离线编码、索引空间或更新成本。对于 n 个… | S025 NeurIPS Checklist · 条目 8；S020 ColBERT v2 · §4.1.3、§4.5 | 据此推演。规范与分阶段测量支持资源报告建议。 |
| [training-inference-p4](../writing/method.html#audit-training-inference-p4)：实现细节应优先报告会改变理解和复核的部分：预处理、长度截断、随机性、训练停止条件、模型选择、… | S025 NeurIPS Checklist · 条目 4–6 | 原文转述。条目4–6允许不同复核途径，关键设置须交代。 |
| [method-rationale-p1](../writing/method.html#audit-method-rationale-p1)：读者不仅问“怎样做”，也问“为什么这样做”。有时答案来自理论约束，有时是工程目标，有时只是需… | S010 Lipton、Steinhardt · §3.1–3.2 | 据此推演。直觉与实证不能混成已证明的原因。 |
| [method-rationale-b1](../writing/method.html#audit-method-rationale-b1)：过强的理由 · 教学示例 最大值聚合能够捕捉全部语义，因此我们采用 MaxSim。 与依据相… | S020 ColBERT v2 · §3.1、§3.3–3.6；S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 2 | 教学构造。原文区分计算理由、假设与验证；“捕捉全部语义”是错误教学句，待测边界不能写成事实。 |
| [method-rationale-p2](../writing/method.html#audit-method-rationale-p2)：设计解释不能只复述目标。“使用该模块以提升性能”没有说明机制；“为避免每次查询重新编码文档，… | S020 ColBERT v2 · §3.1、§3.3–3.6 | 教学构造。离线编码说明动作和目的，不代替成本测量。 |
| [method-rationale-p3](../writing/method.html#audit-method-rationale-p3)：还可以给一个失败或边界例：什么输入会让局部匹配误导整体判断？什么更新频率会使预计算不划算？若… | S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 2 | 教学构造。边界是待测问题，没有真实失败曲线。 |
| [method-practice-b1](../writing/method.html#audit-method-practice-b1)：写作练习 为自己的方法选择一个最小但不平凡的输入 列出基线如何处理它，新方法改变哪一步，各步… | S019 刘洋课件副本 · 文件 pp.98–102；S009 Jones · 文件 pp.36–38；S025 NeurIPS Checklist · 条目 2–4 | 教学构造。用例子引入一般情形与假设要求设计手走流程练习；新输入和诊断规则由本站设置。 |

### experiments

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [experiment-claims-p1](../writing/experiments.html#audit-experiment-claims-p1)：“我们进行了大量实验”不能说明证据是否充分。应先确定读者需要相信什么，再设计能够支持或削弱它… | S009 Jones · 文件 p.24；S027 Mensh、Kording · Rule 7 | 据此推演。先明确主张，再配置数据与逻辑。 |
| [experiment-claims-p2](../writing/experiments.html#audit-experiment-claims-p2)：Jones 要求为引言中的每项主张寻找证据；刘洋讨论标准数据、强基线、开发集与测试集分工，以… | S009 Jones · 文件 p.24；S019 刘洋课件副本 · 文件 pp.106–112／页脚 54–55 | 原文转述。Jones要求主张有证据，刘洋展开实验设置。 |
| [experiment-claims-b1](../writing/experiments.html#audit-experiment-claims-b1)：先写主张，再决定观察 · 教学示例 准备写出的主张 适合安排的证据 需要保留的边界 提高任务… | S009 Jones · 文件 p.24；S027 Mensh、Kording · Rule 7；S010 Lipton、Steinhardt · §3.2；S019 刘洋课件副本 · 文件 pp.106–112／页脚 54–55 | 教学构造。每项主张需要对应数据与逻辑；表中质量、成本、组件、迁移是自编检查例。 |
| [experimental-settings-p1](../writing/experiments.html#audit-experimental-settings-p1)：结果中的差异只有放在设置里才可解释。数据划分、指标定义、训练与调参预算、可用外部资源、推断流… | S025 NeurIPS Checklist · 条目 4–8；S020 ColBERT v2 · §4.1.1–4.1.3 | 据此推演。设置和资源决定可解释的比较口径。 |
| [experimental-settings-p2](../writing/experiments.html#audit-experimental-settings-p2)：开发集用于选择参数或版本，测试集用于估计选定方案的表现。刘洋课件用“先辅后主”说明先做开发集… | S019 刘洋课件副本 · 文件 pp.111–112／页脚 54–55；S025 NeurIPS Checklist · 条目 6 | 原文转述。开发/测试与调参报告，叙述顺序可不同。 |
| [experimental-settings-p3](../writing/experiments.html#audit-experimental-settings-p3)：指标应回答研究问题。若研究减少尾部延迟，平均时间可能掩盖少量极慢查询；若研究候选覆盖，最终排… | S020 ColBERT v2 · §4.1.1；§4，RQ1–RQ4 | 教学构造。尾延迟和覆盖为指标职责的教学检查。 |
| [experimental-settings-p4](../writing/experiments.html#audit-experimental-settings-p4)：“公平比较”不是所有参数完全一样。不同方法可能需要不同合理配置；关键是说明比较想回答什么，并… | S010 Lipton、Steinhardt · §3.2 | 据此推演。调参可混淆收益来源，受限比较须收窄归因。 |
| [baseline-meaning-p1](../writing/experiments.html#audit-baseline-meaning-p1)：强任务基线回答“这个方法相对于相关选择是否值得”；简单基线帮助判断复杂度是否必要；消融对照检… | S019 刘洋课件副本 · 文件 p.106／页脚 54；S010 Lipton、Steinhardt · §3.2 | 据此推演。对照角色由本站整理，非原文固定分类。 |
| [baseline-meaning-b1](../writing/experiments.html#audit-baseline-meaning-b1)：不够清楚 · 教学示例 新模型比旧模型提高了，同时使用更多训练数据、更大编码器和新增模块。由… | S019 刘洋课件副本 · 文件 p.106／页脚 54；S010 Lipton、Steinhardt · §3.2 | 教学构造。原文要求强基线并警惕调参混淆，明确消融非必要亦非充分；对照类型是本站组织。 |
| [baseline-meaning-p2](../writing/experiments.html#audit-baseline-meaning-p2)：Lipton 与 Steinhardt 提醒，消融本身既非必要、亦非充分的理解条件。删除组件… | S010 Lipton、Steinhardt · §3.2 | 原文转述。消融非必要亦非充分，退化不证明唯一机制。 |
| [baseline-meaning-p3](../writing/experiments.html#audit-baseline-meaning-p3)：若模块间存在交互，逐项移除也可能不够。实验设计应服务要区分的解释，而不是机械生成所有组件的开… | S010 Lipton、Steinhardt · §3.2 | 据此推演。对照应区分解释，不机械凑开关组合。 |
| [real-experiment-structure-p1](../writing/experiments.html#audit-real-experiment-structure-p1)：ColBERT 在实验开头明确提出不同研究问题，后续分别讨论质量与查询成本、端到端检索、组件… | S020 ColBERT v2 · §4，RQ1–RQ4；§4.2–4.5 | 案例释义。RQ1–RQ4与§4.2–4.5可以逐项核对。 |
| [real-experiment-structure-b1](../writing/experiments.html#audit-real-experiment-structure-b1)：ColBERT 的实验职责释义 · 编辑分析 原文研究方向 在论证中承担什么 读者应继续追问… | S020 ColBERT v2 · §4，RQ1–RQ4；§4.2–4.5；S025 NeurIPS Checklist · 条目 3–4 | 教学构造。四个实际研究问题与实验小节对应；理论或资源论文的调整按贡献类型，不规定四类实验。 |
| [real-experiment-structure-p2](../writing/experiments.html#audit-real-experiment-structure-p2)：可复用的是证据分工，不能把这四个方向照搬给所有项目。若论文的核心是证明正确性，应优先交代定理… | S025 NeurIPS Checklist · 条目 3–4 | 据此推演。证据分工随贡献类型调整，不硬套四类。 |
| [read-result-paragraph-p1](../writing/experiments.html#audit-read-result-paragraph-p1)：Forest Reranking 的表 3 在同一结果区报告 n-best 与 forest… | S021 Forest Reranking · pp.592–593，§5、表3、脚注7 | 案例释义。表3保留特征与资源；脚注保留怀疑。 |
| [read-result-paragraph-b1](../writing/experiments.html#audit-read-result-paragraph-b1)：真实结果段的论证层次 从“哪一行最好”走向“这项比较说明什么” 先定位观察 指出表中比较的系… | S021 Forest Reranking · pp.592–593，§5、表3、脚注7；S027 Mensh、Kording · Rule 7；S028 Manchester Phrasebank · Reporting results，导言；S025 NeurIPS Checklist · 条目 1–2 | 案例释义。原表、异常脚注可核实；四项信息职责据原文重新组织，非任何一位作者的四步法。 |
| [read-result-paragraph-p2](../writing/experiments.html#audit-read-result-paragraph-p2)：一段自己的结果分析可以依次写：“本比较检验什么—观察到何种差异—差异与哪项主张有关—尚不能说… | S027 Mensh、Kording · Rule 7；S028 Manchester Phrasebank · Reporting results，导言；S025 NeurIPS Checklist · 条目 1–2 | 据此推演。问题/回答、定位/观察、范围责任分别有依据。 |
| [read-result-paragraph-b2](../writing/experiments.html#audit-read-result-paragraph-b2)：结果段写作骨架 / 编辑方法 从可比较的观察，走到有边界的判断 比较前提 在什么任务与条件下… | S021 Forest Reranking · pp.592–593，§5、表3、脚注7；S027 Mensh、Kording · Rule 7；S028 Manchester Phrasebank · Reporting results，导言；S025 NeurIPS Checklist · 条目 1–2 | 教学构造。原表、异常脚注可核实；四项信息职责据原文重新组织，非任何一位作者的四步法。 |
| [uncertainty-p1](../writing/experiments.html#audit-uncertainty-p1)：单次结果中的小差异，可能受到训练随机性、测试样本和选择过程影响。应根据主张和实验设计，决定重… | S025 NeurIPS Checklist · 条目 7 | 原文转述。条目7列波动因素、计算方法与误差类型。 |
| [uncertainty-p2](../writing/experiments.html#audit-uncertainty-p2)：刘洋的课件在机器翻译实验语境中明确强调显著性检验。采用这一建议时仍需考虑数据结构和研究问题：… | S029 ASA 官方说明 · p.2，原则 3、5；S019 刘洋课件副本 · 文件 p.111／页脚 54 | 原文转述。ASA原则3、5；刘洋显著性建议仍限原语境。 |
| [uncertainty-p3](../writing/experiments.html#audit-uncertainty-p3)：“统计显著”“差异很大”“实际有用”“基本等价”是不同判断。报告没有显著差异，不自动证明两方… | S029 ASA 官方说明 · p.2，原则 3、5–6 | 据此推演。等价是另一项主张，需独立的依据。 |
| [uncertainty-p4](../writing/experiments.html#audit-uncertainty-p4)：同样，不要只展示最好种子而把它称为典型表现。若因为资源限制只运行一次，可以如实报告单次结果，… | S025 NeurIPS Checklist · 条目 6；S029 ASA 官方说明 · p.2，原则 4 | 据此推演。选择过程应透明，未测稳定性不能补写。 |
| [negative-result-writing-p1](../writing/experiments.html#audit-negative-result-writing-p1)：失败案例应说明选择方式和分析用途。若只挑最漂亮的成功示例，不能支持总体优势；若只挑最坏失败，… | S025 NeurIPS Checklist · 条目 1–2 | 据此推演。选例不能代替发生频率和范围的证据。 |
| [negative-result-writing-p2](../writing/experiments.html#audit-negative-result-writing-p2)：平均提升可能来自少数子组。若引言强调长输入，而分层结果显示增益主要出现在短输入，应重新解释贡… | S025 NeurIPS Checklist · 条目 1–2；S010 Lipton、Steinhardt · §3.1–3.2 | 教学构造。长短输入分组为自编例，不能只看平均值。 |
| [negative-result-writing-p3](../writing/experiments.html#audit-negative-result-writing-p3)：负面结果首先是一项观察。检查实现、设置和测量后，再决定它是否削弱假设。若某个实验不能区分原因… | S010 Lipton、Steinhardt · §3.1–3.2 | 据此推演。不能区分原因时保留观察并收窄解释。 |
| [experiment-practice-b1](../writing/experiments.html#audit-experiment-practice-b1)：写作练习 每张表前后各写一句 表前写它准备检验的主张，表后写它实际允许得出的结论。把二者与引… | S009 Jones · 文件 p.24；S027 Mensh、Kording · Rule 7；S026 Purdue OWL · 两步逆向提纲；S025 NeurIPS Checklist · 条目 6–7 | 教学构造。把主张—证据与段落功能审查用于主表练习；表前后各一句为本站练习设计。 |

### figures

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [visual-job-p1](../writing/figures.html#audit-visual-job-p1)：画图之前，先写出读者看完应该明白的一句话：两个方法在哪一步不同，某个变量怎样影响结果，或质量… | S030 Rougier 等 · Rule 1–4 | 据此推演。先定受众与信息，再进行图形设计。 |
| [visual-job-p2](../writing/figures.html#audit-visual-job-p2)：刘洋讨论信息元素的理解难度，以及图表怎样改变首页的信息流；Jones 则建议用标题层级、代码… | S009 Jones · 文件 pp.48–49；S019 刘洋课件副本 · 文件 pp.70、74、77、81、91 | 原文转述。视觉结构有讲座依据；星标不是实验排名。 |
| [visual-job-b1](../writing/figures.html#audit-visual-job-b1)：解释关系 流程、结构、依赖或变化 选择载体 示意图、表格、曲线或文字 安排视线 重点、顺序、… | S030 Rougier 等 · Rule 1–4；S009 Jones · 文件 pp.48–49；S019 刘洋课件副本 · 文件 pp.70、74、77、81、91 | 教学构造。先确定信息与受众、图注补解码；星标是课件示意，不是普遍可读性实验结果。 |
| [visual-job-p3](../writing/figures.html#audit-visual-job-p3)：每幅图都要有取舍。把全部训练细节塞入概览图会失去整体；只保留几个抽象方框又可能看不见关键改变… | S030 Rougier 等 · Rule 1–4 | 据此推演。按媒介和信息取舍概览、局部与图注。 |
| [choose-visual-b1](../writing/figures.html#audit-choose-visual-b1)：展示形式与适合承担的任务 · 编辑归纳 形式 适合读者做什么 可能隐藏什么 流程／结构图 理… | S030 Rougier 等 · Rule 1–3、7 | 教学构造。载体应服务信息和读者任务；表中优缺点是编辑比较，不宣称所有场合散点优于表格。 |
| [choose-visual-p1](../writing/figures.html#audit-choose-visual-p1)：若读者需要比较质量和延迟，双轴取舍图通常比两个孤立的最高分更容易判断，但仍须说明点对应哪些设… | S030 Rougier 等 · Rule 1–3、7 | 据此推演。两坐标可表达两种量，不宣称散点普遍更好。 |
| [figure-order-p1](../writing/figures.html#audit-figure-order-p1)：结构图可以遵循读者熟悉的左到右信息流，使用相同形状表示同类对象，以颜色突出核心改变。箭头必须… | S030 Rougier 等 · Rule 2、6–8 | 教学构造。箭头和形状含义为本站设计建议。 |
| [figure-order-b1](../writing/figures.html#audit-figure-order-b1)：第一眼：概览 输入 → 关键改变 → 输出 让读者识别本文改在什么位置，再进入细节。 第二眼… | S030 Rougier 等 · Rule 2、6–8；S002 刘洋官方整理 · 实验图表 | 教学构造。信息优先与颜色／分组支持明确关系；箭头语义和流程层次为本站设计建议。 |
| [figure-order-p2](../writing/figures.html#audit-figure-order-p2)：编辑示意。这里只展示图的职责分层，不对应任何真实系统架构。… | S030 Rougier 等 · Rule 2、6–8 | 教学构造。只示意信息层级，不是真实系统。 |
| [figure-order-p3](../writing/figures.html#audit-figure-order-p3)：实验表应把可比较的行放在一起，并让指标方向和分组清楚。刘洋提出把本文方法置于表下方、总体指标… | S002 刘洋官方整理 · 实验图表 | 原文转述。刘洋的表格安排有具体建议，非位置硬规则。 |
| [figure-order-p4](../writing/figures.html#audit-figure-order-p4)：加粗最好值前，先确定比较范围。不同训练资源下的数字不应只靠同一个粗体暗示公平胜负。只用颜色表… | S030 Rougier 等 · Rule 2、6–8 | 据此推演。颜色有目的，突出重点不能掩盖比较条件。 |
| [real-figure-p1](../writing/figures.html#audit-real-figure-p1)：Forest Reranking 的图 4 用候选表示规模作横轴，用 oracle F-sc… | S021 Forest Reranking · p.592，图4；pp.592–593，§5 | 案例释义。横轴是超边/括号数，包含不同剪枝和列表。 |
| [real-figure-p2](../writing/figures.html#audit-real-figure-p2)：这里的 oracle 指候选空间内可达到的最好分析，而非系统实际选择的输出质量。因而图可以说… | S021 Forest Reranking · p.592，图4；pp.592–593，§5 | 案例释义。oracle是候选内最好值，实际质量另查表3。 |
| [real-figure-b1](../writing/figures.html#audit-real-figure-b1)：同一图中的指标，必须与它能支持的主张一起解释。 候选覆盖、最终预测、计算成本和实际使用价值是… | S021 Forest Reranking · p.592，图4；pp.592–593，§5 | 教学构造。横轴为每句平均超边或括号数量，纵轴为 oracle F-score；候选潜力与实际重排质量必须区分。 |
| [real-figure-p3](../writing/figures.html#audit-real-figure-p3)：学习这张图时，可以抽象出“把目标能力与资源代价放到同一比较中”的做法；不能把森林与列表的历史… | S021 Forest Reranking · p.592，图4；pp.592–593，§5 | 据此推演。学习比较职责，不外推现代系统表现。 |
| [caption-workshop-p1](../writing/figures.html#audit-caption-workshop-p1)：刘洋课件专门展示图注需要包含充分信息。图注不仅是标题，还应说明测量对象、坐标或符号、关键设置… | S019 刘洋课件副本 · 文件 pp.119–120／页脚 59；S030 Rougier 等 · Rule 4 | 原文转述。图注补解码信息，不只是标题。 |
| [caption-workshop-b1](../writing/figures.html#audit-caption-workshop-b1)：FIGURE LAB / 图与图注一起阅读 把“性能比较”变成可解读的图 复用摘要页的虚构设… | S019 刘洋课件副本 · 文件 pp.119–120／页脚 59；S030 Rougier 等 · Rule 4；S025 NeurIPS Checklist · 条目 7 | 教学构造。图注解释图、补充条件；两个点各代表一个方法，原稿误写候选数已修正；数值是虚构。 |
| [caption-workshop-b2](../writing/figures.html#audit-caption-workshop-b2)：信息不足 图 2：性能比较。 不知道什么性能，哪种设置，点和线分别代表什么。 补足对象与编码… | S019 刘洋课件副本 · 文件 pp.119–120／页脚 59；S030 Rougier 等 · Rule 4；S025 NeurIPS Checklist · 条目 7 | 教学构造。图注解释图、补充条件；两个点各代表一个方法，原稿误写候选数已修正；数值是虚构。 |
| [caption-workshop-p2](../writing/figures.html#audit-caption-workshop-p2)：如果还需要解释置信区间、随机种子或点的筛选方式，应按实际设计补上。不要为了“充分”把整段实验… | S030 Rougier 等 · Rule 4；S025 NeurIPS Checklist · 条目 7 | 据此推演。误差须定义，细节取舍以读图需要为据。 |
| [visual-misleading-p1](../writing/figures.html#audit-visual-misleading-p1)：比较曲线时，图例顺序应帮助读者找到对应曲线；多条线交叉时，固定顺序未必够用，可以直接标注或分… | S019 刘洋课件副本 · 文件 pp.113–116／页脚 56；S030 Rougier 等 · Rule 6–8 | 据此推演。图例对应有原例，直标/分面为据此建议。 |
| [visual-misleading-p2](../writing/figures.html#audit-visual-misleading-p2)：坐标截断、对数刻度、不同子图的尺度和未说明的误差条，都可能改变差异的视觉大小。它们并非一律禁… | S030 Rougier 等 · Rule 6–8；S025 NeurIPS Checklist · 条目 7 | 原文转述。坐标/面积误导有原例，误差条另据清单。 |
| [visual-misleading-p3](../writing/figures.html#audit-visual-misleading-p3)：图表还应保留来源与身份。重绘原论文结构时标出来源和“结构释义”；用教学数字时标出虚构；采用真… | S030 Rougier 等 · Rule 6–8 | 教学构造。本站进一步要求示意、虚构与实测身份清楚。 |
| [figures-practice-b1](../writing/figures.html#audit-figures-practice-b1)：写作练习 只给读者图、图注和必要图例 请他说明看到了什么比较，哪个条件最重要，能得出什么结论… | S030 Rougier 等 · Rule 4、7；S009 Jones · 文件 p.41 | 教学构造。据独立解码和同事解释反馈设计试读；未开展本站读者效果实验。 |

### related-work

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [related-purpose-p1](../writing/related-work.html#audit-related-purpose-p1)：读者需要知道本文继承了什么，最接近哪些方案，改变了哪个假设或步骤，以及这种改变意味着什么。按… | S019 刘洋课件副本 · 文件 pp.124–133／页脚 61–63；S009 Jones · 文件 pp.31–32 | 据此推演。用继承与差异定位，不只列作者摘要。 |
| [related-purpose-p2](../writing/related-work.html#audit-related-purpose-p2)：刘洋反对文献堆砌、遗漏关键工作，以及攻击前人以衬托自己；课件强调梳理发展脉络，并说明传承与创… | S019 刘洋课件副本 · 文件 pp.124–133／页脚 61–63；S009 Jones · 文件 pp.31–32 | 原文转述。原文反对堆砌攻击，承认他人与自身弱点。 |
| [related-purpose-b1](../writing/related-work.html#audit-related-purpose-b1)：先确定比较轴，再决定哪些工作放在一起。 比较轴可以是问题、表示、假设、学习信号、搜索方式或证… | S019 刘洋课件副本 · 文件 pp.124–133／页脚 61–63；S009 Jones · 文件 pp.31–32；S023 CVG · pp.456–457，§2 | 教学构造。原文反对堆砌、攻击与遗漏，承认继承；比较轴由本站从真实案例抽象。 |
| [real-related-p1](../writing/related-work.html#audit-real-related-p1)：刘洋课件展示了 CVG 论文的相关工作写法。追到原文后，可以看到作者先提出两条研究路线：丰富… | S023 CVG · pp.456–457，§2 | 案例释义。两路线与三项区别来自§2，不靠标题猜测。 |
| [real-related-b1](../writing/related-work.html#audit-real-related-b1)：真实段落结构释义 / CVG 让读者看见两条路线怎样汇合 开头交代分组依据 相关工作按两类与… | S023 CVG · pp.456–457，§2 | 案例释义。两条路线和具体继承／差异来自 §2；旁批为本站结构分析，未评审全篇模型或实验。 |
| [real-related-p2](../writing/related-work.html#audit-real-related-p2)：这里的教学重点是关系组织。本站只阅读用于该分析的相关工作部分及衔接段，不将这次阅读称为对整篇… | S023 CVG · pp.456–457，§2 | 案例释义。只读§2及衔接，不是全篇模型评审。 |
| [comparison-axis-b1](../writing/related-work.html#audit-comparison-axis-b1)：比较轴怎样改变相关工作的分组 · 编辑方法 本文主要改变 可以优先比较 应避免只比较 信息表… | S023 CVG · pp.456–457，§2；S019 刘洋课件副本 · 文件 pp.129–133／页脚 61–63 | 教学构造。从原文的分组和传承区别推演比较轴；五类不是原作者分类，不替代领域调研。 |
| [comparison-axis-p1](../writing/related-work.html#audit-comparison-axis-p1)：一篇论文可能需要两个轴，但不要为了穷尽分类增加与贡献无关的历史。有的工作在技术上不同，却回答… | S023 CVG · pp.456–457，§2；S019 刘洋课件副本 · 文件 pp.129–133／页脚 61–63 | 据此推演。按贡献选择相关维度，不强求历史分类。 |
| [comparison-axis-p2](../writing/related-work.html#audit-comparison-axis-p2)：最近工作尤其需要解释。读者最容易追问的是“这与已有的最接近方案到底差在哪里”，不是“这一领域… | S019 刘洋课件副本 · 文件 pp.129–133／页脚 61–63 | 据此推演。解释近邻关系，非以年份替代技术比较。 |
| [related-paragraph-p1](../writing/related-work.html#audit-related-paragraph-p1)：整理时先给每篇近邻论文留下四项记录：解决的问题、关键能力、条件或限制、与本文的关系。只有标题… | S019 刘洋课件副本 · 文件 pp.124–133；S023 CVG · pp.456–457，§2 | 教学构造。四项记录为本站练习，找不到支撑保留未知。 |
| [related-paragraph-b1](../writing/related-work.html#audit-related-paragraph-b1)：文献列表 · 教学示例 A 提出了方法甲。B 提出了方法乙。C 提出了方法丙。它们都很好，但… | S019 刘洋课件副本 · 文件 pp.124–133；S009 Jones · 文件 pp.31–32；S023 CVG · pp.456–457，§2 | 教学构造。从清点文献改为关系写作；A/B/C 与检索段落均待填骨架，不能当实际领域结论。 |
| [related-paragraph-p2](../writing/related-work.html#audit-related-paragraph-p2)：第二段仍然是待填充的骨架，不是真实领域综述。实际写作时必须将“这组工作”替换为准确文献，将每… | S019 刘洋课件副本 · 文件 pp.124–133；S023 CVG · pp.456–457，§2 | 教学构造。段落待填，不能当成真实领域综述。 |
| [related-paragraph-p3](../writing/related-work.html#audit-related-paragraph-p3)：段落末尾可以用一句话定位区别，但区别不必总是优势。例如“本文允许更多查询时交互，同时增加索引… | S009 Jones · 文件 pp.31–32；S023 CVG · pp.456–457，§2 | 据此推演。区别也可能是代价，不能默认全是优势。 |
| [fair-comparison-p1](../writing/related-work.html#audit-fair-comparison-p1)：评价前人时先判断其目标。一个为低存储设计的方法，质量略低未必是失败；一个只在特定假设下证明的… | S009 Jones · 文件 pp.31–32；S019 刘洋课件副本 · 文件 pp.126–129 | 据此推演。先分清不同目标，不攻击前人证明自己。 |
| [fair-comparison-p2](../writing/related-work.html#audit-fair-comparison-p2)：尽量把负面评价改成条件明确的比较：某方法在条件 C 下采用步骤 X，因此没有直接处理本文的 … | S009 Jones · 文件 pp.31–32；S010 Lipton、Steinhardt · §3.1–3.2 | 据此推演。没报告不推出做不到；缺证与能力限制有别。 |
| [fair-comparison-p3](../writing/related-work.html#audit-fair-comparison-p3)：还要避免一个引文承担整段所有事实。若段落同时谈多个系统的容量、速度和数据，每个判断都应能定位… | S010 Lipton、Steinhardt · §3.1–3.2 | 据此推演。原文事实与新推断应各自有支持。 |
| [related-location-p1](../writing/related-work.html#audit-related-location-p1)：Jones 建议集中相关工作后置，理由是读者尚不了解问题与本文思想时，压缩的技术比较会形成障… | S009 Jones · 文件 pp.27–30 | 原文转述。Jones后置建议及其理由明确。 |
| [related-location-p2](../writing/related-work.html#audit-related-location-p2)：可以采取三种安排：先简要说明必要近邻，后集中比较；先介绍相关概念，再讲方法；将局部比较放在对… | S009 Jones · 文件 pp.27–30；S023 CVG · pp.456–457，§2 | 教学构造。实际安排不同，三种位置为本站选项。 |
| [related-location-p3](../writing/related-work.html#audit-related-location-p3)：位置改变不应改变引用责任。后置相关工作不等于引言可以不核实新颖性；前置相关工作也不等于必须先… | S009 Jones · 文件 pp.27–30；S023 CVG · pp.456–457，§2 | 据此推演。位置不会免除新颖性与引用责任。 |
| [citation-practice-p1](../writing/related-work.html#audit-citation-practice-p1)：作者在句中充当行动者时，可以用叙述式引用；当文献为一个完整判断提供依据时，可以使用括号式引用… | S019 刘洋课件副本 · 文件 p.159／页脚 75 | 原文转述。两种引用的语法角色有课件例子。 |
| [citation-practice-p2](../writing/related-work.html#audit-citation-practice-p2)：编辑示例：“作者 A 在条件 C 下证明性质 P”突出谁做了什么；“在条件 C 下性质 P … | S019 刘洋课件副本 · 文件 p.159／页脚 75 | 教学构造。P、C句子自编，句子完整不验证引用真实。 |
| [citation-practice-p3](../writing/related-work.html#audit-citation-practice-p3)：提交前优先核对最容易影响判断的引用：首创与最近工作、具体数值、限制性结论、数据或工具来源。访… | S009 Jones · 文件 p.24 | 据此推演。优先查影响主张的来源，不补造未读细节。 |
| [related-practice-b1](../writing/related-work.html#audit-related-practice-b1)：写作练习 选择一个与贡献直接有关的轴 为每篇工作写出一项能力、一项条件和一个原文位置。然后写… | S023 CVG · pp.456–457，§2；S019 刘洋课件副本 · 文件 pp.129–133 | 教学构造。从原文继承和差异设计近邻比较练习；三篇只作练习预算，不声称调研充分。 |

### discussion

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [discussion-task-p1](../writing/discussion.html#audit-discussion-task-p1)：结果部分说明观察到了什么，讨论进一步判断它对理解、选择和使用意味着什么。它可以解释与预期不同… | S027 Mensh、Kording · Rule 8；S028 Manchester Phrasebank · Discussing findings，导言 | 原文转述。讨论职责来自两份新读原文，不归刘洋/Jones。 |
| [discussion-task-p2](../writing/discussion.html#audit-discussion-task-p2)：本页主要是编辑教学综合。Jones 与刘洋的核心写作材料没有提供一套同名的完整讨论章教程，因… | S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 2 | 据此推演。本站四项组织据解释/猜测区分，局限另有规范。 |
| [discussion-task-b1](../writing/discussion.html#audit-discussion-task-b1)：观察 实际测到了什么 解释 哪些原因可能产生它 含义 它改变什么认识或选择 边界 哪些情境尚… | S027 Mensh、Kording · Rule 8；S028 Manchester Phrasebank · Discussing findings，导言；S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 2；S028 Manchester Phrasebank · Reporting results，导言 | 教学构造。按新读原文重写讨论的意义、文献和局限职责；结果讨论可合并，不能冒归刘洋/Jones。 |
| [discussion-task-p3](../writing/discussion.html#audit-discussion-task-p3)：这些职责可以分散在结果分析和独立讨论中。没有独立 Discussion 标题不等于无需讨论；… | S028 Manchester Phrasebank · Reporting results，导言 | 原文转述。Reporting results导言明确提及合并安排。 |
| [observation-explanation-b1](../writing/discussion.html#audit-observation-explanation-b1)：教学设定 一个模型在长输入子集上的改善大于短输入子集。除此之外，尚未控制输入难度、标签比例和… | S010 Lipton、Steinhardt · §3.1–3.2 | 教学构造。原文区分解释与猜测并要求考虑替代假设；分层观察、三种句子与反证提问为虚构教学。 |
| [observation-explanation-b2](../writing/discussion.html#audit-observation-explanation-b2)：观察 长输入子集上的指标差异更大。 描述已观察的分层结果。 下一步：报告分组规则、样本和不确… | S010 Lipton、Steinhardt · §3.1–3.2 | 教学构造。原文区分解释与猜测并要求考虑替代假设；分层观察、三种句子与反证提问为虚构教学。 |
| [observation-explanation-p1](../writing/discussion.html#audit-observation-explanation-p1)：“与解释一致”仍应有理由，而非看到任何结果都说一致。一个有用的解释会产生额外可检验预期，也会… | S010 Lipton、Steinhardt · §3.1–3.2 | 据此推演。考虑可区分的替代解释，而不是事后编故事。 |
| [observation-explanation-p2](../writing/discussion.html#audit-observation-explanation-p2)：写作时可以明确分句：“我们观察到 X。一个可能解释是 Y。因为尚未控制 Z，当前结果不能区分… | S010 Lipton、Steinhardt · §3.1–3.2 | 教学构造。X/Y/Z/W句式是本站教学骨架，不是原文例子。 |
| [unexpected-results-p1](../writing/discussion.html#audit-unexpected-results-p1)：Forest Reranking 在报告局部特征条件下的结果时，指出 50-best 重排序… | S021 Forest Reranking · p.593，表3、脚注7 | 案例释义。局部特征得分与suspect表述来自表3、脚注7。 |
| [unexpected-results-b1](../writing/discussion.html#audit-unexpected-results-b1)：真实案例的编辑分析 异常结果没有被删掉，也没有被过度解释 保留观察 不把所有条件都写成同一方… | S021 Forest Reranking · p.593，表3、脚注7；S010 Lipton、Steinhardt · §3.1 | 案例释义。保留原文 91.28 对 91.25 的异常和 suspect；未升级为已经证明的原因。 |
| [unexpected-results-p2](../writing/discussion.html#audit-unexpected-results-p2)：迁移到自己的论文时，应先检查实现和设置，再讨论研究含义。若无法区分原因，准确写出未决状态比提… | S010 Lipton、Steinhardt · §3.1 | 据此推演。未区分原因时保留未决状态，迁移检查为推演。 |
| [limitations-p1](../writing/discussion.html#audit-limitations-p1)：“数据有限”“算力不足”“未来还可改进”几乎适用于所有研究，信息量很低。具体局限应指出哪个条… | S025 NeurIPS Checklist · 条目 2；S027 Mensh、Kording · Rule 8 | 原文转述。原文要求假设、违反后果和解释范围。 |
| [limitations-b1](../writing/discussion.html#audit-limitations-b1)：笼统版本 · 教学示例 本方法仍有一定局限，未来将进一步优化。 增加具体对象 实验只覆盖固定… | S025 NeurIPS Checklist · 条目 2；S027 Mensh、Kording · Rule 8 | 教学构造。原文要求假设违反、后果及主张范围；条件—后果—受限判断为本站写作组织。 |
| [limitations-p2](../writing/discussion.html#audit-limitations-p2)：最后一版把局限与具体主张连接起来。它没有声称高更新频率下一定失败，只说明尚未验证哪个取舍。如… | S025 NeurIPS Checklist · 条目 2 | 教学构造。更新频率例为虚构，不能宣布已经失败。 |
| [limitations-p3](../writing/discussion.html#audit-limitations-p3)：局限也不只来自没有更多数据。评价指标可能不覆盖实际目标，标注规则可能排除某类输入，理论假设可… | S025 NeurIPS Checklist · 条目 2 | 据此推演。根据实际假设和评价范围选择局限，不抄风险清单。 |
| [generalization-p1](../writing/discussion.html#audit-generalization-p1)：从一个数据集推广到另一个数据集，可能同时改变语言、领域、长度、标注和任务定义。一个“跨领域”… | S025 NeurIPS Checklist · 条目 1–2 | 据此推演。推广的维度由实际研究限定，清单为本站举例。 |
| [generalization-p2](../writing/discussion.html#audit-generalization-p2)：可以把推广分成两类：已测条件下的结论与值得检验的后续假设。例如“在集合 A、B 上观察到同方… | S025 NeurIPS Checklist · 条目 1–2 | 教学构造。A/B与多语言是教学示例，分清实测与假设。 |
| [generalization-p3](../writing/discussion.html#audit-generalization-p3)：实践含义也要有条件。一个方法在资源充足的离线任务中值得用，不等于适合低内存、高更新的部署。讨… | S025 NeurIPS Checklist · 条目 1–2；S027 Mensh、Kording · Rule 8 | 据此推演。使用建议取决于研究覆盖的条件和目标。 |
| [discussion-paragraph-b1](../writing/discussion.html#audit-discussion-paragraph-b1)：教学段落 / 假设性观察 在固定文档集合中，预编码方案减少了查询阶段的重复计算，但增加了索引… | S027 Mensh、Kording · Rule 8；S025 NeurIPS Checklist · 条目 2；S020 ColBERT v2 · §3.4、§4.5 | 教学构造。按讨论职责编写静态集合例；动态更新成本尚未测量，不能归给 ColBERT 的真实实验。 |
| [discussion-paragraph-p1](../writing/discussion.html#audit-discussion-paragraph-p1)：这段新增了决策关系：哪些条件影响方法价值，现有研究还缺哪个维度，以及下一项验证为何能补这个缺… | S027 Mensh、Kording · Rule 8；S025 NeurIPS Checklist · 条目 2；S020 ColBERT v2 · §3.4、§4.5 | 教学构造。静态集合例自编，动态更新未测，不归原论文。 |
| [discussion-paragraph-p2](../writing/discussion.html#audit-discussion-paragraph-p2)：删除任何一句后都可以检查损失：删观察，含义没有依据；删关系，段落只剩事实复述；删边界，推广容… | S027 Mensh、Kording · Rule 8 | 教学构造。逐句删减为本站分析方法，不是固定四句规则。 |
| [discussion-practice-b1](../writing/discussion.html#audit-discussion-practice-b1)：写作练习 检查“因此”“证明”“表明”后面的内容 选择讨论中最强的一句，写出即使该解释不成立… | S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 2 | 教学构造。将替代解释与局限后果转成写作练习；未提供一套通用因果识别方案。 |

### conclusion

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [conclusion-purpose-p1](../writing/conclusion.html#audit-conclusion-purpose-p1)：结论需要让读者记住：本文改变了什么，哪些证据支持了这一改变，它在什么条件下有意义。它可以简短… | S028 Manchester Phrasebank · Writing conclusions，导言 | 原文转述。导言的回顾与最终判断；新增认识为本站落笔重点。 |
| [conclusion-purpose-p2](../writing/conclusion.html#audit-conclusion-purpose-p2)：本页具体写法主要是编辑综合。Jones 在整篇结构中安排结论与未来工作，但没有提供这里的整套… | S028 Manchester Phrasebank · Writing conclusions，导言；S009 Jones · 文件 p.16 | 原文转述。可不另设结论，四项收束检查由本站组织。 |
| [conclusion-purpose-b1](../writing/conclusion.html#audit-conclusion-purpose-b1)：新增 最值得保留的改变是什么 依据 哪些结果或推导支持它 含义 现在可以多做哪项判断 未决 … | S028 Manchester Phrasebank · Writing conclusions，导言；S027 Mensh、Kording · Rule 5、8；S009 Jones · 文件 p.12；S009 Jones · 文件 p.16 | 教学构造。根据新读原文重写回顾／最终判断；独立结论可选，新增认识呼应 Jones 核心见解。 |
| [conclusion-purpose-p3](../writing/conclusion.html#audit-conclusion-purpose-p3)：结论与摘要的区别主要在读者状态。摘要面对尚未读正文的人，需要提供独立的相关性判断；结论面对已… | S028 Manchester Phrasebank · Writing conclusions，导言；S027 Mensh、Kording · Rule 5、8 | 据此推演。摘要独立完整，结论回顾判断；据功能作区分。 |
| [real-conclusion-p1](../writing/conclusion.html#audit-real-conclusion-p1)：Forest Reranking 的结论回到 packed forests 表示更多候选的核… | S021 Forest Reranking · p.593，§6；表4 | 案例释义。§6实际收束已完成工作，并把其他任务留为可能应用。 |
| [real-conclusion-b1](../writing/conclusion.html#audit-real-conclusion-b1)：真实结构释义 已经完成的工作与可能延伸各有位置 先回到核心改变 不是重新列出全部章节，而是提… | S021 Forest Reranking · p.593，§6；表4 | 案例释义。保留已完成工作、历史比较条件与可能应用；结构解读不变成现代性能结论。 |
| [real-conclusion-p2](../writing/conclusion.html#audit-real-conclusion-p2)：这段结论的历史表现判断仍受论文时间和比较设置限制。学习时应保留它如何分配信息，而不是照用“优… | S021 Forest Reranking · p.593，§6；表4 | 据此推演。历史比较受表4设置限制，不能复用普遍最高级。 |
| [knowledge-not-activities-b1](../writing/conclusion.html#audit-knowledge-not-activities-b1)：活动复述 · 教学示例 本文设计了三个模块，并进行了多个实验。未来会继续改进性能。 认识收束… | S028 Manchester Phrasebank · Writing conclusions，导言；S009 Jones · 文件 pp.12–13；S025 NeurIPS Checklist · 条目 3–4 | 教学构造。从核心贡献到收束判断；预编码测量为条件性教学例，理论／资源调整为推演。 |
| [knowledge-not-activities-p1](../writing/conclusion.html#audit-knowledge-not-activities-p1)：改写版假定正文已经有相应测量，是一个条件化教学示例。它增加的不是更大的口号，而是读者可以使用… | S028 Manchester Phrasebank · Writing conclusions，导言；S009 Jones · 文件 pp.12–13 | 教学构造。假定测量已存在的自编例，缺测量就删相应结论。 |
| [knowledge-not-activities-p2](../writing/conclusion.html#audit-knowledge-not-activities-p2)：理论论文同样如此。可以回到定理解决了什么问题，以及假设怎样限定结论；资源论文可以说明资源使哪… | S025 NeurIPS Checklist · 条目 3–4 | 据此推演。理论和资源的证据责任不同，按贡献类型收束。 |
| [conclusion-strength-p1](../writing/conclusion.html#audit-conclusion-strength-p1)：结论中容易出现比正文更强的动词：某设置下有效变成“解决了问题”，几项基准变成“广泛适用”，相… | S025 NeurIPS Checklist · 条目 1–3；S010 Lipton、Steinhardt · §3.1 | 据此推演。范围与解释强度应匹配，不因到末段而增强。 |
| [conclusion-strength-b1](../writing/conclusion.html#audit-conclusion-strength-b1)：结论强度与证据对齐 · 教学示例 正文已有 可以收束 不能直接跳到 固定设置的质量与延迟比较… | S025 NeurIPS Checklist · 条目 1–3；S010 Lipton、Steinhardt · §3.1 | 教学构造。主张应与证据的范围、假设相称；三类越界是虚构例，不是语料统计。 |
| [conclusion-strength-p2](../writing/conclusion.html#audit-conclusion-strength-p2)：意义可以上升一层，但要说清这是理解或建议。例如“这些结果提醒评估应同时考虑离线代价”是一条基… | S025 NeurIPS Checklist · 条目 1–3；S010 Lipton、Steinhardt · §3.1 | 教学构造。建议和经验主张是自编对照，证据责任不同。 |
| [conclusion-strength-p3](../writing/conclusion.html#audit-conclusion-strength-p3)：结论也不适合首次引入关键限制。会实质影响读者理解主结果的条件，应在方法、设置或结果附近出现；… | S025 NeurIPS Checklist · 条目 1–3 | 据此推演。重要假设应在支持结果的位置可理解，不能末尾补救。 |
| [future-work-p1](../writing/conclusion.html#audit-future-work-p1)：“扩展更多任务、尝试更大模型、优化性能”缺少理由。更有信息的未来工作指出尚未回答的具体问题，… | S027 Mensh、Kording · Rule 8；S028 Manchester Phrasebank · Writing conclusions，导言；S021 Forest Reranking · p.593，§6 | 据此推演。由局限与可能延伸提出方向，不把计划当成果。 |
| [future-work-p2](../writing/conclusion.html#audit-future-work-p2)：未来方向不必穷尽所有可能。选择一两项与贡献边界直接相关的延伸，通常比列出整个研究愿望清单更清… | S027 Mensh、Kording · Rule 8；S028 Manchester Phrasebank · Writing conclusions，导言 | 教学构造。一两项是本站篇幅建议，非原作者数量规范。 |
| [future-work-p3](../writing/conclusion.html#audit-future-work-p3)：若不存在值得单列的未来工作，可以简短结束。结论的篇幅应由论证需要决定，不必为满足一个固定模板… | S028 Manchester Phrasebank · Writing conclusions，导言 | 据此推演。独立结论可选，不要求为固定模板填满未来工作。 |
| [conclusion-practice-b1](../writing/conclusion.html#audit-conclusion-practice-b1)：写作练习 为结论中的每个事实找到正文位置 标出新增事实、新增解释和未来假设。事实必须有支持位… | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1–2；S027 Mensh、Kording · Rule 8 | 教学构造。把主张证据与解释边界用于引言—结论核对；事实/解释/假设三标记为练习设计。 |

### revision

| 单元／现有主张定位 | 原文依据 | 判定及适用范围 |
| --- | --- | --- |
| [revision-order-p1](../writing/revision.html#audit-revision-order-p1)：如果引言承诺检验机制，实验却只比较平均分，改进语法不会修复证据缺口。如果方法步骤缺失，换一个… | S027 Mensh、Kording · Rule 9–10；S009 Jones · 文件 pp.4–7、41–44 | 教学构造。证据与表达缺口的诊断例由本站编写。 |
| [revision-order-p2](../writing/revision.html#audit-revision-order-p2)：Jones 将写作视为形成思想的机制，并强调认真听取读者在哪里失去理解；刘洋建议由粗到细、多… | S009 Jones · 文件 pp.4–7、41–44；S019 刘洋课件副本 · 文件 p.185／页脚 85 | 原文转述。早写、反馈与多轮修改，非固定日程。 |
| [revision-order-b1](../writing/revision.html#audit-revision-order-b1)：论证 主张、证据、范围是否一致 结构 读者是否在需要时得到信息 段落 中心与支撑是否相称 句… | S027 Mensh、Kording · Rule 9–10；S009 Jones · 文件 pp.4–7、41–44；S019 刘洋课件副本 · 文件 p.185／页脚 85 | 教学构造。原文强调提纲、反馈和多轮修改；本站按论证、结构、语言组织，不承诺固定次序普遍最优。 |
| [revision-order-p3](../writing/revision.html#audit-revision-order-p3)：不必先把某一层修到完美才进入下一层。局部文字问题可能暴露概念不清；结构修改也可能要求重新安排… | S027 Mensh、Kording · Rule 9–10 | 据此推演。多层级可迭代，不声称唯一最佳顺序。 |
| [reverse-outline-p1](../writing/revision.html#audit-reverse-outline-p1)：完成一版草稿后，不看自己原定的提纲，为每段写一句实际中心，再把这些句子连起来。这叫逆向提纲，… | S026 Purdue OWL · 两步逆向提纲 | 原文转述。Purdue两步：段落主题与如何推进论证。 |
| [reverse-outline-b1](../writing/revision.html#audit-reverse-outline-b1)：一份假设引言的逆向提纲 实际段落中心 发现的问题 修改动作 领域很重要。 尚未限定本文的问题… | S026 Purdue OWL · 两步逆向提纲；S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 教学构造。依 Purdue 两步重写主题与论证功能；跨节对读是据证据匹配要求扩展的练习。 |
| [reverse-outline-p2](../writing/revision.html#audit-reverse-outline-p2)：如果几段实际都在表达同一件事，可以合并或让其中一段承担新的职责。如果相邻中心之间需要读者自己… | S026 Purdue OWL · 两步逆向提纲 | 据此推演。据两步结果查重复、顺序与跳步。 |
| [reverse-outline-p3](../writing/revision.html#audit-reverse-outline-p3)：再做跨节对读：摘要中的每项结果是否在正文，贡献是否被方法与证据接住，结论是否收束同一个对象。… | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 教学构造。跨节对读是证据匹配要求的延伸练习。 |
| [reader-feedback-p1](../writing/revision.html#audit-reader-feedback-p1)：专家可以发现文献、假设和技术比较的问题；相邻领域读者可以暴露背景缺失、术语障碍和跳步。Jon… | S009 Jones · 文件 pp.41–44 | 原文转述。邀请专家和非专家指出哪里失去理解。 |
| [reader-feedback-p2](../writing/revision.html#audit-reader-feedback-p2)：可以给读者一项明确任务：“只读引言，复述问题和贡献”“看方法图，解释输入怎样成为输出”“看表… | S009 Jones · 文件 pp.41–44 | 教学构造。复述、走通、解释等任务由本站设置。 |
| [reader-feedback-b1](../writing/revision.html#audit-reader-feedback-b1)：从反馈定位缺失信息 · 教学示例 读者反馈 可能原因 先检查 不知道为什么需要模块 B。 设… | S009 Jones · 文件 pp.41–44；S027 Mensh、Kording · Rule 10 | 教学构造。邀请读者指出迷失位置；具体任务和反馈诊断表是本站设计，诊断保留“可能”。 |
| [reader-feedback-p3](../writing/revision.html#audit-reader-feedback-p3)：反馈是定位线索，不是必须照做的命令。若建议引入新的错误，应保留原研究事实，并寻找更清楚的解释… | S009 Jones · 文件 pp.41–44；S027 Mensh、Kording · Rule 10 | 据此推演。反馈用于定位，重要信息应写回正文。 |
| [sentence-actions-p1](../writing/revision.html#audit-sentence-actions-p1)：Jones 的语言页强烈倡导主动语态与直接表达；刘洋课件也给出被动句、弱动词和结构松散的改写… | S009 Jones · 文件 pp.50–51；S019 刘洋课件副本 · 文件 pp.141–146／页脚 70–71 | 原文转述。原文强烈偏好主动，本站保留适用条件。 |
| [sentence-actions-b1](../writing/revision.html#audit-sentence-actions-b1)：教学草稿 An improvement in retrieval quality was o… | S009 Jones · 文件 pp.50–51；S019 刘洋课件副本 · 文件 pp.141–146／页脚 70–71；S025 NeurIPS Checklist · 条目 1 | 教学构造。Jones 强烈偏好主动语态；本站不照搬绝对禁令，按动作／对象清楚限定条件。 |
| [sentence-actions-p2](../writing/revision.html#audit-sentence-actions-p2)：这句改写只适用于已经取得相应观察的场合。若只是设计目标，应写成计划或目的，不能因为主动语态读… | S025 NeurIPS Checklist · 条目 1 | 教学构造。英语是假设改写，不能增强未测效果。 |
| [sentence-actions-p3](../writing/revision.html#audit-sentence-actions-p3)：另外，指标本身通常不会“性能提高”。可以说模型的翻译质量按 BLEU 衡量有所变化，而不是让… | S019 刘洋课件副本 · 文件 pp.141–146／页脚 70–71 | 原文转述。课件例子说明主体与指标不可语义错位。 |
| [long-sentences-p1](../writing/revision.html#audit-long-sentences-p1)：长句的问题不只在字数。多个背景条件、执行者和结果挤在一起，会使读者无法判断谁做什么，以及因果… | S019 刘洋课件副本 · 文件 p.140／页脚 69；S009 Jones · 文件 p.51 | 原文转述。原课件机构参与语料建设例展示拆句。 |
| [long-sentences-b1](../writing/revision.html#audit-long-sentences-b1)：教学草稿 To reduce the cost of repeated document e… | S019 刘洋课件副本 · 文件 p.140／页脚 69；S009 Jones · 文件 p.51；S027 Mensh、Kording · Rule 4 | 教学构造。拆句与简单直接表达有依据；三句预编码例为教学改写，不能写成已测成本结论。 |
| [long-sentences-b2](../writing/revision.html#audit-long-sentences-b2)：教学改写 Repeated document encoding is costly when… | S019 刘洋课件副本 · 文件 p.140／页脚 69；S009 Jones · 文件 p.51；S027 Mensh、Kording · Rule 4 | 教学构造。拆句与简单直接表达有依据；三句预编码例为教学改写，不能写成已测成本结论。 |
| [long-sentences-p2](../writing/revision.html#audit-long-sentences-p2)：三句分别交代条件下的问题、相应计算安排和查询时操作。不是简单在逗号处切开：第二句保留“因此”… | S019 刘洋课件副本 · 文件 p.140／页脚 69；S009 Jones · 文件 p.51 | 教学构造。三句检索改写为教学，成本需另有依据。 |
| [long-sentences-p3](../writing/revision.html#audit-long-sentences-p3)：拆分后也要检查重复。若每句都重新介绍“我们的方法”，可能需要用明确指代；如果代词 “it” … | S027 Mensh、Kording · Rule 4 | 据此推演。相同概念保持名称，必要重复避免歧义。 |
| [language-precision-p1](../writing/revision.html#audit-language-precision-p1)：“show”“suggest”“prove”“explain”不应只按风格替换。它们涉及不同… | S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 1、7；S029 ASA 官方说明 · p.2，原则 3–6 | 据此推演。解释、证明与统计用词按证据，而非替换词表。 |
| [language-precision-b1](../writing/revision.html#audit-language-precision-b1)：语言修改要同时检查研究含义 · 编辑示例 草稿用词 需要问 可能的修改 significan… | S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 1、7；S029 ASA 官方说明 · p.2，原则 3–6；S027 Mensh、Kording · Rule 4 | 教学构造。语言应保持解释和证据强度、术语一致；强动词检查不是万能替换词表。 |
| [language-precision-p2](../writing/revision.html#audit-language-precision-p2)：还要检查时态是否帮助区分一般定义、本文已经完成的动作和未来计划。具体惯例由场合决定，但不能将… | S025 NeurIPS Checklist · 条目 1、7；S027 Mensh、Kording · Rule 4 | 据此推演。计划与完成分开，同概念不随意换术语。 |
| [grammar-citations-p1](../writing/revision.html#audit-grammar-citations-p1)：刘洋课件用 a／an 说明发音比首字母更重要，用 the 说明特指与泛指的区别。这些例子提醒… | S019 刘洋课件副本 · 文件 pp.147–157／页脚 72–73 | 原文转述。冠词及使用条件在课件选页可核对。 |
| [grammar-citations-p2](../writing/revision.html#audit-grammar-citations-p2)：例如，按常见字母读法可写 an SVM ，而 a European dataset 的 Eu… | S019 刘洋课件副本 · 文件 pp.147–157／页脚 72–73 | 教学构造。SVM与European是同一发音规则的教学例。 |
| [grammar-citations-p3](../writing/revision.html#audit-grammar-citations-p3)：引用句也需要语法完整。作者作为主语时，写清谁提出、分析或证明了什么；括号引文则为已经完整的句… | S019 刘洋课件副本 · 文件 p.159／页脚 75 | 原文转述。引用语法有依据，真实性仍需查原文。 |
| [grammar-citations-p4](../writing/revision.html#audit-grammar-citations-p4)：公式后的文字若继续同一句，应按语义和目标排版规范处理标点、缩进与大小写；若开始新段，明确开启… | S019 刘洋课件副本 · 文件 p.158／页脚 74 | 原文转述。公式后的标点与句法据课件示例解释。 |
| [phrase-learning-p1](../writing/revision.html#audit-phrase-learning-p1)：课件建议从优秀论文中记录句式和词汇用法，并通过检索核对搭配。迁移时应同时记录句式的功能：提出… | S019 刘洋课件副本 · 文件 pp.161–175／页脚 77–79 | 原文转述。积累句式与检索搭配有原文，功能分类为延伸。 |
| [phrase-learning-b1](../writing/revision.html#audit-phrase-learning-b1)：把句式变成有条件的写作工具 · 以下为自编模板 功能 句式骨架 填写前提 明确比较 Unli… | S019 刘洋课件副本 · 文件 pp.161–175／页脚 77–79；S010 Lipton、Steinhardt · §3.1 | 教学构造。原文建议积累句式和检索搭配；功能表与生成改写复核为延伸练习，不以命中数作证。 |
| [phrase-learning-p2](../writing/revision.html#audit-phrase-learning-p2)：检索命中数不能证明搭配正确。需要打开可靠上下文，看词义、学科、语法角色是否一致。课件中的历史… | S019 刘洋课件副本 · 文件 pp.161–175／页脚 77–79；S010 Lipton、Steinhardt · §3.1 | 据此推演。历史命中数不作今日证据；改写需复核事实。 |
| [revision-practice-b1](../writing/revision.html#audit-revision-practice-b1)：写作练习 选一份已经有正文的草稿，完成三轮不同任务 论证轮： 只读标题、摘要、引言贡献和结论… | S027 Mensh、Kording · Rule 9–10；S026 Purdue OWL · 两步逆向提纲；S009 Jones · 文件 pp.41–44 | 教学构造。将提纲、读者反馈与修订组织为三轮练习；轮数和成功判断为本站设置，效果未实测。 |
| [revision-practice-p1](../writing/revision.html#audit-revision-practice-p1)：修改结束后保留一份简短记录：改了哪项主张、补了哪条依据、解决哪个阅读断点、还有什么未决。它既… | S027 Mensh、Kording · Rule 9–10；S009 Jones · 文件 pp.41–44 | 教学构造。修订记录是本站协作建议，未测读者效果。 |

## 核心入口的依据

概述、三项要领、产出／掌握判断与跨页关系各自说明。三项数量和测评动作是本站设计，不是原作者框架。

| 核心单元 | 具体依据 | 支持与推演边界 |
| --- | --- | --- |
| [abstract-core-overview](../writing/abstract.html#audit-abstract-core-overview) | S019 刘洋课件副本 · 文件 pp.41–42／页脚 26–27；S002 刘洋官方整理 · 摘要；S027 Mensh、Kording · Rule 5 | 据此推演。刘洋的四项职责与简明用语可直接定位；本站标签及相互制约关系是归纳，不强制四句。 |
| [abstract-core-point1](../writing/abstract.html#audit-abstract-core-point1) | S019 刘洋课件副本 · 文件 pp.41–42；S009 Jones · 文件 pp.19–20；S020 ColBERT v2 · §1、§3.1、§3.5 | 据此推演。从具体问题到动作的教学改稿；逐对模型重复联合编码，不能误称为所有模型都重复同一种可缓存表示。 |
| [abstract-core-point2](../writing/abstract.html#audit-abstract-core-point2) | S019 刘洋课件副本 · 文件 p.42／页脚 27；S027 Mensh、Kording · Rule 5；S025 NeurIPS Checklist · 条目 1 | 据此推演。摘要说明关键工作和实现，而非只命名；动作句与数据假设检查是本站示例。 |
| [abstract-core-point3](../writing/abstract.html#audit-abstract-core-point3) | S025 NeurIPS Checklist · 条目 1、7–8；S029 ASA 官方说明 · p.2，原则 3–6；S020 ColBERT v2 · §4.1–4.5 | 据此推演。结果范围及不确定性需准确；A 集合数字全部虚构，不据差值断言等价或统计显著。 |
| [abstract-core-transfer](../writing/abstract.html#audit-abstract-core-transfer) | S019 刘洋课件副本 · 文件 pp.41–42；S009 Jones · 文件 p.24、p.41；S025 NeurIPS Checklist · 条目 1 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [abstract-core-bridge](../writing/abstract.html#audit-abstract-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [argument-core-overview](../writing/argument.html#audit-argument-core-overview) | S009 Jones · 文件 pp.4–13；S027 Mensh、Kording · Rule 1 | 据此推演。原文倡导聚焦可复用的核心思想；一句话填空与检索措辞为本站练习。 |
| [argument-core-point1](../writing/argument.html#audit-argument-core-point1) | S009 Jones · 文件 pp.4–13；S027 Mensh、Kording · Rule 1 | 据此推演。原文倡导聚焦可复用的核心思想；一句话填空与检索措辞为本站练习。 |
| [argument-core-point2](../writing/argument.html#audit-argument-core-point2) | S019 刘洋课件副本 · 文件 p.94／页脚 46；S009 Jones · 文件 p.24；S021 Forest Reranking · §1–2、§5 | 据此推演。刘洋给出问题至实验的对应；Jones 要求每项主张有证据；森林案例的对应图是结构分析。 |
| [argument-core-point3](../writing/argument.html#audit-argument-core-point3) | S009 Jones · 文件 pp.36–39；S027 Mensh、Kording · Rule 2；S025 NeurIPS Checklist · 条目 3、6；S002 刘洋官方整理 · 降低理解难度 | 据此推演。按理解顺序传达思想；重要假设和实验设置须在可理解结果的位置交代。具体层级由本站展开。 |
| [argument-core-transfer](../writing/argument.html#audit-argument-core-transfer) | S009 Jones · 文件 pp.21–24；S027 Mensh、Kording · Rule 9–10 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [argument-core-bridge](../writing/argument.html#audit-argument-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [conclusion-core-overview](../writing/conclusion.html#audit-conclusion-core-overview) | S028 Manchester Phrasebank · Writing conclusions，导言；S027 Mensh、Kording · Rule 5、8；S009 Jones · 文件 p.12；S009 Jones · 文件 p.16 | 据此推演。根据新读原文重写回顾／最终判断；独立结论可选，新增认识呼应 Jones 核心见解。 |
| [conclusion-core-point1](../writing/conclusion.html#audit-conclusion-core-point1) | S028 Manchester Phrasebank · Writing conclusions，导言；S009 Jones · 文件 pp.12–13；S025 NeurIPS Checklist · 条目 3–4 | 据此推演。从核心贡献到收束判断；预编码测量为条件性教学例，理论／资源调整为推演。 |
| [conclusion-core-point2](../writing/conclusion.html#audit-conclusion-core-point2) | S025 NeurIPS Checklist · 条目 1–3；S010 Lipton、Steinhardt · §3.1 | 据此推演。主张应与证据的范围、假设相称；三类越界是虚构例，不是语料统计。 |
| [conclusion-core-point3](../writing/conclusion.html#audit-conclusion-core-point3) | S027 Mensh、Kording · Rule 8；S028 Manchester Phrasebank · Writing conclusions，导言；S021 Forest Reranking · p.593，§6 | 据此推演。原文将局限与延伸联系；一两项是本站写作取舍，不是数量规则。 |
| [conclusion-core-transfer](../writing/conclusion.html#audit-conclusion-core-transfer) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1–2；S027 Mensh、Kording · Rule 8 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [conclusion-core-bridge](../writing/conclusion.html#audit-conclusion-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [discussion-core-overview](../writing/discussion.html#audit-discussion-core-overview) | S027 Mensh、Kording · Rule 8；S028 Manchester Phrasebank · Discussing findings，导言；S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 2；S028 Manchester Phrasebank · Reporting results，导言 | 据此推演。按新读原文重写讨论的意义、文献和局限职责；结果讨论可合并，不能冒归刘洋/Jones。 |
| [discussion-core-point1](../writing/discussion.html#audit-discussion-core-point1) | S010 Lipton、Steinhardt · §3.1–3.2 | 据此推演。原文区分解释与猜测并要求考虑替代假设；分层观察、三种句子与反证提问为虚构教学。 |
| [discussion-core-point2](../writing/discussion.html#audit-discussion-core-point2) | S025 NeurIPS Checklist · 条目 2；S027 Mensh、Kording · Rule 8 | 据此推演。原文要求假设违反、后果及主张范围；条件—后果—受限判断为本站写作组织。 |
| [discussion-core-point3](../writing/discussion.html#audit-discussion-core-point3) | S025 NeurIPS Checklist · 条目 1–2；S027 Mensh、Kording · Rule 8 | 据此推演。已测范围不能自动外推；语言／领域／长度及使用决策为推演的检查维度。 |
| [discussion-core-transfer](../writing/discussion.html#audit-discussion-core-transfer) | S010 Lipton、Steinhardt · §3.1–3.2；S025 NeurIPS Checklist · 条目 2 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [discussion-core-bridge](../writing/discussion.html#audit-discussion-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [experiments-core-overview](../writing/experiments.html#audit-experiments-core-overview) | S009 Jones · 文件 p.24；S027 Mensh、Kording · Rule 7；S010 Lipton、Steinhardt · §3.2；S019 刘洋课件副本 · 文件 pp.106–112／页脚 54–55 | 据此推演。每项主张需要对应数据与逻辑；表中质量、成本、组件、迁移是自编检查例。 |
| [experiments-core-point1](../writing/experiments.html#audit-experiments-core-point1) | S009 Jones · 文件 p.24；S027 Mensh、Kording · Rule 7；S010 Lipton、Steinhardt · §3.2；S019 刘洋课件副本 · 文件 pp.106–112／页脚 54–55 | 据此推演。每项主张需要对应数据与逻辑；表中质量、成本、组件、迁移是自编检查例。 |
| [experiments-core-point2](../writing/experiments.html#audit-experiments-core-point2) | S019 刘洋课件副本 · 文件 p.106／页脚 54；S010 Lipton、Steinhardt · §3.2 | 据此推演。原文要求强基线并警惕调参混淆，明确消融非必要亦非充分；对照类型是本站组织。 |
| [experiments-core-point3](../writing/experiments.html#audit-experiments-core-point3) | S021 Forest Reranking · pp.592–593，§5、表3、脚注7；S027 Mensh、Kording · Rule 7；S028 Manchester Phrasebank · Reporting results，导言；S025 NeurIPS Checklist · 条目 1–2 | 据此推演。原表、异常脚注可核实；四项信息职责据原文重新组织，非任何一位作者的四步法。 |
| [experiments-core-transfer](../writing/experiments.html#audit-experiments-core-transfer) | S009 Jones · 文件 p.24；S027 Mensh、Kording · Rule 7；S026 Purdue OWL · 两步逆向提纲；S025 NeurIPS Checklist · 条目 6–7 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [experiments-core-bridge](../writing/experiments.html#audit-experiments-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [figures-core-overview](../writing/figures.html#audit-figures-core-overview) | S030 Rougier 等 · Rule 1–4；S009 Jones · 文件 pp.48–49；S019 刘洋课件副本 · 文件 pp.70、74、77、81、91 | 据此推演。先确定信息与受众、图注补解码；星标是课件示意，不是普遍可读性实验结果。 |
| [figures-core-point1](../writing/figures.html#audit-figures-core-point1) | S030 Rougier 等 · Rule 1–3、7 | 据此推演。载体应服务信息和读者任务；表中优缺点是编辑比较，不宣称所有场合散点优于表格。 |
| [figures-core-point2](../writing/figures.html#audit-figures-core-point2) | S030 Rougier 等 · Rule 2、6–8；S002 刘洋官方整理 · 实验图表 | 据此推演。信息优先与颜色／分组支持明确关系；箭头语义和流程层次为本站设计建议。 |
| [figures-core-point3](../writing/figures.html#audit-figures-core-point3) | S019 刘洋课件副本 · 文件 pp.119–120／页脚 59；S030 Rougier 等 · Rule 4；S025 NeurIPS Checklist · 条目 7 | 据此推演。图注解释图、补充条件；两个点各代表一个方法，原稿误写候选数已修正；数值是虚构。 |
| [figures-core-transfer](../writing/figures.html#audit-figures-core-transfer) | S030 Rougier 等 · Rule 4、7；S009 Jones · 文件 p.41 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [figures-core-bridge](../writing/figures.html#audit-figures-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [introduction-core-overview](../writing/introduction.html#audit-introduction-core-overview) | S019 刘洋课件副本 · 文件 pp.44–46／页脚 29–30；S009 Jones · 文件 pp.18–24；S027 Mensh、Kording · Rule 6 | 据此推演。引言建立问题缺口和贡献；不能从领域重要直接推出本文重要，也不把讲座示意页数当规范。 |
| [introduction-core-point1](../writing/introduction.html#audit-introduction-core-point1) | S009 Jones · 文件 pp.19–20、36–38；S020 ColBERT v2 · §1、§3.5 | 据此推演。Jones 示范用有意义例子介绍问题；十万文档与改写均为假设，不是性能测量。 |
| [introduction-core-point2](../writing/introduction.html#audit-introduction-core-point2) | S019 刘洋课件副本 · 文件 p.57／页脚 34、p.63／页脚 37；S027 Mensh、Kording · Rule 3–4 | 据此推演。刘洋的中心／支撑／衔接与 Mensh 的段落逻辑供对照；本站骨架的支撑仍待填。 |
| [introduction-core-point3](../writing/introduction.html#audit-introduction-core-point3) | S009 Jones · 文件 pp.21–25；S019 刘洋课件副本 · 文件 pp.92–94／页脚 44–46；S010 Lipton、Steinhardt · §3.2 | 据此推演。贡献可检查并指向证据；三条检索主张为教学构造，组件归因不能超过对照。 |
| [introduction-core-transfer](../writing/introduction.html#audit-introduction-core-transfer) | S009 Jones · 文件 pp.21–24、41 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [introduction-core-bridge](../writing/introduction.html#audit-introduction-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [method-core-overview](../writing/method.html#audit-method-core-overview) | S019 刘洋课件副本 · 文件 pp.96–102／页脚 48–51；S009 Jones · 文件 pp.35–39；S025 NeurIPS Checklist · 条目 3–6；S020 ColBERT v2 · §3.1、§3.3–3.6 | 据此推演。刘洋与 Jones 支持直觉和一般定义的顺序；复核要求另据 NeurIPS，不能混归两位讲者。 |
| [method-core-point1](../writing/method.html#audit-method-core-point1) | S019 刘洋课件副本 · 文件 p.96／页脚 48；S020 ColBERT v2 · §1、§3.1、§3.4–3.6 | 据此推演。基线先行来自刘洋；两个计算框为实际架构的简化教学对照，未覆盖完整检索。 |
| [method-core-point2](../writing/method.html#audit-method-core-point2) | S019 刘洋课件副本 · 文件 pp.97–102／页脚 49–51；S009 Jones · 文件 pp.36–38；S021 Forest Reranking · p.587，§2；S020 ColBERT v2 · §3.1–3.3 | 据此推演。复用同一例子并进入一般情形；词语、切分与简化由本站编写，未冒充真实输出。 |
| [method-core-point3](../writing/method.html#audit-method-core-point3) | S019 刘洋课件副本 · 文件 p.160／页脚 76；S025 NeurIPS Checklist · 条目 3–8；S020 ColBERT v2 · §3.3–3.6 | 据此推演。符号定义来自刘洋；训练、使用与复核细节另据实际方法和报告规范。 |
| [method-core-transfer](../writing/method.html#audit-method-core-transfer) | S019 刘洋课件副本 · 文件 pp.98–102；S009 Jones · 文件 pp.36–38；S025 NeurIPS Checklist · 条目 2–4 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [method-core-bridge](../writing/method.html#audit-method-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [related-work-core-overview](../writing/related-work.html#audit-related-work-core-overview) | S019 刘洋课件副本 · 文件 pp.124–133／页脚 61–63；S009 Jones · 文件 pp.31–32；S023 CVG · pp.456–457，§2 | 据此推演。原文反对堆砌、攻击与遗漏，承认继承；比较轴由本站从真实案例抽象。 |
| [related-work-core-point1](../writing/related-work.html#audit-related-work-core-point1) | S023 CVG · pp.456–457，§2；S019 刘洋课件副本 · 文件 pp.129–133／页脚 61–63 | 据此推演。从原文的分组和传承区别推演比较轴；五类不是原作者分类，不替代领域调研。 |
| [related-work-core-point2](../writing/related-work.html#audit-related-work-core-point2) | S019 刘洋课件副本 · 文件 pp.124–133；S009 Jones · 文件 pp.31–32；S023 CVG · pp.456–457，§2 | 据此推演。从清点文献改为关系写作；A/B/C 与检索段落均待填骨架，不能当实际领域结论。 |
| [related-work-core-point3](../writing/related-work.html#audit-related-work-core-point3) | S009 Jones · 文件 pp.31–32；S019 刘洋课件副本 · 文件 pp.126–129；S010 Lipton、Steinhardt · §3.1–3.2 | 据此推演。承认前人优点、自己弱点并区分事实推断；原文未报告不等于能力不存在是引用审查推演。 |
| [related-work-core-transfer](../writing/related-work.html#audit-related-work-core-transfer) | S023 CVG · pp.456–457，§2；S019 刘洋课件副本 · 文件 pp.129–133 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [related-work-core-bridge](../writing/related-work.html#audit-related-work-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [revision-core-overview](../writing/revision.html#audit-revision-core-overview) | S027 Mensh、Kording · Rule 9–10；S009 Jones · 文件 pp.4–7、41–44；S019 刘洋课件副本 · 文件 p.185／页脚 85 | 据此推演。原文强调提纲、反馈和多轮修改；本站按论证、结构、语言组织，不承诺固定次序普遍最优。 |
| [revision-core-point1](../writing/revision.html#audit-revision-core-point1) | S027 Mensh、Kording · Rule 9–10；S009 Jones · 文件 pp.4–7、41–44；S019 刘洋课件副本 · 文件 p.185／页脚 85 | 据此推演。原文强调提纲、反馈和多轮修改；本站按论证、结构、语言组织，不承诺固定次序普遍最优。 |
| [revision-core-point2](../writing/revision.html#audit-revision-core-point2) | S026 Purdue OWL · 两步逆向提纲；S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。依 Purdue 两步重写主题与论证功能；跨节对读是据证据匹配要求扩展的练习。 |
| [revision-core-point3](../writing/revision.html#audit-revision-core-point3) | S009 Jones · 文件 pp.50–51；S019 刘洋课件副本 · 文件 pp.141–146／页脚 70–71；S025 NeurIPS Checklist · 条目 1 | 据此推演。Jones 强烈偏好主动语态；本站不照搬绝对禁令，按动作／对象清楚限定条件。 |
| [revision-core-transfer](../writing/revision.html#audit-revision-core-transfer) | S027 Mensh、Kording · Rule 9–10；S026 Purdue OWL · 两步逆向提纲；S009 Jones · 文件 pp.41–44 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [revision-core-bridge](../writing/revision.html#audit-revision-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |
| [title-core-overview](../writing/title.html#audit-title-core-overview) | S019 刘洋课件副本 · 文件 pp.37–39／页脚 22–24；S027 Mensh、Kording · Rule 1 | 据此推演。标题概括工作并保留关键词；删修饰词是据此设计的编辑动作，未声称有读者实验支持。 |
| [title-core-point1](../writing/title.html#audit-title-core-point1) | S019 刘洋课件副本 · 文件 pp.37–39／页脚 22–24；S027 Mensh、Kording · Rule 1 | 据此推演。标题概括工作并保留关键词；删修饰词是据此设计的编辑动作，未声称有读者实验支持。 |
| [title-core-point2](../writing/title.html#audit-title-core-point2) | S027 Mensh、Kording · Rule 1；S020 ColBERT v2 · §1、§3.1、§3.4 | 据此推演。据聚焦贡献原则设计改稿；预编码描述参考实际架构，但三个标题均非真实论文题目。 |
| [title-core-point3](../writing/title.html#audit-title-core-point3) | S027 Mensh、Kording · Rule 1；S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。将标题中心贡献与主张证据匹配用于练习；三版题目与删除词列表由本站设置。 |
| [title-core-transfer](../writing/title.html#audit-title-core-transfer) | S027 Mensh、Kording · Rule 1；S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 教学构造。产出、数量与掌握判断为本站据原文设计的练习；不是原作者的测评标准，效果尚未做读者实验。 |
| [title-core-bridge](../writing/title.html#audit-title-core-bridge) | S009 Jones · 文件 p.24；S025 NeurIPS Checklist · 条目 1 | 据此推演。跨页关系是本站的阅读安排，依据主张与正文证据的对应；不代表原作者的统一章序。 |

## 保留的边界

尚未对勘刘洋原站244页与第三方188页版本；未做论文实验复现、统计重分析或真实读者试验。正文的教学数字均无真实研究身份。原文建议也不自动等于经实验验证的普遍最佳写法。

审计基线：274 个正文段落／模块单元。完成状态与实际执行验证见 HANDOFF.md、VALIDATION.md。
