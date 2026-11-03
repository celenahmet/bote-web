// 3D görüntülenme sayacı: izin listesi default deny, blog anahtarlarıyla çakışma yok, blog "top" listesine karışmama.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { SAYAC_ANAHTARLARI, sayacAnahtari, DERS_YOLU, OZGUR_YOL, MERKEZ_YOL, AILELER } from '../yollar.mjs';

const require = createRequire(import.meta.url);
const { createHandler, memoryStore } = require('../../../api/_lib/views-core.js');
const posts = require('../../../api/_lib/posts.json');
const UA = 'Mozilla/5.0 (X11; Linux x86_64) Chrome/120';

async function cagir(h, method, url, body, ua = UA, ip = '1.2.3.4') {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, end(b) { this.body = b; } };
  await h({ method, url, body, headers: { 'user-agent': ua, 'x-forwarded-for': ip } }, res);
  return { status: res.statusCode, json: JSON.parse(res.body) };
}
const yeni = () => createHandler({ store: memoryStore(), slugs: [...posts, ...SAYAC_ANAHTARLARI] });

test('anahtarlar yollar.mjs adreslerinden uretilir ve blog adlariyla cakismaz', () => {
  const beklenen = [MERKEZ_YOL, ...AILELER.map((a) => a.yol), ...Object.values(DERS_YOLU), OZGUR_YOL].map(sayacAnahtari);
  assert.deepEqual([...SAYAC_ANAHTARLARI], beklenen);
  for (const k of SAYAC_ANAHTARLARI) assert.ok(k.startsWith('3d:/3d'), k);
  for (const p of posts) assert.ok(!SAYAC_ANAHTARLARI.includes(p) && !p.includes(':'), p);
  // yalniz yeni (Ingilizce) adresler: eski Turkce adresler sayilmaz
  assert.ok(!SAYAC_ANAHTARLARI.some((k) => /tanitim|led-yakma|buton-led|trafik-isigi|ozgur-mod|donanim/.test(k)));
});

test('derlemenin yazdigi api/_lib/3d-sayac.json yollar.mjs ile ayni', () => {
  const dosya = JSON.parse(fs.readFileSync(new URL('../../../api/_lib/3d-sayac.json', import.meta.url), 'utf8'));
  assert.deepEqual(dosya, [...SAYAC_ANAHTARLARI].sort());
});

test('3D anahtari kabul edilir ve sayilir, ayni ziyaretci tekrar sayilmaz, bot sayilmaz', async () => {
  const h = yeni(); const k = sayacAnahtari(DERS_YOLU['kasanin-ici']);
  const a = await cagir(h, 'POST', '/api/views', { slug: k });
  assert.equal(a.status, 200); assert.equal(a.json.counted, true); assert.equal(a.json.views, 1);
  const b = await cagir(h, 'POST', '/api/views', { slug: k });
  assert.equal(b.json.counted, false); assert.equal(b.json.views, 1);
  const bot = await cagir(h, 'POST', '/api/views', { slug: k }, 'Googlebot/2.1', '9.9.9.9');
  assert.equal(bot.json.counted, false);
  const g = await cagir(h, 'GET', `/api/views?slugs=${encodeURIComponent(k)}`);
  assert.equal(g.json.views[k], 1);
});

test('bilinmeyen 3D anahtari reddedilir (yazma 400, okuma 400)', async () => {
  const h = yeni();
  for (const s of ['3d:/3d/olmayan', '3d:/3d/arduino/tanitim', '3d:', '/3d/arduino/basics', '3d:/3d/arduino/basics/', '__proto__', '']) {
    assert.equal((await cagir(h, 'POST', '/api/views', { slug: s })).status, 400, s);
    assert.equal((await cagir(h, 'GET', `/api/views?slugs=${encodeURIComponent(s)}`)).status, 400, s);
  }
});

test('blog top listesine 3D anahtarlari karismaz', async () => {
  const h = yeni();
  for (let i = 0; i < 3; i++) await cagir(h, 'POST', '/api/views', { slug: sayacAnahtari(OZGUR_YOL) }, UA, `5.5.5.${i}`);
  await cagir(h, 'POST', '/api/views', { slug: posts[0] });
  const t = await cagir(h, 'GET', '/api/views?top=5');
  assert.deepEqual(t.json.top.map((x) => x.slug), [posts[0]]);
});

test('depo yokken disabled doner', async () => {
  const h = createHandler({ store: null, slugs: SAYAC_ANAHTARLARI });
  assert.deepEqual((await cagir(h, 'POST', '/api/views', { slug: SAYAC_ANAHTARLARI[0] })).json, { disabled: true });
});
