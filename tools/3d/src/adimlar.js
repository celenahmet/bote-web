// Ders adımlarının sahne kurgusu (yalın veri; hem tarayıcı hem derleme betiği okur).
// kamera: KAMERA anahtarı ya da { parca, poz, yaricap, yon }.
// parca: o adımda görünen devre parçaları; poz: { parca: 'havada' } (varsayılan 'takili').
// vurgu: mor kutu ile gösterilen alanlar; etiket: [nokta, metin] ekran etiketleri.
// kontrol: kartta çıkan düğmeler; program: devrenin çalışma biçimi; kod: kod kartı gösterilir.

const YON = [0.1, 0.84, 0.54];
export const KAMERA = {
  genel: { merkez: [0, 2, -4], yon: YON, yaricap: 76 },
  kart: { merkez: [0, 5, 32], yon: [0.08, 0.86, 0.5], yaricap: 40 },
  usb: { merkez: [-32.6, 9.4, 20.6], yon: [-0.78, 0.48, 0.42], yaricap: 20 },
  'guc-girisi': { merkez: [-29.1, 9.5, 50.2], yon: [-0.7, 0.5, 0.52], yaricap: 19 },
  cip: { merkez: [10.2, 7, 42.1], yon: [0.05, 0.86, 0.5], yaricap: 23 },
  dijital: { merkez: [9.4, 11, 7.9], yon: [0.04, 0.72, 0.69], yaricap: 29 },
  analog: { merkez: [21.3, 11, 56.1], yon: [0.08, 0.7, 0.71], yaricap: 13 },
  guc: { merkez: [1.0, 11, 56.1], yon: [0, 0.7, 0.71], yaricap: 16 },
  bb: { merkez: [0, 6, -38], yon: [0.06, 0.86, 0.5], yaricap: 46 },
  'bb-ust': { merkez: [0, 8.5, -38], yon: [0, 0.96, 0.27], yaricap: 40 },
  raylar: { merkez: [0, 8.5, -24], yon: [0.04, 0.8, 0.6], yaricap: 40 },
  devre: { merkez: [3, 9, -30], yon: [0.12, 0.8, 0.58], yaricap: 30 },
  'devre-genis': { merkez: [2, 8, -16], yon: [0.07, 0.9, 0.43], yaricap: 47 },
  'buton-yakin': { merkez: [14, 12, -36], yon: [0.15, 0.72, 0.67], yaricap: 16 },
  trafik: { merkez: [0, 9, -30], yon: [0.05, 0.78, 0.62], yaricap: 40 },
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
      'guc-pinleri': { kamera: 'guc', vurgu: ['guc-pinleri'], etiket: [['pin:5V', '5V'], ['pin:3.3V', '3,3V'], ['pin:GND1', 'GND']] },
      breadboard: { kamera: 'bb', vurgu: ['breadboard'] },
      'breadboard-baglanti': { kamera: 'bb-ust', kontrol: ['delik', 'rontgen'] },
      raylar: { kamera: 'raylar', vurgu: ['bb-yakin-raylar'], kontrol: ['delik', 'rontgen'], etiket: [['ray:yakin+', 'Artı (+)'], ['ray:yakin-', 'Eksi (−)']] },
      ozet: { kamera: 'genel', dokun: true },
    },
  },
  'arduino-led-yakma': {
    no: 2, devre: 'led',
    adimlar: {
      merak: { kamera: 'genel' },
      malzemeler: { kamera: 'devre', parca: ['led1', 'r1'], poz: { led1: 'havada', r1: 'havada' }, etiket: [['parca:led1', 'LED'], ['parca:r1', '220 Ω direnç']] },
      led: { kamera: { parca: 'led1', poz: 'havada', yaricap: 19, yon: [0.18, 0.22, 0.96], kaydir: -4 }, parca: ['led1'], poz: { led1: 'havada' }, etiket: [['led1:anot', 'Anot (+): uzun bacak'], ['led1:katot', 'Katot (−): kısa bacak']] },
      direnc: { kamera: { parca: 'r1', poz: 'havada', yaricap: 11, yon: [0.6, 0.55, 0.58] }, parca: ['r1'], poz: { r1: 'havada' }, etiket: [['parca:r1', 'Kırmızı, kırmızı, kahverengi: 220 Ω']] },
      'kurulum-led': { kamera: 'devre', parca: ['led1'], etiket: [['delik:15:e', '15'], ['delik:16:e', '16']] },
      'kurulum-direnc': { kamera: 'devre', parca: ['led1', 'r1'], etiket: [['ray:yakin-', 'Eksi (−) rayı']] },
      'kurulum-kablo': { kamera: 'devre-genis', parca: LED_DEVRE, etiket: [['pin:13', '13. pin'], ['pin:GND-D', 'GND']] },
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
      buton: { kamera: { parca: 'buton', poz: 'havada', yaricap: 12, yon: [0.3, 0.55, 0.78] }, parca: ['buton'], poz: { buton: 'havada' }, kontrol: ['buton'] },
      'giris-cikis': { kamera: 'devre-genis', parca: BUTON_DEVRE, etiket: [['pin:2', '2: giriş'], ['pin:13', '13: çıkış']] },
      kurulum: { kamera: 'devre-genis', parca: BUTON_DEVRE, etiket: [['pin:5V', '5V'], ['pin:GND-D', 'GND'], ['parca:buton', 'Buton']] },
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
