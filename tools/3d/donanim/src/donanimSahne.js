// Bilgisayar Donanımı sahnesi: modelleri kurar, keşif/alan/nokta tablolarını verir, adım durumlarını ve düğme
// eylemlerini yürütür. Ortak sahne motoru (S) dışarıdan verilir; bu dosya yalnız ona bağlanır, ortak dosyaya dokunmaz.
//
// Arayüz (ana oturumla anlaşıldığı gibi):
//   sahneyiKur(S, { olay }) -> { kesifNoktalari, alanlar, noktaBul, kutuBul, adimUygula, eylem, durdur, dokunuldu }
//   olay('duyur', metin): ekran okuyucu duyurusu. Etiketler S.etiketKoy ile doğrudan konur (adım etiketleri korunur).
import { Vector3, Box3, Mesh, RingGeometry, MeshBasicMaterial, DoubleSide } from 'three';
import { modelleriKur } from './modeller.js';
import { KASA, MON, HOPARLOR, KLAVYE, FARE, YAZICI, MIKROFON, KULAKLIK, KAMERA_PARCA, USB_BELLEK } from './yerlesim.js';
import { COZUNURLUK, ETIKET_COZ } from './ekran.js';

const V = (x, y, z) => new Vector3(x, y, z);
const KUCUK = { I: 'ı', 'İ': 'i', Ş: 'ş', Ğ: 'ğ', Ü: 'ü', Ö: 'ö', Ç: 'ç' };
const kucult = (a) => KUCUK[a] || a.toLowerCase();
const DEMO = ['M', 'E', 'R', 'H', 'A', 'B', 'A', ' ', 'D', 'Ü', 'N', 'Y', 'A'];
const IMLEC = [{ x: 760, y: 230 }, { x: 70, y: 150 }, { x: 330, y: 86 }, { x: 420, y: 250 }, { x: 800, y: 430 }, { x: 600, y: 190 }];
const sayiYaz = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const ease = (k) => k * k * (3 - 2 * k);

// kablo -> kasa girişi ve konuşan cihaz adı (kablolar.js kimlikleri)
const KABLO_SIRA = ['klavye', 'fare', 'mikrofon', 'kulaklik', 'hoparlor', 'monitor', 'kamera', 'yazici', 'guc'];
const KABLO_YAZI = {
  klavye: ['parca:klavye', 'Klavye: USB girişine bağlı'], fare: ['parca:fare', 'Fare: USB girişine bağlı'],
  mikrofon: ['parca:mikrofon', 'Mikrofon: pembe ses girişine bağlı'], kulaklik: ['parca:kulaklik', 'Kulaklık: USB girişine bağlı'],
  hoparlor: ['parca:hoparlor1', 'Hoparlör: yeşil ses girişine bağlı'], monitor: ['parca:monitor', 'Monitör: HDMI girişine bağlı'],
  kamera: ['parca:kamera', 'Web kamerası: USB girişine bağlı'], yazici: ['parca:yazici', 'Yazıcı: USB girişine bağlı'],
  guc: ['kesif:guc-girisi', 'Güç kablosu: prize gider'],
};
const PARCA_KABLO = { klavye: 'klavye', fare: 'fare', mikrofon: 'mikrofon', kulaklik: 'kulaklik', hoparlor: 'hoparlor', monitor: 'monitor', kamera: 'kamera', yazici: 'yazici' };

export function sahneyiKur(S, { olay = () => {} } = {}) {
  const { kok, p, birlesme } = modelleriKur(S.scene, { aniz: S.renderer.capabilities.getMaxAnisotropy() });
  const ic = p.ic, ek = p.monitor.ekran, d = ek.durum, kl = p.klavye, fr = p.fare, hp = p.hoparlor, mk = p.mikrofon, kk = p.kulaklik, yz = p.yazici, kam = p.kamera, kb = p.kablo;
  const duyur = (m) => { try { olay('duyur', m); } catch (e) { /* olay yok */ } };

  // ---------------------------------------------------------------- kayıtlar: vekiller, sahne ayarı
  kok.traverse((o) => { if (o.userData && o.userData.yari) S.hedefler.push(o); });
  S.controls.cursor.set(0, 20, -10); S.controls.maxTargetRadius = 170; // masa 216 birim geniş; dönme merkezi içinde kalsın

  // ---------------------------------------------------------------- tablolar: keşif, alan, nokta
  const kesifNoktalari = [], gorulen = new Set();
  for (const k of [p.monitor, p.kamera, p.klavye, p.fare, p.hoparlor, p.mikrofon, p.kulaklik, p.yazici, p.usb, p.kasa, ic]) {
    for (const e of k.kesif) if (!gorulen.has(e.id)) { gorulen.add(e.id); kesifNoktalari.push(e); }
  }
  const kesifTablo = new Map(kesifNoktalari.map((e) => [e.id, e]));
  const ON = KASA.z + KASA.d / 2, ARKA_Z = KASA.z - KASA.d / 2;
  const alanlar = {
    monitor: [MON.x, 34, MON.z - 1, 97, 68, 22],
    ekran: [MON.x, 39.4, MON.z + 1.7, 92, 52, 1.5],
    klavye: [KLAVYE.x, 3, KLAVYE.z, 89, 6.6, 28],
    fare: [FARE.x, 2.4, FARE.z, 11.5, 5, 20.5],
    hoparlor1: [HOPARLOR[0].x, 13.4, HOPARLOR[0].z, 14, 27, 16],
    hoparlor2: [HOPARLOR[1].x, 13.4, HOPARLOR[1].z, 14, 27, 16],
    mikrofon: [MIKROFON.x, 11.5, MIKROFON.z, 10, 23.5, 12],
    kamera: [KAMERA_PARCA.x, 69.2, KAMERA_PARCA.z, 9.4, 5.6, 5],
    kulaklik: [KULAKLIK.x, 7.5, KULAKLIK.z, 22.6, 15.2, 12],
    yazici: [YAZICI.x, 12, YAZICI.z + 3.5, 37, 25, 45],
    'usb-bellek': [USB_BELLEK.x, 1.4, USB_BELLEK.z, 13, 3.2, 13],
    kasa: [KASA.x, KASA.h / 2, KASA.z, KASA.w, KASA.h, KASA.d],
    'kasa-on-seridi': [KASA.x, 80.4, ON + 0.6, 34, 6.6, 2],
    'kasa-arka-paneli': [KASA.x + 2.9, 74.55, ARKA_Z - 0.5, 31, 9.4, 2],
    'guc-kaynagi': [KASA.x - 3.5, 10.4, ARKA_Z - 0.5, 30, 17.2, 2],
  };
  Object.assign(alanlar, ic.alanlar);
  const kutuBul = (ad) => { const a = alanlar[ad]; return a ? new Box3(V(a[0] - a[3] / 2, a[1] - a[4] / 2, a[2] - a[5] / 2), V(a[0] + a[3] / 2, a[1] + a[4] / 2, a[2] + a[5] / 2)) : null; };
  const PARCA = {
    monitor: () => V(MON.x, 68.8, MON.z), ekran: () => V(MON.x + 20, 41, MON.z + 1.9),
    klavye: () => V(KLAVYE.x, 6.6, KLAVYE.z + 3), fare: () => V(fr.grup.position.x, 5.4, fr.grup.position.z),
    hoparlor1: () => V(HOPARLOR[0].x, 27.8, HOPARLOR[0].z), hoparlor2: () => V(HOPARLOR[1].x, 27.8, HOPARLOR[1].z),
    mikrofon: () => V(MIKROFON.x, 23, MIKROFON.z + 1), kamera: () => V(KAMERA_PARCA.x, 72.6, KAMERA_PARCA.z),
    kulaklik: () => V(KULAKLIK.x, 13, KULAKLIK.z), yazici: () => V(YAZICI.x, 16.2, YAZICI.z),
    'usb-bellek': () => V(USB_BELLEK.x, 3.2, USB_BELLEK.z), kasa: () => V(KASA.x, 91.5, KASA.z + 6),
    'fare-sol': () => V(fr.grup.position.x - 2.6, 3.8, fr.grup.position.z - 4.4), 'fare-sag': () => V(fr.grup.position.x + 2.6, 3.8, fr.grup.position.z - 4.4),
    'fare-tekerlek': () => V(fr.grup.position.x, 5, fr.grup.position.z - 4.4),
    'kulaklik-mikrofon': () => V(KULAKLIK.x - 4.7, 3.8, KULAKLIK.z + 8.6), 'kulaklik-kup': () => V(KULAKLIK.x - 8.4, 8.8, KULAKLIK.z),
  };
  Object.assign(PARCA, ic.parca); // kasa içi parçalar (ic.js): ic-anakart, ic-ram, ic-hava ...
  // ad: 'alan:<ad>' | 'parca:<ad>' | 'tus:<ad>' (klavye tuşu; Bosluk = boşluk) | 'kesif:<id>' (keşif noktası konumu)
  function noktaBul(ad) {
    const i = ad.indexOf(':'), tur = ad.slice(0, i), a = ad.slice(i + 1);
    if (tur === 'alan') { const al = alanlar[a]; return al ? V(al[0], al[1] + al[4] / 2 + 1.5, al[2]) : null; }
    if (tur === 'parca') return PARCA[a] ? PARCA[a]() : null;
    if (tur === 'tus') { const n = kl.ara(a === 'Bosluk' ? ' ' : a); return n < 0 ? null : kl.noktaI(n).applyMatrix4(kl.grup.matrixWorld); }
    if (tur === 'kesif') { const k = kesifTablo.get(a); return k ? k.yerel.clone().applyMatrix4(k.nesne.matrixWorld) : null; }
    return null;
  }

  // ---------------------------------------------------------------- kamera yönüne göre keşif işaretleri
  // Çapaların yüzü (userData.yon) kameraya bakmıyorsa gizlenir: kasanın arka girişleri önden bakınca ve ön girişler
  // arkadan bakınca ekranda asılı kalmaz. Her karede 25 nokta çarpımı; kare isteği doğurmaz (false döner).
  const yonlu = [], _a = V(0, 0, 0), _b = V(0, 0, 0);
  kok.traverse((o) => { if (o.userData && o.userData.yon) yonlu.push(o); });
  S.kareGuncelleyici(() => {
    const c = S.camera.position;
    for (const o of yonlu) { if (!o.userData.yon) continue; _a.setFromMatrixPosition(o.matrixWorld); _b.copy(c).sub(_a).normalize(); o.visible = _b.dot(o.userData.yon) > 0.12; }
    return false;
  });

  // ---------------------------------------------------------------- etiketler (adım etiketleri + dinamik)
  let sabit = [], dinamik = [];
  const etiketle = () => S.etiketKoy([...sabit, ...dinamik]);
  const dinamikKoy = (liste) => { dinamik = liste.filter((e) => e.nokta); etiketle(); };

  // ---------------------------------------------------------------- hareket yöneticisi (tek yavaş güncelleyici)
  const anim = new Map(), zamanlar = new Set();
  const hareketsiz = () => document.documentElement.hasAttribute('data-e-hareketsiz') || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  S.yavasGuncelleyici(() => {
    let canli = false;
    for (const [ad, f] of anim) { let devam = false; try { devam = f(performance.now()); } catch (e) { console.error(e); } if (devam) canli = true; else anim.delete(ad); }
    return canli;
  });
  const calistir = (ad, f) => { anim.set(ad, f); S.iste(); };
  // süreli hareket: f(k) k 0..1; bitti bir kez çağrılır. Hareketsiz tercihinde doğrudan son duruma gider; durum
  // göstergesi olan hareketlerde (statik verilirse) o kare 2,4 sn sabit gösterilir, sonra bitti çağrılır.
  function sureli(sure, f, bitti, statik = null) {
    if (hareketsiz()) {
      if (statik == null) { f(1); bitti && bitti(); } else { f(statik); gecikme(2400, () => { bitti && bitti(); S.iste(); }); }
      S.iste(); return () => false;
    }
    let t0 = null;
    return (t) => { t0 ??= t; const k = Math.min(1, (t - t0) / sure); f(k, t); if (k >= 1) { bitti && bitti(); return false; } return true; };
  }
  const gecikme = (ms, f) => { const z = setTimeout(() => { zamanlar.delete(z); f(); }, ms); zamanlar.add(z); };
  let sonEkran = 0;
  const ekranYenile = (t = 0, zorla = false) => { if (!zorla && t - sonEkran < 70) return; sonEkran = t; ek.guncelle(); };
  const ekranSimdi = () => { ek.guncelle(); S.iste(); };

  // ---------------------------------------------------------------- ses halkaları (mikrofona ve hoparlörden)
  const halkaGeo = new RingGeometry(0.92, 1, 48);
  const gelen = [0, 1, 2].map(() => {
    const m = new Mesh(halkaGeo, new MeshBasicMaterial({ color: 0x7c4dff, transparent: true, opacity: 0, depthWrite: false, side: DoubleSide }));
    m.visible = false; m.renderOrder = 3; m.raycast = () => {}; m.userData.dinamik = true; kok.add(m); return m;
  });
  const gelenGizle = () => { for (const m of gelen) m.visible = false; };
  // merkez (x, y, z): halkalar bu noktaya doğru yürür (dışarıdan içe); faz: 0..1 döngü
  function gelenCiz(x, y, z, faz) {
    gelen.forEach((m, j) => {
      const f = (faz + j / 3) % 1, r = 9.5 - f * 6.5;
      m.visible = true; m.position.set(x, y, z + 4 + (1 - f) * 15); m.scale.set(r, r, 1);
      m.material.opacity = Math.sin(Math.PI * f) * 0.55;
    });
  }
  function hoparlorCiz(faz) {
    hp.halkalar.forEach((hl) => hl.forEach((m, j) => {
      const f = (faz + j / 3) % 1;
      m.visible = true; m.scale.set(3.2 + f * 13, 3.2 + f * 13, 1); m.material.opacity = Math.pow(1 - f, 1.4) * 0.5;
    }));
  }
  const hoparlorGizle = () => hp.halkalar.forEach((hl) => hl.forEach((m) => { m.visible = false; }));

  // ---------------------------------------------------------------- ses (çıktı): kısa üç nota
  let ac = null;
  function notaCal() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ac = ac || new AC();
      if (ac.state === 'suspended') ac.resume();
      const t0 = ac.currentTime + 0.03;
      [[523.25, 0], [659.25, 0.3], [783.99, 0.6]].forEach(([f, dt]) => {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = 'sine'; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0 + dt); g.gain.exponentialRampToValueAtTime(0.07, t0 + dt + 0.04); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dt + 0.55);
        o.connect(g); g.connect(ac.destination); o.start(t0 + dt); o.stop(t0 + dt + 0.6);
      });
    } catch (e) { /* ses yoksa görüntü yine çalışır */ }
  }

  // ---------------------------------------------------------------- durum
  let mod = null, yazilan = '', buyukHarf = false, demoSira = 0, imlecSira = 0, cozKademe = 3, kamAcik = false, kablo = -1;
  const basiliTus = new Set();

  function sifirla() {
    anim.clear(); for (const z of zamanlar) clearTimeout(z); zamanlar.clear();
    for (const i of basiliTus) kl.tusBas(i, false);
    basiliTus.clear();
    kb.izle(null); kablo = -1;
    fr.grup.position.set(FARE.x, 0, FARE.z); fr.birak(); fr.tekerlek.rotation.x = 0;
    mk.ledAyarla(false); kam.ledAyarla(false); yz.ledAyarla(false); p.monitor.ledAyarla(true);
    yz.kagit.visible = false; yz.kagit.position.z = -3.75;
    gelenGizle(); hoparlorGizle();
    kk.kupMal.emissiveIntensity = 0; kk.ucMal.emissiveIntensity = 0;
    yazilan = ''; buyukHarf = false; demoSira = 0; imlecSira = 0; cozKademe = 3; kamAcik = false;
    Object.assign(d, { mod: 'masaustu', yazi: '', imlec: { ...IMLEC[0] }, tik: 0, menu: false, kamera: false, ses: null, cal: null, yazdir: null, kademe: 3 });
  }

  // ---------------------------------------------------------------- klavye
  function tusAnim(i) {
    kl.tusBas(i, true); basiliTus.add(i);
    calistir('tus' + i, sureli(170, () => {}, () => { kl.tusBas(i, false); basiliTus.delete(i); }));
  }
  // Dönen değer: true ise dokunma işlendi (bilgi kartı açılmaz)
  function tusBas(i) {
    const t = kl.tuslar[i];
    if (!t) return false;
    tusAnim(i);
    if (mod !== 'yaz') return false;
    let tamam = true;
    if (t.ad === 'Geri') yazilan = yazilan.slice(0, -1);
    else if (t.ad === 'Enter') yazilan += '\n';
    else if (t.tur === 'bosluk') yazilan += ' ';
    else if (t.ad === 'Shift') {
      buyukHarf = true;
      dinamikKoy([{ nokta: kl.noktaI(i).applyMatrix4(kl.grup.matrixWorld), metin: 'Shift: sıradaki harf büyük' }]);
      duyur('Shift basıldı, sıradaki harf büyük yazılacak');
      return true;
    } else if (t.tur === 'harf' || t.tur === 'rakam') { yazilan += buyukHarf ? t.ad : kucult(t.ad); buyukHarf = false; }
    else tamam = false;
    if (tamam) {
      d.yazi = yazilan; ekranSimdi();
      if (t.ad === 'Enter' || t.ad === 'Geri' || t.tur === 'bosluk') {
        const metin = t.ad === 'Enter' ? 'Enter: yeni satır' : t.ad === 'Geri' ? 'Geri: son harfi siler' : 'Boşluk';
        dinamikKoy([{ nokta: kl.noktaI(i).applyMatrix4(kl.grup.matrixWorld), metin }]);
      } else if (dinamik.length) dinamikKoy([]);
    }
    return tamam;
  }

  // ---------------------------------------------------------------- fare
  function fareGit(hedef) {
    const bas = { ...d.imlec }, x0 = fr.grup.position.x, z0 = fr.grup.position.z;
    const x1 = FARE.x + (hedef.x - 512) / 512 * 1.2, z1 = FARE.z + (hedef.y - 288) / 288 * 1.2;
    calistir('fare-gez', sureli(520, (k) => {
      const e = ease(k);
      d.imlec.x = bas.x + (hedef.x - bas.x) * e; d.imlec.y = bas.y + (hedef.y - bas.y) * e;
      fr.grup.position.x = x0 + (x1 - x0) * e; fr.grup.position.z = z0 + (z1 - z0) * e;
      ekranYenile(performance.now());
    }, () => { ekranSimdi(); S.golgeYenile(); }));
  }
  const fareOynat = () => { imlecSira = (imlecSira + 1) % IMLEC.length; fareGit(IMLEC[imlecSira]); duyur('Fare hareket etti, imleç ekranda yer değiştirdi'); };
  function fareTikla(sol) {
    fr.tikla(sol);
    d.menu = sol ? false : !d.menu;
    calistir('fare-tik', sureli(460, (k) => { d.tik = 1 + k * 2.2; if (k > 0.35) fr.birak(); ekranYenile(performance.now()); }, () => { d.tik = 0; fr.birak(); ekranSimdi(); }));
    duyur(sol ? 'Sol tık yapıldı' : d.menu ? 'Sağ tık menüsü açıldı' : 'Sağ tık menüsü kapandı');
  }
  function tekerlekCevir() {
    const r0 = fr.tekerlek.rotation.x;
    calistir('tekerlek', sureli(260, (k) => { fr.tekerlek.rotation.x = r0 + ease(k) * 1.4; }));
    dinamikKoy([{ nokta: noktaBul('parca:fare-tekerlek'), metin: 'Tekerlek: sayfayı kaydırır' }]);
  }

  // ---------------------------------------------------------------- mikrofon ve kamera
  function konus() {
    mk.ledAyarla(true); d.ses = 0; ekranSimdi();
    const m = mk.kafa;
    calistir('konus', sureli(3600, (k, t) => {
      d.ses = k * 3; gelenCiz(m.x, m.y, m.z, (k * 3.6 / 1.1) % 1); ekranYenile(t);
    }, () => { mk.ledAyarla(false); d.ses = null; gelenGizle(); ekranSimdi(); }, 0.3));
    duyur('Mikrofon sesi alıyor, ekranda ses çubukları hareket ediyor');
  }
  function kameraDegistir() {
    kamAcik = !kamAcik; d.kamera = kamAcik; kam.ledAyarla(kamAcik); ekranSimdi();
    duyur(kamAcik ? 'Web kamerası açıldı, görüntü ekranda' : 'Web kamerası kapandı');
    return kamAcik;
  }

  // ---------------------------------------------------------------- ekran
  function cozunurlukDegistir() {
    cozKademe = cozKademe === 3 ? 0 : cozKademe + 1;
    d.kademe = cozKademe; ekranSimdi();
    const [w, h] = ETIKET_COZ[cozKademe];
    dinamikKoy([{ nokta: noktaBul('parca:ekran'), metin: `${sayiYaz(w)} × ${sayiYaz(h)} = ${sayiYaz(w * h)} piksel` }]);
    duyur(`Çözünürlük ${w} çarpı ${h}, toplam ${w * h} piksel`);
  }

  // ---------------------------------------------------------------- hoparlör ve yazıcı
  function sesVer() {
    d.cal = 0; ekranSimdi(); notaCal();
    calistir('ses', sureli(3400, (k, t) => { d.cal = k * 3; hoparlorCiz((k * 3.4 / 1.0) % 1); ekranYenile(t); }, () => { d.cal = null; hoparlorGizle(); ekranSimdi(); }, 0.3));
    duyur('Hoparlörden ses çıkıyor');
  }
  function yazdir() {
    const kg = yz.kagit;
    kg.visible = true; kg.position.z = -3.75; yz.ledAyarla(true); d.yazdir = 0; ekranSimdi();
    calistir('yazdir', sureli(3600, (k, t) => { d.yazdir = k; kg.position.z = -3.75 + 13.5 * ease(Math.min(1, Math.max(0, (k - 0.2) / 0.8))); ekranYenile(t); }, () => {
      yz.ledAyarla(false); d.yazdir = 1; ekranSimdi(); S.golgeYenile();
      gecikme(1600, () => { d.yazdir = null; ekranSimdi(); });
    }));
    duyur('Yazıcı kâğıda yazdırıyor');
  }

  // ---------------------------------------------------------------- kulaklık
  function kulakDinle() {
    calistir('kulak', sureli(2600, (k) => { kk.kupMal.emissiveIntensity = Math.max(0, Math.sin(k * Math.PI * 5)) * 0.85; }, () => { kk.kupMal.emissiveIntensity = 0; }, 0.1));
    notaCal(); duyur('Ses kulaklıktan geliyor');
  }
  function kulakKonus() {
    const m = V(KULAKLIK.x - 4.7, 3.2, KULAKLIK.z + 8.6);
    calistir('kulak-konus', sureli(3000, (k) => { kk.ucMal.emissiveIntensity = Math.max(0, Math.sin(k * Math.PI * 5)) * 0.9; gelenCiz(m.x, m.y, m.z, (k * 3 / 1.1) % 1); }, () => { kk.ucMal.emissiveIntensity = 0; gelenGizle(); }, 0.1));
    duyur('Kulaklığın mikrofonu sesi alıyor');
  }

  // ---------------------------------------------------------------- kablolar
  function kabloGoster(id) {
    kb.izle(id); S.iste();
    if (!id) { dinamikKoy([]); return; }
    const [parca, metin] = KABLO_YAZI[id];
    dinamikKoy([{ nokta: noktaBul(parca), metin }]);
    duyur(metin);
  }
  function kabloSonraki() { kablo = (kablo + 1) % KABLO_SIRA.length; kabloGoster(KABLO_SIRA[kablo]); }

  // ---------------------------------------------------------------- kasa içi (ders 2)
  // mod: null (ders 1) | 'ic-kapali' (kapak kapalı) | 'ic' (açık, hava soğutma) | 'ic-sivi' (açık, sıvı soğutma)
  let icMod = null, kapakAcik = false, kaldirik = false, ramCikik = false, calisiyor = false, sivi = false, adimEtiket = [];
  const gucAnc = kesifTablo.get('guc-kaynagi') ? kesifTablo.get('guc-kaynagi').nesne : null;
  const gucYon0 = gucAnc ? gucAnc.userData.yon : null, gucKonum0 = gucAnc ? gucAnc.position.clone() : null;
  // dış güç kaynağı çapası (arka yüz) kasa açıkken iç güç kaynağına taşınır: aynı keşif kimliği, iki yer
  function gucCapasi(ac) {
    if (!gucAnc) return;
    if (ac) { gucAnc.position.set(-3.5, 19.1, -28); gucAnc.userData.yon = null; gucAnc.visible = true; } else { gucAnc.position.copy(gucKonum0); gucAnc.userData.yon = gucYon0; }
    gucAnc.updateMatrixWorld(true);
  }
  // kasa açıkken masadaki çevre birimlerinin (klavye, fare, mikrofon ...) keşif çapaları gizlenir: kasanın arkasında kalıp açık kasanın üstünde asılı görünürlerdi
  const icKimlik = new Set(ic.kesif.map((e) => e.id));
  const cevreCapa = kesifNoktalari.filter((e) => e.nesne && !icKimlik.has(e.id) && !e.nesne.userData.yon).map((e) => e.nesne);
  const cevreCapalari = (gizle) => { for (const o of cevreCapa) o.visible = !gizle; };
  function etiketYenile() { sabit = adimEtiket.map(([n, metin, tur]) => ({ nokta: noktaBul(n), metin, tur })).filter((e) => e.nokta); etiketle(); }
  function kapakKur(k) {
    const once = ic.durum.acik;
    ic.kapakAyarla(k);
    if (ic.durum.acik !== once) { gucCapasi(ic.durum.acik); cevreCapalari(ic.durum.acik); S.golgeYenile(); }
  }
  function hareket(ad, sure, k0, k1, uygula, bitti) {
    calistir(ad, sureli(sure, (k) => uygula(k0 + (k1 - k0) * k), () => { uygula(k1); S.golgeYenile(); etiketYenile(); bitti && bitti(); }));
  }
  function kapakDegistir() {
    kapakAcik = !kapakAcik; if (!kapakAcik) calismaDur();
    hareket('kapak', 1100, ic.durum.kapak, kapakAcik ? 1 : 0, kapakKur, () => {
      // adım etiketi kasanın durumunu söyler: açılınca "Açık kasa", kapanınca "Kapalı kasa" (yapılandırma dizisi değişmez, kopya)
      adimEtiket = adimEtiket.map((e) => (e[0] === 'parca:kasa' && /kasa$/.test(e[1]) ? [e[0], kapakAcik ? 'Açık kasa' : 'Kapalı kasa', e[2]] : e));
      etiketYenile();
    });
    duyur(kapakAcik ? 'Yan kapak açıldı, kasanın içi görünüyor' : 'Yan kapak kapandı');
    return kapakAcik;
  }
  function kaldirDegistir() {
    if (ic.durum.tur !== 'hava' || !ic.durum.acik) return false;
    kaldirik = !kaldirik; calismaDur();
    hareket('kaldir', 1300, ic.durum.kaldir, kaldirik ? 1 : 0, (k) => ic.kaldirAyarla(k), () => dinamikKoy(kaldirik ? [{ nokta: noktaBul('parca:ic-macun'), metin: 'Termal macun', tur: 'yesil' }] : []));
    duyur(kaldirik ? 'Soğutucu kaldırıldı, işlemcinin üstündeki termal macun görünüyor' : 'Soğutucu işlemcinin üstüne geri takıldı');
    return kaldirik;
  }
  function ramDegistir() {
    if (!ic.durum.acik) return false;
    ramCikik = !ramCikik; calismaDur();
    hareket('ram', 900, ic.durum.ram, ramCikik ? 1 : 0, (k) => ic.ramAyarla(k));
    duyur(ramCikik ? "RAM çubukları yuvalarından çıkarıldı" : "RAM çubukları yuvalara geri takıldı");
    return ramCikik;
  }
  function calismaDur() {
    if (!calisiyor) return;
    calisiyor = false; anim.delete('ic-calis'); ic.calisiyorAyarla(false); dinamikKoy([]); S.iste();
  }
  function bilgisayarCalistir() {
    if (!ic.durum.acik) return false;
    if (calisiyor) { calismaDur(); duyur('Bilgisayar durdu, fanlar yavaşladı ve durdu'); return false; }
    calisiyor = true; ic.calisiyorAyarla(true);
    if (kaldirik) { kaldirik = false; ic.kaldirAyarla(0); }
    if (ramCikik) { ramCikik = false; ic.ramAyarla(0); }
    let son = null;
    if (hareketsiz()) { ic.duragan(); S.iste(); } else {
      calistir('ic-calis', (t) => { const dt = son == null ? 0 : Math.min(0.1, (t - son) / 1000); son = t; return ic.kare(dt, t / 1000); });
    }
    const L = (a, m, t) => ({ nokta: noktaBul(a), metin: m, tur: t });
    dinamikKoy(ic.durum.tur === 'sivi'
      ? [L('parca:ic-pompa', 'Pompa sıvıyı döndürür', 'yesil'), L('parca:ic-sivi-sicak', 'Sıcak sıvı radyatöre gider', 'arti'), L('parca:ic-sivi-soguk', 'Soğuyan sıvı geri döner', 'eksi'),
        L('parca:ic-akis-giris', 'Soğuk hava girer', 'eksi'), L('parca:ic-akis-cikis', 'Sıcak hava çıkar', 'arti')]
      : [L('parca:ic-akis-giris', 'Soğuk hava girer', 'eksi'), L('parca:ic-akis-cikis', 'Sıcak hava çıkar', 'arti')]);
    duyur(ic.durum.tur === 'sivi' ? 'Fanlar dönüyor, pompa sıvıyı döndürüyor; sıcak sıvı radyatöre, soğuyan sıvı işlemciye gidiyor' : 'Fanlar dönüyor; soğuk hava önden girer, sıcak hava yukarıdan çıkar');
    S.iste();
    return true;
  }
  function turDegistir() {
    if (!ic.durum.acik) return false;
    sivi = !sivi; kaldirik = false; ic.kaldirAyarla(0);
    ic.turAyarla(sivi ? 'sivi' : 'hava');
    if (calisiyor) { ic.calisiyorAyarla(true); if (hareketsiz()) ic.duragan(); }
    S.golgeYenile(); etiketYenile(); S.iste();
    duyur(sivi ? 'Sıvı soğutmaya geçildi: işlemcinin üstünde pompa bloğu, tavanda radyatör var' : 'Hava soğutmaya geçildi: işlemcinin üstünde fanlı soğutucu var');
    return sivi;
  }
  function icDurumKur(m) {
    icMod = m && m.indexOf('ic') === 0 ? m : null;
    ic.sifirla(); calisiyor = false; kaldirik = false; ramCikik = false;
    sivi = icMod === 'ic-sivi';
    ic.turAyarla(sivi ? 'sivi' : 'hava');
    kapakAcik = icMod === 'ic' || icMod === 'ic-sivi';
    kapakKur(kapakAcik ? 1 : 0);
  }

  // ---------------------------------------------------------------- dokunma
  function dokunuldu(v, nokta) {
    if (!v) return false;
    if (mod === 'kablo' && PARCA_KABLO[v.parca]) { kablo = KABLO_SIRA.indexOf(PARCA_KABLO[v.parca]); kabloGoster(PARCA_KABLO[v.parca]); return true; }
    if (v.parca === 'klavye' && v.tusNo != null) return tusBas(v.tusNo);
    if (mod === 'fare' && v.parca === 'fare') {
      if (v.tekerlek) { tekerlekCevir(); return true; }
      const y = fr.grup.worldToLocal(nokta ? nokta.clone() : V(0, 0, 0));
      if (nokta && y.z < -1.2) { fareTikla(y.x < 0); return true; }
      fareOynat(); return true;
    }
    if (mod === 'ekran' && v.kesif === 'ekran') { cozunurlukDegistir(); return true; }
    return false;
  }

  // ---------------------------------------------------------------- eylemler (düğmeler)
  function eylem(ad) {
    switch (ad) {
      case 'tus-bas': { const harf = DEMO[demoSira % DEMO.length]; if (demoSira % DEMO.length === 0) { yazilan = ''; d.yazi = ''; } demoSira++; tusBas(kl.ara(harf)); return; }
      case 'fare-oynat': fareOynat(); return;
      case 'fare-tikla': fareTikla(true); return;
      case 'fare-sag': fareTikla(false); return;
      case 'konus': konus(); return;
      case 'kamera': return kameraDegistir();
      case 'cozunurluk': cozunurlukDegistir(); return;
      case 'ses': sesVer(); return;
      case 'yazdir': yazdir(); return;
      case 'kulak-dinle': kulakDinle(); return;
      case 'kulak-konus': kulakKonus(); return;
      case 'kablo-sonraki': kabloSonraki(); return;
      case 'kapak': return kapakDegistir();
      case 'sogutucu-kaldir': return kaldirDegistir();
      case 'ram-cikar': return ramDegistir();
      case 'calistir': return bilgisayarCalistir();
      case 'sogutma-turu': return turDegistir();
      default:
    }
  }

  // ---------------------------------------------------------------- adım
  function adimUygula(id, cfg = {}) {
    sifirla();
    mod = cfg.mod || null;
    d.yazi = cfg.yazi != null ? cfg.yazi : 'Merhaba!';
    icDurumKur(mod);
    adimEtiket = cfg.etiket || [];
    sabit = adimEtiket.map(([n, metin, tur]) => ({ nokta: noktaBul(n), metin, tur })).filter((e) => e.nokta);
    dinamik = [];
    etiketle(); ekranSimdi(); S.golgeYenile();
  }
  function durdur() {
    anim.clear(); for (const z of zamanlar) clearTimeout(z); zamanlar.clear();
    try { if (ac && ac.state !== 'closed') ac.close(); } catch (e) { /* kapalı */ }
    ac = null;
    calisiyor = false; ic.calisiyorAyarla(false);
  }

  adimUygula('merak', {});
  S.golgeYenile(); S.iste();
  return { kesifNoktalari, alanlar, noktaBul, kutuBul, adimUygula, eylem, durdur, dokunuldu, parcalar: p, durum: d, birlesme };
}
