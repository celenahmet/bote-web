// Özgür Mod devre çözücü birim testleri: node --test tools/3d/test/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { devreCoz, devreAyikla, noktaUygun, grupNoktalari, grupAnahtari, adimMesafe, HAZIR, noktaAdi } from '../src/devreCoz.js';

const kopya = (ad) => structuredClone(HAZIR[ad]);
const turler = (s) => s.uyarilar.map((u) => u.tur);
const degistir = (d, id, alanlar) => { const p = d.parcalar.find((x) => x.id === id); Object.assign(p, alanlar); return d; };
const cikar = (d, id) => { d.parcalar = d.parcalar.filter((x) => x.id !== id); return d; };
const ekle = (d, p) => { d.parcalar.push(p); return d; };

test('Ders 2 doğru devre: HIGH yarısında LED yanar, LOW yarısında söner, uyarı yok', () => {
  const d = kopya('ders-2');
  const acik = devreCoz(d, { faz: true }), kapali = devreCoz(d, { faz: false });
  assert.equal(acik.calisiyor, true);
  assert.equal(acik.ledler.led1.yanik, true);
  assert.ok(acik.ledler.led1.akim > 12 && acik.ledler.led1.akim < 15, `akım ${acik.ledler.led1.akim} mA`);
  assert.equal(acik.l13, true);
  assert.equal(kapali.ledler.led1.yanik, false);
  assert.deepEqual(acik.uyarilar, []);
  assert.match(acik.tamam, /13\. pin LED'i yakıp söndürüyor/);
});

test('ters LED: yanmaz ve "ters takılı" uyarısı çıkar', () => {
  const d = degistir(kopya('ders-2'), 'led1', { anot: 'h:16:e', katot: 'h:15:e' });
  const s = devreCoz(d, { faz: true });
  assert.equal(s.ledler.led1.yanik, false);
  assert.ok(turler(s).includes('led-ters'));
  assert.equal(s.tamam, null);
});

test('dirençsiz LED: hata, simülasyon LED\'i yakmaz', () => {
  const d = cikar(kopya('ders-2'), 'r1');
  ekle(d, { id: 'kx', tur: 'kablo', renk: 'siyah', bas: 'h:16:c', son: 'r:yakin-:16' });
  const s = devreCoz(d, { faz: true });
  assert.equal(s.ledler.led1.yanik, false);
  const u = s.uyarilar.find((x) => x.tur === 'direncsiz');
  assert.ok(u); assert.equal(u.seviye, 'hata'); assert.deepEqual(u.parcalar, ['led1']);
});

test('5V-GND kısa devre: devre durur', () => {
  const d = ekle(kopya('ders-2'), { id: 'kk', tur: 'kablo', renk: 'kirmizi', bas: 'p:5V', son: 'r:yakin-:20' });
  const s = devreCoz(d, { faz: true });
  assert.equal(s.calisiyor, false);
  assert.equal(s.durdu, 'kisa-devre');
  assert.equal(s.ledler.led1.yanik, false);
  const u = s.uyarilar[0];
  assert.equal(u.tur, 'kisa-devre'); assert.equal(u.seviye, 'hata');
  assert.match(u.metin, /5V doğrudan GND/);
  assert.ok(u.parcalar.includes('kk'));
});

test('çıkış pini doğrudan GND\'ye: kısa devre', () => {
  const d = ekle(kopya('ders-2'), { id: 'kk', tur: 'kablo', renk: 'turuncu', bas: 'h:15:b', son: 'r:yakin-:20' });
  const s = devreCoz(d, { faz: true });
  assert.equal(s.durdu, 'kisa-devre');
  assert.match(s.uyarilar[0].metin, /13\. pin doğrudan GND/);
});

test('kopuk GND: devre tamamlanmamış, katot tarafı GND\'ye ulaşmıyor', () => {
  const s = devreCoz(cikar(kopya('ders-2'), 'kgnd'), { faz: true });
  assert.equal(s.ledler.led1.yanik, false);
  const u = s.uyarilar.find((x) => x.tur === 'tamamlanmamis');
  assert.ok(u); assert.match(u.metin, /katot/);
});

test('kanal ayrımı: kanalın öbür yarısına gelen kablo LED\'e ulaşmaz', () => {
  assert.notEqual(grupAnahtari('h:15:e'), grupAnahtari('h:15:f'));
  assert.equal(grupAnahtari('h:15:a'), grupAnahtari('h:15:e'));
  const d = degistir(kopya('ders-2'), 'k13', { son: 'h:15:j' });
  const s = devreCoz(d, { faz: true });
  assert.equal(s.ledler.led1.yanik, false);
  assert.match(s.uyarilar.find((x) => x.tur === 'tamamlanmamis').metin, /anot/);
});

test('kanalı aşan LED: e ve f satırları ayrı şeritlere bağlanır', () => {
  const d = { parcalar: [
    { id: 'l', tur: 'led', renk: 'yesil', anot: 'h:10:e', katot: 'h:10:f' },
    { id: 'r', tur: 'direnc', deger: 220, a: 'h:10:h', b: 'r:uzak-:10' },
    { id: 'k1', tur: 'kablo', renk: 'turuncu', bas: 'p:13', son: 'h:10:a' },
    { id: 'k2', tur: 'kablo', renk: 'siyah', bas: 'p:GND2', son: 'r:uzak-:28' },
  ], program: { tur: 'blink', pin: 13, bekleme: 500 } };
  const s = devreCoz(d, { faz: true });
  assert.equal(s.ledler.l.yanik, true);
  assert.deepEqual(s.uyarilar, []);
});

test('ray bütünlüğü: ray boydan boya tek parça, alt ve üst raylar ayrı', () => {
  assert.equal(grupNoktalari('r:yakin-:2').length, 25);
  assert.equal(grupAnahtari('r:yakin-:2'), grupAnahtari('r:yakin-:30'));
  const uc = degistir(kopya('ders-2'), 'kgnd', { son: 'r:yakin-:30' });
  degistir(uc, 'r1', { a: 'h:16:c', b: 'r:yakin-:16' });
  assert.equal(devreCoz(uc, { faz: true }).ledler.led1.yanik, true);
  const ayri = degistir(kopya('ders-2'), 'kgnd', { son: 'r:uzak-:14' });
  const s = devreCoz(ayri, { faz: true });
  assert.equal(s.ledler.led1.yanik, false);
  assert.ok(turler(s).includes('tamamlanmamis'));
});

test('Ders 3 buton: basılı değilken LOW ve LED sönük, basılıyken HIGH ve LED yanık', () => {
  const d = kopya('ders-3');
  const birak = devreCoz(d, { basili: [] }), bas = devreCoz(d, { basili: ['buton'] });
  assert.equal(birak.giris.deger, 'LOW'); assert.equal(birak.ledler.led1.yanik, false);
  assert.equal(bas.giris.deger, 'HIGH'); assert.equal(bas.ledler.led1.yanik, true);
  assert.deepEqual(bas.uyarilar, []);
  assert.match(bas.tamam, /butona basınca LED yanıyor/);
});

test('çekme direnci yok: giriş boşta, kararsız okuma uyarısı ve titreme', () => {
  const d = cikar(kopya('ders-3'), 'r2');
  const s1 = devreCoz(d, { basili: [], kararsiz: true }), s0 = devreCoz(d, { basili: [], kararsiz: false });
  assert.equal(s1.giris.deger, 'KARARSIZ'); assert.equal(s1.giris.bosta, true);
  assert.equal(s1.ledler.led1.yanik, true); assert.equal(s0.ledler.led1.yanik, false);
  const u = s1.uyarilar.find((x) => x.tur === 'cekme-yok');
  assert.ok(u); assert.match(u.metin, /10 kΩ çekme direnci/);
  assert.equal(devreCoz(d, { basili: ['buton'] }).giris.deger, 'HIGH');
});

test('buton girişine kablo yok: tamamlanmamış', () => {
  const s = devreCoz(cikar(kopya('ders-3'), 'k2'), { basili: ['buton'] });
  assert.match(s.uyarilar.find((x) => x.tur === 'tamamlanmamis').metin, /2\. pin \(giriş\) devreye bağlı değil/);
});

test('yalnız butona basınca oluşan kısa devre: basılmadan çalışır, basınca durur', () => {
  const d = { parcalar: [
    { id: 'b', tur: 'buton', sutun: 5 },
    { id: 'k1', tur: 'kablo', renk: 'kirmizi', bas: 'p:5V', son: 'h:5:a' },
    { id: 'k2', tur: 'kablo', renk: 'siyah', bas: 'p:GND1', son: 'h:7:a' },
  ], program: { tur: 'blink', pin: 13, bekleme: 1000 } };
  const s = devreCoz(d, { basili: [] });
  assert.equal(s.calisiyor, true);
  assert.match(s.uyarilar.find((x) => x.tur === 'kisa-devre').metin, /Butona basılınca kısa devre/);
  assert.equal(devreCoz(d, { basili: ['b'] }).durdu, 'kisa-devre');
});

test('pin programda kullanılmıyor: kablo 12\'de, program 13\'te; tek dokunuşla düzeltme önerir', () => {
  const d = degistir(kopya('ders-2'), 'k13', { bas: 'p:12' });
  const s = devreCoz(d, { faz: true });
  assert.equal(s.ledler.led1.yanik, false);
  const u = s.uyarilar.find((x) => x.tur === 'pin-kullanilmiyor');
  assert.ok(u); assert.equal(u.pin, '12'); assert.deepEqual(u.eylem && u.eylem.pin, 12);
  assert.ok(!turler(s).includes('tamamlanmamis'), 'pin uyarısı yeterli, ayrıca tamamlanmamış denmez');
  const duzelt = devreCoz({ ...d, program: { tur: 'blink', pin: 12, bekleme: 1000 } }, { faz: true });
  assert.equal(duzelt.ledler.led1.yanik, true);
  assert.equal(duzelt.l13, false);
});

test('15\'ten 13. sütuna taşıma: LED anotu ve kablo 13. sütunda, LED yanar', () => {
  const d = degistir(kopya('ders-2'), 'led1', { anot: 'h:13:e' });
  degistir(d, 'k13', { son: 'h:13:a' });
  assert.equal(adimMesafe('h:13:e', 'h:16:e'), 3);
  const s = devreCoz(d, { faz: true });
  assert.equal(s.ledler.led1.yanik, true);
  assert.deepEqual(s.uyarilar, []);
  // yalnız LED taşınır, kablo 15'te kalırsa yanmaz
  const yarim = devreCoz(degistir(kopya('ders-2'), 'led1', { anot: 'h:13:e' }), { faz: true });
  assert.equal(yarim.ledler.led1.yanik, false);
});

test('Ders 4 elle: yalnız HIGH yapılan pindeki LED yanar', () => {
  const s = devreCoz(kopya('ders-4'), {});
  assert.equal(s.ledler.ledK.yanik, true);
  assert.equal(s.ledler.ledS.yanik, false);
  assert.equal(s.ledler.ledY.yanik, false);
  assert.deepEqual(s.cikislar, { 8: 'LOW', 9: 'LOW', 10: 'HIGH' });
  assert.ok(s.tamam);
});

test('10 kΩ ile LED çok sönük: bilgi notu', () => {
  const s = devreCoz(degistir(kopya('ders-2'), 'r1', { deger: 10000 }), { faz: true });
  assert.equal(s.ledler.led1.yanik, true);
  assert.ok(s.ledler.led1.parlaklik < 0.3);
  assert.ok(turler(s).includes('sonuk'));
});

test('RESET GND\'ye bağlı: program çalışmaz', () => {
  const s = devreCoz(ekle(kopya('ders-2'), { id: 'kr', tur: 'kablo', renk: 'mor', bas: 'p:RESET', son: 'r:yakin-:28' }), { faz: true });
  assert.equal(s.calisiyor, false); assert.equal(s.durdu, 'reset');
  assert.deepEqual(s.uyarilar.find((x) => x.tur === 'reset').parcalar, ['kr']);
});

test('güç kapalı: LED yanmaz ama uyarılar yine hesaplanır', () => {
  const s = devreCoz(degistir(kopya('ders-2'), 'led1', { anot: 'h:16:e', katot: 'h:15:e' }), { calisiyor: false });
  assert.equal(s.durdu, 'kapali'); assert.equal(s.ledler.led1.yanik, false);
  assert.ok(turler(s).includes('led-ters'));
});

test('iki bacak aynı şeritte: LED devre dışı kalır', () => {
  const d = degistir(kopya('ders-2'), 'led1', { anot: 'h:15:e', katot: 'h:15:c' });
  const s = devreCoz(d, { faz: true });
  assert.match(s.uyarilar.find((x) => x.tur === 'tamamlanmamis').metin, /aynı bağlantı grubunda/);
});

test('yerleştirme kuralları: mesafe, dolu delik, buton satırı, kenar', () => {
  const p = kopya('ders-2').parcalar;
  assert.equal(noktaUygun(p, 'led', null, 'h:15:e').gecerli, false); // dolu
  assert.equal(noktaUygun(p, 'led', 'h:3:e', 'h:8:e').gecerli, false); // 5 adım
  assert.equal(noktaUygun(p, 'led', 'h:3:e', 'h:7:e').gecerli, true); // 4 adım
  assert.equal(noktaUygun(p, 'direnc', 'h:3:d', 'h:4:d').gecerli, false); // 1 adım
  assert.equal(noktaUygun(p, 'led', null, 'p:12').gecerli, false); // pin
  assert.equal(noktaUygun(p, 'kablo', null, 'p:13').gecerli, false); // pinde kablo var
  assert.equal(noktaUygun(p, 'kablo', null, 'p:12').gecerli, true);
  assert.equal(noktaUygun(p, 'buton', null, 'h:5:c').gecerli, false);
  assert.equal(noktaUygun(p, 'buton', null, 'h:30:f').sutun, 28);
  assert.equal(noktaUygun(p, 'buton', null, 'h:14:e').gecerli, false); // 16e LED'in katodu
});

test('kayıttan gelen devre ayıklanır: geçersiz ve üst üste binen parçalar atılır', () => {
  const d = devreAyikla({ parcalar: [
    { id: 'a', tur: 'led', renk: 'kirmizi', anot: 'h:1:a', katot: 'h:2:a' },
    { id: 'b', tur: 'led', renk: 'kirmizi', anot: 'h:1:a', katot: 'h:3:a' },
    { id: 'c', tur: 'led', renk: 'mor', anot: 'h:5:a', katot: 'h:6:a' },
    { id: 'd', tur: 'direnc', deger: 330, a: 'h:8:a', b: 'h:10:a' },
    { id: 'e', tur: 'kablo', renk: 'mavi', bas: 'p:99', son: 'h:12:a' },
    { id: 'f', tur: 'buton', sutun: 29 },
    { id: 'g', tur: 'kablo', renk: 'mavi', bas: 'p:7', son: 'h:12:a', fazla: '<script>' },
    'bozuk',
  ], program: { tur: 'buton', giris: 4, cikis: 4 } });
  assert.deepEqual(d.parcalar.map((p) => p.id), ['a', 'g']);
  assert.equal(d.parcalar[1].fazla, undefined);
  assert.deepEqual(d.program, { tur: 'buton', giris: 4, cikis: 13 });
  assert.deepEqual(devreAyikla(null).parcalar, []);
});

test('nokta adları kullanıcıya okunur biçimde', () => {
  assert.equal(noktaAdi('h:15:e'), '15e');
  assert.equal(noktaAdi('r:yakin-:16', true), 'alt − rayı, 16. sütun');
  assert.equal(noktaAdi('p:GND-D'), 'GND');
  assert.equal(noktaAdi('p:0'), '0. pin (RX)');
});
