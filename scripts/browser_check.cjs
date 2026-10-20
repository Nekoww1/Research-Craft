// 本脚本只依赖验证环境中的 Playwright；网站本身无 npm 依赖。
const { chromium } = require('playwright');
const { strict: assert } = require('node:assert');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const fs = require('node:fs');

(async () => {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, '.local');
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const failures = [];
    page.on('response', response => {
      if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`);
    });
    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('main > article').count(), 4);
    await page.screenshot({ path: path.join(output, 'desktop.png') });
    await page.locator('nav a[href="#writing"]').click();
    await page.waitForFunction(() => location.hash === '#writing');
    assert.equal(await page.locator('#annotation-toggle').getAttribute('aria-pressed'), 'true');
    await page.locator('#annotation-toggle').click();
    assert.equal(await page.locator('.annotations:visible').count(), 0);
    await page.locator('#annotation-toggle').click();
    assert.equal(await page.locator('.annotations:visible').count(), 2);
    await page.locator('#search-input').fill('细粒度');
    assert.ok(await page.locator('#search-results a').count() > 0);
    await page.locator('#search-results a').first().click();
    await page.locator('#search-input').fill('<img src=x onerror=alert(1)>');
    assert.equal(await page.locator('#search-results a').count(), 0);
    assert.equal(await page.locator('#search-results img').count(), 0);
    await page.locator('#search-input').fill('');
    await page.locator('.case-reflection summary').click();
    assert.equal(await page.locator('.case-reflection').getAttribute('open'), '');
    await page.locator('.cite[href="#S020"]').first().click();
    await page.waitForFunction(() => location.hash === '#S020');
    assert.ok(await page.locator('#S020').isVisible());
    await page.locator('#revision').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector('nav a[href="#writing"]').hasAttribute('aria-current'));
    await page.screenshot({ path: path.join(output, 'writing.png') });

    // 只允许表格自己的容器横向滚动；整页不应溢出手机或桌面视口。
    for (const width of [1440, 768, 390]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `横向溢出: ${width}`);
    }
    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('#sidebar').isVisible(), false);
    await page.locator('#menu-toggle').click();
    assert.equal(await page.locator('#sidebar').isVisible(), true);
    await page.locator('nav a[href="#reading"]').click();
    assert.equal(await page.locator('#sidebar').isVisible(), false);
    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(output, 'mobile.png'), fullPage: false });

    // file:// 直接打开与禁用 JS 都应保留实际正文和来源。
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href, { waitUntil: 'load' });
    assert.equal(await page.locator('main > article').count(), 4);
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 900 } });
    const plain = await context.newPage();
    await plain.goto('http://127.0.0.1:4173/');
    assert.equal(await plain.locator('main > article').count(), 4);
    assert.equal(await plain.locator('#S021').count(), 1);
    assert.equal(await plain.locator('#sidebar').isVisible(), true);
    await context.close();
    assert.deepEqual(errors, [], '浏览器脚本错误');
    assert.deepEqual(failures, [], '本地资源请求失败');
    console.log('PASS: 桌面/平板/手机、目录、搜索、案例折叠、批注、引用、file://、禁用 JS、资源与脚本检查。');
    console.log(`截图: ${output}`);
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
