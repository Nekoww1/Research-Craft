// Playwright 仅用于维护验证，网站本身没有 npm 运行依赖。
const { chromium } = require('playwright');
const { strict: assert } = require('node:assert');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const fs = require('node:fs');

(async () => {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, '.local');
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, reducedMotion: 'reduce' });
    const errors = [];
    const failures = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {
      if (response.status() >= 400) failures.push(response.status() + ' ' + response.url());
    });
    const route = async id => {
      await page.locator('.sidebar nav a[href="#' + id + '"]').click();
      await page.waitForFunction(value => document.body.dataset.view === value, id);
    };
    const noOverflow = async label => {
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '整页横向溢出: ' + label);
    };
    const sideBySide = async selector => {
      const boxes = await page.locator(selector).evaluateAll(nodes => nodes.map(n => {
        const r = n.getBoundingClientRect();
        return { x: r.x, y: r.y, width: r.width };
      }));
      assert.ok(boxes.length >= 2);
      assert.ok(Math.abs(boxes[0].y - boxes[1].y) < 2 && boxes[1].x > boxes[0].x + boxes[0].width - 2, '没有横向并排: ' + selector);
    };
    await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('main > article').count(), 4);
    assert.equal(await page.locator('main > article:visible').count(), 0);
    await page.screenshot({ path: path.join(output, 'desktop-home-1920.png') });
    for (const [width, height] of [[1920,1080], [1536,864], [1366,768]]) {
      await page.setViewportSize({ width, height });
      await route('orientation');
      await noOverflow(width + ' 总览');
      await sideBySide('.route-grid > a');
      for (const id of ['taste', 'reading', 'evidence', 'writing']) {
        await route(id);
        assert.equal(await page.locator('main > article:visible').count(), 1);
        const size = await page.locator('#' + id + ' .prose').first().evaluate(n => parseFloat(getComputedStyle(n).fontSize));
        assert.ok(size >= 20, '正文字号过小: ' + width + ', ' + id + ', ' + size);
        await noOverflow(width + ' ' + id);
        if (id === 'reading') {
          await sideBySide('.reading-path > div');
          await sideBySide('.literature-flow > div');
        }
      }
      await sideBySide('.revision-grid > section');
      if (width === 1366) {
        await page.locator('#revision').evaluate(n => n.scrollIntoView({ block: 'start' }));
        await page.screenshot({ path: path.join(output, 'desktop-writing-1366.png') });
        await route('orientation');
        await page.screenshot({ path: path.join(output, 'desktop-home-1366.png') });
      }
      await route('taste');
      await sideBySide('.tradeoff > div');
      const citeSize = await page.locator('#taste .cite').first().evaluate(n => parseFloat(getComputedStyle(n).fontSize));
      assert.ok(citeSize >= 14);
    }
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.locator('#colbert').evaluate(n => n.scrollIntoView({ block: 'start' }));
    await page.screenshot({ path: path.join(output, 'desktop-case-1920.png') });
    await page.locator('#taste .cite[href="#S020"]').first().click();
    assert.ok(await page.locator('#source-dialog').isVisible());
    assert.ok((await page.locator('#source-content').innerText()).includes('ColBERT'));
    assert.equal(await page.locator('#taste').isVisible(), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#source-dialog').isVisible(), false);
    await page.locator('#taste .cite[href="#S020"]').first().click();
    await page.locator('.all-sources-link').click();
    await page.waitForFunction(() => document.body.dataset.view === 'sources');
    await sideBySide('.source-grid > .source-entry');
    await page.goBack();
    await page.waitForFunction(() => document.body.dataset.view === 'taste');
    await page.locator('.case-reflection summary').click();
    assert.equal(await page.locator('.case-reflection').getAttribute('open'), '');
    await route('writing');
    await page.screenshot({ path: path.join(output, 'writing-chapter-1920.png') });
    assert.equal(await page.locator('.paper-map a').count(), 8);
    for (const id of ['paper-title', 'abstract', 'introduction-logic', 'running-example', 'experiments', 'related-work', 'discussion', 'conclusion']) {
      await page.locator('.paper-map a[href="#' + id + '"]').click();
      await page.waitForFunction(value => location.hash === '#' + value, id);
      assert.equal(await page.locator('#' + id).isVisible(), true);
      assert.equal(await page.locator('main > article:visible').count(), 1);
    }
    await page.locator('#search-input').fill('候选空间');
    assert.ok(await page.locator('#search-results a[href="#abstract"]').count() > 0, '摘要正文未被搜索索引');
    await page.locator('#search-results a[href="#abstract"]').click();
    await page.waitForFunction(() => location.hash === '#abstract');
    await page.locator('#search-input').fill('');
    await page.locator('#paper-map').evaluate(n => n.scrollIntoView({ block: 'start' }));
    await page.screenshot({ path: path.join(output, 'writing-structure-1920.png') });
    await page.locator('#abstract-analysis').evaluate(n => n.scrollIntoView({ block: 'start' }));
    await page.screenshot({ path: path.join(output, 'writing-annotation-1920.png') });
    await page.locator('#annotation-toggle').click();
    assert.equal(await page.locator('.annotations:visible').count(), 0);
    await page.locator('#annotation-toggle').click();
    assert.equal(await page.locator('.annotations:visible').count(), 2);
    await page.locator('#revision').evaluate(n => n.scrollIntoView({ block: 'start' }));
    await page.screenshot({ path: path.join(output, 'desktop-writing-1920.png') });
    await page.locator('#search-input').fill('科研起步');
    assert.ok(await page.locator('#search-results a').count() > 0);
    await page.locator('#search-results a').first().click();
    await page.waitForFunction(() => document.body.dataset.view === 'sources');
    await page.locator('#search-input').fill('不存在的检索词');
    assert.equal(await page.locator('#search-results a').count(), 0);
    await page.locator('#search-input').fill('');
    await page.goto('http://127.0.0.1:4173/#abstract');
    await page.waitForFunction(() => document.body.dataset.view === 'writing');
    assert.equal(await page.locator('main > article:visible').count(), 1);
    assert.equal(await page.locator('.sidebar nav a[href="#writing"]').getAttribute('aria-current'), 'page');
    for (const width of [768, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const id of ['taste', 'reading', 'evidence', 'writing', 'sources']) {
        await page.goto('http://127.0.0.1:4173/#' + id);
        await page.waitForFunction(value => document.body.dataset.view === value, id);
        await noOverflow(width + ' ' + id);
      }
    }
    await page.goto('http://127.0.0.1:4173/');
    assert.equal(await page.locator('#sidebar').isVisible(), false);
    await page.locator('#menu-toggle').click();
    assert.equal(await page.locator('#sidebar').isVisible(), true);
    await page.locator('.sidebar nav a[href="#reading"]').click();
    assert.equal(await page.locator('#sidebar').isVisible(), false);
    await page.screenshot({ path: path.join(output, 'mobile-reading.png') });
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href + '#writing', { waitUntil: 'load' });
    assert.equal(await page.locator('#writing').isVisible(), true);
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1366, height: 768 } });
    const plain = await context.newPage();
    await plain.goto('http://127.0.0.1:4173/');
    assert.equal(await plain.locator('main > article:visible').count(), 4);
    await context.close();
    assert.deepEqual(errors, [], '浏览器脚本错误');
    assert.deepEqual(failures, [], '本地资源请求失败');
    console.log('PASS: 三种桌面横屏、20px 正文、横向案例与对照、按章阅读、深链接、返回、来源弹层、搜索、批注、窄屏、直接文件与无脚本阅读。');
    console.log('截图: ' + output);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
