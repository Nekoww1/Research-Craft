// 覆盖拆页带来的跨页导航、搜索、旧链接、来源和横屏布局风险。
const { chromium } = require('playwright');
const { strict: assert } = require('node:assert');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const fs = require('node:fs');

(async () => {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, '.local');
  fs.mkdirSync(output, { recursive: true });
  const pages = JSON.parse(fs.readFileSync(path.join(root, 'content/writing/pages.json'), 'utf8'));
  const base = 'http://127.0.0.1:4173/';
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, reducedMotion: 'reduce' });
    const errors = [];
    const failures = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) failures.push(response.status() + ' ' + response.url()); });
    const overflow = async label => assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '整页横向溢出: ' + label);
    const parallel = async selector => {
      const boxes = await page.locator(selector).evaluateAll(nodes => nodes.map(n => { const r = n.getBoundingClientRect(); return { x: r.x, y: r.y }; }));
      assert.ok(boxes.length >= 2 && Math.abs(boxes[0].y - boxes[1].y) < 2 && boxes[1].x > boxes[0].x, '没有横向并排: ' + selector);
    };
    for (const [width, height] of [[1920,1080], [1536,864], [1366,768]]) {
      await page.setViewportSize({ width, height });
      await page.goto(base + '#writing');
      assert.equal(await page.locator('.writing-library > a').count(), pages.length);
      await overflow(width + ' 写作总览');
      if (width === 1920) await page.screenshot({ path: path.join(output, 'writing-library-1920.png') });
      for (const item of pages) {
        await page.goto(base + 'writing/' + item.slug + '.html');
        assert.equal(await page.locator('main h1').count(), 1);
        assert.equal(await page.locator('.lesson-sidebar nav a[aria-current="page"]').getAttribute('href'), item.slug + '.html');
        assert.equal(await page.locator('.lesson-sidebar nav a').count(), pages.length);
        const size = await page.locator('.lesson-section > p').first().evaluate(n => parseFloat(getComputedStyle(n).fontSize));
        assert.ok(size >= 20, '正文过小: ' + item.slug + ', ' + width);
        await overflow(width + ' ' + item.slug);
        if (item.slug === 'method') {
          const widths = await page.locator('.similarity-table thead th').evaluateAll(nodes => nodes.map(n => n.getBoundingClientRect().width));
          assert.ok(widths.every(value => value >= 100), '矩阵列宽挤压了表头: ' + width);
        }
        if (item.slug === 'abstract' && width === 1920) {
          await page.locator('#abstract-analysis').evaluate(n => n.scrollIntoView());
          await parallel('.annotation-row:first-of-type > div, .annotation-row:first-of-type > aside');
          await page.screenshot({ path: path.join(output, 'abstract-analysis-1920.png') });
        }
        if (item.slug === 'abstract' && width === 1366) {
          await page.screenshot({ path: path.join(output, 'abstract-page-1366.png') });
          await page.locator('#abstract-worked-revision').evaluate(n => n.scrollIntoView());
          await page.screenshot({ path: path.join(output, 'abstract-revision-1366.png') });
        }
        if (item.slug === 'method' && width === 1920) {
          await page.locator('#worked-maxsim').evaluate(n => n.scrollIntoView());
          await page.screenshot({ path: path.join(output, 'method-example-1920.png') });
        }
      }
    }
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(base + 'writing/abstract.html');
    await page.locator('.cite').first().click();
    assert.ok(await page.locator('#source-dialog').isVisible());
    assert.ok((await page.locator('#source-content').innerText()).includes('188'));
    await page.keyboard.press('Escape');
    assert.ok(!await page.locator('#source-dialog').isVisible());
    await page.locator('.lesson-pagination a').last().click();
    await page.waitForURL('**/writing/introduction.html');
    await page.goBack();
    await page.waitForURL('**/writing/abstract.html');
    await page.locator('#search-input').fill('整个矩阵的最大值');
    const match = page.locator('#search-results a[href="../writing/method.html#worked-maxsim"]');
    assert.equal(await match.count(), 1);
    await match.click();
    await page.waitForURL('**/writing/method.html#worked-maxsim');
    await page.locator('.reasoning-detail summary').click();
    assert.equal(await page.locator('.reasoning-detail').getAttribute('open'), '');
    await page.locator('.workshop details summary').click();
    assert.equal(await page.locator('.workshop details').getAttribute('open'), '');
    await page.goto(base + '#writing');
    await page.locator('#search-input').fill('整个矩阵的最大值');
    await page.locator('#search-results a[href="writing/method.html#worked-maxsim"]').click();
    await page.waitForURL('**/writing/method.html#worked-maxsim');
    for (const [anchor, expected] of [['abstract','abstract.html'],['revision','introduction.html#intro-revision'],['running-example','method.html#running-example'],['writing-action','revision.html']]) {
      await page.goto(base + '#' + anchor);
      await page.waitForURL('**/writing/' + expected);
    }
    for (const width of [768,390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const item of pages) {
        await page.goto(base + 'writing/' + item.slug + '.html');
        await overflow(width + ' ' + item.slug);
      }
    }
    await page.goto(base + 'writing/abstract.html');
    assert.ok(!await page.locator('#sidebar').isVisible());
    await page.locator('#menu-toggle').click();
    assert.ok(await page.locator('#sidebar').isVisible());
    await page.locator('.lesson-sidebar nav a[href="method.html"]').click();
    await page.waitForURL('**/writing/method.html');
    assert.ok(!await page.locator('#sidebar').isVisible());
    await page.screenshot({ path: path.join(output, 'writing-mobile.png') });
    await page.goto(pathToFileURL(path.join(root, 'writing/abstract.html')).href);
    assert.ok(await page.locator('main h1').isVisible());
    await page.locator('.cite').first().click();
    assert.ok(await page.locator('#source-dialog').isVisible());
    await page.keyboard.press('Escape');
    await page.locator('.lesson-pagination a').last().click();
    await page.waitForURL('**/writing/introduction.html');
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1366, height: 768 } });
    const plain = await context.newPage();
    await plain.goto(base + 'writing/abstract.html');
    assert.ok(await plain.locator('#abstract-analysis').isVisible());
    await plain.locator('.lesson-sources summary').click();
    assert.ok(await plain.locator('#S021').isVisible());
    await plain.locator('.lesson-pagination a').last().click();
    await plain.waitForURL('**/writing/introduction.html');
    await context.close();
    assert.deepEqual(errors, [], '脚本异常');
    assert.deepEqual(failures, [], '资源请求失败');
    console.log('PASS: 11 页 × 三种桌面横屏，20px 正文、横向批注、跨页导航／返回／搜索、旧链接、来源弹层、算例展开、768／390 窄屏、file:// 和无脚本阅读。');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
