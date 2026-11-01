// Ders adımlarının sahne kurgusu (yalın veri; hem tarayıcı hem derleme betiği okur).
// kamera: KAMERA anahtarı ya da { parca, poz, yon, pay } (o parçanın kutusuna sığdırılır).
// parca: o adımda görünen devre parçaları; poz: { parca: 'havada' } (varsayılan 'takili').
// vurgu: mor kutu ile gösterilen alanlar; etiket: [nokta, metin] ekran etiketleri.
// kontrol: kartta çıkan düğmeler; program: devrenin çalışma biçimi; kod: kod kartı gösterilir.

// Kadraj kutuları [x0, y0, z0, x1, y1, z1] mm (Ahmet 01.11: "üstten görünüşler ekrana tam sığmıyor, boşluklar
// dengesiz"). Kamera kutunun sekiz köşesini ekranın güvenli alanına iki eksende tam sığdırır (sahne.js); havadaki
// parçalar hep, kablolar: true ise kablolar da kutuya katılır. Kart x -40,7..34,3 (USB taşar), z 5,3..58,7;
// breadboard x ±41,3, z -65,3..-10,7.
const YON = [0.1, 0.84, 0.54];
export const KAMERA = {
  genel: { kutu: [-41.3, 0, -65.3, 41.3, 15, 58.7], yon: YON },
  kart: { kutu: [-40.7, 0, 5.3, 34.3, 15, 58.7], yon: [0.08, 0.86, 0.5] },
  usb: { kutu: [-41.2, 3.5, 13, -22, 15.3, 28], yon: [-0.78, 0.48, 0.42] },
  'guc-girisi': { kutu: [-37, 3.5, 44, -20, 15.5, 57], yon: [-0.7, 0.5, 0.52] },
  cip: { kutu: [-10, 3.5, 35.5, 30.5, 10.5, 48.5], yon: [0.05, 0.86, 0.5] },
  dijital: { kutu: [-15, 3.6, 4, 33.8, 13, 15], yon: [0.04, 0.72, 0.69] },
  analog: { kutu: [12.5, 3.6, 49, 30.2, 13, 58.7], yon: [0.08, 0.7, 0.71] },
  guc: { kutu: [-10.5, 3.6, 49, 12.5, 13, 58.7], yon: [0, 0.62, 0.78] },
  bb: { kutu: [-41.3, 0, -65.3, 41.3, 8.6, -10.7], yon: [0.06, 0.86, 0.5] },
  'bb-ust': { kutu: [-41.3, 0, -65.3, 41.3, 8.6, -10.7], yon: [0, 0.96, 0.27] },
  raylar: { kutu: [-41.3, 0, -34, 41.3, 8.6, -10.7], yon: [0.04, 0.8, 0.6] },
  devre: { kutu: [-14, 0, -44, 22, 22, -14], yon: [0.12, 0.8, 0.58] },
  'devre-genis': { kutu: [-41.3, 0, -65.3, 41.3, 22, 12], yon: [0.07, 0.9, 0.43], kablolar: true },
  'buton-yakin': { kutu: [5, 0, -46, 23, 18, -16], yon: [0.15, 0.72, 0.67] },
  trafik: { kutu: [-26, 0, -44, 26, 22, -14], yon: [0.05, 0.78, 0.62] },
};

const LED_DEVRE = ['led1', 'r1', 'k13', 'kgnd'];
const BUTON_DEVRE = ['led1', 'r1', 'k13', 'kgnd', 'buton', 'r2', 'k5v', 'kplus', 'k2'];
const TRAFIK = ['ledK', 'ledS', 'ledY', 'rK', 'rS', 'rY', 'kK', 'kS', 'kY', 'kgnd'];

export const DERSLER = {
  'arduino-ve-breadboard': {
    no: 1, devre: null,
    adimlar: {
      merak: { kamera: 'genel' },
      arduino: { kamera: 'kart', vurgu: ['kart'], dokun: true },
      usb: { kamera: 'usb', vurgu: ['usb'], etiket: [['alan:usb', 'USB girişi']] },
      'guc-girisi': { kamera: 'guc-girisi', vurgu: ['guc-girisi'], etiket: [['alan:guc-girisi', 'Güç girişi']] },
      mikrodenetleyici: { kamera: 'cip', vurgu: ['mikrodenetleyici'], etiket: [['alan:mikrodenetleyici', 'Mikrodenetleyici']] },
      'dijital-pinler': { kamera: 'dijital', vurgu: ['dijital-pinler'], etiket: [['pin:13', '13'], ['pin:0', '0'], ['pin:3', '~3']] },
      'analog-pinler': { kamera: 'analog', vurgu: ['analog-pinler'], etiket: [['pin:A0', 'A0'], ['pin:A5', 'A5']] },
      'guc-pinleri': { kamera: 'guc', vurgu: ['guc-pinleri'], etiket: [['pin:5V', '5V', 'arti'], ['pin:3.3V', '3,3V', 'arti'], ['pin:GND1', 'GND', 'eksi']] },
      breadboard: { kamera: 'bb', vurgu: ['breadboard'] },
      'breadboard-baglanti': { kamera: 'bb-ust', kontrol: ['delik', 'rontgen'] },
      raylar: { kamera: 'raylar', vurgu: ['bb-yakin-raylar'], kontrol: ['delik', 'rontgen'], etiket: [['ray:yakin+', 'Artı (+) rayı', 'arti'], ['ray:yakin-', 'Eksi (−) rayı', 'eksi']] },
      ozet: { kamera: 'genel', dokun: true },
    },
  },
  'arduino-led-yakma': {
    no: 2, devre: 'led',
    adimlar: {
      merak: { kamera: 'genel' },
      malzemeler: { kamera: 'devre', parca: ['led1', 'r1'], poz: { led1: 'havada', r1: 'havada' }, etiket: [['parca:led1', 'LED'], ['parca:r1', '220 Ω direnç']] },
      led: { kamera: { parca: 'led1', poz: 'havada', yon: [0.18, 0.22, 0.96], pay: 3 }, parca: ['led1'], poz: { led1: 'havada' }, etiket: [['led1:anot', 'Anot (+): uzun bacak', 'arti'], ['led1:katot', 'Katot (−): kısa bacak', 'eksi']] },
      direnc: { kamera: { parca: 'r1', poz: 'havada', yon: [0.6, 0.55, 0.58], pay: 2.5 }, parca: ['r1'], poz: { r1: 'havada' }, etiket: [['parca:r1', 'Kırmızı, kırmızı, kahverengi: 220 Ω']] },
      'kurulum-led': { kamera: 'devre', parca: ['led1'], etiket: [['delik:15:e', '15'], ['delik:16:e', '16']] },
      'kurulum-direnc': { kamera: 'devre', parca: ['led1', 'r1'], etiket: [['ray:yakin-', 'Eksi (−) rayı', 'eksi']] },
      'kurulum-kablo': { kamera: 'devre-genis', parca: LED_DEVRE, etiket: [['pin:13', '13. pin'], ['pin:GND-D', 'GND', 'eksi']] },
      kod: { kamera: 'devre-genis', parca: LED_DEVRE, kod: true },
      calistir: { kamera: 'devre-genis', parca: LED_DEVRE, program: 'blink', kontrol: ['akim', 'hiz'], kod: true },
      'tahmin-ters': { kamera: 'devre', parca: LED_DEVRE, program: 'blink', kontrol: ['ters'] },
      ozet: { kamera: 'devre-genis', parca: LED_DEVRE, program: 'blink' },
    },
  },
  'arduino-buton-led': {
    no: 3, devre: 'buton',
    adimlar: {
      merak: { kamera: 'genel' },
      malzemeler: { kamera: 'devre', parca: ['buton', 'r2', 'led1', 'r1'], poz: { buton: 'havada', r2: 'havada', led1: 'havada', r1: 'havada' }, etiket: [['parca:buton', 'Buton'], ['parca:r2', '10 kΩ'], ['parca:r1', '220 Ω']] },
      buton: { kamera: { parca: 'buton', poz: 'havada', yon: [0.3, 0.55, 0.78], pay: 2.5 }, parca: ['buton'], poz: { buton: 'havada' }, kontrol: ['buton'] },
      'giris-cikis': { kamera: 'devre-genis', parca: BUTON_DEVRE, etiket: [['pin:2', '2: giriş'], ['pin:13', '13: çıkış']] },
      kurulum: { kamera: 'devre-genis', parca: BUTON_DEVRE, etiket: [['pin:5V', '5V', 'arti'], ['pin:GND-D', 'GND', 'eksi'], ['parca:buton', 'Buton']] },
      'pull-down': { kamera: 'buton-yakin', parca: BUTON_DEVRE, etiket: [['parca:r2', '10 kΩ']] },
      kod: { kamera: 'devre-genis', parca: BUTON_DEVRE, kod: true },
      dene: { kamera: 'devre', parca: BUTON_DEVRE, program: 'buton', kontrol: ['buton', 'akim'], kod: true },
      tahmin: { kamera: 'devre', parca: BUTON_DEVRE, program: 'buton', kontrol: ['buton', 'direnc-cikar'] },
      ozet: { kamera: 'devre-genis', parca: BUTON_DEVRE, program: 'buton', kontrol: ['buton'] },
    },
  },
  'arduino-trafik-isigi': {
    no: 4, devre: 'trafik',
    adimlar: {
      merak: { kamera: 'genel' },
      malzemeler: { kamera: 'trafik', parca: ['ledK', 'ledS', 'ledY', 'rK', 'rS', 'rY'], poz: { ledK: 'havada', ledS: 'havada', ledY: 'havada', rK: 'havada', rS: 'havada', rY: 'havada' } },
      sira: { kamera: 'trafik', parca: ['ledK', 'ledS', 'ledY'], program: 'trafik' },
      kurulum: { kamera: 'devre-genis', parca: TRAFIK, etiket: [['pin:10', '10'], ['pin:9', '9'], ['pin:8', '8']] },
      kod: { kamera: 'devre-genis', parca: TRAFIK, kod: true },
      calistir: { kamera: 'devre-genis', parca: TRAFIK, program: 'trafik', kontrol: ['akim', 'sure'], kod: true },
      algoritma: { kamera: 'trafik', parca: TRAFIK, program: 'trafik', kod: true },
      tahmin: { kamera: 'trafik', parca: TRAFIK, program: 'trafik', kontrol: ['delaysiz'] },
      ileri: { kamera: 'devre-genis', parca: TRAFIK, program: 'trafik' },
      ozet: { kamera: 'devre-genis', parca: TRAFIK, program: 'trafik' },
    },
  },
};

// Karttaki düğmelerin yazıları (içerik metinleri bu adları kullanır)
export const KONTROL_YAZI = {
  akim: 'Akımı göster',
  rontgen: 'Röntgen',
  ters: "LED'i ters çevir",
  buton: 'Butona bas',
  'direnc-cikar': '10 kΩ direnci çıkar',
  delaysiz: 'delay satırlarını sil',
};
