// Keşif kataloğu (yalın veri; hem tarayıcı hem derleme betiği okur).
// Ahmet 01.11: "hepsi aynı mor soru işareti değil, daha ayırt edilebilir olsunlar"; "karttaki her kısma
// tıklayınca ayrı ayrı anlatılsın". Her keşif noktası bir gruba (renk + simge) bağlıdır; işaretlerde numara da
// vardır, renk tek başına anlam taşımaz.
//
// Kart içeriği sırası: kavramlar.json[id], sonra kesif.json[id] (derlemede birleşir), sonra `kavram`
// (eski eşleşme: zengin, sınıfa göre metin), en sonda `ad` + `kisa` (sabit kısa açıklama).
// oncelik: ekranda çakışan işaretlerden önceliği düşük olan gizlenir, yaklaştıkça açılır.

export const KATEGORI_SIRA = ['guc', 'islem', 'pin', 'isik', 'breadboard', 'parca', 'kontrol'];
export const KATEGORI = {
  guc: { ad: 'Güç', renk: '#d32f2f', ikon: 'zap' },
  islem: { ad: 'İşlem', renk: '#7c4dff', ikon: 'cpu' },
  pin: { ad: 'Pinler', renk: '#1e6fd9', ikon: 'plug' },
  // açık zeminde beyaz simge okunmuyor: koyu simge (turuncuda da beyaz 2,7:1 kalıyor)
  isik: { ad: 'Işıklar', renk: '#e0a100', ikon: 'lightbulb', koyu: true },
  breadboard: { ad: 'Breadboard', renk: '#2e9d48', ikon: 'grid-3x3' },
  parca: { ad: 'Parçalar', renk: '#f57c00', ikon: 'component', koyu: true },
  kontrol: { ad: 'Kontrol', renk: '#6b7280', ikon: 'rotate-ccw' },
};

const A = 3, B = 2, C = 1, P = 0; // öncelik: ana, ikincil, ayrıntı, pin
export const KESIF = {
  // ---------------------------------------------------------------- kart
  kart: { kat: null, ad: 'Arduino UNO kartı', kavram: 'arduino', oncelik: A, kisa: 'Mikrodenetleyiciyi ve onu kullanmayı kolaylaştıran girişleri, pinleri taşıyan geliştirme kartı.' },
  usb: { kat: 'guc', ad: 'USB girişi', oncelik: A, kisa: 'Kart bilgisayara buradan bağlanır: kod bu kabloyla yüklenir, kart da bu kablodan elektrik alabilir.' },
  'guc-girisi': { kat: 'guc', ad: 'Güç girişi', oncelik: A, kisa: 'Pil ya da adaptör buraya takılır; böylece kart bilgisayar olmadan da çalışır.' },
  regulator: { kat: 'guc', ad: 'Voltaj regülatörü', oncelik: B, kisa: 'Güç girişinden gelen daha yüksek gerilimi kartın kullandığı 5 volta düşürür ve sabit tutar.' },
  kondansator: { kat: 'guc', ad: 'Kondansatör', oncelik: B, kisa: 'Elektriği kısa süre depolayıp geri verir; gerilimdeki ani dalgalanmaları yumuşatarak kartın kararlı çalışmasına yardım eder.' },
  'guc-pinleri': { kat: 'guc', ad: 'Güç pinleri', kavram: 'gerilim', oncelik: A, kisa: 'Devredeki parçalara elektrik veren pinler: 5V, 3,3V, GND ve Vin.' },
  mikrodenetleyici: { kat: 'islem', ad: 'Mikrodenetleyici', oncelik: A, kisa: 'Kartın beyni: yüklenen kodu satır satır çalıştırır, pinleri okur ve yönetir.' },
  'usb-cipi': { kat: 'islem', ad: 'USB çipi', oncelik: B, kisa: 'Bilgisayardan USB ile gelen veriyi mikrodenetleyicinin anlayacağı seri veriye çevirir.' },
  kristal: { kat: 'islem', ad: 'Kristal (16 MHz)', oncelik: B, kisa: 'Kartın saati gibidir: saniyede 16 milyon kez titreşerek işlemlerin sırayla yapılacağı düzenli bir ritim verir.' },
  'dijital-pinler': { kat: 'pin', ad: 'Dijital pinler', kavram: 'dijital', oncelik: A, kisa: '0 ile 13 arası numaralı pinler. Her biri açık (HIGH) ya da kapalı (LOW) olur; LED yakmak, buton okumak için kullanılır.' },
  'analog-pinler': { kat: 'pin', ad: 'Analog giriş pinleri', kavram: 'analog', oncelik: A, kisa: 'A0 ile A5 arası pinler. Açık ya da kapalının yanında aradaki değerleri de ölçer; ışık ve sıcaklık algılayıcıları burada okunur.' },
  icsp: { kat: 'pin', ad: 'ICSP pinleri', oncelik: B, kisa: 'Mikrodenetleyiciye USB olmadan, özel bir programlayıcıyla doğrudan kod yüklemek için kullanılan altı pinlik başlık.' },
  'led-l': { kat: 'isik', ad: 'L ışığı', oncelik: C, kisa: '13. pine bağlı küçük ışık. 13. pine HIGH verilince yanar; ek parça takmadan kodu denemeye yarar.' },
  'led-on': { kat: 'isik', ad: 'ON ışığı', oncelik: C, kisa: 'Karta elektrik gelince yanar. Yanmıyorsa kart güç almıyordur.' },
  'led-txrx': { kat: 'isik', ad: 'TX ve RX ışıkları', oncelik: C, kisa: 'Kart bilgisayarla veri alışverişi yaparken yanıp söner: TX veri gönderirken, RX veri alırken yanar.' },
  reset: { kat: 'kontrol', ad: 'Reset düğmesi', oncelik: A, kisa: 'Basınca kart yüklü kodu en baştan çalıştırır. Kod silinmez.' },
  'montaj-deligi': { kat: 'kontrol', ad: 'Montaj deliği', oncelik: C, kisa: 'Kartı vidayla bir kutuya ya da tabana sabitlemek için açılmış delik.' },
  // ---------------------------------------------------------------- pinler (yakın çekimde)
  'pin-dijital': { kat: 'pin', ad: 'Dijital pin', kavram: 'dijital', oncelik: P, kisa: 'HIGH (5 volt) ya da LOW (0 volt) değerini verir veya okur.' },
  'pin-pwm': { kat: 'pin', ad: 'PWM pini (~)', kavram: 'pwm', oncelik: P, kisa: 'Yanında ~ işareti olan pin. Çok hızlı açılıp kapanarak LED\'i yarı parlaklıkta yakmak gibi ara değerler üretebilir.' },
  'pin-rx-tx': { kat: 'pin', ad: 'RX ve TX pinleri', oncelik: P, kisa: 'Seri haberleşme pinleri: 0 (RX) veri alır, 1 (TX) veri gönderir. Kod yüklenirken de kullanıldıkları için devrede boş bırakılmaları önerilir.' },
  'pin-13': { kat: 'pin', ad: '13. pin', oncelik: P, kisa: 'Karttaki L ışığına bağlıdır: 13. pine HIGH verilince hem buraya bağlı LED hem L ışığı yanar.' },
  'pin-gnd': { kat: 'pin', ad: 'GND pini', kavram: 'gnd', oncelik: P, kisa: 'Toprak, yani eksi uç. Akım devreyi dolaşıp buradan karta döner; devrenin 0 volt noktasıdır.' },
  'pin-5v': { kat: 'guc', ad: '5V pini', oncelik: P, kisa: 'Devredeki parçalara 5 volt verir.' },
  'pin-3v3': { kat: 'guc', ad: '3,3V pini', oncelik: P, kisa: 'Daha düşük gerilimle çalışan parçalara 3,3 volt verir.' },
  'pin-vin': { kat: 'guc', ad: 'Vin pini', oncelik: P, kisa: 'Güç girişine takılan adaptörün gerilimine bu pinden ulaşılır; karta bu pinden de güç verilebilir.' },
  'pin-aref': { kat: 'pin', ad: 'AREF pini', oncelik: P, kisa: 'Analog ölçümlerde karşılaştırma için kullanılan başvuru (referans) gerilimi bu pine verilebilir.' },
  'pin-ioref': { kat: 'pin', ad: 'IOREF pini', oncelik: P, kisa: 'Kartın pinlerinin hangi gerilimle çalıştığını (UNO\'da 5 volt) üstüne takılan ek kartlara bildirir.' },
  'pin-reset': { kat: 'pin', ad: 'RESET pini', oncelik: P, kisa: 'Bu pin GND\'ye bağlanırsa kart, reset düğmesine basılmış gibi kodu baştan başlatır.' },
  'pin-sda-scl': { kat: 'pin', ad: 'SDA ve SCL pinleri', oncelik: P, kisa: 'I2C haberleşmesinde kullanılır: SDA veriyi, SCL saat sinyalini taşır. UNO\'da A4 ve A5 ile aynı hatlara bağlıdır.' },
  'pin-analog': { kat: 'pin', ad: 'Analog giriş pini', kavram: 'analog', oncelik: P, kisa: '0 ile 5 volt arasındaki gerilimi ölçer ve 0 ile 1023 arasında bir sayıya çevirir.' },
  // ---------------------------------------------------------------- breadboard
  breadboard: { kat: 'breadboard', ad: 'Breadboard', oncelik: A, kisa: 'Lehim yapmadan devre kurmaya yarayan delikli tahta; deliklerin bir kısmı içeriden birbirine bağlıdır.' },
  serit: { kat: 'breadboard', ad: 'Şerit (5\'li delik grubu)', oncelik: C, kisa: 'Aynı sütundaki beş delik içeriden bir metal şeritle bağlıdır; bu deliklere takılan bacaklar birbirine bağlanmış olur.' },
  'arti-ray': { kat: 'breadboard', ad: 'Artı (+) rayı', oncelik: B, kisa: 'Kırmızı çizgi boyunca uzanan sıra boydan boya bağlıdır; genellikle 5V buraya bağlanır.' },
  'eksi-ray': { kat: 'breadboard', ad: 'Eksi (−) rayı', oncelik: B, kisa: 'Mavi çizgi boyunca uzanan sıra boydan boya bağlıdır; genellikle GND buraya bağlanır.' },
  'orta-kanal': { kat: 'breadboard', ad: 'Orta kanal', oncelik: B, kisa: 'Breadboard\'u iki yarıya ayırır: iki yarıdaki delikler birbirine bağlı değildir. Buton gibi parçalar bu kanalın üstüne takılır.' },
  koordinat: { kat: 'breadboard', ad: 'Koordinatlar', oncelik: C, kisa: 'Harfler satırları (a-j), sayılar sütunları (1-30) gösterir. 15e gibi bir adres, deliğin yerini tam söyler.' },
  // ---------------------------------------------------------------- devre parçaları
  led: { kat: 'isik', ad: 'LED', oncelik: A, kisa: 'Elektrik doğru yönde geçince ışık veren parça.' },
  anot: { kat: 'parca', ad: 'Anot (+)', oncelik: C, kisa: 'LED\'in uzun bacağı; artı uca bağlanır.' },
  katot: { kat: 'parca', ad: 'Katot (−)', oncelik: C, kisa: 'LED\'in kısa bacağı; eksi uca (GND) bağlanır.' },
  direnc: { kat: 'parca', ad: 'Direnç', oncelik: A, kisa: 'Akımı sınırlar; LED\'i fazla akımdan korur.' },
  'renk-bantlari': { kat: 'parca', ad: 'Renk bantları', oncelik: C, kisa: 'Direncin değeri renklerle yazılır: ilk iki bant rakamları, üçüncüsü eklenecek sıfır sayısını, sonuncusu hata payını gösterir.' },
  buton: { kat: 'parca', ad: 'Buton', oncelik: A, kisa: 'Basılınca iki ucunu birbirine bağlar, bırakınca ayırır.' },
  kablo: { kat: 'parca', ad: 'Atlama kablosu', oncelik: B, kisa: 'Ucundaki iğnelerle karttaki pinleri breadboard\'daki deliklere bağlar; elektrik kablonun içinden geçer.' },
};

// Bir kimliğin kategorisi (yoksa null)
export const kategoriBul = (id) => KATEGORI[KESIF[id]?.kat] ? KESIF[id].kat : null;
