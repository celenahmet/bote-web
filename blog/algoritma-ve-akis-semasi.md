---
title: "Algoritma ve Akış Şeması: Örneklerle BTY Konu Anlatımı"
url: https://bote.web.tr/blog/algoritma-ve-akis-semasi
author: BÖTE Editör Ekibi
published: 2026-10-31
updated: 2026-10-31
category: Eğitim Teknolojileri
description: "Algoritma nedir, akış şeması nasıl çizilir? Akış şeması sembolleri, sıralı, karar ve döngü yapıları, günlük hayattan örnekler ve BTY 5. sınıf kazanımları."
---

# Algoritma ve Akış Şeması: Örneklerle BTY Konu Anlatımı

> Algoritma nedir, akış şeması nasıl çizilir? Akış şeması sembolleri, sıralı, karar ve döngü yapıları, günlük hayattan örnekler ve BTY 5. sınıf kazanımları.

Yazan: BÖTE Editör Ekibi · Yayın: 2026-10-31 · Güncelleme: 2026-10-31 · 4 dk okuma · https://bote.web.tr/blog/algoritma-ve-akis-semasi

## Özet

- **Algoritma**, bir problemi çözmek için izlenen, sırası belli, sonlu işlem adımları.
- **Akış şeması**, algoritmanın sembollerle çizilmiş hâli: başla/bitir, işlem, karar, girdi/çıktı ve yön okları.
- Üç temel yapı: **sıralı**, **karar yapılı** (eğer... ise) ve **döngüsel** (tekrar eden) algoritmalar.
- BTY 5. sınıfta **BTY.5.6.1** (algoritmik düşünme) ve **BTY.5.6.2** (test ve hata ayıklama) kazanımları.
- Algoritmayı **test etmek** ve **hata ayıklamak** algoritma yazmanın parçası.

Algoritma, BTY dersinde yılın en büyük temasının ilk konusu: programlamaya geçmeden önce bir problemi adım adım çözmeyi öğrenmek. Bu yazı algoritmanın ne olduğunu, akış şemasının nasıl çizildiğini, temel yapıları ve Maarif Modeli 5. sınıf programındaki kazanımları örneklerle anlatıyor.[1]

## Algoritma nedir?

Algoritma, bir problemi çözmek ya da bir işi yapmak için izlenen, **sırası belli ve sonlu** işlem adımlarıdır. Günlük hayatta sürekli algoritma kullanırız: yemek tarifi, yol tarifi, sabah okula hazırlanma sırası. Bilgisayar da bir işi ancak böyle açık adımlarla yapabilir; bu adımlar program içinde **komut** olarak yazılır.[1]

Wing, problemi bir bilgisayarın (ya da insanın) çalıştırabileceği adımlara dönüştürme becerisine **bilgi işlemsel düşünme** adını verip bunun yalnız bilgisayar bilimcilerine değil herkese gereken temel bir beceri olduğunu savundu.[2] Grover ve Pea'nın okul düzeyindeki derlemesinde algoritmik düşünme, soyutlama ve hata ayıklama bu becerinin temel bileşenleri arasında sayılıyor.[3]

## BTY programında algoritma kazanımları

5. sınıf Yazılım Tasarımı ve Programlama temasının ilk iki öğrenme çıktısı algoritmayla ilgili:[1]

| Kazanım | Adımlar |
|---|---|
| BTY.5.6.1. Problem çözümü için algoritmik düşünebilme | a) Günlük yaşamda bir problem belirler. b) Problemin girdi ve çıktılarını belirler. c) Çözüm adımlarını listeler. ç) İşlem adımlarını akış şemasıyla gösterir. |
| BTY.5.6.2. Algoritma oluşturmada test edebilme-hata ayıklayabilme | a) Geliştirdiği algoritmayı test eder. b) Hataları ayıklayarak algoritmayı kullanıma hazır hâle getirir. |

Program algoritma yazımında dikkat edilecek kuralları da sayıyor: **başla ile başlamak, basit dil kullanmak, adım adım sıralamak, emir cümlesi kullanmak**.[1] Temanın tamamı için [BTY 5. sınıf konuları](https://bote.web.tr/blog/bty-5-sinif-konulari).

## Girdi ve çıktı

Her problemin bir **girdisi** (çözüm için kullandıklarımız) ve bir **çıktısı** (çözüm sonunda elde ettiğimiz) vardır. Program bu kavramları "Bir problemi çözerken neler kullanırız ve çözüm sonunda ne elde ederiz?" sorusuyla açıyor.[1]

| Problem | Girdi | Çıktı |
|---|---|---|
| Okula kaç dakikada geldiğimi bulmak | Evden çıkış saati, okula varış saati | Yol süresi (dakika) |
| Çay demlemek | Su, çay, demlik | Demlenmiş çay |
| Ders notu ortalaması | Sınav notları | Ortalama |

## Örnek algoritma: Okula zamanında gitmek

Programın kullandığı örnek problem: "Sabah okula zamanında gitmekte zorlanıyorum." Önce problem tanımlanıyor, nedenleri belirleniyor, çözüm yolları düşünülüyor, en uygun çözüm seçilip uygulanıyor.[1] Sonuçta yazılabilecek basit bir algoritma:

1. Başla.
2. Alarmı 07.00'ye kur.
3. Alarm çalınca kalk.
4. Hazırlan ve kahvaltı et.
5. Saat 07.40 oldu mu? Olmadıysa 4. adıma devam et; olduysa çantanı al.
6. Evden çık.
7. Bitir.

Bu algoritmada üç temel yapının üçü de görülebiliyor:

- **Sıralı yapı:** Adımlar sırayla uygulanır (1, 2, 3...).
- **Karar yapısı:** "Saat 07.40 oldu mu?" sorusunun cevabına göre farklı yol izlenir.
- **Döngü:** Koşul sağlanana kadar bir adım tekrarlanır.

Program da öğrencilerin daha önce oluşturdukları **sıralı, döngüsel ve karar yapılı** algoritmaları akış şemasına dönüştürmesini istiyor.[1]

## Akış şeması nedir, sembolleri nelerdir?

Akış şeması, algoritmanın adımlarını sembollerle ve yön oklarıyla gösteren çizimdir. Program akış şemasının temel bileşenlerini **başlangıç, işlem, karar, yön oku ve bitiş** olarak sayıyor; öğrenciler şemalarını kelime işlemci programında ya da teknolojik altyapı yoksa kâğıt üzerinde çiziyor.[1] Yaygın gösterimde kullanılan semboller:

| Sembol | Şekil | Anlamı |
|---|---|---|
| Başla / Bitir | Oval (yuvarlatılmış dikdörtgen) | Algoritmanın başı ve sonu |
| Girdi / Çıktı | Paralelkenar | Veri alma ya da sonucu yazdırma |
| İşlem | Dikdörtgen | Hesaplama, atama, yapılan iş |
| Karar | Eşkenar dörtgen | Evet/hayır sorusu; iki yol çıkar |
| Yön oku | Ok | Adımların sırası |

Akış şeması çizerken her şema tek bir "Başla" ile açılır ve en az bir "Bitir"e ulaşır; karar sembolünden çıkan iki okun hangisinin "evet", hangisinin "hayır" olduğu üzerine yazılır.

## Test etme ve hata ayıklama

Algoritmayı yazmak işin yarısı. Program bunu "Bir yemek veya yol tarifi oluşturduğumuzda doğru çalışıp çalışmadığını nasıl anlarız?" sorusuyla açıyor: öğrenciler kendi algoritmalarını **birebir uygulayarak** hangi adımların eksik ya da hatalı olduğunu test ediyor, sonuçları sınıfla paylaşıp geri bildirim alıyor, hataları ayıklayıp algoritmayı kullanıma hazır hâle getiriyor. Program, hataları fark edip düzeltmenin bir **öğrenme süreci** olduğunu kavramayı amaçlıyor.[1]

Yukarıdaki örnekte bir test şunu gösterebilir: kahvaltı uzarsa 5. adımdaki döngü öğrenciyi geç bırakır; çözüm, kahvaltı saatine de bir sınır koymak. İşte hata ayıklama bu.

## Algoritmadan programlamaya

Algoritma ve akış şeması, blok tabanlı programlamanın temeli. 5. sınıfın aynı temasında öğrenciler sabit, değişken ve operatör kavramlarını öğrenip blok tabanlı ortamda sıralı komutlarla algoritma oluşturuyor.[1] Scratch gibi blok tabanlı ortamlarda bloklar yalnız sözdizimsel olarak anlamlı biçimde birbirine oturuyor; bu da öğrencinin yazım hatalarıyla değil algoritmanın kendisiyle uğraşmasını sağlıyor.[4]

Programlama öğreniminin başka becerilere aktarımını inceleyen meta-analiz, programlama öğrenen öğrencilerin özellikle problem çözme ve mantıksal akıl yürütme gibi yakın becerilerde kazanım gösterdiğini buldu.[5] ISTE de öğrencilerden "bilgi işlemsel düşünür" olarak problemleri adımlara bölmelerini ve algoritmik düşünmeyi kullanmalarını bekliyor.[6] Programın resmî sayfası temaya göre içerikleri sunuyor.[7] Sonraki adım olan blok tabanlı programlama 6. sınıfta yılın yarısını kaplıyor: [BTY 6. sınıf konuları](https://bote.web.tr/blog/bty-6-sinif-konulari).

## Sık Sorulan Sorular

### Algoritma nedir?

Bir problemi çözmek ya da bir işi yapmak için izlenen, sırası belli ve sonlu işlem adımlarıdır. Yemek tarifi ya da yol tarifi günlük hayattaki algoritma örnekleridir.

### Akış şeması nedir?

Algoritmanın adımlarını sembollerle ve yön oklarıyla gösteren çizimdir. Başla ve bitir, işlem, karar ve girdi-çıktı sembolleri kullanılır.

### Akış şemasında karar sembolü hangisi?

Yaygın gösterimde karar eşkenar dörtgenle çizilir; içine evet ya da hayır cevabı olan bir soru yazılır ve iki ok çıkar.

### Algoritma yazarken nelere dikkat edilir?

BTY programına göre başla ile başlamak, basit dil kullanmak, adım adım sıralamak ve emir cümlesi kullanmak; sonunda algoritmayı test etmek.

### Algoritmada hata ayıklama ne demek?

Algoritmayı adım adım uygulayıp eksik ya da yanlış adımları bulmak ve düzeltmektir. BTY.5.6.2 öğrenme çıktısı bu beceriyi kazandırır.

### Algoritma kaçıncı sınıf konusu?

Maarif Modeli BTY programında 5. sınıf, Yazılım Tasarımı ve Programlama temasında; 6. sınıfta blok tabanlı programlamayla devam eder.

## Kaynaklar

1. Millî Eğitim Bakanlığı Talim ve Terbiye Kurulu Başkanlığı (2025). Bilişim Teknolojileri ve Yazılım Dersi Öğretim Programı (5 ve 6. Sınıflar), Türkiye Yüzyılı Maarif Modeli 2025. https://mufredat.meb.gov.tr/Dosyalar/202591115327350-bili%C5%9Fim%20d%C3%B6p.pdf (TR, erişim: 2026-10-31)
2. Wing, J. M. (2006). Computational thinking. Communications of the ACM, 49(3), 33–35. https://doi.org/10.1145/1118178.1118215 (EN, erişim: 2026-10-31)
3. Grover, S. ve Pea, R. (2013). Computational thinking in K–12: A review of the state of the field. Educational Researcher, 42(1), 38–43. https://doi.org/10.3102/0013189X12463051 (EN, erişim: 2026-10-31)
4. Resnick, M., Maloney, J., Monroy-Hernández, A. ve diğerleri (2009). Scratch: Programming for all. Communications of the ACM, 52(11), 60–67. https://doi.org/10.1145/1592761.1592779 (EN, erişim: 2026-10-31)
5. Scherer, R., Siddiq, F. ve Sánchez Viveros, B. (2019). The cognitive benefits of learning computer programming: A meta-analysis of transfer effects. Journal of Educational Psychology, 111(5), 764–792. https://doi.org/10.1037/edu0000314 (EN, erişim: 2026-10-31)
6. International Society for Technology in Education (ISTE) (2016). ISTE Standards: For Students. https://iste.org/standards/students (EN, erişim: 2026-10-31)
7. Millî Eğitim Bakanlığı (2026). Bilişim Teknolojileri ve Yazılım Dersi (Türkiye Yüzyılı Maarif Modeli öğretim programı sayfası). https://tymm.meb.gov.tr/ogretim-programlari/bilisim-teknolojileri-ve-yazilim-dersi/6 (TR, erişim: 2026-10-31)
