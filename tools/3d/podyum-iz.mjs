// Podyum görsellerinin kaynak izi: üreteç (podyum.mjs) her tam çalışmada tools/3d/podyum/<aile>.kaynak.json'a yazar,
// test (test/podyum.test.mjs) aynı dosyalardan yeniden hesaplar. Tutmazsa sahneye giren modüllerden biri ya da
// üreteç değişmiştir ve görseller eskimiş olabilir: node tools/3d/podyum.mjs yeniden çalıştırılır.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// kok: tools/3d; dosyalar: ona göre göreli yollar (src/modeller.js, podyum.mjs ...)
export function kaynakIzi(kok, dosyalar) {
  const h = crypto.createHash('sha1');
  for (const f of [...dosyalar].sort()) h.update(`${f}\n`).update(fs.readFileSync(path.join(kok, f))).update('\n');
  return h.digest('hex').slice(0, 12);
}
