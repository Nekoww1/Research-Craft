// 核对来源旁注在真实阅读路径中的可见性、布局、弹层和无脚本回退。
const { chromium } = require('playwright');
const { strict: assert } = require('node:assert');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const fs = require('node:fs');

(async () => {
  const root = path.resolve(__dirname, '..');
  const base = 'http://127.0.0.1:4173/writing/';
  const pages = JSON.parse(fs.readFileSync(path.join(root, 'content/writing/pages.json'), 'utf8'));
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1536, height: 864 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    for (const width of [1920, 1536, 1366]) {
      await page.setViewportSize({ width, height: 900 });
      for (const item of pages) {
        await page.goto(base + item.slug + '.html');
        const prose = page.locator('.sourced-prose').first();
        const boxes = await prose.locator(':scope > p, :scope > .source-note').evaluateAll(ns => ns.map(n => {
          const r = n.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width };
        }));
        assert.ok(boxes[1].x > boxes[0].x && Math.abs(boxes[1].y - boxes[0].y) < 2, '横屏旁注未贴近段落: ' + width + item.slug);
        assert.ok(boxes[0].width >= 500, '来源挤压正文: ' + width + item.slug);
        assert.equal(await page.locator('.core-point > .source-note:visible').count(), 3);
        assert.ok(await page.locator('.source-note > small').first().isVisible(), '来源边界默认不可见');
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      }
    }
    await page.goto(base + 'method.html#training-inference');
    await page.locator('#training-inference').evaluate(n => n.scrollIntoView());
    await page.screenshot({ path: path.join(root, '.local/writing-audit-method-1366.png') });
    assert.ok((await page.locator('.lesson-section:has(#training-inference)').innerText()).includes('三元组'));
    for (const [slug, id, expected] of [
      ['method','S025','条目 1–8'], ['revision','S026','两步'], ['discussion','S027','Rule 1–10'],
      ['conclusion','S028','解释性导言'], ['experiments','S029','官方说明'], ['figures','S030','Rule 1–10']
    ]) {
      await page.goto(base + slug + '.html');
      const cite = page.locator('.source-note .cite[href="../index.html#' + id + '"]').first();
      await cite.focus();
      await page.keyboard.press('Enter');
      assert.ok(await page.locator('#source-dialog').isVisible(), '键盘无法打开来源: ' + id);
      assert.ok((await page.locator('#source-content').innerText()).includes(expected), '来源内容不符: ' + id);
      await page.keyboard.press('Escape');
    }
    await page.setViewportSize({ width: 1536, height: 864 });
    await page.goto(base + 'method.html#method-core');
    await page.locator('#method-core').evaluate(n => n.scrollIntoView());
    const coreStyle = await page.locator('.core-overview .cite').first().evaluate(n => {
      const s = getComputedStyle(n); return { ink: s.color, background: s.backgroundColor };
    });
    assert.equal(coreStyle.ink, 'rgb(255, 255, 255)');
    assert.equal(coreStyle.background, 'rgba(0, 0, 0, 0)', '深底来源链接被浅色背景遮住');
    await page.screenshot({ path: path.join(root, '.local/writing-audit-core-1536.png') });
    for (const width of [768, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const item of pages) {
        await page.goto(base + item.slug + '.html');
        assert.ok(await page.locator('.sourced-prose > .source-note').first().isVisible());
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
      }
    }
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1366, height: 768 } });
    const plain = await context.newPage();
    await plain.goto(pathToFileURL(path.join(root, 'writing/experiments.html')).href);
    const direct = plain.locator('.source-note .cite[href="../index.html#S029"]').first();
    await direct.click();
    await plain.waitForURL('**/index.html#S029');
    assert.ok(await plain.locator('#S029').isVisible(), '无脚本不能直达来源');
    await context.close();
    assert.deepEqual(errors, []);
    console.log('PASS: 11页横屏段落旁注与正文宽度、窄屏可见性、六个新增来源的键盘弹层、深底对比、直接文件与无脚本追溯。');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
