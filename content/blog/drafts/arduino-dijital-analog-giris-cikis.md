---
title: "Arduino Dijital ve Analog Giriş Çıkış: PWM ve analogRead"
citeTitle: "Arduino dijital ve analog giriş çıkış: PWM ve analogRead"
description: "Arduino UNO'da dijital çıkış, PWM ile analog çıkış, butonla dijital giriş ve potansiyometreyle analog giriş: pinler, değer aralıkları, LED direnci, örnekler."
date: 2026-10-04
category: bolum-rehberi
type: rehber
tags: [arduino, dijital giriş, dijital çıkış, analog giriş, analog çıkış, pwm, digitalwrite, analogwrite, analogread, digitalread, pinmode, seri monitör, fiziksel programlama]
summary:
  - "**Dijital çıkış** iki değerlidir: digitalWrite(pin, HIGH) pini 5 volta, LOW 0 volta çeker. LED'i doğrudan pine bağlamak yerine seri bir dirençle bağlamak gerekir; UNO'da bir G/Ç pininden en fazla 20 mA çekilmesi önerilir."
  - "**Analog çıkış** UNO'da gerçek bir gerilim değil PWM'dir: analogWrite(pin, değer) yalnız ~ işaretli 3, 5, 6, 9, 10 ve 11. pinlerde çalışır, değer 0 (hep kapalı) ile 255 (hep açık) arasındadır."
  - "**Dijital giriş** digitalRead ile 0 ya da 1 okur. Boşta kalan giriş rastgele değişir; bu yüzden 10 kΩ'luk dış direnç ya da INPUT_PULLUP ile girişe tanımlı bir durum verilir. INPUT_PULLUP'ta mantık terstir: basılı buton LOW okunur."
  - "**Analog giriş** analogRead ile A0 ile A5 arasındaki pinlerden okunur. UNO'nun 10 bitlik ADC'si 0 ile 5 volt arasını 0 ile 1023 arasına çevirir; bir adım yaklaşık 4,9 milivolttur."
  - "analogRead 0-1023, analogWrite 0-255 aralığında çalıştığı için potansiyometreyle LED parlaklığı ayarlanırken okunan değer 4'e bölünür."
faq:
  - q: "Arduino'da dijital ve analog giriş çıkış nedir?"
    a: "Dijital giriş ve çıkış yalnız iki durumla çalışır: HIGH (1, UNO'da 5 V) ve LOW (0, 0 V). Analog giriş ise bir gerilimi sayıya çevirir; UNO'da analogRead 0 ile 5 volt arasını 0 ile 1023 arasında okur. UNO'da analog çıkış gerçek bir ara gerilim değil, analogWrite ile üretilen ve 0 ile 255 arasında ayarlanan PWM sinyalidir."
  - q: "Arduino UNO PWM pinleri hangileri?"
    a: "Arduino UNO R3'te PWM çıkışı verebilen pinler 3, 5, 6, 9, 10 ve 11'dir; kart üzerinde ve pin şemasında ~ işaretiyle gösterilir. analogWrite bu pinlerde kullanılır. 5 ve 6. pinlerde çok düşük değerlerde görev oranı beklenenden yüksek çıkabilir, çünkü bu pinler millis ve delay ile aynı zamanlayıcıyı paylaşır."
  - q: "analogWrite değer aralığı nedir?"
    a: "analogWrite 0 ile 255 arasında bir değer alır: 0 her zaman kapalı, 255 her zaman açık demektir. Değer PWM'in görev oranını belirler; örneğin 127 yaklaşık yüzde 50 görev oranı verir ve 5 voltluk kartta ortalama gerilim yaklaşık 2,5 volt olur."
  - q: "analogRead kaç ile kaç arasında değer verir?"
    a: "Arduino UNO'nun analog-dijital çeviricisi 10 bitliktir; analogRead 0 ile 5 volt arasındaki gerilimi 0 ile 1023 arasında bir tam sayıya çevirir. Bir adım 5 / 1024, yaklaşık 4,9 milivolttur. Okunan değer gerilim = değer / 1023 × 5 ile volta çevrilebilir."
  - q: "Arduino'da LED için kaç ohm direnç kullanılır?"
    a: "Direnç, Ohm kanunuyla R = (5 V − LED'in ileri gerilimi) / istenen akım olarak bulunur. İleri gerilimi yaklaşık 1,9 V olan kırmızı bir LED için 220 ohm yaklaşık 14 mA akım verir; bu, UNO'da pin başına önerilen 20 mA sınırının ve LED'in 30 mA'lik sınırının altındadır. Bu yüzden derslerde 220 ohm yaygın kullanılır."
  - q: "INPUT_PULLUP nedir?"
    a: "INPUT_PULLUP, Arduino'daki mikrodenetleyicinin içindeki çekme (pull-up) direncini açan pin modudur; AVR tabanlı kartlarda bu direnç 20 ile 50 kΩ arasındadır. Böylece dış direnç gerekmez. Butonun öteki ucu toprağa (GND) bağlanır ve mantık tersine döner: buton basılı değilken HIGH, basılıyken LOW okunur."
changes:
  - date: 2026-10-04
    text: "Yayımlandı. Pinler, değer aralıkları ve fonksiyonlar Arduino'nun resmî belgelerinden ve UNO R3 pin şemasından; LED değerleri üreticinin veri sayfasından. Bütün sayısal sonuçlar programla denetlendi."
sources:
  - id: uno
    kind: web
    author: "Arduino"
    title: "UNO R3 (A000066)"
    publisher: "Arduino Documentation"
    year: 2026
    url: "https://docs.arduino.cc/hardware/uno-rev3/"
    lang: en
    accessed: 2026-10-04
    note: "ATmega328P tabanlı; 14 dijital giriş/çıkış pini (6'sı PWM), 6 analog giriş, 16 MHz rezonatör, USB bağlantısı."
  - id: pinout
    kind: web
    author: "Arduino"
    title: "UNO R3 Full Pinout (A000066)"
    publisher: "Arduino Documentation (PDF)"
    year: 2026
    url: "https://docs.arduino.cc/resources/pinouts/A000066-full-pinout.pdf"
    lang: en
    accessed: 2026-10-04
    note: "PWM pinleri ~D3, ~D5, ~D6, ~D9, ~D10, ~D11; analog girişler A0-A5; G/Ç pini başına en fazla akım 20 mA."
  - id: dijitalpin
    kind: web
    author: "Arduino"
    title: "Digital Pins"
    publisher: "Arduino Documentation"
    year: 2026
    url: "https://docs.arduino.cc/learn/microcontrollers/digital-pins/"
    lang: en
    accessed: 2026-10-04
    note: "Pinler varsayılan olarak giriştir (yüksek empedans, 100 MΩ seri direnç eşdeğeri); boştaki giriş gürültüyle rastgele değişir; 10 kΩ çekme ya da indirme direnci; INPUT_PULLUP iç direnci AVR'de 20-50 kΩ, mantığı ters çevirir, sensörün öteki ucu GND'ye; OUTPUT pini 40 mA'e kadar verir ya da çeker, kısa devre pini bozabilir."
  - id: analogwrite
    kind: web
    author: "Arduino"
    title: "analogWrite()"
    publisher: "Arduino Language Reference"
    year: 2026
    url: "https://docs.arduino.cc/language-reference/en/functions/analog-io/analogWrite/"
    lang: en
    accessed: 2026-10-04
    note: "Pine PWM dalgası yazar; görev oranı 0 (hep kapalı) ile 255 (hep açık) arası; öncesinde pinMode gerekmez; analog pinlerle ve analogRead ile ilgisi yoktur; 5 ve 6. pinlerde düşük değerlerde görev oranı yüksek çıkabilir (millis/delay zamanlayıcısı); potansiyometre örneğinde analogRead değeri 4'e bölünür."
  - id: analogread
    kind: web
    author: "Arduino"
    title: "analogRead()"
    publisher: "Arduino Language Reference"
    year: 2026
    url: "https://docs.arduino.cc/language-reference/en/functions/analog-io/analogRead/"
    lang: en
    accessed: 2026-10-04
    note: "UNO'da 10 bitlik çok kanallı ADC; 0-5 V girişi 0-1023 tam sayısına çevirir; çözünürlük 5 V / 1024 = 4,9 mV; potansiyometrenin orta ucu analog pine, dış uçları GND ve VCC'ye; Serial.begin(9600) ile seri monitöre yazdırma; gerilim = ham değer / 1023 × 5; bağlı olmayan analog pin dalgalanır."
  - id: pwm
    kind: web
    author: "Hirzel, T."
    title: "Basics of PWM (Pulse Width Modulation)"
    publisher: "Arduino Documentation"
    year: 2022
    url: "https://docs.arduino.cc/learn/microcontrollers/analog-output/"
    lang: en
    accessed: 2026-10-04
    note: "PWM, sayısal yolla analog sonuç elde etme tekniği; açık kalma süresi darbe genişliği; Arduino'nun PWM frekansı yaklaşık 500 Hz, periyot 2 ms; analogWrite(255) yüzde 100, analogWrite(127) yüzde 50 görev oranı; PWM pinleri ~ ile gösterilir."
  - id: plotter
    kind: web
    author: "Söderby, K."
    title: "Using the Serial Plotter Tool"
    publisher: "Arduino Documentation (Arduino IDE 2)"
    year: 2025
    url: "https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-serial-plotter/"
    lang: en
    accessed: 2026-10-04
    note: "Seri çizici, karttan seri bağlantıyla gönderilen verileri grafik olarak gösterir; seri monitörün görsel karşılığıdır ve seri iletişim kullanan hemen her çizimde çalışır."
  - id: led
    kind: web
    author: "Kingbright"
    title: "WP7113ID T-1 3/4 (5mm) Solid State Lamp: Datasheet"
    publisher: "Kingbright"
    year: 2026
    url: "https://www.kingbrightusa.com/images/catalog/SPEC/WP7113ID.pdf"
    lang: en
    accessed: 2026-10-04
    note: "5 mm kırmızı LED; 10 mA'de ileri gerilim tipik 1,9 V, en çok 2,3 V; sürekli ileri akım en çok 30 mA; ters gerilim en çok 5 V."
  - id: tinkercad
    kind: web
    author: "Autodesk"
    title: "Tinkercad Circuits"
    publisher: "Autodesk Tinkercad"
    year: 2026
    url: "https://www.tinkercad.com/circuits"
    lang: tr
    accessed: 2026-10-04
    note: "Etkileşimli devre düzenleyiciyle sanal devre kurma, bağlama ve kodlama; Arduino ve micro:bit; devreyi kablolamadan önce bileşenlerin tepkisini simülasyonda izleme."
---

Bu yazı, Arduino'nun dış dünyayla nasıl konuştuğunu dört başlıkta anlatır: dijital çıkış, analog çıkış, dijital giriş ve analog giriş. Her başlıkta hangi pinin kullanıldığı, hangi fonksiyonun çağrıldığı ve değerin hangi aralıkta olduğu verilir; ardından çözümlü örnekler, sık hatalar ve cevaplı alıştırmalar gelir. Devre hesaplarının dayandığı Ohm kanununu [Ohm ve Kirchhoff Kanunları](/blog/ohm-ve-kirchhoff-kanunlari), devre elemanlarını [Elektronik Devre Elemanları](/blog/elektronik-devre-elemanlari) yazısında anlattık.

## Arduino'da giriş ve çıkış nedir?

Arduino UNO R3, ATmega328P mikrodenetleyicisine dayanan bir karttır. Üzerinde 14 dijital giriş/çıkış pini vardır; bunların 6'sı PWM çıkışı verebilir. Ayrıca 6 analog giriş pini bulunur.[@uno] Analog girişler kartta A0'dan A5'e kadar adlandırılır.[@pinout]

Giriş, Arduino'nun dışarıdan bilgi okumasıdır (bir butonun basılı olup olmadığı, bir potansiyometrenin konumu). Çıkış, Arduino'nun dışarıyı etkilemesidir (bir LED'i yakmak, bir motorun hızını ayarlamak). Bu bilgi ya **dijitaldir**, yani yalnız iki durumdan biridir, ya da **analogdur**, yani bir aralıktaki herhangi bir değeri alabilir.

| İş | Fonksiyon | UNO'da pin | Değer aralığı |
|---|---|---|---|
| Dijital çıkış | digitalWrite | 0-13 (ve A0-A5) | LOW (0 V) ya da HIGH (5 V) |
| Analog çıkış (PWM) | analogWrite | 3, 5, 6, 9, 10, 11 | 0-255 |
| Dijital giriş | digitalRead | 0-13 (ve A0-A5) | LOW (0) ya da HIGH (1) |
| Analog giriş | analogRead | A0-A5 | 0-1023 |

Tablodaki pin ve aralık bilgileri Arduino'nun resmî belgelerinden alınmıştır.[@pinout][@analogwrite][@analogread] Analog pinlerin dijital pin gibi de kullanılabileceğini Arduino'nun dijital pinler belgesi belirtir.[@dijitalpin]

## Dijital çıkış: pinMode ve digitalWrite

Dijital çıkışta pin ya HIGH ya da LOW olur. Sayısal mantıktaki 1 ve 0'a karşılık gelir; 5 voltluk UNO'da HIGH 5 volt, LOW 0 volttur. Bu iki değerli mantığı [Mantık Kapıları ve Boole Cebiri](/blog/mantik-kapilari-ve-boole-cebiri) yazısında ayrıntılı anlattık.

Bir pini çıkış olarak kullanmak için önce pinMode(pin, OUTPUT) çağrılır. Çıkış olarak ayarlanan pin düşük empedanslı duruma geçer ve başka devrelere kayda değer akım verebilir; Arduino'nun belgesine göre ATmega pinleri 40 mA'e kadar akım verebilir ya da çekebilir.[@dijitalpin] UNO R3'ün pin şeması ise G/Ç pini başına en fazla 20 mA çekilmesini söyler.[@pinout] Pine kısa devre yapmak ya da yüksek akımlı bir yükü doğrudan bağlamak pini, hatta bütün mikrodenetleyiciyi bozabilir.[@dijitalpin]

```cpp
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);     // pini çıkış yap
}

void loop() {
  digitalWrite(ledPin, HIGH);  // LED yanar (5 V)
  delay(1000);                 // 1 saniye bekle
  digitalWrite(ledPin, LOW);   // LED söner (0 V)
  delay(1000);
}
```

### LED'i bağlarken: anot, katot ve direnç

LED bir diyottur ve akımı yalnız bir yönde iletir. Doğru bağlantıda anot (+) ucu direnç üzerinden Arduino pinine, katot (−) ucu GND'ye gider; ters takılan LED yanmaz. Hangi bacağın anot olduğu LED'in veri sayfasındaki çizimde gösterilir; yaygın LED'lerde anot bacağı daha uzundur. Üreticinin veri sayfasına göre bu tür bir LED'e en çok 5 V ters gerilim uygulanabilir.[@led]

LED'in akımını sınırlamak için seri bir direnç gerekir. Direnç Ohm kanunuyla bulunur: dirençte kalan gerilim, kaynak gerilimi ile LED'in ileri gerilimi arasındaki farktır.

**R = (V_kaynak − V_LED) / I**

**Örnek 1 (LED direnci).** 5 mm kırmızı bir LED'in ileri gerilimi üreticiye göre 10 mA'de tipik 1,9 V, en çok 2,3 V'tur; sürekli akım sınırı 30 mA'dir.[@led] 220 Ω'luk dirençle akım I = (5 − 1,9) / 220 = **14,1 mA** olur. LED'in ileri gerilimi en yüksek değer olan 2,3 V olsaydı akım (5 − 2,3) / 220 = **12,3 mA** olurdu. İki değer de UNO'nun pin başına 20 mA sınırının ve LED'in 30 mA sınırının altındadır; derslerde 220 Ω'un sık kullanılmasının nedeni budur.

| Direnç | Akım (V_LED = 1,9 V) | Durum |
|---|---|---|
| 150 Ω | 20,7 mA | 20 mA sınırını aşar |
| 220 Ω | 14,1 mA | Uygun |
| 470 Ω | 6,6 mA | Uygun, LED daha sönük |
| 1 kΩ | 3,1 mA | Uygun, LED belirgin biçimde sönük |

Arduino'nun belgesi de çıkış pinlerini başka devrelere 470 Ω ya da 1 kΩ'luk dirençlerle bağlamayı, en yüksek akımın gerekmediği durumlarda iyi bir alışkanlık olarak önerir.[@dijitalpin]

## Analog çıkış: PWM ve analogWrite

Arduino UNO'nun gerçek bir analog çıkışı yoktur; analogWrite, pinde **PWM (darbe genişlik modülasyonu)** sinyali üretir.[@analogwrite] PWM, sayısal yolla analog sonuç elde etme tekniğidir: pin hızla açılıp kapanır ve sinyalin açık kaldığı sürenin oranı (görev oranı) değiştirilir. Bu açılıp kapanma bir LED'de yeterince hızlı yapılırsa göz, 0 ile 5 volt arasında sabit bir gerilim varmış gibi algılar.[@pwm]

- analogWrite(pin, değer) iki parametre alır; değer 0 (her zaman kapalı) ile 255 (her zaman açık) arasındadır.[@analogwrite]
- UNO'da PWM yalnız 3, 5, 6, 9, 10 ve 11. pinlerde vardır; bu pinler kartta ~ işaretiyle gösterilir.[@pinout][@pwm]
- analogWrite'tan önce pinMode çağırmak gerekmez.[@analogwrite]
- Arduino'nun PWM frekansı yaklaşık 500 Hz'dir; yani bir periyot yaklaşık 2 milisaniye sürer.[@pwm]
- 5 ve 6. pinler millis ve delay ile aynı zamanlayıcıyı paylaştığı için düşük değerlerde (0 ile 10 arası gibi) görev oranı beklenenden yüksek çıkabilir; 0 değeri bu pinlerde çıkışı tam kapatmayabilir.[@analogwrite]

**Örnek 2 (görev oranı ve ortalama gerilim).** Görev oranı değer / 255'tir; 5 voltluk kartta ortalama gerilim 5 × değer / 255 olur. analogWrite(255) yüzde 100, analogWrite(127) yaklaşık yüzde 50 görev oranı verir.[@pwm]

| analogWrite değeri | Görev oranı | Ortalama gerilim |
|---|---|---|
| 0 | %0 | 0 V |
| 64 | %25,1 | 1,255 V |
| 127 | %49,8 | 2,490 V |
| 191 | %74,9 | 3,745 V |
| 255 | %100 | 5 V |

```cpp
const int ledPin = 9;          // ~9: PWM pini

void loop() {
  for (int deger = 0; deger <= 255; deger++) {
    analogWrite(ledPin, deger); // LED yavaşça parlaklaşır
    delay(10);
  }
}
```

Dikkat: analogWrite'ın analog pinlerle (A0-A5) ve analogRead ile ilgisi yoktur.[@analogwrite] "Analog" sözcüğü iki fonksiyonda farklı şeyleri anlatır.

## Dijital giriş: digitalRead, buton ve çekme direnci

Arduino pinleri varsayılan olarak giriştir; giriş olarak kullanırken pinMode ile ayrıca ayarlamak gerekmez. Giriş pini yüksek empedanslıdır: önündeki devreden çok az akım çeker, 100 MΩ'luk bir seri direnç gibi davranır.[@dijitalpin]

Bunun bir sonucu vardır: hiçbir şeye bağlı olmayan ya da ucu boşta kalan bir giriş pini ortamdaki elektriksel gürültüyü toplar ve **rastgele değişen** değerler okur.[@dijitalpin] Bu yüzden girişe tanımlı bir durum vermek gerekir:

- **Dış çekme (pull-up) direnci:** Giriş bir dirençle +5 V'a bağlanır; buton basılınca pin GND'ye çekilir.[@dijitalpin]
- **Dış indirme (pull-down) direnci:** Giriş bir dirençle GND'ye bağlanır; buton basılınca pin 5 V'a çekilir.[@dijitalpin]
- Bu iş için 10 kΩ iyi bir değerdir.[@dijitalpin]
- **INPUT_PULLUP:** Mikrodenetleyicinin içinde yazılımla açılabilen çekme dirençleri vardır; AVR tabanlı kartlarda değeri 20 ile 50 kΩ arasındadır. pinMode(pin, INPUT_PULLUP) ile açılır. Bu modda mantık terstir: HIGH sensörün kapalı, LOW açık olduğunu gösterir. Sensörün ya da butonun öteki ucu GND'ye bağlanır.[@dijitalpin]

```cpp
const int butonPin = 2;

void setup() {
  pinMode(butonPin, INPUT_PULLUP);  // iç çekme direnci açık
  Serial.begin(9600);               // seri monitör için
}

void loop() {
  int durum = digitalRead(butonPin);
  Serial.println(durum);            // basılı değilken 1, basılıyken 0
  delay(200);
}
```

Serial.begin(9600) seri iletişimi başlatır; Serial.println ile yazdırılan değerler Arduino IDE'nin seri monitöründe görülür.[@analogread]

## Analog giriş: analogRead ve potansiyometre

Arduino UNO'da çok kanallı, 10 bitlik bir analog-dijital çevirici (ADC) vardır. analogRead, 0 volt ile çalışma gerilimi olan 5 volt arasındaki girişi 0 ile 1023 arasında bir tam sayıya çevirir. İki okuma arasındaki çözünürlük 5 V / 1024, yaklaşık 4,9 milivolttur.[@analogread] 10 bitin 2¹⁰ = 1024 farklı değer verdiğini [Sayı Sistemleri](/blog/sayi-sistemleri) yazısında anlattık.

Potansiyometre üç uçlu ayarlı bir dirençtir. Orta ucu (silecek) analog pine, dış uçları GND ve 5 V'a bağlanır; topuz çevrildikçe orta uçtaki gerilim 0 ile 5 V arasında değişir.[@analogread]

```cpp
const int potPin = A3;   // potansiyometrenin orta ucu A3'te

void setup() {
  Serial.begin(9600);
}

void loop() {
  int ham = analogRead(potPin);           // 0-1023
  float gerilim = ham / 1023.0 * 5.0;     // volta çevir
  Serial.print(ham);
  Serial.print("  ");
  Serial.println(gerilim, 3);
  delay(200);
}
```

**Örnek 3 (ham değeri volta çevirme).** Arduino'nun belgesindeki dönüşüm gerilim = ham değer / 1023 × 5'tir.[@analogread]

| analogRead değeri | Gerilim |
|---|---|
| 0 | 0 V |
| 205 | 1,002 V |
| 512 | 2,502 V |
| 767 | 3,749 V |
| 1023 | 5 V |

Hiçbir şeye bağlı olmayan analog pinden okunan değer de dalgalanır.[@analogread] Okunan değerleri sayı yerine grafik olarak görmek için Arduino IDE'nin seri çizicisi (Serial Plotter) kullanılabilir; seri iletişim kullanan hemen her çizimde çalışır.[@plotter]

## Potansiyometreyle LED parlaklığı: analogRead'den analogWrite'a

İki fonksiyonun aralığı farklıdır: analogRead 0-1023, analogWrite 0-255 verir. Arduino'nun resmî örneği bu yüzden okunan değeri 4'e böler.[@analogwrite]

```cpp
const int ledPin = 9;    // PWM pini
const int potPin = A3;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int deger = analogRead(potPin);     // 0-1023
  analogWrite(ledPin, deger / 4);     // 0-255
}
```

**Örnek 4.** Potansiyometre orta konumda 512 okuyorsa LED'e 512 / 4 = **128** yazılır; en uçta 1023 okununca 1023 / 4 = **255** olur (tam sayı bölmesinde 255,75'in küsuratı atılır).

## Tinkercad'de denemek

Devreyi kablolamadan önce Autodesk'in Tinkercad Circuits ortamında kurmak mümkündür: etkileşimli devre düzenleyicide sanal devre kurulur, bağlanır ve Arduino kodu yazılır; simülasyon başlatıldığında bileşenlerin nasıl tepki verdiği izlenir.[@tinkercad] LED'in ters takılması ya da direncin unutulması gibi hatalar böylece gerçek bileşen bozulmadan görülebilir.

## Öğrencilerin sık yaptığı hatalar

1. **LED'i dirençsiz bağlamak.** Akımı sınırlayan bir şey kalmaz; UNO'nun pin başına 20 mA önerisi ve LED'in 30 mA sınırı aşılabilir.[@pinout][@led]
2. **LED'i ters takmak.** Katot (−) ucu GND'ye gitmelidir; ters takılı LED iletmez ve yanmaz.
3. **PWM olmayan pine analogWrite yazmak.** UNO'da PWM yalnız ~ işaretli 3, 5, 6, 9, 10 ve 11. pinlerdedir.[@pinout]
4. **analogWrite'ı analog pinlerle karıştırmak.** analogWrite A0-A5 pinleriyle ve analogRead ile ilgili değildir.[@analogwrite]
5. **Aralıkları karıştırmak.** analogRead 0-1023, analogWrite 0-255'tir; okunan değeri doğrudan analogWrite'a yazmak taşmaya yol açar.[@analogread][@analogwrite]
6. **Girişi boşta bırakmak.** Butonla çekme ya da indirme direnci kullanılmazsa giriş rastgele değişir.[@dijitalpin]
7. **INPUT_PULLUP'ta mantığı unutmak.** Bu modda basılı buton LOW (0) okunur.[@dijitalpin]
8. **Serial.begin'i unutmak.** Seri monitörde hiçbir şey görünmez; setup içinde Serial.begin(9600) çağrılmalıdır.[@analogread]

## Alıştırmalar

1. analogWrite(9, 64) çağrısı yüzde kaç görev oranı ve 5 voltluk kartta ortalama kaç volt verir?
2. Bir potansiyometre 2,5 V veriyorsa analogRead yaklaşık hangi değeri döndürür?
3. analogRead 307 okuyor. Girişteki gerilim yaklaşık kaç volttur?
4. İleri gerilimi 1,9 V olan kırmızı LED'in akımı 20 mA'i geçmesin. En küçük direnç kaç ohm olmalıdır?
5. 330 Ω'luk dirençle aynı LED'den yaklaşık kaç mA geçer?
6. Bir öğrenci LED'i 7. pine bağlayıp analogWrite ile parlaklık ayarlamaya çalışıyor; LED ya tam yanıyor ya sönük kalıyor. Neden?
7. Butonu INPUT_PULLUP ile 2. pine bağlayan öğrenci, basılıyken seri monitörde 0 görüyor. Devre bozuk mu?
8. Potansiyometre analogRead ile 700 okunuyor. Değeri 4'e bölüp LED'e yazan programda analogWrite'a hangi değer gider?

## Cevaplar

1. Görev oranı 64 / 255 = **yüzde 25,1**, ortalama gerilim 5 × 64 / 255 = **1,255 V**.
2. 2,5 / 5 × 1023 = 511,5; yaklaşık **511 ya da 512** okunur.
3. 307 / 1023 × 5 = **1,500 V** (1,5004 V).
4. R = (5 − 1,9) / 0,020 = **155 Ω**; 155 Ω standart bir değer olmadığı için bir üst standart değer (örneğin 180 Ω) seçilir.
5. (5 − 1,9) / 330 = **9,4 mA**.
6. UNO'da 7. pin PWM pini değildir; PWM yalnız 3, 5, 6, 9, 10 ve 11. pinlerdedir. LED'i bunlardan birine, örneğin 9. pine bağlamak gerekir.
7. Hayır. INPUT_PULLUP'ta mantık terstir: basılı buton **LOW (0)**, bırakılmış buton **HIGH (1)** okunur.
8. 700 / 4 = 175 (tam sayı bölmesi); analogWrite'a **175** gider.

## Terim tablosu

| Türkçe | İngilizce | Açıklama |
|---|---|---|
| Giriş/çıkış (G/Ç) | Input/output (I/O) | Kartın dışarıyla veri alışverişi |
| Dijital pin | Digital pin | HIGH ya da LOW değerli pin |
| Darbe genişlik modülasyonu | Pulse width modulation (PWM) | Açık kalma oranıyla ortalama gerilim üretme |
| Görev oranı | Duty cycle | Sinyalin açık kaldığı sürenin periyoda oranı |
| Analog-dijital çevirici | Analog-to-digital converter (ADC) | Gerilimi sayıya çeviren birim |
| Çözünürlük | Resolution | Bir adımın gerilim karşılığı (UNO'da 4,9 mV) |
| Çekme direnci | Pull-up resistor | Girişi tanımlı olarak HIGH'a çeken direnç |
| İndirme direnci | Pull-down resistor | Girişi tanımlı olarak LOW'a çeken direnç |
| İleri gerilim | Forward voltage | LED iletirken uçlarında düşen gerilim |
| Seri monitör | Serial Monitor | IDE'de seri verinin metin olarak görüldüğü pencere |
| Seri çizici | Serial Plotter | Seri veriyi grafik olarak gösteren araç |

## Sonuç

Arduino'da giriş ve çıkışın özeti dört satırdır: digitalWrite iki değerli çıkış, analogWrite ~ işaretli pinlerde 0-255 arasında PWM, digitalRead iki değerli giriş, analogRead A0-A5'te 0-1023 arasında okuma. Bu dört fonksiyonun aralıklarını ve pinlerini bilen, LED'e direnç hesaplamayı Ohm kanunuyla yapabilen öğrenci, fiziksel programlama dersindeki uygulamaların çoğunu kurabilir. Bir sonraki adım, bu dört işi bir arada kullanan küçük projelerdir: butonla yanan LED, potansiyometreyle parlaklığı değişen LED ve okunan değeri seri çizicide izlemek.
