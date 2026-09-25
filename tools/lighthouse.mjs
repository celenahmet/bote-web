// Lighthouse denetimi: yerel sunucu https://www.bote.web.tr adresine eslenir, boylece
// canonical/robots/hreflang denetimleri uretimdeki gibi calisir.
//   node lighthouse.mjs                 -> sitemap'teki tum sayfalar (SEO, erisilebilirlik, en iyi uygulamalar)
//   node lighthouse.mjs --perf          -> performans da olculur (yavas)
//   node lighthouse.mjs /blog /about    -> yalnizca verilen yollar
// SEO skoru 100'un altindaki her sayfa hata sayilir (cikis kodu 1).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { listen, ROOT } from './serve.mjs';

const HOST = 'www.bote.web.tr';
const args = process.argv.slice(2);
const PERF = args.includes('--perf');
const only = args.filter((a) => a.startsWith('/'));

// Gecici, kendinden imzali sertifika (yalnizca bu yerel test icin)
let tls = null;
try {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bote-lh-'));
  execFileSync('openssl', ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-days', '2', '-subj', `/CN=${HOST}`,
    '-keyout', path.join(dir, 'key.pem'), '-out', path.join(dir, 'cert.pem')], { stdio: 'ignore' });
  tls = { key: fs.readFileSync(path.join(dir, 'key.pem')), cert: fs.readFileSync(path.join(dir, 'cert.pem')) };
  // Chrome bu sertifikaya guvensin (uyari sayfasi cikmasin): SPKI ozeti
  const spki = execFileSync('sh', ['-c', `openssl x509 -in "${path.join(dir, 'cert.pem')}" -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl base64`]).toString().trim();
  tls.spki = spki;
} catch {
  console.warn('openssl bulunamadi; http ile olculuyor (is-on-https denetimi yaniltici olabilir).');
}
const { server, port } = await listen({ tls });
const base = `${tls ? 'https' : 'http'}://${HOST}`;

let paths = only;
if (!paths.length) {
  const xml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  paths = [...xml.matchAll(/<loc>https:\/\/www\.bote\.web\.tr([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
}

const chromePath = process.env.CHROME_PATH || ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find((p) => fs.existsSync(p));
const chrome = await chromeLauncher.launch({
  chromePath,
  chromeFlags: ['--headless=new', '--no-sandbox', `--host-resolver-rules=MAP ${HOST}:443 127.0.0.1:${port}, MAP ${HOST}:80 127.0.0.1:${port}`,
    '--no-proxy-server',
    ...(tls ? ['--ignore-certificate-errors', `--ignore-certificate-errors-spki-list=${tls.spki}`] : [])],
});
const categories = ['seo', 'accessibility', 'best-practices', ...(PERF ? ['performance'] : [])];
const rows = [];
let failed = 0;
try {
  for (const p of paths) {
    const url = base + p;
    const r = await lighthouse(url, { port: chrome.port, onlyCategories: categories, output: 'json', logLevel: 'error' });
    const lhr = r.lhr;
    if (lhr.runtimeError) console.warn(`  ! ${p}: ${lhr.runtimeError.code} ${lhr.runtimeError.message}`);
    const score = (c) => (lhr.categories[c] ? Math.round(lhr.categories[c].score * 100) : '-');
    const seo = score('seo');
    const bad = Object.values(lhr.audits)
      .filter((a) => a.score !== null && a.score < 1 && lhr.categories.seo.auditRefs.some((ref) => ref.id === a.id && ref.weight > 0))
      .map((a) => a.id);
    if (seo !== 100) failed++;
    const issues = {};
    for (const [cid, cat] of Object.entries(lhr.categories)) {
      issues[cid] = cat.auditRefs.filter((ref) => ref.weight > 0 && lhr.audits[ref.id].score !== null && lhr.audits[ref.id].score < 1).map((ref) => ref.id);
    }
    rows.push({ path: p, seo, a11y: score('accessibility'), bp: score('best-practices'), ...(PERF ? { perf: score('performance') } : {}), seoIssues: bad.join(', '), issues });
    console.log(`${String(seo).padStart(3)} SEO  ${String(score('accessibility')).padStart(3)} A11Y  ${String(score('best-practices')).padStart(3)} BP${PERF ? `  ${String(score('performance')).padStart(3)} PERF` : ''}  ${p}${bad.length ? `  <- ${bad.join(', ')}` : ''}`);
  }
} finally {
  await chrome.kill();
  server.close();
}
fs.writeFileSync(path.join(os.tmpdir(), 'bote-lighthouse.json'), JSON.stringify(rows, null, 2));
console.log(`\n${rows.length} sayfa olculdu; SEO 100 olmayan: ${failed}. Ayrinti: ${path.join(os.tmpdir(), 'bote-lighthouse.json')}`);
process.exit(failed ? 1 : 0);
