// Özgür Mod: seçilen programın Arduino kodu ve her satırın altındaki Türkçesi. Saf modül (DOM yok).
// Dil, Ders 2 (Blink) ve Ders 3 (Button) kartlarındaki açıklamalarla aynı; pinler öğretmenin seçimine göre yazılır.
// Kaynak: https://docs.arduino.cc/built-in-examples/basics/Blink/ ve https://docs.arduino.cc/built-in-examples/digital/Button/
import { PROGRAM_PINLERI, kabloluPinler } from './devreCoz.js';

const BEKLE = {
  1000: ['1000 milisaniye, yani 1 saniye bekle.', '1 saniye daha bekle.'],
  500: ['500 milisaniye, yani yarım saniye bekle.', 'Yarım saniye daha bekle.'],
  200: ['200 milisaniye, yani 0,2 saniye bekle.', '0,2 saniye daha bekle.'],
};

// Dönüş: { satirlar: [{ k, t }], vurgu: { yuksek: [satır no], dusuk: [satır no] } }
// vurgu: çalışırken hangi satırların yanacağı (yanıp sönmede iki yarı, butonda iki dal)
export function kodUret(program, parcalar = []) {
  const s = [];
  const ekle = (k, t = '') => { s.push({ k, t }); return s.length; };
  const vurgu = { yuksek: [], dusuk: [] };
  if (program.tur === 'buton') {
    const g = program.giris, c = program.cikis;
    ekle(`const int buton = ${g};`, `Butonun bağlı olduğu pine ad verelim: buton = ${g} (const, bu değer değişmez demek).`);
    ekle(`const int led = ${c};`, `LED'in bağlı olduğu pine de ad verelim: led = ${c}.`);
    ekle('');
    ekle('void setup() {', 'Hazırlık bölümü: kart açılınca bir kez çalışır.');
    ekle('pinMode(buton, INPUT);', `Buton pinini (${g}) giriş yap: bu pin bilgi okuyacak.`);
    ekle('pinMode(led, OUTPUT);', `LED pinini (${c}) çıkış yap: bu pin elektrik verecek.`);
    ekle('}', 'Hazırlık bölümü bitti.');
    ekle('');
    ekle('void loop() {', 'Tekrar bölümü: durmadan döner.');
    const eger = ekle('if (digitalRead(buton) == HIGH) {', 'Eğer buton pini HIGH okunuyorsa, yani butona basılıysa:');
    const yak = ekle('digitalWrite(led, HIGH);', "LED'i yak.");
    const degil = ekle('} else {', 'Değilse, yani butona basılı değilse:');
    const son = ekle('digitalWrite(led, LOW);', "LED'i söndür.");
    ekle('}', 'Karar bölümü bitti.');
    ekle('}', 'Tekrar bölümü bitti; başa dön ve butonu yeniden oku.');
    vurgu.yuksek = [eger, yak]; vurgu.dusuk = [eger, degil, son];
  } else if (program.tur === 'elle') {
    const kablolu = kabloluPinler(parcalar);
    const pinler = PROGRAM_PINLERI.filter((p) => kablolu.has(String(p)) || program.seviyeler?.[p]).reverse();
    ekle('void setup() {', pinler.length ? 'Hazırlık bölümü: kart açılınca bir kez çalışır.' : 'Hazırlık bölümü: henüz kablo takılı ya da HIGH yapılmış pin yok.');
    for (const p of pinler) {
      ekle(`pinMode(${p}, OUTPUT);`, `${p} numaralı pini çıkış yap.`);
      const y = program.seviyeler?.[p];
      const n = ekle(`digitalWrite(${p}, ${y ? 'HIGH' : 'LOW'});`, y ? `${p}. pine elektrik ver (5 volt).` : `${p}. pinin elektriğini kes (0 volt).`);
      vurgu.yuksek.push(n); vurgu.dusuk.push(n);
    }
    ekle('}', 'Hazırlık bölümü bitti.');
    ekle('');
    ekle('void loop() {', 'Tekrar bölümü: burada komut yok, pinler hazırlıkta ayarlandığı gibi kalır.');
    ekle('}', 'Tekrar bölümü bitti.');
  } else {
    const p = program.pin, [b1, b2] = BEKLE[program.bekleme] || BEKLE[1000];
    ekle('void setup() {', 'Hazırlık bölümü başlıyor. Buradaki komutlar kart açılınca yalnız bir kez çalışır.');
    ekle(`pinMode(${p}, OUTPUT);`, `${p} numaralı pini çıkış yap: bu pin artık elektrik verebilir.`);
    ekle('}', 'Hazırlık bölümü bitti.');
    ekle('');
    ekle('void loop() {', 'Tekrar bölümü başlıyor. Buradaki komutlar sırayla çalışır, bitince en başa döner.');
    vurgu.yuksek.push(ekle(`digitalWrite(${p}, HIGH);`, `${p}. pine elektrik ver (5 volt): LED yanar.`));
    vurgu.yuksek.push(ekle(`delay(${program.bekleme});`, b1));
    vurgu.dusuk.push(ekle(`digitalWrite(${p}, LOW);`, `${p}. pinin elektriğini kes (0 volt): LED söner.`));
    vurgu.dusuk.push(ekle(`delay(${program.bekleme});`, b2));
    ekle('}', 'Tekrar bölümü bitti; en başa dön ve yeniden başla.');
  }
  return { satirlar: s, vurgu };
}

// Süslü parantez içindeki satırlar iki boşluk girintilenir (build.mjs kodHtml ile aynı kural)
export function girintile(satirlar) {
  let derinlik = 0;
  return satirlar.map(({ k }) => {
    const t = k.trim();
    if (t.startsWith('}')) derinlik = Math.max(0, derinlik - 1);
    const g = '  '.repeat(derinlik) + t;
    if (t.endsWith('{')) derinlik++;
    return g;
  });
}
