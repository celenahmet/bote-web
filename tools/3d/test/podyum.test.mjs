// Keşif kartı podyum görselleri: liste, dosyalar ve kaynak izi tutarlı mı (node --test 'tools/3d/test/*.test.mjs').
// Görselleri üretmez (Chrome ister); tutmazsa node tools/3d/podyum.mjs yeniden çalıştırılır.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { KESIF } from '../src/kesif-veri.js';
import { kaynakIzi } from '../podyum-iz.mjs';

const UC = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'); // tools/3d
const KOK = path.resolve(UC, '../..');
const HEDEF_KB = 20; // podyum.mjs ile aynı üst sınır
const aileler = fs.readdirSync(path.join(UC, 'podyum')).filter((f) => f.endsWith('.json') && !f.endsWith('.kaynak.json')).map((f) => f.slice(0, -5));
const oku = (f) => JSON.parse(fs.readFileSync(path.join(UC, 'podyum', f), 'utf8'));
const dosyalari = (e) => (e.ayri ? [`${e.dosya}-sanal.webp`, `${e.dosya}-fiziksel.webp`] : [`${e.dosya}.webp`]);

test('podyum: en az bir aile listesi var ve her listenin kaynak izi dosyası var', () => {
  assert.ok(aileler.includes('arduino'), 'tools/3d/podyum/arduino.json yok');
  for (const a of aileler) assert.ok(fs.existsSync(path.join(UC, 'podyum', `${a}.kaynak.json`)), `${a}.kaynak.json yok: node tools/3d/podyum.mjs --aile ${a}`);
});

for (const aile of aileler) {
  const liste = oku(`${aile}.json`), meta = oku(`${aile}.kaynak.json`);
  const klasor = path.join(KOK, liste.yol.replace(/^\//, ''));

  test(`podyum ${aile}: listedeki her dosya var, ${HEDEF_KB} KB'yi aşmıyor, sürüm içerikle aynı`, () => {
    for (const [id, ozeller] of Object.entries(liste.gorseller)) {
      for (const [ozel, e] of Object.entries(ozeller)) {
        const icerik = dosyalari(e).map((f) => {
          const p = path.join(klasor, f);
          assert.ok(fs.existsSync(p), `${id}${ozel ? ` [${ozel}]` : ''}: ${f} yok`);
          const b = fs.readFileSync(p);
          assert.ok(b.length <= HEDEF_KB * 1024, `${f} ${(b.length / 1024).toFixed(1)} KB`);
          return b;
        });
        // sürüm, adresteki ?v= önbellek anahtarı: dosya değişip liste eski kalırsa tarayıcı eski görseli gösterir
        assert.equal(e.surum, crypto.createHash('sha1').update(Buffer.concat(icerik)).digest('hex').slice(0, 8), `${id} [${ozel}]: sürüm dosyayla tutmuyor`);
      }
    }
  });

  test(`podyum ${aile}: klasörde listede olmayan görsel yok`, () => {
    const kullanilan = new Set(Object.values(liste.gorseller).flatMap((o) => Object.values(o).flatMap(dosyalari)));
    const fazla = fs.readdirSync(klasor).filter((f) => f.endsWith('.webp') && !kullanilan.has(f));
    assert.deepEqual(fazla, []);
  });

  test(`podyum ${aile}: her keşif kimliğinin görseli var ya da gerekçeli olarak üretilmiyor`, () => {
    const uretilmez = Object.keys(meta.uretilmez || {});
    const eslesir = (id) => uretilmez.some((k) => (k.endsWith('*') ? id.startsWith(k.slice(0, -1)) : k === id));
    const eksik = Object.keys(KESIF).filter((id) => !liste.gorseller[id] && !eslesir(id));
    assert.deepEqual(eksik, [], 'yeni keşif kimliği: podyum.mjs kimlikler tablosuna ya da uretilmez listesine ekle');
    const bilinmeyen = Object.keys(liste.gorseller).filter((id) => !KESIF[id]);
    assert.deepEqual(bilinmeyen, [], 'listede keşifte olmayan kimlik');
  });

  test(`podyum ${aile}: görseller güncel kaynaktan (modeller, devre, gercekci*, üreteç)`, () => {
    for (const f of meta.dosyalar) assert.ok(fs.existsSync(path.join(UC, f)), `kaynak dosya yok: ${f}`);
    assert.equal(kaynakIzi(UC, meta.dosyalar), meta.iz, 'sahne kaynağı değişti, görseller eskimiş olabilir: node tools/3d/podyum.mjs');
  });
}
