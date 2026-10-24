// PDF kutuphanesinin arama, filtre, siralama, sayac ve cevrimdisi davranisi.
// Veriler yalniz bu izole tarayici testinde sahte; gercek sayaclara POST yapilmaz.
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { loadBlog } from './blog/content.mjs';
import { veri } from './blog-app/src/pdf.js';
import { listen } from './serve.mjs';
const posts = loadBlog().posts;
const docs = veri().belgeler;
const views = Object.fromEntries(posts.map((p, i) => [p.slug, i]));
const downloads = Object.fromEntries(docs.map((p, i) => [p.kd, i]));
const { server, port } = await listen();
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox'] });
const base = `http://127.0.0.1:${port}`;
const requests = [];
async function page(fail = false) {
  const p = await browser.newPage();
  await p.evaluateOnNewDocument(() => sessionStorage.setItem('bote-entry-promo-dismissed-v1', '1'));
  await p.setRequestInterception(true);
  p.on('request', (r) => {
    if (r.url().includes('/api/views')) {
      if (r.method() !== 'GET') return r.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ views: 0 }) });
      const query = new URL(r.url()).searchParams.get('slugs');
      if (!query) return r.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ views: {} }) });
      const slugs = query.split(','); requests.push(slugs);
      return fail ? r.abort() : r.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({ views: Object.fromEntries(slugs.map((s) => [s, views[s]])) }) });
    }
    if (r.url().includes('/pdf/indirme.json')) return fail ? r.abort() : r.respond({ status: 200, contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ toplam: 999999, belgeler: { ...downloads, 'AC-999': 999999 } }) });
    return r.continue();
  });
  return p;
}
try {
  const p = await page();
  await p.goto(base + '/pdf', { waitUntil: 'networkidle0' });
  await p.waitForFunction(() => document.querySelector('[data-pdf-total-views]').textContent !== '—');
  assert.equal(await p.$$eval('[data-pdf-document]', (x) => x.length), docs.length);
  assert.equal(await p.$eval('[data-pdf-total-downloads]', (e) => e.textContent), Object.values(downloads).reduce((a, b) => a + b, 0).toLocaleString('tr-TR'));
  assert.equal(await p.$eval(`[data-pdf-indirme="${docs[0].kd}"]`, (e) => e.textContent), '0');
  assert(requests.every((s) => s.length <= 50));
  assert.equal(new Set(requests.flat()).size, posts.length);
  const search = async (q) => { await p.$eval('[data-pdf-ara]', (e, q) => { e.value = q; e.dispatchEvent(new Event('input')); }, q); };
  const visible = () => p.$$eval('[data-pdf-document]:not([hidden])', (rows) => rows.map((r) => ({ code: +r.dataset.code, category: r.dataset.category, title: r.dataset.title, downloads: +r.dataset.downloads })));
  await search('BT012'); assert.deepEqual((await visible()).map((x) => x.code), [12]);
  await search('ogretim tasarimi'); assert((await visible()).length > 0);
  await search(''); await p.click('[data-pdf-category="kariyer"]'); assert((await visible()).every((r) => r.category === 'kariyer')); assert((await visible()).length > 0);
  await search('bulunmayankonu123'); assert.equal((await visible()).length, 0); assert.equal(await p.$eval('[data-pdf-bos]', (e) => e.hidden), false);
  await p.click('[data-pdf-reset]'); assert.equal((await visible()).length, docs.length);
  await p.select('[data-pdf-sort]', 'downloads'); const rows = await visible(); assert(rows.every((r, i) => !i || rows[i - 1].downloads >= r.downloads));
  await p.select('[data-pdf-sort]', 'title'); const az = (await visible()).map((r) => r.title); assert.deepEqual(az, [...az].sort((a, b) => a.localeCompare(b, 'tr')));
  for (const width of [320, 390, 768, 1280, 1440]) { await p.setViewport({ width, height: 900 }); assert.equal(await p.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'overflow ' + width); }
  await p.goto(base + '/pdf/bote-nedir', { waitUntil: 'networkidle0' });
  assert.equal(await p.$$eval('.pdf-uc-faydalar li', (x) => x.length), 6);
  assert((await p.$eval('.pdf-uc-faydalar', (e) => e.textContent)).includes('CV'));
  for (const a of await p.$$eval('.pdf-uc a', (a) => a.map((e) => ({ href: e.href, target: e.target })))) { assert.equal(a.target, '_blank'); assert.equal(new URL(a.href).searchParams.get('ref'), 'bote.web.tr'); }
  await p.goto(base + '/blog/fiziksel-programlama-nedir', { waitUntil: 'networkidle0' });
  for (const height of [780, 900, 1000]) {
    await p.setViewport({ width: 1440, height });
    await p.$eval('.sidebar-reading', (e) => e.scrollIntoView({ block: 'start' }));
    assert(await p.evaluate(() => {
      const toc = document.querySelector('.sidebar-reading .side-toc').getBoundingClientRect();
      const ad = document.querySelector('.sidebar-uc').getBoundingClientRect();
      return ad.top >= toc.bottom + 20 && ad.bottom <= innerHeight;
    }), 'TOC/ad overlap or cut off at height ' + height);
  }
  for (const theme of ['light', 'dark']) {
    await p.evaluate((t) => document.documentElement.dataset.theme = t, theme);
    assert.equal(await p.$$eval('.sidebar-uc-logo img', (imgs) => imgs.filter((i) => getComputedStyle(i).display !== 'none').length), 1);
  }
  for (const a of await p.$$eval('.sidebar-uc a', (a) => a.map((e) => ({ href: e.href, target: e.target })))) { assert.equal(a.target, '_blank'); assert.equal(new URL(a.href).searchParams.get('ref'), 'bote.web.tr'); }
  const offline = await page(true); await offline.goto(base + '/pdf', { waitUntil: 'networkidle0' }); assert.equal(await offline.$eval('[data-pdf-total-views]', (e) => e.textContent), '—'); assert.equal(await offline.$eval('[data-pdf-total-downloads]', (e) => e.textContent), '—');
  const nojs = await browser.newPage(); await nojs.setJavaScriptEnabled(false); await nojs.goto(base + '/pdf', { waitUntil: 'domcontentloaded' }); assert.equal(await nojs.$$eval('[data-pdf-document] h2 a', (a) => a.length), docs.length);
  console.log('PASS: 71 belge, Turkce/kod arama, kategori, bos sonuc/reset, siralama, gercek sifir, BOTE toplami, 50 kayit siniri, 5 ekran, 6 CV/tanitim maddesi, ref/yeni sekme, ag hatasi, JS kapali baglantilar.');
} finally { await browser.close(); server.close(); }
