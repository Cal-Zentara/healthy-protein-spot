const GROOT = 'C:/Users/Aesth/AppData/Roaming/fnm/node-versions/v22.22.2/installation/node_modules';
const { chromium } = require(GROOT + '/playwright');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const FPS = 30;
const DUR = 3.0;

const mode = process.argv[2] || 'test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1820, height: 1024 } });
  await page.goto('file:///' + DIR.replace(/\\/g, '/') + '/index.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);

  const stage = page.locator('#stage');

  if (mode === 'test') {
    const tests = [[0.6, 'test-a'], [1.4, 'test-b'], [2.8, 'test-c']];
    for (const [t, name] of tests) {
      await page.evaluate((tt) => window.renderFrame(tt), t);
      await stage.screenshot({ path: path.join(DIR, name + '.png') });
      console.log('saved', name);
    }
  } else {
    const total = Math.round(FPS * DUR);
    const framesDir = path.join(DIR, 'frames');
    if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir);
    for (let i = 0; i < total; i++) {
      const t = i / FPS;
      await page.evaluate((tt) => window.renderFrame(tt), t);
      await stage.screenshot({ path: path.join(framesDir, 'f' + String(i).padStart(4, '0') + '.png') });
      if (i % 30 === 0) console.log('frame', i, '/', total);
    }
    console.log('all frames done');
  }
  await browser.close();
})();
