// 3D Simülasyon Merkezi: Arduino ailesinin sahne adaptörü. Genel ders motoru (ders.js) sahneyi bilmez; Arduino'ya özgü her şey
// burada: UNO kartı, breadboard, devre parçaları (LED, direnç, buton, kablo), Sanal/Fiziksel görünüm (gercekci.js), kod çalıştırma
// benzetimi (Blink, buton, trafik ışığı), akım noktaları, delik grubu dokunuşu, pin etiketli keşif işaretleri.
// Sözleşme ders.js başındaki "AİLE TANIMI / ADAPTÖR" bölümündedir; Bilgisayar Donanımı ailesi aynı sözleşmeyi uygular.
import { Vector3, Box3, Matrix4, AdditiveBlending } from 'three';
import { kartYap, breadboardYap, vurguYap, akimYap, pinNokta, delikNokta, rayNokta, anizotropiAyarla } from './modeller.js';
import { devreKur, ledYolu } from './devre.js';
import { DERSLER, KAMERA } from './adimlar.js';
import { KESIF, KATEGORI, kategoriBul } from './kesif-veri.js';
import { gercekciBagla } from './gercekci.js'; // Fiziksel görünüm: aynı sahneye ikinci kaplama
import { $$, html } from './ortak.js';

const GORUNUM = { ustten: [0, 0.995, 0.1], onden: [0, 0.27, 0.96], yandan: [0.96, 0.3, 0.06] };
const pinRozet = (ad) => (/^\d+$/.test(ad) ? (['3', '5', '6', '9', '10', '11'].includes(ad) ? `~${ad}` : ad) : ad.startsWith('GND') ? 'GND' : { '3.3V': '3,3V', VIN: 'Vin' }[ad] || ad);
const _mat = new Matrix4();

// Aile tanımı (ders.js dersMotoru'na verilir)
export const ARDUINO = { id: 'arduino', DERSLER, KAMERA, KESIF, KATEGORI, kategoriBul, GORUNUM, vurguYap, sahneyiKur };

function sahneyiKur(S, { olay, ders, veri }) {
  const duyur = (m) => olay('duyur', m);
  const durum = { bekleme: 1000, ters: false, akim: false, basili: false, direncCikti: false, sureCarpan: 1, delaysiz: false };
  let zaman = null, titresim = null, akimSil = null, akimZaman = null, program = null, simdikiCfg = {};
  const akimlar = {};
  anizotropiAyarla(S.renderer.capabilities.getMaxAnisotropy());
  const kart = kartYap(S.hedefler); S.scene.add(kart.grup);
  const bb = breadboardYap(S.hedefler); S.scene.add(bb.grup);
  const parcalar = ders.devre ? devreKur(ders.devre, S.hedefler) : {};
  for (const p of Object.values(parcalar)) { p.nesne.visible = false; S.scene.add(p.nesne); p.kutular = yerelKutular(p); }
  const G = gercekciBagla({ S, kart, bb, parcalar, html });

  // Kadraj kutusu (Ahmet 01.11: "ekrana tam sığsın, boşluklar dengeli olsun"): adımın hazır kutusu, havadaki
  // parçalar ve istenirse kablolar; parça odaklı adımda o parçanın kendi kutusu. Parçaların yerel kutusu bir kez
  // hesaplanır (görünmez vekiller, ışık lekesi ve parıltı hariç), hedef poza taşınır: geçiş sürerken de doğru.
  const _mat = new Matrix4();
  function yerelKutular(p) {
    const n = p.nesne, sonuc = {};
    for (const [poz, tk] of p.pozlar ? [['takili', 1], ['havada', 0]] : [['takili', 1]]) {
      n.userData.bacak?.(tk);
      const k = new Box3();
      for (const c of n.children) {
        if (!c.isMesh || !c.material || c.material.visible === false || c.material.blending === AdditiveBlending) continue;
        c.updateMatrix();
        if (!c.geometry.boundingBox) c.geometry.computeBoundingBox();
        k.union(c.geometry.boundingBox.clone().applyMatrix4(c.matrix));
      }
      sonuc[poz] = k;
    }
    n.userData.bacak?.(1);
    return sonuc;
  }
  function parcaKutusu(p, poz = 'takili') {
    const n = p.nesne, yer = p.pozlar?.[poz] || p.pozlar?.takili || n.position;
    return (p.kutular[poz] || p.kutular.takili).clone().applyMatrix4(_mat.compose(yer, n.quaternion, n.scale));
  }

  function kameraBul(kam, a = {}) {
    if (typeof kam !== 'string') { const p = parcalar[kam.parca]; return { kutu: parcaKutusu(p, kam.poz || 'takili').expandByScalar(kam.pay ?? 3), yon: kam.yon }; }
    const k = KAMERA[kam] || KAMERA.genel;
    const kutu = new Box3(new Vector3(k.kutu[0], k.kutu[1], k.kutu[2]), new Vector3(k.kutu[3], k.kutu[4], k.kutu[5]));
    for (const ad of a.parca || []) {
      const p = parcalar[ad];
      if (!p) continue;
      const poz = (a.poz && a.poz[ad]) || 'takili';
      if (p.tur === 'kablo' ? k.kablolar : poz !== 'takili') kutu.union(parcaKutusu(p, poz));
    }
    return { kutu, yon: k.yon };
  }

  function noktaBul(ad) {
    const [tur, a, b] = ad.split(':');
    if (tur === 'alan') { const al = kart.alanlar[a] || bb.alanlar[a]; return new Vector3(al[0], al[1] + al[4] / 2 + 1.5, al[2]); }
    if (tur === 'pin') return pinNokta(a).add(new Vector3(0, 2.4, 0));
    if (tur === 'delik') return delikNokta(Number(a), b).add(new Vector3(0, 1, 0));
    if (tur === 'ray') return rayNokta(a.slice(0, -1), a.slice(-1), a.endsWith('+') ? 4 : 28).add(new Vector3(0, 1, 0));
    if (tur === 'parca') { const p = parcalar[a]; const poz = (simdikiCfg.poz || {})[a] || 'takili'; return (p.pozlar ? p.pozlar[poz].clone() : p.nesne.position.clone()).add(p.nesne.userData.tepe || new Vector3(0, 6, 0)); }
    const p = parcalar[tur]; // led1:anot gibi
    const poz = (simdikiCfg.poz || {})[tur] || 'takili';
    return p.pozlar[poz].clone().add(new Vector3(a === 'anot' ? -1.27 : 1.27, a === 'anot' ? -16.6 : -11.6, 0));
  }

  function adimUygula(id, a, ilk = false) {
    simdikiCfg = a;
    zamanDurdur(); akimAc(false);
    Object.assign(durum, { ters: false, basili: false, direncCikti: false, delaysiz: false, bekleme: 1000, sureCarpan: 1 });
    for (const b of $$('[data-eylem]')) b.setAttribute('aria-pressed', String(['1000', '1'].includes(b.dataset.deger)));
    if (parcalar.led1) parcalar.led1.nesne.rotation.y = 0;
    bb.rontgen(false); bb.grupGoster([]);
    ledleriSondur(); kart.ledOn(Boolean(a.program));
    // parçalar
    const gorunen = new Set(a.parca || []);
    for (const [ad, p] of Object.entries(parcalar)) {
      if (!gorunen.has(ad)) { p.nesne.visible = false; if (p.kutu) p.kutu.userData.etkin = false; continue; }
      if (p.kutu) p.kutu.userData.etkin = true;
      if (p.tur === 'kablo') {
        if (!p.nesne.visible) { p.nesne.visible = true; p.nesne.userData.buyut(ilk ? 1 : 0); if (!ilk) S.tween(700, (k) => p.nesne.userData.buyut(k), true); }
        continue;
      }
      const pozAd = (a.poz && a.poz[ad]) || 'takili';
      const hedef = p.pozlar[pozAd], tk1 = pozAd === 'takili' ? 1 : 0;
      if (!p.nesne.visible) { p.nesne.visible = true; p.nesne.position.copy(hedef).add(new Vector3(0, ilk ? 0 : 14, 0)); p.tk = tk1; p.nesne.userData.bacak?.(tk1); }
      if (!p.nesne.position.equals(hedef)) {
        const p0 = p.nesne.position.clone(), tk0 = p.tk ?? tk1; p.tk = tk1;
        S.tween(650, (k) => { p.nesne.position.lerpVectors(p0, hedef, k); p.nesne.userData.bacak?.(tk0 + (tk1 - tk0) * k); }, true);
      }
    }
    if (parcalar.r2 && gorunen.has('r2')) parcalar.r2.nesne.visible = true;
    S.golgeYenile();
    // adım etiketleri (vurgu kutularını, ipucunu ve kamerayı ders motoru koyar)
    S.etiketKoy((a.etiket || []).map(([n, metin, tur]) => ({ nokta: noktaBul(n), metin, tur })));
    program = null;
    if (a.program) programBaslat(a.program);
    S.iste();
  }

  // ---------------------------------------------------------- benzetim
  const kodSatirlari = veri.kod || [];
  function kodFazlari() {
    const dongu = kodSatirlari.findIndex((k) => k.startsWith('void loop'));
    const fazlar = []; let grup = [];
    for (let i = dongu + 1; i < kodSatirlari.length; i++) {
      if (kodSatirlari[i].trim()) grup.push(i + 1);
      if (kodSatirlari[i].includes('delay(')) { fazlar.push(grup); grup = []; }
    }
    return fazlar;
  }
  const FAZ = kodFazlari();
  function kodVurgula(satirlar) {
    for (const el of $$('.kod-satir.calisiyor')) el.classList.remove('calisiyor');
    for (const n of satirlar || []) for (const el of $$(`.adim.etkin .kod-satir[data-no="${n}"]`)) el.classList.add('calisiyor');
  }
  function satirBul(parca, sonra = 0) { const i = kodSatirlari.findIndex((k, j) => j >= sonra && k.includes(parca)); return i + 1; }

  function zamanDurdur() { clearTimeout(zaman); zaman = null; clearTimeout(titresim); titresim = null; kodVurgula([]); }
  function ledleriSondur() { for (const p of Object.values(parcalar)) if (p.tur === 'led') p.nesne.userData.ac(false); kart.ledL(false); for (const a of Object.values(akimlar)) a.yanik = false; }
  function programBaslat(ad) {
    zamanDurdur(); program = ad;
    if (ad === 'blink') { const dongu = (acik) => { yak13(acik); kodVurgula(FAZ[acik ? 0 : 1]); zaman = setTimeout(() => dongu(!acik), durum.bekleme); }; dongu(true); }
    if (ad === 'buton') butonGuncelle();
    if (ad === 'trafik') trafik(0);
  }
  function yak13(acik) {
    kart.ledL(acik);
    const yan = acik && !durum.ters;
    parcalar.led1?.nesne.userData.ac(yan);
    akimYanik('led1', yan); S.iste();
  }
  function butonGuncelle() {
    if (!parcalar.buton) return;
    parcalar.buton.nesne.userData.bas(durum.basili);
    clearTimeout(titresim); titresim = null;
    const ifS = satirBul('digitalRead'), yuksekS = satirBul('HIGH', ifS), elseS = satirBul('else'), dusukS = satirBul('LOW', elseS - 1);
    if (durum.direncCikti && !durum.basili) {
      const kararsiz = () => { const v = Math.random() < 0.5; yak13(v); kodVurgula(v ? [ifS, yuksekS] : [ifS, elseS, dusukS]); titresim = setTimeout(kararsiz, 90 + Math.random() * 380); };
      kararsiz();
    } else { yak13(durum.basili); kodVurgula(durum.basili ? [ifS, yuksekS] : [ifS, elseS, dusukS]); }
    S.iste();
  }
  const RENK_PARCA = { kirmizi: 'ledK', sari: 'ledS', yesil: 'ledY' };
  function trafik(i) {
    const sira = veri.trafikSirasi?.length ? veri.trafikSirasi : [{ isiklar: ['kirmizi'], sure: 3000 }, { isiklar: ['yesil'], sure: 3000 }, { isiklar: ['sari'], sure: 1000 }];
    if (durum.delaysiz) { // bekleme yok: ışıklar göz izleyemeyecek kadar hızlı değişir, üçü de soluk yanıyor gibi görünür
      for (const [renk, ad] of Object.entries(RENK_PARCA)) { parcalar[ad].nesne.userData.ac(0.35); akimYanik(ad, true); }
      kodVurgula(FAZ.flat()); S.iste(); return;
    }
    const f = sira[i % sira.length];
    for (const [renk, ad] of Object.entries(RENK_PARCA)) { const yan = f.isiklar.includes(renk); parcalar[ad].nesne.userData.ac(yan); akimYanik(ad, yan); }
    kodVurgula(FAZ[i % sira.length]);
    S.iste();
    zaman = setTimeout(() => trafik(i + 1), f.sure * durum.sureCarpan);
  }

  // ---------------------------------------------------------- akım noktaları (istenince, 30 kare/sn, 45 sn sonra kendiliğinden kapanır)
  function akimYollari() {
    if (Object.keys(akimlar).length) return;
    const ekle = (ad, kPin, led, r) => { akimlar[ad] = { akim: akimYap(S.scene, ledYolu(parcalar[kPin], parcalar[led], parcalar[r], parcalar.kgnd)), yanik: false }; };
    if (ders.devre === 'led' || ders.devre === 'buton') ekle('led1', 'k13', 'led1', 'r1');
    if (ders.devre === 'trafik') { ekle('ledK', 'kK', 'ledK', 'rK'); ekle('ledS', 'kS', 'ledS', 'rS'); ekle('ledY', 'kY', 'ledY', 'rY'); }
  }
  function akimYanik(ad, yanik) { const a = akimlar[ad]; if (a) { a.yanik = yanik; a.akim.gorunur(durum.akim && yanik); } }
  function akimAc(acik) {
    durum.akim = acik;
    clearTimeout(akimZaman);
    if (acik) {
      akimYollari();
      if (ders.devre === 'led' || ders.devre === 'buton') akimlar.led1.yanik = parcalar.led1.nesne.userData.yanik ?? akimlar.led1.yanik;
      akimSil ??= S.yavasGuncelleyici((t, dt) => { if (!durum.akim) return false; let v = false; for (const a of Object.values(akimlar)) if (a.yanik) { a.akim.ilerlet(dt); v = true; } return v; });
      akimZaman = setTimeout(() => { akimAc(false); for (const b of $$('[data-eylem="akim"]')) b.setAttribute('aria-pressed', 'false'); }, 45000);
    } else if (akimSil) { akimSil(); akimSil = null; }
    for (const a of Object.values(akimlar)) a.akim.gorunur(acik && a.yanik);
    S?.iste();
  }


  // ---------------------------------------------------------- kart düğmeleri (ders.js [data-eylem] tıklamasında çağırır)
  function eylem(ey, b) {
    const basili = (deger) => b.setAttribute('aria-pressed', String(deger));
    if (ey === 'akim') { akimAc(!durum.akim); basili(durum.akim); }
    if (ey === 'hiz') { durum.bekleme = Number(b.dataset.deger); for (const x of $$('[data-eylem="hiz"]', b.parentElement)) x.setAttribute('aria-pressed', String(x === b)); if (program === 'blink') programBaslat('blink'); }
    if (ey === 'sure') { durum.sureCarpan = Number(b.dataset.deger); for (const x of $$('[data-eylem="sure"]', b.parentElement)) x.setAttribute('aria-pressed', String(x === b)); if (program === 'trafik') programBaslat('trafik'); }
    if (ey === 'ters') { durum.ters = !durum.ters; basili(durum.ters); parcalar.led1.nesne.rotation.y = durum.ters ? Math.PI : 0; S.golgeYenile(); S.etiketKoy(durum.ters ? [{ nokta: noktaBul('parca:led1'), metin: 'Uzun bacak artık 16. sütunda' }] : []); programBaslat(program); }
    if (ey === 'rontgen') { const acik = b.getAttribute('aria-pressed') !== 'true'; basili(acik); bb.rontgen(acik); S.iste(); duyur(acik ? 'Röntgen açık: içteki metal şeritler görünüyor' : 'Röntgen kapalı'); }
    if (ey === 'direnc-cikar') { durum.direncCikti = !durum.direncCikti; basili(durum.direncCikti); parcalar.r2.nesne.visible = !durum.direncCikti; S.golgeYenile(); butonGuncelle(); }
    if (ey === 'delaysiz') { durum.delaysiz = !durum.delaysiz; basili(durum.delaysiz); programBaslat('trafik'); }
  }
  // buton: basılı tutulduğu sürece basılı (fare, dokunma, klavye)
  const butonBas = (deger) => { if (program !== 'buton' && !durum.butonDene) return; durum.basili = deger; butonGuncelle(); };
  document.addEventListener('pointerdown', (e) => { const b = e.target.closest('[data-eylem="buton"]'); if (b) { b.setPointerCapture?.(e.pointerId); butonBas(true); } });
  for (const tur of ['pointerup', 'pointercancel', 'lostpointercapture']) document.addEventListener(tur, (e) => { if (e.target.closest?.('[data-eylem="buton"]') && durum.basili) butonBas(false); });
  document.addEventListener('keydown', (e) => { if ((e.key === ' ' || e.key === 'Enter') && e.target.closest?.('[data-eylem="buton"]') && !e.repeat) { e.preventDefault(); butonBas(true); } });
  document.addEventListener('keyup', (e) => { if ((e.key === ' ' || e.key === 'Enter') && e.target.closest?.('[data-eylem="buton"]')) butonBas(false); });

  // ---------------------------------------------------------- keşif: adıma bağlı noktalar
  // Kart ve breadboard noktaları sabittir (kesifNoktalari); o adımda görünen parçaların noktaları ve pin etiketleri adıma bağlıdır.
  function kesifEk(a) {
    const liste = [];
    for (const [ad, p] of Object.entries(parcalar)) {
      if (!(a.parca || []).includes(ad)) continue;
      const tk = ((a.poz || {})[ad] || 'takili') === 'takili' ? 1 : 0;
      for (const [id, yerel] of p.nesne.userData.kesifYerleri?.(tk) || []) liste.push({ id, nesne: p.nesne, yerel, ozel: p.ozel?.[id] });
    }
    // pinler: ancak ekranda pin aralığı işaret boyunu geçince (yakın çekimde) görünür
    for (const pin of kart.pinler) liste.push({ id: pin.kesif, nokta: pin.nokta, ozel: pin.ozel, rozet: pinRozet(pin.ad), adim: 2.54 });
    return liste;
  }

  // ---------------------------------------------------------- sahneye dokunuş
  function dokunuldu(v, nokta) {
    const a = simdikiCfg;
    if (v.bb && nokta && (a.kontrol || []).includes('delik')) {
      const g = bb.grupBul(nokta);
      if (g) {
        bb.grupGoster(g.delikler);
        S.etiketKoy([{ nokta: g.delikler[0].clone().add(new Vector3(0, 1.5, 0)), metin: `${g.ad}: bağlı`, tur: 'yesil' }]);
        duyur(`${g.ad} birbirine bağlı`);
        return true;
      }
    }
    if (v.parca === 'buton' && program === 'buton') { durum.basili = true; butonGuncelle(); setTimeout(() => { durum.basili = false; butonGuncelle(); }, 700); return true; }
    return false;
  }

  const ipucu = (a) => ((a.kontrol || []).includes('delik') ? 'delik' : (a.dokun ? 'dokun' : ''));
  const alanlar = { ...bb.alanlar, ...kart.alanlar }; // kartın adı önce aranır (kart.alanlar[ad] || bb.alanlar[ad])
  const kutuBul = (ad) => { const al = alanlar[ad]; return al ? new Box3(new Vector3(al[0] - al[3] / 2, al[1] - al[4] / 2, al[2] - al[5] / 2), new Vector3(al[0] + al[3] / 2, al[1] + al[4] / 2, al[2] + al[5] / 2)) : null; };
  const durdur = () => { zamanDurdur(); akimAc(false); };

  return {
    kesifNoktalari: [...kart.kesifNoktalari, ...bb.kesifNoktalari], alanlar, noktaBul, kutuBul, adimUygula, eylem, dokunuldu, durdur,
    kesifEk, kameraBul, ipucu, olcumEk: { kart, bb, parcalar, gercekci: G },
  };
}
