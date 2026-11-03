// 3D Simülasyon Merkezi: aile DERLEME yapısı (tarayıcıya girmez). Adresler ve adlar yollar.mjs'te, burada ise bir ailenin
// paketinin nasıl üretileceği ve ders sayfasında aileye özgü kalan metinler durur. Yeni aile eklemek: CLAUDE.md "Yeni aile ekleme".
//
//   giris      paket girişi (bu klasöre göre): ders sayfasında dersMotoru(AILE, kabuk) çağıran dosya (Arduino: src/main.js)
//   onek       3d/assets/<onek>-<özet>.js (Arduino: sim; eski paketler aynı önekle silinir)
//   adimlar    DERSLER ve KONTROL_YAZI veren modül (yalın veri; tarayıcı da derleme de okur)
//   kesif      KESIF, KATEGORI, KATEGORI_SIRA veren modül (keşif kataloğu)
//   icerik     ders-N.json, kavramlar.json, kesif.json klasörü (bu klasöre göre)
//   gorunum    bakış açısı düğmeleri [[kimlik, uzun yazı, kısa yazı], ...]; ilki varsayılan (eğik)
//   ipuclari   sahne üstündeki ipucu satırları [[ad, metin], ...]; motor adaptör.ipucu(cfg) ile birini seçer
//   kontrolHtml(liste, ara)  adımın kontrol düğmeleri (ara: { ico, esc, KONTROL_YAZI, KONTROL })
//   ozgur      Özgür Mod sayfası var mı (yalnız Arduino)
// ve sayfa metinleri: baslikSonek, baslikKisa, yedekAd, sahneAria, h1Sonek, kodAd, aileBaslik, aileAciklama, aileGiris, notTahmin,
// kullanimDokun (öğretmen notu "Kullanım" listesinde parçaya dokunma maddesinin aileye özgü ikinci cümlesi).
import { GORUNUM_LISTE as DONANIM_GORUNUM } from './donanim/src/adimlar.js';

// Arduino kontrolleri: bekleme/süre grupları, basılı tutulan buton, simgeli aç-kapa düğmeleri.
function arduinoKontrol(liste, { ico, esc, KONTROL_YAZI }) {
  const parca = liste.map((k) => {
    if (k === 'delik') return '';
    if (k === 'hiz') return `<div class="grup" role="group" aria-label="Bekleme süresi"><span class="grup-ad">Bekleme</span>${[['1000', '1 sn'], ['500', '0,5 sn'], ['200', '0,2 sn']].map(([d, y]) => `<button type="button" class="dugme" data-eylem="hiz" data-deger="${d}" aria-pressed="${d === '1000'}">${y}</button>`).join('')}</div>`;
    if (k === 'sure') return `<div class="grup" role="group" aria-label="Süre"><span class="grup-ad">Süre</span>${[['1', 'Normal'], ['0.5', 'Hızlı']].map(([d, y]) => `<button type="button" class="dugme" data-eylem="sure" data-deger="${d}" aria-pressed="${d === '1'}">${y}</button>`).join('')}</div>`;
    if (k === 'buton') return `<button type="button" class="dugme buyuk" data-eylem="buton">${ico('pointer')}${KONTROL_YAZI.buton}</button>`;
    const ikon = { akim: 'zap', rontgen: 'scan', ters: 'refresh-cw', 'direnc-cikar': 'minus-circle', delaysiz: 'eraser' }[k];
    return `<button type="button" class="dugme" data-eylem="${k}" aria-pressed="false">${ikon ? ico(ikon) : ''}${esc(KONTROL_YAZI[k] || k)}</button>`;
  }).join('');
  return parca ? `<div class="kontroller">${parca}</div>` : '';
}

// Genel kontrol çizici (yeni aileler): adimlar.js KONTROL = { kimlik: { yazi, ikon, tur: 'dugme' | 'basili', varsayilan? } }.
// 'basili' düğmeler aria-pressed taşır (motor, adaptör.eylem'in true/false dönüşünü oraya yazar); 'dugme' bir kez çalışır.
// varsayilan: true ise düğme sayfa açılışında basılıdır; motor her adım geçişinde düğmeyi bu ilk duruma döndürür (ders.js).
export function genelKontrol(liste, { ico, esc, KONTROL = {}, KONTROL_YAZI = {} }) {
  const parca = liste.map((k) => {
    const t = KONTROL[k] || {};
    return `<button type="button" class="dugme" data-eylem="${k}"${t.tur === 'basili' ? ` aria-pressed="${t.varsayilan ? 'true' : 'false'}"` : ''}>${t.ikon ? ico(t.ikon) : ''}${esc(KONTROL_YAZI[k] || t.yazi || k)}</button>`;
  }).join('');
  return parca ? `<div class="kontroller">${parca}</div>` : '';
}

export const YAPI = {
  arduino: {
    giris: 'src/main.js', onek: 'sim', adimlar: 'src/adimlar.js', kesif: 'src/kesif-veri.js', icerik: 'icerik', ozgur: true,
    gorunum: [['egik', 'Eğik', 'Eğik'], ['ustten', 'Üstten', 'Üst'], ['onden', 'Önden', 'Ön'], ['yandan', 'Yandan', 'Yan']],
    ipuclari: [['delik', 'Bir deliğe dokun: bağlı delikler yeşil yanar'], ['dokun', 'Parçalara dokunarak tanı']],
    kontrolHtml: arduinoKontrol,
    baslikSonek: '3D Arduino Simülasyonu',
    baslikKisa: { 'arduino-ve-breadboard': 'Arduino ve Breadboard 3D Simülasyonu | bote.web.tr' },
    yedekAd: { 'arduino-ve-breadboard': "Arduino ve Breadboard'u Tanıyalım", 'arduino-led-yakma': 'LED Yakalım', 'arduino-buton-led': 'Butonla LED Yakalım', 'arduino-trafik-isigi': 'Trafik Işığı Yapalım' },
    sahneAria: "Arduino UNO kartı ve breadboard'un üç boyutlu görünümü. Parmakla döndürülebilir, iki parmakla yakınlaştırılabilir.",
    h1Sonek: '3D Arduino simülasyonu',
    kodAd: 'Arduino kodu',
    aileBaslik: 'Arduino Simülasyonu: 3D Dersler ve Özgür Mod | bote.web.tr',
    aileAciklama: 'Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için Arduino ve breadboard dersleri: üç boyutlu sahne, sınıfa göre anlatım ve mini sınav.',
    aileGiris: "Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için Arduino ve breadboard'u üç boyutlu inceleyin, devreyi adım adım kurun ve çalıştırın. Akıllı tahtada, tablette ve telefonda çalışır; kurulum ve üyelik gerekmez.",
    notTahmin: '<section><h2>Tahmin et, sonra gör</h2><p>Öğrenciler önce tahmin eder, sonra sahnede sonucu görür: LED ters takılırsa ne olur, direnç çıkarılırsa ne değişir?</p></section>',
    kullanimDokun: ' Pinler yaklaştırınca tek tek seçilir.',
  },
  // Bilgisayar Donanımı (02.11.2026): masa üstü girdi/çıktı birimleri (ders 1) ve kasanın içi (ders 2). Adres yollar.mjs (/3d/hardware);
  // paket öneki 'donanim' (eski önizleme paketi donanim-<özet>.js de bu önekliydi: derleme onu da siler, yerine ders paketi gelir).
  donanim: {
    giris: 'donanim/src/giris.js', onek: 'donanim', adimlar: 'donanim/src/adimlar.js', kesif: 'donanim/src/kesif-veri.js', icerik: 'donanim/icerik', ozgur: false,
    gorunum: DONANIM_GORUNUM,
    ipuclari: [['dokun', 'Parçalara dokunarak tanı ve dene']],
    kontrolHtml: genelKontrol,
    baslikSonek: '3D Donanım Simülasyonu',
    baslikKisa: { 'girdi-cikti-birimleri': 'Girdi ve Çıktı Birimleri: 3D Simülasyon | bote.web.tr' },
    yedekAd: { 'girdi-cikti-birimleri': 'Girdi ve Çıktı Birimleri', 'kasanin-ici': 'Kasanın İçi' },
    sahneAria: 'Bilgisayar masasının üç boyutlu görünümü: kasa, monitör, klavye, fare, mikrofon, web kamerası, hoparlörler, yazıcı ve kulaklık. Kasanın yan kapağı açılınca içindeki parçalar görünür. Parmakla döndürülebilir, iki parmakla yakınlaştırılabilir.',
    h1Sonek: '3D bilgisayar donanımı simülasyonu',
    aileBaslik: 'Bilgisayar Donanımı Simülasyonu: 3D Dersler | bote.web.tr',
    aileAciklama: 'Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için bilgisayar donanımı: girdi ve çıktı birimleri, kasanın içi. 3D sahne, sınıfa göre anlatım ve mini sınav.',
    aileGiris: 'Ortaokul Bilişim Teknolojileri ve Yazılım dersleri için bilgisayar masasındaki girdi ve çıktı birimlerini ve kasanın içindeki parçaları üç boyutlu inceleyin: kapağı açın, bilgisayarı çalıştırıp soğutmayı izleyin. Akıllı tahtada, tablette ve telefonda çalışır; kurulum ve üyelik gerekmez.',
    notTahmin: '<section><h2>Tahmin et, sonra gör</h2><p>Öğrenciler önce tahmin eder, sonra sahnede sonucu görür: mikrofon girdi mi çıktı mı, elektrik kesilince RAM\'deki bilgiye ne olur, sıcak hava kasadan nereden çıkar?</p></section>',
    kullanimDokun: ' Klavye ve fare adımlarında tuşlara ve fareye dokunmak onları çalıştırır.',
  },
};
