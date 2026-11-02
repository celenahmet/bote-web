// Bilgisayar Donanımı: ders adımlarının sahne kurgusu (yalın veri; hem tarayıcı hem derleme betiği okur).
// Biçim Arduino ailesiyle aynıdır:
//   kamera: KAMERA anahtarı; vurgu: mor kutu ile gösterilen alanlar (donanimSahne alanlar); etiket: [nokta, metin, tür];
//   kontrol: sahnede çıkan düğmeler (KONTROL anahtarları); dokun: dokunma ipucu; mod: sahnenin etkileşim kipi
//   (yaz, fare, ses, ekran, kablo); yazi: ekrandaki yazı defterinin ilk metni.
// Etiket noktası adları (donanimSahne.noktaBul): parca:<ad>, alan:<ad>, tus:<ad>, kesif:<kimlik>.
// Etiket türü: eksi (mavi) girdi, arti (kırmızı) çıktı, yesil hem girdi hem çıktı ya da yazılım; tür yalnız ikinci ipucudur,
// metnin kendisi anlamı taşır.

// Kadraj kutuları [x0, y0, z0, x1, y1, z1] (1 birim = 5 mm). Kamera kutunun sekiz köşesini ekranın güvenli alanına
// iki eksende tam sığdırır (sahne.js). Masa x -108..108, z -76..56; kasa x -106..-66, z -66..20, boy 90; monitör
// x -43..52, z -57..-35, boy 67; klavye z 10..34; yazıcı x 70..106.
const ON = [0.04, 0.58, 0.81];
const ik = (x0, y0, z0, x1, y1, z1) => [x0 - 86, y0, z0 - 23, x1 - 86, y1, z1 - 23]; // kasa-yerel kutu -> dünya
export const KAMERA = {
  genel: { kutu: [-108, 0, -76, 108, 91, 56], yon: ON },
  giris: { kutu: [-64, 0, -52, 74, 76, 38], yon: [0.0, 0.64, 0.77] },
  klavye: { kutu: [-48, 0, -50, 48, 66, 36], yon: [0.0, 0.62, 0.78] },
  fare: { kutu: [-12, 0, -50, 80, 64, 34], yon: [0.0, 0.62, 0.78] },
  'mik-kam': { kutu: [-70, 0, -52, 26, 78, 44], yon: [0.0, 0.6, 0.8] },
  cikis: { kutu: [-66, 0, -64, 110, 72, -16], yon: [0.0, 0.5, 0.87] },
  ekran: { kutu: [-44, 10, -50, 52, 68, -38], yon: [0.0, 0.2, 0.98] },
  'hop-yaz': { kutu: [-66, 0, -64, 110, 72, -16], yon: [0.0, 0.5, 0.87] },
  kulaklik: { kutu: [68, 0, 22, 112, 18, 46], yon: [-0.1, 0.52, 0.85] },
  kablolar: { kutu: [-108, 0, -78, 26, 92, 12], yon: [0.12, 0.46, -0.88] },
  // ders 2: kasa içi (kutular kasa-yerel birimden dünyaya çevrilir: kasa x -86, z -23)
  'ic-kasa': { kutu: ik(-24, 0, -44, 21, 102, 44), yon: [-0.8, 0.32, 0.5] },
  'ic-anakart': { kutu: ik(6, 28, -43, 21, 80, 21), yon: [-0.9, 0.28, 0.32] },
  'ic-islemci': { kutu: ik(-24, 48, -37, 19, 106, -6), yon: [-0.86, 0.3, 0.4] },
  'ic-ram': { kutu: ik(-14, 44, -14, 19, 79, 3), yon: [-0.62, 0.22, 0.75] },
  'ic-depolama': { kutu: ik(6, 0, -28, 20, 44, 44), yon: [-0.86, 0.42, 0.3] },
  'ic-gpu': { kutu: ik(-6, 36, -44, 19, 60, 15), yon: [-0.78, -0.15, 0.6] },
  'ic-psu': { kutu: ik(-20, 0, -44, 13, 28, -8), yon: [-0.8, 0.5, 0.35] },
  'ic-sogutma': { kutu: ik(-24, 0, -44, 21, 108, 50), yon: [-0.74, 0.4, 0.54] },
  'ic-sivi': { kutu: ik(-16, 54, -43, 19, 98, 24), yon: [-0.95, 0.02, 0.3] },
  'ic-arka': { kutu: ik(-20, 0, -60, 20, 92, -40), yon: [0.5, 0.3, -0.82] },
};

// Bakış açısı düğmeleri: yön = hedeften kameraya doğru birim vektör (ham sayılar yeterli, motor normalleştirir).
export const GORUNUM = { ustten: [0, 0.995, 0.1], onden: [0, 0.27, 0.96], yandan: [0.96, 0.3, 0.06], arkadan: [0, 0.3, -0.96] };
export const GORUNUM_LISTE = [['egik', 'Eğik', 'Eğik'], ['ustten', 'Üstten', 'Üst'], ['onden', 'Önden', 'Ön'], ['yandan', 'Yandan', 'Yan'], ['arkadan', 'Arkadan', 'Arka']];

// Sahne düğmeleri: yazı, simge (lucide adı), tür: dugme (bir kez çalışır) | basili (aç/kapa, aria-pressed)
export const KONTROL = {
  'tus-bas': { yazi: 'Tuşa bas', ikon: 'keyboard', tur: 'dugme' },
  'fare-oynat': { yazi: 'Fareyi oynat', ikon: 'mouse', tur: 'dugme' },
  'fare-tikla': { yazi: 'Sol tıkla', ikon: 'pointer', tur: 'dugme' },
  'fare-sag': { yazi: 'Sağ tıkla', ikon: 'mouse', tur: 'dugme' },
  konus: { yazi: 'Konuş', ikon: 'mic', tur: 'dugme' },
  kamera: { yazi: 'Kamerayı aç', ikon: 'webcam', tur: 'basili' },
  cozunurluk: { yazi: 'Çözünürlüğü değiştir', ikon: 'monitor', tur: 'dugme' },
  ses: { yazi: 'Ses ver', ikon: 'speaker', tur: 'dugme' },
  yazdir: { yazi: 'Yazdır', ikon: 'printer', tur: 'dugme' },
  'kulak-dinle': { yazi: 'Sesi dinle', ikon: 'headphones', tur: 'dugme' },
  'kulak-konus': { yazi: 'Mikrofona konuş', ikon: 'mic', tur: 'dugme' },
  'kablo-sonraki': { yazi: 'Sıradaki kablo', ikon: 'cable', tur: 'dugme' },
  // ders 2 (kasa içi)
  kapak: { yazi: 'Kapağı aç', ikon: 'door-open', tur: 'basili' },
  'sogutucu-kaldir': { yazi: 'Soğutucuyu kaldır', ikon: 'arrow-up', tur: 'basili' },
  'ram-cikar': { yazi: "RAM'i çıkar", ikon: 'memory-stick', tur: 'basili' },
  calistir: { yazi: 'Bilgisayarı çalıştır', ikon: 'power', tur: 'basili' },
  'sogutma-turu': { yazi: 'Sıvı soğutmaya geç', ikon: 'droplets', tur: 'basili' },
};
// Arduino ailesinin derleme kodu bu adla okur
export const KONTROL_YAZI = Object.fromEntries(Object.entries(KONTROL).map(([k, v]) => [k, v.yazi]));

export const DERSLER = {
  'girdi-cikti-birimleri': {
    no: 1, devre: null,
    adimlar: {
      merak: { kamera: 'genel', dokun: true },
      donanim: {
        kamera: 'genel',
        etiket: [['parca:kasa', 'Donanım', 'eksi'], ['parca:klavye', 'Donanım', 'eksi'], ['parca:monitor', 'Donanım', 'eksi'], ['parca:ekran', 'Yazılım', 'yesil']],
      },
      giris: {
        kamera: 'giris', vurgu: ['klavye', 'fare', 'mikrofon', 'kamera'],
        etiket: [['parca:klavye', 'Klavye', 'eksi'], ['parca:fare', 'Fare', 'eksi'], ['parca:mikrofon', 'Mikrofon', 'eksi'], ['parca:kamera', 'Web kamerası', 'eksi']],
      },
      klavye: {
        kamera: 'klavye', mod: 'yaz', yazi: '', kontrol: ['tus-bas'], dokun: true,
        etiket: [['tus:Esc', 'Esc'], ['tus:Ctrl', 'Ctrl'], ['tus:Shift', 'Shift'], ['tus:Enter', 'Enter'], ['tus:Bosluk', 'Boşluk']],
      },
      fare: {
        kamera: 'fare', mod: 'fare', kontrol: ['fare-oynat', 'fare-tikla', 'fare-sag'], dokun: true,
        etiket: [['parca:fare-sol', 'Sol düğme'], ['parca:fare-sag', 'Sağ düğme'], ['parca:fare-tekerlek', 'Tekerlek']],
      },
      'mikrofon-kamera': {
        kamera: 'mik-kam', mod: 'ses', kontrol: ['konus', 'kamera'],
        etiket: [['parca:mikrofon', 'Mikrofon', 'eksi'], ['parca:kamera', 'Web kamerası', 'eksi']],
      },
      cikis: {
        kamera: 'cikis', vurgu: ['monitor', 'hoparlor1', 'hoparlor2', 'yazici'],
        etiket: [['parca:monitor', 'Monitör', 'arti'], ['parca:hoparlor1', 'Hoparlör', 'arti'], ['parca:hoparlor2', 'Hoparlör', 'arti'], ['parca:yazici', 'Yazıcı', 'arti']],
      },
      ekran: { kamera: 'ekran', mod: 'ekran', kontrol: ['cozunurluk'], dokun: true },
      'hoparlor-yazici': {
        kamera: 'hop-yaz', kontrol: ['ses', 'yazdir'],
        etiket: [['parca:hoparlor1', 'Hoparlör', 'arti'], ['parca:yazici', 'Yazıcı', 'arti']],
      },
      'ikisi-de': {
        kamera: 'kulaklik', kontrol: ['kulak-dinle', 'kulak-konus'], vurgu: ['kulaklik'],
        etiket: [['parca:kulaklik-mikrofon', 'Mikrofon: girdi', 'eksi'], ['parca:kulaklik-kup', 'Kulaklık: çıktı', 'arti']],
      },
      kablolar: {
        kamera: 'kablolar', mod: 'kablo', kontrol: ['kablo-sonraki'], dokun: true,
        etiket: [['parca:arka-hdmi', 'HDMI'], ['parca:arka-usb', 'USB'], ['parca:arka-ses', 'Ses girişleri'], ['parca:arka-ag', 'Ağ girişi'], ['parca:arka-guc', 'Güç girişi']],
      },
      ozet: {
        kamera: 'genel',
        etiket: [
          ['parca:klavye', 'Girdi', 'eksi'], ['parca:fare', 'Girdi', 'eksi'], ['parca:mikrofon', 'Girdi', 'eksi'], ['parca:kamera', 'Girdi', 'eksi'],
          ['parca:monitor', 'Çıktı', 'arti'], ['parca:hoparlor1', 'Çıktı', 'arti'], ['parca:hoparlor2', 'Çıktı', 'arti'], ['parca:yazici', 'Çıktı', 'arti'],
          ['parca:kulaklik', 'Girdi ve çıktı', 'yesil'], ['parca:usb-bellek', 'Depolama'],
        ],
      },
    },
  },
  'kasanin-ici': {
    no: 2, devre: null,
    adimlar: {
      merak: { kamera: 'ic-kasa', mod: 'ic-kapali', dokun: true },
      kapak: { kamera: 'ic-kasa', mod: 'ic-kapali', kontrol: ['kapak'], dokun: true, etiket: [['parca:kasa', 'Kapalı kasa', 'yesil']] },
      anakart: {
        kamera: 'ic-anakart', mod: 'ic', vurgu: ['ic-anakart'], dokun: true,
        etiket: [['parca:ic-anakart', 'Anakart', 'yesil'], ['parca:ic-pil', 'BIOS pili'], ['parca:ic-ram', 'RAM yuvaları']],
      },
      islemci: {
        kamera: 'ic-islemci', mod: 'ic', kontrol: ['sogutucu-kaldir'], dokun: true,
        etiket: [['parca:ic-islemci', 'İşlemci', 'yesil'], ['parca:ic-hava', 'Hava soğutucu']],
      },
      ram: {
        kamera: 'ic-ram', mod: 'ic', kontrol: ['ram-cikar'], dokun: true,
        etiket: [['parca:ic-ram', 'RAM çubukları', 'yesil']],
      },
      depolama: {
        kamera: 'ic-depolama', mod: 'ic', dokun: true,
        etiket: [['parca:ic-m2', 'M.2 SSD', 'yesil'], ['parca:ic-sata-ssd', 'SATA SSD', 'yesil'], ['parca:ic-hdd', 'Sabit disk (HDD)', 'yesil'], ['parca:ic-sata-kablo', 'SATA veri kablosu']],
      },
      'ekran-karti': {
        kamera: 'ic-gpu', mod: 'ic', vurgu: ['ic-gpu'], dokun: true,
        etiket: [['parca:ic-gpu', 'Ekran kartı', 'arti']],
      },
      'guc-kaynagi': {
        kamera: 'ic-psu', mod: 'ic', vurgu: ['ic-psu'], dokun: true,
        etiket: [['parca:ic-psu', 'Güç kaynağı', 'yesil'], ['parca:ic-kablo24', 'Anakarta giden kablo']],
      },
      sogutma: {
        kamera: 'ic-sogutma', mod: 'ic', kontrol: ['calistir', 'sogutma-turu'], dokun: true,
        etiket: [['parca:ic-hava', 'Hava soğutucu'], ['parca:ic-fan-egzoz', 'Üst fan']],
      },
      'sivi-sogutma': {
        kamera: 'ic-sivi', mod: 'ic-sivi', kontrol: ['calistir'], dokun: true,
        etiket: [['parca:ic-pompa', 'Pompa bloğu'], ['parca:ic-radyator', 'Radyatör'], ['parca:ic-hortum', 'Hortum']],
      },
      baglantilar: {
        kamera: 'ic-arka', mod: 'ic', dokun: true,
        etiket: [['parca:ic-arka-hdmi', 'HDMI'], ['parca:ic-arka-usb', 'USB'], ['parca:ic-arka-ag', 'Ağ girişi (kablolu)'], ['parca:ic-wifi-arka', 'Wi-Fi anteni (kablosuz)'], ['parca:ic-arka-ses', 'Ses girişleri']],
      },
      ozet: {
        kamera: 'ic-kasa', mod: 'ic',
        etiket: [['parca:ic-anakart', 'Anakart', 'yesil'], ['parca:ic-hava', 'Soğutucu'], ['parca:ic-ram', 'RAM'], ['parca:ic-hdd', 'Depolama'], ['parca:ic-gpu', 'Ekran kartı'], ['parca:ic-psu', 'Güç kaynağı']],
      },
    },
  },
};
