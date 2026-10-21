// 规范入口、共享规则、任务下载、键盘操作及无脚本阅读。
const { chromium } = require('playwright');
const { strict: assert } = require('node:assert');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const fs = require('node:fs');

(async () => {
  const root = path.resolve(__dirname, '..');
  const base = 'http://127.0.0.1:4173/';
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1536, height: 864 }, reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('response', r => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url()); });
    await page.goto(base + 'writing/abstract.html');
    await page.locator('.ai-guide-main').click();
    await page.waitForURL('**/ai/abstract/index.html');
    assert.equal(await page.locator('.reader-example:visible').count(), 1, '默认页应先展示可读的改写例子');
    assert.equal(await page.locator('#ai-tools .ai-task-panel:visible').count(), 0, '默认阅读不应展开AI执行字段');
    assert.ok(!await page.locator('.reader-content').innerText().then(t => /[CRE]-ABS-\d/.test(t)), '阅读正文不应出现规范编号');
    assert.equal(await page.locator('.ai-concept').count(), 4);
    assert.equal(await page.locator('.ai-rule').count(), 9);
    assert.equal(await page.locator('.ai-example').count(), 3);
    await page.locator('#ai-tools > summary').click();
    for (const [task, count, example] of [['draft', 8, 'EX-ABS-01'], ['revise', 6, 'EX-ABS-02'], ['audit', 7, 'EX-ABS-03']]) {
      await page.locator('[data-task="' + task + '"]').click();
      assert.equal(await page.locator('#task-' + task + ' .task-rule:visible').count(), count);
      assert.equal(await page.locator('#task-' + task + ' .task-case').getAttribute('data-example-id'), example);
      await page.locator('#task-' + task + ' [data-copy]').click();
      const expected = fs.readFileSync(path.join(root, 'ai/abstract/' + task + '.md'), 'utf8').replace(/\r\n/g, '\n');
      assert.equal((await page.evaluate(() => navigator.clipboard.readText())).replace(/\r\n/g, '\n'), expected);
      if (task !== 'audit') {
        await page.locator('#task-' + task + ' .task-preview').evaluate(el => el.scrollIntoView({ block: 'start' }));
        await page.screenshot({ path: path.join(root, '.local/abstract-task-' + task + '-1536.png') });
      }
    }
    await page.locator('[data-task="draft"]').click();
    assert.equal(await page.locator('[data-panel]:visible').getAttribute('data-panel'), 'draft');
    assert.ok(await page.locator('#task-draft .task-preview').isVisible(), '任务切换区应展示实际选材');
    assert.ok(await page.locator('#task-draft .task-preview').innerText().then(t => t.includes('EX-ABS-01') && t.includes('摘要正文')));
    await page.locator('[data-task="draft"]').press('ArrowRight');
    assert.equal(await page.locator('[data-panel]:visible').getAttribute('data-panel'), 'revise');
    assert.ok(await page.locator('#task-revise .task-preview').innerText().then(t => t.includes('EX-ABS-02') && t.includes('关键修改')));
    assert.equal(await page.locator('#task-revise .task-rule:visible').count(), 6);
    await page.locator('#task-revise input[value="R-ABS-03"]').check();
    assert.equal(await page.locator('#task-revise .task-rule:visible').count(), 7);
    await page.locator('#task-revise [data-copy]').click();
    const extended = await page.evaluate(() => navigator.clipboard.readText());
    assert.ok(extended.includes('#### R-ABS-03') && extended.includes('#### R-ABS-08'));
    assert.ok(!extended.includes('#### R-ABS-02'));
    const [download] = await Promise.all([page.waitForEvent('download'), page.locator('#task-revise .ai-download').click()]);
    const saved = path.join(root, '.local/abstract-revise-custom.md');
    await download.saveAs(saved);
    assert.equal(fs.readFileSync(saved, 'utf8').replace(/\r\n/g, '\n'), extended.replace(/\r\n/g, '\n'));
    await page.locator('#task-revise input[value="R-ABS-03"]').uncheck();
    assert.equal(await page.locator('[data-task="revise"]').getAttribute('aria-selected'), 'true');
    await page.locator('[data-task="revise"]').press('End');
    assert.equal(await page.locator('[data-panel]:visible').getAttribute('data-panel'), 'audit');
    assert.ok(await page.locator('#task-audit .task-preview').innerText().then(t => t.includes('EX-ABS-03') && t.includes('优先问题表')));
    await page.locator('[data-copy="audit"]').click();
    await page.waitForFunction(() => document.querySelector('#task-audit .ai-copy-status').textContent.includes('已复制'));
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    // Windows剪贴板将换行转为CRLF；核对内容时只归一化平台换行。
    assert.equal(copied.replace(/\r\n/g, '\n'), fs.readFileSync(path.join(root, 'ai/abstract/audit.md'), 'utf8').replace(/\r\n/g, '\n'));
    assert.ok(!copied.includes('EX-ABS-01') && copied.includes('EX-ABS-03'));
    const response = await context.request.get(base + 'ai/abstract/input.example.json');
    assert.equal(response.status(), 200);
    assert.equal((await response.json()).facts[0].statement, '');
    await page.goto(base + 'writing/abstract.html#method-versus-label');
    await page.locator('.knowledge-links:has(a[href$="#R-ABS-03"]) > summary').click();
    await page.locator('.knowledge-links a[href$="#R-ABS-03"]').click();
    await page.waitForURL('**/ai/abstract/index.html#R-ABS-03');
    assert.equal(await page.locator('#R-ABS-03').getAttribute('open'), '');
    assert.equal(await page.locator('#ai-tools').getAttribute('open'), '');
    for (const [width, height] of [[1920,1080], [1536,864], [1366,768], [768,900], [390,844]]) {
      await page.setViewportSize({ width, height });
      await page.goto(base + 'ai/abstract/index.html');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '规范页横向溢出: ' + width);
      const sample = await page.locator('.reader-example').boundingBox();
      assert.ok(sample.y < height, '首屏没有露出教学例子');
      if (width === 1536 || width === 390) await page.screenshot({ path: path.join(root, '.local/abstract-reader-' + width + '.png') });
      await page.locator('#ai-tools > summary').click();
      const boxes = await page.locator('#task-draft > div, #task-draft > aside').evaluateAll(ns => ns.map(n => { const r = n.getBoundingClientRect(); return { x: r.x, y: r.y }; }));
      if (width > 800) assert.ok(boxes[1].x > boxes[0].x && Math.abs(boxes[1].y - boxes[0].y) < 2, '桌面任务与材料说明未并排');
      else assert.ok(boxes[1].y > boxes[0].y, '窄屏未顺序阅读');
      if (width === 1536 || width === 390) await page.screenshot({ path: path.join(root, '.local/abstract-ai-' + width + '.png') });
    }
    await page.goto(pathToFileURL(path.join(root, 'ai/abstract/index.html')).href);
    await page.locator('#ai-tools > summary').click();
    await page.locator('[data-task="audit"]').click();
    assert.ok(await page.locator('#task-audit').isVisible());
    const plainContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1366, height: 768 } });
    const plain = await plainContext.newPage();
    await plain.goto(pathToFileURL(path.join(root, 'ai/abstract/index.html')).href);
    assert.ok(await plain.locator('.reader-example').isVisible());
    assert.equal(await plain.locator('.ai-task-panel:visible').count(), 0);
    await plain.locator('#ai-tools > summary').click();
    assert.equal(await plain.locator('.ai-task-panel:visible').count(), 3);
    assert.equal(await plain.locator('.ai-download:visible').count(), 3);
    await plain.locator('#rules > summary').click();
    await plain.locator('#R-ABS-04 summary').click();
    assert.ok(await plain.locator('#R-ABS-04 dd').first().isVisible());
    await plainContext.close();
    assert.deepEqual(errors, []);
    await context.close();
    console.log('PASS: 3任务实际规则/案例/交付随切换，默认8/6/7条；补选预览/复制/下载同步，旧深链接、3桌面/2窄屏、直接文件与无脚本。');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
