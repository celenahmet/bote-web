// IndexNow bildirimi: degisen adresleri Bing, Yandex, Seznam, Naver gibi IndexNow kullanan arama
// motorlarina tek istekle bildirir. Google IndexNow kullanmaz; Google sitemap.xml'i (robots.txt'te)
// Search Console uzerinden okur.
//
// Yayin (Vercel "Ready") olduktan SONRA calistirilir:
//   node tools/indexnow.mjs                 son commit'te degisen yazilar + blog listeleri
//   node tools/indexnow.mjs --since <commit> o commit'ten bu yana degisen yazilar + blog listeleri
//   node tools/indexnow.mjs --all            sitemap.xml'deki butun adresler (adres degisikliginden sonra)
//   node tools/indexnow.mjs --url <adres>    tek adres (birden cok --url verilebilir)
//   --dry                                    gondermeden listeyi yazdir
// Anahtar dosyasi kokte <32 hex>.txt olarak durur (IndexNow geregi herkese acik; gizli degildir).
// Siteye yalniz bir istek atilir (anahtar dosyasi): Vercel sik yoklamayi bot sayiyor.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = 'https://bote.web.tr';
const HOST = new URL(SITE).host;
const args = process.argv.slice(2);
const val = (flag) => args.flatMap((a, i) => (a === flag && args[i + 1] ? [args[i + 1]] : []));

const keyFile = fs.readdirSync(ROOT).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.error('IndexNow anahtar dosyasi yok (kokte <32 hex>.txt)'); process.exit(1); }
const key = keyFile.slice(0, -4);

const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const all = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

let urls;
if (args.includes('--all')) {
  urls = all;
} else if (val('--url').length) {
  urls = val('--url');
} else {
  const since = val('--since')[0] || 'HEAD~1';
  const changed = execFileSync('git', ['-C', ROOT, 'diff', '--name-only', since, 'HEAD', '--', 'content/blog/posts'], { encoding: 'utf8' })
    .split('\n').filter((f) => f.endsWith('.md'));
  const posts = changed.map((f) => `${SITE}/blog/${path.basename(f, '.md')}`).filter((u) => all.includes(u));
  // yazi eklenince ya da degisince liste sayfalari da degisir
  const lists = posts.length ? all.filter((u) => u === `${SITE}/blog` || u.startsWith(`${SITE}/blog/kategori/`)) : [];
  urls = [...new Set([...posts, ...lists])];
}
urls = urls.filter((u) => u.startsWith(`${SITE}/`) || u === SITE);
if (!urls.length) { console.log('Bildirilecek adres yok.'); process.exit(0); }
console.log(`${urls.length} adres:\n${urls.map((u) => `  ${u}`).join('\n')}`);
if (args.includes('--dry')) process.exit(0);

// Anahtar dosyasi yayinda mi? (IndexNow bu dosyayi okuyarak sahipligi dogrular)
const k = await fetch(`${SITE}/${keyFile}`);
const body = k.ok ? (await k.text()).trim() : '';
if (body !== key) { console.error(`Anahtar dosyasi yayinda degil ya da farkli (HTTP ${k.status}). Yayin bitince tekrar deneyin.`); process.exit(1); }

const r = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${keyFile}`, urlList: urls }),
});
// 200: alindi, 202: alindi (anahtar dogrulamasi suruyor); 4xx: istek ya da anahtar hatali
console.log(`IndexNow yaniti: HTTP ${r.status} ${r.statusText}`);
if (!r.ok) { console.error(await r.text()); process.exit(1); }
