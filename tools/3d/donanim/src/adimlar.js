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
};
