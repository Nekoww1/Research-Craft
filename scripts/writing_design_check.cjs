// 验证写作页的紧凑排版和有教学意义的视觉交互。
const { chromium } = require('playwright');
const { strict: assert } = require('node:assert');
const path = require('node:path');
const fs = require('node:fs');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const base = 'http://127.0.0.1:4173/writing/';
  const output = path.resolve(__dirname, '../.local');
  try {
    const page = await browser.newPage({ viewport: { width: 1536, height: 864 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base + 'abstract.html');
    const text = await page.locator('.lesson-section > p').first().evaluate(n => {
      const s = getComputedStyle(n);
      return { size: parseFloat(s.fontSize), leading: parseFloat(s.lineHeight), gap: parseFloat(s.marginBottom) };
    });
    assert.equal(text.size, 18, '写作正文应为 18px');
    assert.ok(text.leading <= 33 && text.gap <= 16, '行距或段距仍然过大');
    const panelTitle = await page.locator('.lesson-section:has(#problem-compression) .panel-label').first().evaluate(n => {
      const s = getComputedStyle(n);
      return { size: parseFloat(s.fontSize), weight: parseInt(s.fontWeight) };
    });
    assert.ok(panelTitle.size >= 20 && panelTitle.weight >= 600, '对照模块标题仍小于正文或缺少标题字重');
    await page.locator('[data-focus-role="method"]').click();
    assert.equal(await page.locator('[data-focus-role="method"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('.annotation-note:visible').count(), 1);
    assert.equal(await page.locator('.annotation-note:visible').getAttribute('data-note-role'), 'method');
    await page.locator('[data-reset-annotations]').click();
    assert.equal(await page.locator('.annotation-note:visible').count(), 4);
    await page.locator('[data-focus-role="problem"]').press('Enter');
    assert.equal(await page.locator('.annotation-note:visible').getAttribute('data-note-role'), 'problem');
    await page.locator('[data-focus-role="problem"]').press('Space');
    assert.equal(await page.locator('.annotation-note:visible').count(), 4);
    for (const [width, height] of [[1920,1080], [1536,864], [1366,768]]) {
      await page.setViewportSize({ width, height });
      await page.goto(base + 'abstract.html#abstract-analysis');
      const boxes = await page.locator('.abstract-paper, .annotation-notes').evaluateAll(ns => ns.map(n => {
        const r = n.getBoundingClientRect(); return { x: r.x, y: r.y };
      }));
      assert.ok(boxes[1].x > boxes[0].x && Math.abs(boxes[0].y - boxes[1].y) < 2, '摘要与旁批应在桌面并排');
      await page.screenshot({ path: path.join(output, 'writing-studio-' + width + '.png') });
      await page.locator('#problem-compression').evaluate(n => n.scrollIntoView());
      const panels = await page.locator('.comparison-study > section').evaluateAll(ns => ns.map(n => {
        const r = n.getBoundingClientRect(); return { x: r.x, y: r.y };
      }));
      assert.ok(panels[1].x > panels[0].x && Math.abs(panels[0].y - panels[1].y) < 2, '改稿对照应在桌面并排');
      const notes = await page.locator('.comparison-study .edit-comment').evaluateAll(ns => ns.map(n => n.getBoundingClientRect().y));
      assert.ok(Math.abs(notes[0] - notes[1]) < 2, '两份稿件的修改理由未对齐');
      await page.screenshot({ path: path.join(output, 'writing-comparison-' + width + '.png') });
    }
    const pages = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../content/writing/pages.json'), 'utf8'));
    let checkedTitles = 0;
    for (const item of pages) {
      await page.goto(base + item.slug + '.html');
      const titles = await page.locator('.panel-label, .compare-panels > section > h3, .annotated-block > header h3, .draft-block > span, .revision-desk header > b, .revision-ladder > div > span, .workshop h3, .studio-header h3, .caption-demo > figcaption h3').evaluateAll(ns => ns.map(n => {
        const s = getComputedStyle(n);
        return { text: n.textContent, size: parseFloat(s.fontSize), weight: parseInt(s.fontWeight) };
      }));
      for (const title of titles) assert.ok(title.size >= 20 && title.weight >= 600, '模块标题层级不足: ' + item.slug + ' / ' + title.text);
      checkedTitles += titles.length;
      for (const group of await page.locator('.compare-panels, .revision-desk').all()) {
        const panels = await group.locator(':scope > section').evaluateAll(ns => ns.map(n => {
          const r = n.getBoundingClientRect(); return { x: r.x, y: r.y };
        }));
        assert.ok(panels[1].x > panels[0].x && Math.abs(panels[0].y - panels[1].y) < 2, '横屏对照未并排: ' + item.slug);
      }
    }
    await page.goto(base + 'method.html#worked-maxsim');
    assert.equal(await page.locator('[data-score-output]').textContent(), '1.7');
    await page.getByLabel('整矩阵取最大').check();
    assert.equal(await page.locator('[data-score-output]').textContent(), '0.9');
    assert.equal(await page.locator('.similarity-table td.is-selected').count(), 1);
    await page.getByLabel('全部求和').check();
    assert.equal(await page.locator('[data-score-output]').textContent(), '2.4');
    assert.equal(await page.locator('.similarity-table td.is-selected').count(), 6);
    await page.getByLabel('逐行取最大').check();
    assert.equal(await page.locator('[data-score-output]').textContent(), '1.7');
    assert.equal(await page.locator('.similarity-table td.is-selected').count(), 2);
    await page.screenshot({ path: path.join(output, 'writing-score-demo-1366.png') });
    await page.goto(base + 'figures.html#caption-workshop');
    assert.ok(await page.getByRole('img', { name: '教学示意：两种方案的质量与查询延迟取舍' }).isVisible());
    await page.screenshot({ path: path.join(output, 'writing-chart-caption-1366.png') });
    for (const item of ['abstract', 'method', 'figures', 'discussion']) {
      await page.setViewportSize({ width: 390, height: 900 });
      await page.goto(base + item + '.html');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), '窄屏溢出: ' + item);
    }
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1366, height: 768 } });
    const plain = await context.newPage();
    await plain.goto(base + 'abstract.html');
    assert.equal(await plain.locator('.annotation-note:visible').count(), 4);
    await plain.goto(base + 'method.html');
    assert.equal(await plain.locator('[data-score-output]').textContent(), '1.7');
    await context.close();
    assert.deepEqual(errors, []);
    console.log('PASS: ' + checkedTitles + ' 处模块标题层级、全部写作页横屏对照、18px 紧凑排版、批注键盘操作、三种聚合计算、图形图注、窄屏及无脚本正文。');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
