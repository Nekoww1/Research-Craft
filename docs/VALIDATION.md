# 网站验证记录

## 2026-10-21 正文来源审计与就近出处

要发现的失败：正文和模块只有页末来源组、核心要领没有各自依据、审计单元漏标／重复、具体出处未登记，或旁注挤压正文、深底链接缺对比、键盘／窄屏／无脚本无法追溯。最窄来源覆盖检查先在旧稿以“abstract.html: 缺少逐段来源，页末来源组不足以通过”失败，再实施来源核对、重写与旁注。施工阶段一次遗漏讨论章映射已补齐；不把填充一个来源组当作语义审查。

人工内容检查先于改写决定：逐段阅读11页，回查已读作者原文，并定向补读S025–S030；具体支持关系、条件与撤改决定见WRITING_AUDIT.md。修正训练/复核、统计、逆向提纲、讨论/结论职责、结果段骨架依据、图注点身份和原文定位。浏览器复查时发现深色核心上的白字来源链接继承浅色底，已移除来源标签背景并补针对回归。

实际验证命令：

```powershell
python -X utf8 scripts/build_writing.py --check
python -X utf8 scripts/verify_writing_sources.py
python -X utf8 scripts/verify_site.py
node --check assets/lesson.js
node --check scripts/writing_sources_check.cjs
node --check scripts/writing_design_check.cjs
$env:NODE_PATH='C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
node scripts/writing_sources_check.cjs
node scripts/writing_design_check.cjs
node scripts/writing_check.cjs
node scripts/browser_check.cjs
git -c core.autocrlf=false diff --check
```

- 来源映射：200个直接正文段＋74个整体模块＋66个核心说明；原文转述45、据此推演141、案例释义23、教学构造131。上述身份是本站审计判断，不是外部认证。软件只查覆盖、身份、引用登记和记录一致，**不能判定原文是否蕴含正文判断**。
- 静态：11页与92条搜索同步；12个HTML，662个页内唯一锚点、1344个链接、674处就近引用；UTF-8无BOM。教学正文约31,817汉字（移除来源旁注后），不以新增来源说明膨胀来计算教学深度。
- 浏览器：11页在1920、1536、1366横屏均有段落右侧旁注，正文宽度至少500px；768／390旁注可见且无整页横向溢出。六个新来源可用键盘打开弹层并Escape关闭；深色核心来源文字有可读对比；直接文件与无脚本能跳到来源区。
- 原有设计／功能：33项要领、产出／掌握判断、前后关系、56处模块标题、摘要批注键盘操作、三种聚合、图注、搜索、旧链接、前后导航、横向对照及无脚本阅读回归。
- 人工视觉复查方法训练正文与核心截图：`.local/writing-audit-method-1366.png`、`writing-audit-core-1536.png`。原有截图由相应脚本生成。`.local/`约37.2MiB，资料与截图均保留于忽略目录，没有外部中转目录。

范围限制：没有论文实验复现、统计重分析、真实读者试验，也没有把全站其他章节当作同等级已审计。来源访问／版本缺口见SOURCES.md。通过的是工程与呈现验证；内容结论仍可按原文逐项复审。

## 2026-10-21 各页学习核心与迁移路径

要发现的失败：有的独立页缺少学习核心，核心要领不能进入实际讲解，跨页职责连接或来源失效，新增核心未进入搜索，以及页首模块挤压或遮挡原有正文。最窄检查先在原站以“写作页缺少明确的本节核心入口，0 !== 1”失败，再实施内容与布局。

实际执行并通过：

```powershell
python -X utf8 scripts/build_writing.py --check
python -X utf8 scripts/verify_site.py
node --check scripts/writing_design_check.cjs
$env:NODE_PATH='C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
node scripts/writing_design_check.cjs
node scripts/writing_check.cjs
node scripts/browser_check.cjs
git -c core.autocrlf=false diff --check
```

- 11 个核心、33 项要领、当场产出、掌握判断、提炼来源与跨页连接均存在；核心在小节目录前，展开正文仍完整。核心链接的目标唯一且存在。
- 实际操作验证从方法要领到基线、从产出到练习、从方法到实验与结果；结果要领能直接到写作骨架。搜索“让改变可见”能进入方法核心，核心引用可以打开来源并用 Escape 关闭。
- 方法与实验核心在 1920×1080、1536×864、1366×768 并排展示判断与要领；既有 56 处模块标题、摘要批注、改稿、三种聚合计算和图表通过。11 页三种桌面、768／390、直接文件与无脚本回归通过，无页面错误。
- 静态为 12 个 HTML、278 个页内唯一锚点、711 个链接、106 处引用；正文源、生成页与索引同步，UTF-8 无 BOM。81 个展开小节与 11 个核心形成 92 个搜索条目。正文源去标签后约 31,441 个汉字，文档记作约 3.1 万。
- 人工审阅方法核心、实验与结果核心、完整结果段骨架；截图 `.local/writing-core-method-*.png`、`writing-core-experiments-*.png`、`writing-result-pattern-1366.png`。共同结构可以验证，核心是否足够可迁移仍待实际审阅；未进行读者效果实验。
- `.local/` 约 36.2 MiB，新增桌面截图与一次性内容编排脚本，其余为此前资料与检查文件；被忽略，不提交，不自动删除。无工作区外自建中转目录。新增核心为编辑归纳，虚构结果例沿用既有设定，来源阅读状态未升级。

## 2026-10-21 模块层级与内部设计

要发现的失败：模块标题弱于正文、同类模块遗漏修正、桌面改稿退回纵向排列、两侧修改理由错位，以及视觉改动使来源、搜索或练习不可用。失败则修正具体模块，不用统一换色或继续放大正文代替。

先给 `writing_design_check.cjs` 增加摘要对照标题的最窄回归，在原版以“标题仍小于正文或缺少标题字重”失败；原标题实为 13px 普通字。改造后检查扩至 11 页的 56 处模块标题，要求主要模块标题至少 20px 且有标题字重，次要来源或上下文标签不混作标题。浏览器验证不能衡量阅读欲望或替代用户的视觉判断。

实际执行并通过：

```powershell
python -X utf8 scripts/build_writing.py --check
python -X utf8 scripts/verify_site.py
node --check scripts/writing_design_check.cjs
$env:NODE_PATH='C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
node scripts/writing_design_check.cjs
node scripts/writing_check.cjs
node scripts/browser_check.cjs
git -c core.autocrlf=false diff --check
```

- 全部写作页的对照与完整修改在桌面横向排列；摘要示范两侧的修改理由对齐。主要横屏为 1920×1080、1536×864、1366×768，正文维持 18px、32.4px 行高、16px 段距。
- 批注选择／恢复／Enter／Space、三种 MaxSim 聚合、教学图形、跨页导航／搜索／返回、旧链接和来源弹层通过。768／390 无整页横向溢出，表格仍可局部滚动；直接文件与禁用脚本可读。
- 静态结果仍为 12 个 HTML、266 个页内唯一锚点、601 个链接、84 处引用；正文源、生成页与索引同步，UTF-8 无 BOM。
- 人工审阅摘要开头对照、真实摘要旁批、完整改稿、练习、引言改稿、MaxSim、图注和讨论页。截图为 `.local/writing-comparison-*.png`、`writing-studio-*.png`、`writing-design-*.png`；最后一组是 1536×1000 的八个阅读位置。没有把自动断言称为美观已获认可。
- `.local/` 约 35.2 MiB，包含此前公开材料、本轮截图及临时检查脚本；被忽略，不提交，不自动删除。没有工作区外自建中转目录，没有新增网站依赖或远程资产。

## 2026-10-21 写作区密度与视觉交互

目标：确认排版确实收紧，功能色对应正确的句子／旁批，聚合切换计算正确，并保持独立页原有阅读能力。正文基线实测 20px、39px 行高、22px 段距；新增检查先以“应为 18px”失败，再实施修改。

本轮验证：

```powershell
python -X utf8 scripts/build_writing.py --check
python -X utf8 scripts/verify_site.py
node --check assets/lesson.js
node --check scripts/writing_design_check.cjs
$env:NODE_PATH='C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
node scripts/writing_design_check.cjs
node scripts/writing_check.cjs
node scripts/browser_check.cjs
git diff --check
```

结果：18px、32.4px 行高、16px 段距；11 页覆盖三种桌面横屏和 768／390 窄屏。摘要标注与旁批横向对应，选择、恢复与 Enter／Space 可用；人工矩阵逐行最大 1.7、全局最大 0.9、求和 2.4，高亮分别为 2／1／6 个格子。SVG 示例可通过图形名称识别，无脚本时默认解释与算例仍完整。原有搜索、返回、来源、旧链接、直接文件阅读通过；无页面脚本错误。

静态结果：12 个 HTML，266 个页内唯一锚点、601 个链接、84 处引用，UTF-8 无 BOM；生成源与交付页同步。真实论文的来源不变，新图复用明确虚构的教学设定，不是新增实验结果。

人工复查了摘要批注、改稿对照、聚合演示、图与图注、证据分层和首屏密度。截图 `.local/writing-studio-*.png`、`writing-score-demo-1366.png`、`writing-chart-caption-1366.png`、`writing-revision-desk.png`、`writing-density-after.png`。当前中文主正文仍为微软雅黑；彩色标签使用较深文字，避免浅色底上的亮色字。未开展真实读者效果试验。

## 2026-10-20 写作模块独立页扩写

要发现的失败：跨页锚点和旧链接失效、正文与生成页面不同步、搜索漏正文、来源离开当前阅读，以及横屏中表格和批注挤压。失败则先修对应路径或布局，不用页面数代替教学判断。

实际执行并通过：

```powershell
python -X utf8 scripts/build_writing.py --check
python -X utf8 scripts/verify_site.py
node --check assets/app.js
node --check assets/lesson.js
node --check scripts/browser_check.cjs
node --check scripts/writing_check.cjs
$env:NODE_PATH='C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
node scripts/browser_check.cjs
node scripts/writing_check.cjs
git diff --check
```

- 生成同步：11 个页面、81 个可搜索小节；检查模式不写文件。
- 静态检查：12 个 HTML、262 个页内唯一锚点、601 个链接、84 处引用；跨页目标存在，来源已登记，正文源／生成页面／文档为 UTF-8 无 BOM。
- 浏览器：11 页逐一覆盖 1920×1080、1536×864、1366×768，主正文 20px。Chrome 确认中文为 Microsoft YaHei。逐句批注桌面并排；768／390 无整页横向溢出，表格局部滚动。
- 交互：当前目录、前后页、返回、主站／写作跨页搜索、已知旧链接、来源弹层与 Escape、推理／练习展开、直接文件与禁用脚本阅读通过。无脚本时仍有原生来源折叠和跨页链接。
- 视觉修复回归：矩阵列宽曾为 `[263,391,391,72,72]`，后两列表头竖排。先复现最窄列宽检查失败，再在写作样式中重设列宽。三种桌面尺寸的矩阵各列均至少 100px，复查表头正常。
- 原站回归：三个基础模块、总览、来源、搜索通过；旧单页批注开关的断言已由独立页行为检查替代。未捕获脚本异常与本地资源错误。

视觉证据在忽略目录：`.local/writing-library-1920.png`、`abstract-analysis-1920.png`、`abstract-page-1366.png`、`abstract-revision-1366.png`、`method-example-1920.png`、`writing-mobile.png`。来源视觉核对另见 `READING_NOTES.md`；软件检查不替代来源阅读或教学效果评估。

`.local/` 约 32.1 MiB，含六份公开 PDF、选页渲染、文本、截图和辅助文件；不提交全文、不自动删除。未创建工作区外中转目录。尚未进行真实读者效果试验和完整无障碍审计，教学深度仍需用户审阅。

## 2026-10-20 写作章结构重构

目标是核实新增分节可导航、可查阅，并在桌面横屏中保留清楚的结构与批注。静态检查通过：60 个唯一锚点、105 个链接、31 处引用；UTF-8 无 BOM、本地路径和两份 JavaScript 的语法检查通过。

浏览器验证沿用 1920×1080、1536×864、1366×768，并兼容 768／390 像素范围。八个论文部分的总览入口可正确进入对应讲解，始终留在写作章；旧摘要、修改对照和方法锚点仍有效。现有目录、来源弹层、批注开关、直接文件与无脚本阅读继续通过。

发现并修复了真实回归：分节标题被包装后，原按标题相邻元素索引的搜索漏掉正文。最窄检查以“候选空间”检索摘要，修改前命中为 0；改为按完整教学小节索引后命中，并纳入浏览器回归检查。

新增截图：`.local/writing-chapter-1920.png`、`.local/writing-structure-1920.png`、`.local/writing-annotation-1920.png`。视觉复查覆盖论文结构图、摘要释义与旁批、修改对照；没有把截图检查称为教学效果试验。其余三章仅新增学习路径，不据此宣称正文已完整扩写。

## 2026-10-20 用户审阅后：桌面阅读界面重做

改动前基线：1920 像素桌面测得正文 15px、引用 10px，所有模块在同一长页面。用户明确不接受这种视觉与阅读效果；之前功能通过不能作为设计质量达标的证明。

本轮要发现的失败：桌面字号仍过小、横向模块变成纵向堆叠、章节切换隐藏错误、来源弹层或深链接失效，以及宽屏／窄屏整页溢出。检查直接针对这些变化，不以“没有脚本报错”代替视觉检查。

执行：`python -X utf8 scripts/verify_site.py`、`node --check assets/app.js`、`node --check scripts/browser_check.cjs`、`node scripts/browser_check.cjs`（依赖路径按下文配置）、`git diff --check`。

当前结果：

- 静态完整性：53 个唯一锚点、68 个链接、18 处引用；路径与 UTF-8 无 BOM 检查通过。
- 横屏尺寸：1920×1080、1536×864、1366×768。四个模块正文为 20px，引用至少 14px；案例、阅读路径、文献关系图、修改对照横向排列，没有整页横向溢出。
- 按章切换、深链接、浏览器返回、来源弹层及 Escape 关闭、搜索和批注开关正常。
- 768／390 像素范围没有整页溢出；手机目录和禁用脚本后的完整正文仍可用。无脚本时为连续长页，有脚本时为按章阅读。
- `file://` 直接打开有效；没有捕获页面脚本异常和本地资源错误。
- 实际字体检查：Chrome 使用 Segoe UI 与 Microsoft YaHei，标题使用 Microsoft YaHei Bold。

宽屏视觉复查截图在 `.local/desktop-home-1920.png`、`.local/desktop-home-1366.png`、`.local/desktop-case-1920.png`、`.local/desktop-writing-1920.png`、`.local/desktop-writing-1366.png`。它们是本机审查证据，不提交仓库。当前用户的本地浏览器页已刷新为新版。没有开展完整无障碍审计或教学效果试验。

## 以下为初版验证历史

日期：2026-10-20。验证对象是根目录静态网站。软件检查不能代替来源核实、研究复现或教学效果评估。

## 内容与可追溯性

- 19 条初始线索的入口与材料身份逐条记录，S004 的 README 与实质正文区分；S005 的两种地址合并到同一页面 ID。
- 9 份核心材料按实际阅读深度留下记录；S013 为阅读模块补充，S020 与 S021 为案例原论文。S005 在网页工具失败后，经公开浏览器展开主页面三张表补读；子教程未逐篇阅读。
- 正文引用就近定位到来源与小节。ColBERT 的技术取舍、作者回顾与编辑练习分开；Forest Reranking 仅释义摘要的信息结构。
- 自编的文献关系、实验对照、修改前后段落与运行例子均标为教学示例，没有真实实验成绩或个人经历。
- 研究 taste 正文完成后仅增加一个可跳过的折叠思考题，未采用每节问答结构。

## 静态完整性

要发现的失败：引用指向未登记来源、重复 ID、断裂锚点、本地文件缺失、乱码或 BOM。这类失败会阻断追溯或本地阅读，发现后修复再查。

```powershell
python -X utf8 scripts/verify_site.py
node --check assets/app.js
node --check scripts/browser_check.cjs
git diff --check
```

结果：48 个唯一锚点、64 个链接、18 处就近引用的结构检查通过；本地路径与 UTF-8 无 BOM 检查通过；两份 JavaScript 语法检查通过。外链的 HTTP 可达性不由该脚本验证；本轮来源核对另记于 `SOURCES.md`。

## 浏览器验证

要发现的失败：脚本异常、资源请求失败、窄屏整体横向溢出、目录失效、搜索失效或不安全地插入查询、折叠和批注无法使用，以及直接打开文件／禁用脚本后丢失正文。发现布局或交互问题时，先修具体缺陷，再运行对应浏览器检查。

网站服务：`python -X utf8 -m http.server 4173 --bind 127.0.0.1`。

浏览器验证环境：Windows，Node.js，Playwright，已安装的 Chrome。当前环境使用 Codex 工作区工具返回的运行库；该路径仅属于本机验证工具，不是网站要求：

```powershell
$env:NODE_PATH = 'C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
node scripts/browser_check.cjs
```

其他环境可使用自己的 Playwright 安装与 Chrome。`NODE_PATH` 只在当前 PowerShell 进程生效，未持久化环境设置。

通过项：

- 1440、768、390 像素视口没有整页横向溢出；宽表使用自身的滚动容器。
- 桌面目录跳转、手机目录展开／收起、搜索命中与空结果、引用定位、案例折叠、修改批注开关正常。
- 在快速从来源跳回写作后，目录高亮回到写作章。
- 搜索查询作为纯文本处理；输入 HTML 字样没有生成元素。
- `file://` 直接打开与禁用 JavaScript 时均保留四章正文和来源。
- 没有捕获到本地资源 HTTP 错误或页面脚本异常。

视觉复查：查看首页桌面、手机与写作对照截图；修正了移动端概念图的阅读顺序与快速跨章后的目录高亮滞后，并重新验证。截图保存在忽略目录 `.local/desktop.png`、`.local/mobile.png`、`.local/writing.png`，不提交仓库。

## 限制与下一步

没有开展完整无障碍审计、跨浏览器兼容测试、真实读者试用或公开部署验证。无脚本时搜索与批注开关不提供，但正文、目录、来源和原生折叠仍可使用。当前无需构建步骤；没有以不存在的构建命令冒记验证结果。

后续内容修改先运行静态完整性检查；改导航、布局或交互时再运行相应浏览器检查。只有新增变化或未解决问题时扩大验证。
