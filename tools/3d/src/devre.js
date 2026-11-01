// Derslerin devreleri: parçaların breadboard'daki yerleri, havada/takılı pozları ve akım yolları.
import { Vector3 } from 'three';
import { pinNokta, delikNokta, rayNokta, ledYap, direncYap, butonYap, kabloYap, ikiNoktayaKoy, BB_UST, BB } from './modeller.js';

const R220 = ['kirmizi', 'kirmizi', 'kahve', 'altin'];
const R10K = ['kahve', 'siyah', 'turuncu', 'altin'];
const HAVA = 26;
const RENK_AD = { kirmizi: 'Kırmızı', sari: 'Sarı', yesil: 'Yeşil', turuncu: 'Turuncu', siyah: 'Siyah', mavi: 'Mavi', mor: 'Mor', kahve: 'Kahverengi', altin: 'Altın' };
const DEGER = { [R220.join()]: '220 Ω direnç', [R10K.join()]: '10 kΩ direnç' };

// Parçanın dokunma vekillerini (modeller.js'de kurulur) seçime kaydeder; parça adı ve kartta görünecek özel ad eklenir.
// Vekiller parçanın içindedir: parça gizliyken seçilmez (sahne.js görünürlüğe bakar).
function vekilKaydet(parca, ad, hedefler, ozel = {}) {
  for (const v of parca.nesne.userData.vekiller || []) {
    v.userData.parca = ad;
    if (ozel[v.userData.kesif]) v.userData.ozel = ozel[v.userData.kesif];
    hedefler.push(v);
  }
}

function led(renk, anotSutun, satir = 'e') {
  const n = ledYap(renk);
  const a = delikNokta(anotSutun, satir), k = delikNokta(anotSutun + 1, satir);
  const takili = new Vector3((a.x + k.x) / 2, BB_UST, a.z);
  n.position.copy(takili);
  const ozel = { led: `${RENK_AD[renk]} LED`, anot: 'uzun bacak', katot: 'kısa bacak' };
  return { nesne: n, tur: 'led', kavram: 'led', anotSutun, satir, ozel, pozlar: { takili, havada: takili.clone().add(new Vector3(0, HAVA, 0)) } };
}
function direnc(bantlar, a, b, kavram = 'direnc') {
  const n = direncYap(bantlar, a.distanceTo(b));
  ikiNoktayaKoy(n, a, b);
  const takili = n.position.clone();
  const ozel = { direnc: DEGER[bantlar.join()], 'renk-bantlari': `${bantlar.map((r) => RENK_AD[r].toLocaleLowerCase('tr')).join(', ')}: ${DEGER[bantlar.join()].replace(' direnç', '')}` };
  return { nesne: n, tur: 'direnc', kavram, a, b, ozel, pozlar: { takili, havada: takili.clone().add(new Vector3(0, HAVA * 0.75, 0)) } };
}
function kablo(bas, son, renk, uclar = '') {
  return { nesne: kabloYap(bas, son, renk), tur: 'kablo', kavram: 'kablo', bas, son, ozel: { kablo: `${RENK_AD[renk]} kablo${uclar ? `, ${uclar}` : ''}` } };
}

export function devreKur(tur, hedefler) {
  const p = {};
  if (tur === 'led' || tur === 'buton') {
    p.led1 = led('kirmizi', 15);
    p.r1 = direnc(R220, delikNokta(16, 'c'), rayNokta('yakin', '-', 16));
    p.k13 = kablo(pinNokta(13), delikNokta(15, 'a'), 'turuncu', '13. pin ile 15a deliği arasında');
    p.kgnd = kablo(pinNokta('GND-D'), rayNokta('yakin', '-', 14), 'siyah', 'GND pini ile eksi (−) rayı arasında');
  }
  if (tur === 'buton') {
    const n = butonYap();
    const takili = new Vector3((delikNokta(20, 'e').x + delikNokta(22, 'e').x) / 2, BB_UST, BB.z);
    n.position.copy(takili);
    p.buton = { nesne: n, tur: 'buton', kavram: 'buton', pozlar: { takili, havada: takili.clone().add(new Vector3(0, HAVA, 0)) } };
    p.r2 = direnc(R10K, delikNokta(22, 'c'), rayNokta('yakin', '-', 22));
    p.k5v = kablo(pinNokta('5V'), rayNokta('yakin', '+', 24), 'kirmizi', '5V pini ile artı (+) rayı arasında');
    p.kplus = kablo(rayNokta('yakin', '+', 20), delikNokta(20, 'a'), 'kirmizi', 'artı (+) rayı ile 20a deliği arasında');
    p.k2 = kablo(pinNokta(2), delikNokta(22, 'd'), 'sari', '2. pin ile 22d deliği arasında');
  }
  if (tur === 'trafik') {
    p.ledK = led('kirmizi', 8); p.ledS = led('sari', 15); p.ledY = led('yesil', 22);
    p.rK = direnc(R220, delikNokta(9, 'c'), rayNokta('yakin', '-', 9));
    p.rS = direnc(R220, delikNokta(16, 'c'), rayNokta('yakin', '-', 16));
    p.rY = direnc(R220, delikNokta(23, 'c'), rayNokta('yakin', '-', 23));
    p.kK = kablo(pinNokta(10), delikNokta(8, 'a'), 'kirmizi', '10. pin ile 8a deliği arasında');
    p.kS = kablo(pinNokta(9), delikNokta(15, 'a'), 'sari', '9. pin ile 15a deliği arasında');
    p.kY = kablo(pinNokta(8), delikNokta(22, 'a'), 'yesil', '8. pin ile 22a deliği arasında');
    p.kgnd = kablo(pinNokta('GND-D'), rayNokta('yakin', '-', 14), 'siyah', 'GND pini ile eksi (−) rayı arasında');
  }
  for (const [ad, parca] of Object.entries(p)) vekilKaydet(parca, ad, hedefler, parca.ozel);
  return p;
}

// Bir LED devresinde akımın yolu: pin -> kablo -> şerit -> LED -> şerit -> direnç -> eksi ray -> GND kablosu -> GND pini
export function ledYolu(kPin, ledP, r, kGnd) {
  const y = BB_UST + 0.8, gy = BB_UST + 6.2, ry = BB_UST + r.nesne.userData.H;
  const yol = [kPin.bas.clone().setY(kPin.bas.y + 0.4), ...kPin.nesne.userData.yol];
  const anot = delikNokta(ledP.anotSutun, ledP.satir, y), katot = delikNokta(ledP.anotSutun + 1, ledP.satir, y);
  yol.push(kPin.son.clone().setY(y), anot, anot.clone().setY(gy), katot.clone().setY(gy), katot);
  yol.push(r.a.clone().setY(y), r.a.clone().setY(ry), r.b.clone().setY(ry), r.b.clone().setY(y), kGnd.son.clone().setY(y));
  yol.push(...[...kGnd.nesne.userData.yol].reverse(), kGnd.bas.clone().setY(kGnd.bas.y + 0.4));
  return yol;
}
