---
title: "Sayı Sistemleri: Dönüşümler, Tümleyenler, BCD ve Gray Kodu"
url: https://bote.web.tr/blog/sayi-sistemleri
author: BÖTE Editör Ekibi
published: 2026-09-28
updated: 2026-09-28
category: Bölüm Rehberi
description: "Sayı sistemleri konu anlatımı: ikili, sekizli, on altılı dönüşümler, ikili toplama ve çıkarma, bire ve ikiye tümleme, BCD, Gray ve ASCII kodları, çözümlü örnekler."
---

# Sayı Sistemleri: Dönüşümler, Tümleyenler, BCD ve Gray Kodu

> Sayı sistemleri konu anlatımı: ikili, sekizli, on altılı dönüşümler, ikili toplama ve çıkarma, bire ve ikiye tümleme, BCD, Gray ve ASCII kodları, çözümlü örnekler.

Yazan: BÖTE Editör Ekibi · Yayın: 2026-09-28 · Güncelleme: 2026-09-28 · 12 dk okuma · https://bote.web.tr/blog/sayi-sistemleri

## Özet

- Sayısal elektronikte dört sayı sistemi kullanılır: **ikili (2), sekizli (8), onlu (10) ve on altılı (16)**. Her basamağın değeri, tabanın o basamağa karşılık gelen kuvvetidir.
- Onluktan başka tabana geçmek için sayı art arda tabana bölünür ve kalanlar **sondan başa** yazılır. İkiliden sekizliye **üçerli**, on altılıya **dörderli** gruplanır.
- Bir sayının birler tümleyeni bütün bitlerinin tersidir; **ikiler tümleyeni birler tümleyenine 1 eklenerek** bulunur. k bitlik ikiye tümleyen −2^(k−1) ile 2^(k−1) − 1 arasındaki sayıları gösterir.
- **BCD** her onluk rakamı ayrı bir 4 bitle yazar. **Gray kodunda** ardışık iki sayı yalnız bir bitte farklıdır. **ASCII** her karakteri 7 bitle gösterir: A = 65, a = 97, 0 rakamı = 48.
- En sık hatalar: kalanları yukarıdan aşağı okumak, gruplamaya soldan başlamak ve ikiye tümleyende bit sayısını sabit tutmayı unutmak.

Bu yazı, [Elektronik Devre Elemanları dersi](https://bote.web.tr/blog/elektronik-devre-elemanlari) rehberinin sayı sistemleri bölümüdür. Örnek bir izlencede dersin ilk iki haftası bu konuya ayrılır: birinci hafta sayı sistemleri ve dönüşümler, ikinci hafta negatif sayılar, tümleyenler ve sayısal kodlar.[1] YÖK'ün ders tanımı da sayı sistemlerini dersin konuları arasında sayar.[2] Sonraki bütün konular, özellikle [mantık kapıları ve Boole cebiri](https://bote.web.tr/blog/mantik-kapilari-ve-boole-cebiri), bu temelin üzerine kurulur.

## Sayı sistemi ve taban

Sayısal devreler bilgiyi yalnız iki değerle tutar. Shannon'ın anahtarlama devreleri çözümlemesinde de her değişken, herhangi bir anda ya 0 ya da 1 değerini alır.[3] Bu yüzden sayısal elektronikte ikili sistem esastır. İkili sayılar uzun olduğu için sekizli ve on altılı sistemler de kullanılır. MEB'in modülüne göre sayısal elektronikte dört sayı sistemi vardır:[4]

- **İkili (binary), taban 2:** rakamlar 0 ve 1. Örnek: (1011)₂
- **Sekizli (oktal), taban 8:** rakamlar 0-7. Örnek: (125)₈
- **Onlu (desimal), taban 10:** rakamlar 0-9. Günlük hayatta kullandığımız sistem.
- **On altılı (heksadesimal), taban 16:** rakamlar 0-9 ve A-F; A = 10, B = 11, C = 12, D = 13, E = 14, F = 15. Örnek: (1B3A)₁₆

Bütün bu sistemler **basamak değerlidir**: her basamağın ağırlığı, tabanın o basamağın sırasına karşılık gelen kuvvetidir. Dört bitlik bir ikili sayının bit ağırlıkları sırasıyla 2³, 2², 2¹, 2⁰'dır. Ağırlığı en büyük olan bite **en yüksek değerlikli bit (MSB)**, en küçük olana **en düşük değerlikli bit (LSB)** denir.[4]

İlk 16 sayının dört sistemdeki karşılıkları sınavlarda sık kullanılır; bu tabloyu ezbere bilmek dönüşümleri hızlandırır:[4]

| Onlu | İkili | Sekizli | On altılı |
|---|---|---|---|
| 0 | 0000 | 0 | 0 |
| 1 | 0001 | 1 | 1 |
| 2 | 0010 | 2 | 2 |
| 3 | 0011 | 3 | 3 |
| 4 | 0100 | 4 | 4 |
| 5 | 0101 | 5 | 5 |
| 6 | 0110 | 6 | 6 |
| 7 | 0111 | 7 | 7 |
| 8 | 1000 | 10 | 8 |
| 9 | 1001 | 11 | 9 |
| 10 | 1010 | 12 | A |
| 11 | 1011 | 13 | B |
| 12 | 1100 | 14 | C |
| 13 | 1101 | 15 | D |
| 14 | 1110 | 16 | E |
| 15 | 1111 | 17 | F |

## Onluktan başka tabanlara

Onluk bir tam sayı, hedef tabana art arda bölünür. Her bölmenin kalanı bir kenara yazılır ve kalanlar **sondan başa** okunur.[4]

**Örnek 1: (45)₁₀ sayısını ikiliye çevirelim.**

| Bölme | Bölüm | Kalan |
|---|---|---|
| 45 / 2 | 22 | 1 |
| 22 / 2 | 11 | 0 |
| 11 / 2 | 5 | 1 |
| 5 / 2 | 2 | 1 |
| 2 / 2 | 1 | 0 |
| 1 / 2 | 0 | 1 |

Kalanlar aşağıdan yukarı okunur: **(45)₁₀ = (101101)₂**. Denetim: 32 + 8 + 4 + 1 = 45.

**Örnek 2: (955)₁₀ sayısını on altılıya çevirelim.** 955 / 16 = 59, kalan 11 (B); 59 / 16 = 3, kalan 11 (B); 3 / 16 = 0, kalan 3. Sondan başa: **(3BB)₁₆**. MEB modülü aynı sonucu verir.[4] Denetim: 3 × 256 + 11 × 16 + 11 = 768 + 176 + 11 = 955.

**Kesirli sayılar.** Kesirli kısım ikiliye çevrilirken bu kez art arda **2 ile çarpılır**. Her çarpımın tam kısmı (0 ya da 1) bir bit olur ve bitler **baştan sona** okunur. Örnek: 0,625 × 2 = 1,25 (bit 1); 0,25 × 2 = 0,5 (bit 0); 0,5 × 2 = 1,0 (bit 1). Sonuç **(0,101)₂**'dir. Denetim: 0,5 + 0,125 = 0,625. Bazı kesirler ikili sistemde sonlu yazılamaz; bu durumda istenen basamak sayısında durulur.

## Başka tabanlardan onluğa

Her basamak, kendi ağırlığıyla çarpılır ve çarpımlar toplanır.[4]

- (101101)₂ = 1 × 32 + 0 × 16 + 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1 = **45**
- (147)₈ = 1 × 64 + 4 × 8 + 7 × 1 = **103**
- (4F8)₁₆ = 4 × 256 + 15 × 16 + 8 × 1 = 1024 + 240 + 8 = **1272**

On altılı sayılarla hesap yaparken harfleri önce onluk karşılıklarına çevirmek hatayı azaltır.[4]

## İkili, sekizli ve on altılı arasında

On altı, 2'nin dördüncü kuvveti (2⁴) olduğu için her on altılı rakam tam dört bite karşılık gelir. Bu yüzden ikili ile on altılı arasındaki dönüşüm, her dört bitlik grubu bir rakama çevirmekten ibarettir.[5] Sekiz de 2³ olduğundan sekizliye üçerli gruplarla geçilir.[4]

- **İkiliden on altılıya:** sağdan başlayarak dörderli gruplayın. (01011101)₂ = 0101 1101 = **(5D)₁₆**
- **İkiliden sekizliye:** sağdan başlayarak üçerli gruplayın. (01011101)₂ = 01 011 101 = **(135)₈**
- **On altılıdan ikiliye:** her rakamı dört bite açın. (AF8)₁₆ = 1010 1111 1000
- **Sekizliden ikiliye:** her rakamı üç bite açın. (432)₈ = 100 011 010

Sekizli ile on altılı arasında doğrudan geçiş yerine **ikili üzerinden** geçmek en güvenli yoldur: (5D)₁₆ = 0101 1101 → 001 011 101 → (135)₈.

Gruplamaya **sağdan**, yani LSB tarafından başlanır. Soldaki eksik bitler 0 ile tamamlanır: (1010111)₂ sekizliye çevrilirken 1 010 111 olarak gruplanır ve (127)₈ bulunur.[4]

## İkili toplama ve çıkarma

İkili toplamada dört kural vardır: 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 0 ve elde 1.[4] Üç bir toplandığında (iki bit ve önceki elde) sonuç 1, elde 1 olur.

**Örnek 3.** 1011 + 1010 işleminde sağdan başlayalım: 1 + 0 = 1; 1 + 1 = 0 (elde 1); 0 + 0 + 1 = 1; 1 + 1 = 0 (elde 1); en sona elde yazılır. Sonuç **10101**'dir. Onluk denetim: 11 + 10 = 21.

İkili çıkarmada 0 − 1 durumunda soldaki sütundan borç alınır; borç alınan sütun bu sütuna 2 olarak geçer.[4] Örnek: 10110 − 01010 = **01100**, yani 22 − 10 = 12.[4]

## Negatif sayılar ve tümleyenler

Tümleyenler sayesinde çıkarma **toplamaya dönüştürülür**; ikiye tümleyende aynı toplayıcı devre işaretli ve işaretsiz sayılar için birlikte kullanılabilir.[5] MEB modüllerinde bu yöntem tümleme (komplementer) yöntemiyle çıkarma adıyla anlatılır.[4][6]

**Birler tümleyeni.** Bir ikili sayının birler tümleyeni, bütün bitlerinin tersidir: 0'lar 1, 1'ler 0 yapılır. Örneğin 0111'in birler tümleyeni 1000'dir.[6]

**Birler tümleyeniyle çıkarma (MEB yöntemi).** Çıkan sayının birler tümleyeni alınır ve eksilen sayıyla toplanır. En soldan bir elde taşarsa sonuç pozitiftir; taşan elde en sağdaki bite (LSB) eklenir. Elde taşmazsa sonuç negatiftir; sonucun tersi alınarak büyüklüğü bulunur.[4]

- **Örnek 4: 25 − 19.** 11001 − 10011. Çıkanın birler tümleyeni 01100. Toplam 11001 + 01100 = 1 00101. Elde taştı, sonuç pozitif; elde LSB'ye eklenir: 00101 + 1 = **00110 = 6**.
- **Örnek 5: 6 − 13.** 0110 − 1101. Çıkanın birler tümleyeni 0010. Toplam 0110 + 0010 = 1000. Elde taşmadı, sonuç negatif; tersi 0111 = 7, yani sonuç **−7**.

**İkiler tümleyeni.** İkiler tümleyeni, birler tümleyenine 1 eklenerek bulunur.[6] k bitlik ikiye tümleyen gösteriminde en yüksek bitin ağırlığı +2^(k−1) değil **−2^(k−1)**'dir. Bu gösterimin özellikleri şunlardır:[5]

- Negatif sayıların en yüksek biti 1'dir; bu bite **işaret biti** denir.
- k bit, **−2^(k−1) ile 2^(k−1) − 1** arasındaki her tam sayıyı tek bir biçimde gösterir. 4 bitte −8 ile 7, 8 bitte −128 ile 127 arası.
- Sıfırın tek bir gösterimi vardır (bütün bitler 0); bütün bitleri 1 olan sayı −1'dir.
- Bir sayının negatifi, bitleri ters çevrilip 1 eklenerek bulunur: −A = A' + 1.
- İşaretli ve işaretsiz sayılar **aynı toplayıcıyla** toplanır.
- Aralık simetrik değildir: −2^(k−1) gösterilebilir ama +2^(k−1) gösterilemez.

**Örnek 6: 8 bitte −45.** 45 = 00101101. Bitler ters çevrilir: 11010010. 1 eklenir: **11010011**. Denetim ağırlıklarla: −128 + 64 + 16 + 2 + 1 = −45.

**İkiler tümleyeniyle çıkarma.** A − B yerine A + (−B) hesaplanır. Sonuç yine k bitte okunur; en soldan taşan elde atılır.[6][5]

- **Örnek 7: 25 − 19 (8 bit).** 25 = 00011001; −19 = 11101101. Toplam 1 00000110; taşan elde atılır: **00000110 = 6**.
- **Örnek 8: 6 − 13 (8 bit).** 6 = 00000110; −13 = 11110011. Toplam **11111001**. İşaret biti 1, sonuç negatif: −128 + 64 + 32 + 16 + 8 + 1 = **−7**.

**Taşma (overflow).** Sonuç gösterilebilir aralığın dışına çıkarsa yanlış çıkar. 4 bitte 7 + 1 = 0111 + 0001 = 1000'dır; bu, ikiye tümleyende **−8** demektir. İki pozitif sayının toplamı negatif görünüyorsa taşma olmuştur. Bu, aralığın −8 ile 7 arasında olmasının doğrudan sonucudur.[5]

## Sayısal kodlar: BCD, Gray, ASCII

Örnek izlencenin ikinci haftası sayıları ve karakterleri temsil eden kodları da kapsar: BCD, Gray, ASCII ve EBCDIC.[1]

**BCD (ikili kodlanmış onluk).** Onluk rakamları tek tek, her birine sabit uzunlukta 4 bitlik bir kod vererek yazar. 16 olası 4 bitlik kodun yalnız 10'u kullanılır.[5] MIT ders notlarındaki tabloda her rakam kendi 4 bitlik ikili karşılığıyla yazılır (ağırlıklar 8-4-2-1): 0 = 0000, ..., 9 = 1001.[5] 1010 ile 1111 arasındaki kodlar BCD'de geçersizdir.

- **Örnek 9.** 93 sayısı BCD'de **1001 0011**'dir (9 ve 3 ayrı ayrı). Oysa 93'ün ikili karşılığı **1011101**'dir. BCD ile ikili karşılığı karıştırmak en sık yapılan hatalardan biridir.

**Gray kodu.** Frank Gray'in 1947'de başvurup 1953'te patentini aldığı kodda, her sayının kodu bir alttaki ve bir üstteki sayının kodundan **yalnız bir basamakta** farklıdır. Kod sıradan ikili koddan bir tür yansıtma işlemiyle türetildiği için **yansıtılmış ikili kod** diye adlandırılır.[7] Üç bitlik Gray kodu sırası şöyledir:

| Onlu | İkili | Gray |
|---|---|---|
| 0 | 000 | 000 |
| 1 | 001 | 001 |
| 2 | 010 | 011 |
| 3 | 011 | 010 |
| 4 | 100 | 110 |
| 5 | 101 | 111 |
| 6 | 110 | 101 |
| 7 | 111 | 100 |

Ardışık her satırda Gray sütununda yalnız bir bit değişir; 7'den 0'a dönüşte bile (100 → 000). Oysa ikili sütunda 3'ten 4'e geçerken üç bit birden değişir.

- **İkiliden Gray'e:** en soldaki bit aynen yazılır; sonraki her Gray biti, ikili sayıdaki kendi biti ile solundaki bitin ÖZEL VEYA'sıdır. Örnek: 1011 → 1, 1⊕0 = 1, 0⊕1 = 1, 1⊕1 = 0 → **1110**.
- **Gray'den ikiliye:** en soldaki bit aynen yazılır; sonraki her ikili bit, bir önce bulunan ikili bit ile o sıradaki Gray bitinin ÖZEL VEYA'sıdır. Örnek: 1110 → 1, 1⊕1 = 0, 0⊕1 = 1, 1⊕0 = 1 → **1011**.

ÖZEL VEYA işlemi için [mantık kapıları ve Boole cebiri](https://bote.web.tr/blog/mantik-kapilari-ve-boole-cebiri) yazısına bakabilirsiniz.

**ASCII.** ASCII, karakterleri 7 bitle kodlayan standarttır. RFC 20, ağ üzerinden iletimde standart 7 bitlik ASCII'nin, en yüksek biti her zaman 0 olan 8 bitlik bir bayta yerleştirilmesini önerir; kod tablosu 1968 tarihli ABD standardından alınmıştır.[8] Tablodaki her karakter, üç yüksek bit (b7-b5) ile belirlenen sütun ve dört düşük bit (b4-b1) ile belirlenen satırla gösterilir.[8] Sınavda işe yarayan birkaç karşılık:

| Karakter | İkili (7 bit) | Onlu | On altılı |
|---|---|---|---|
| Boşluk | 010 0000 | 32 | 20 |
| 0 rakamı | 011 0000 | 48 | 30 |
| A | 100 0001 | 65 | 41 |
| a | 110 0001 | 97 | 61 |

Büyük ve küçük harfler yalnız bir bitte ayrılır (A = 100 0001, a = 110 0001); aradaki fark 32'dir. Rakam karakterlerinin kodu 48'den başlar; yani "7" karakteri 7 sayısı değil, 55 kodlu bir karakterdir.

**EBCDIC,** izlencede adı geçen öteki karakter kodudur ve ASCII'den ayrı bir kodlamadır.[1] Bu yazı ASCII'yi ayrıntılı ele alıyor.

## Sık yapılan hatalar

- **Kalanları yukarıdan aşağı okumak.** Bölme yönteminde kalanlar sondan başa okunur. Kesirli kısımda ise çarpımın tam kısımları baştan sona okunur.
- **Gruplamaya soldan başlamak.** İkiliden sekizliye ve on altılıya geçerken gruplar sağdan (LSB) başlar; eksik bitler solda 0 ile tamamlanır.[4]
- **Bit sayısını sabit tutmamak.** İkiye tümleyen belirli bir bit sayısında tanımlıdır. 8 bitlik −45 ile 16 bitlik −45 farklı bit dizileridir.[5]
- **Birler tümleyeniyle ikiler tümleyenini karıştırmak.** Birler tümleyeni yalnız ters çevirmedir; ikiler tümleyeni ters çevirip 1 eklemektir.[6]
- **BCD ile ikiliyi karıştırmak.** 93 BCD'de 1001 0011, ikilide 1011101'dir.
- **Taşmayı gözden kaçırmak.** Aralık dışına çıkan sonuç işaret bitini bozar.

## Alıştırmalar

Alıştırmalar, örnek izlencenin 1. ve 2. haftalarını kapsar.[1]

1. (156)₁₀ sayısını ikili, sekizli ve on altılı sisteme çeviriniz.
2. (1101101)₂ sayısının onluk karşılığı nedir?
3. (7B)₁₆ sayısını onlu, ikili ve sekizli sisteme çeviriniz.
4. (0,375)₁₀ sayısını ikiliye çeviriniz.
5. 11011 + 10110 işlemini ikili olarak yapınız.
6. 10110 − 01101 işlemini birler tümleyeni yöntemiyle yapınız.
7. −20 sayısının 8 bitlik ikiye tümleyen gösterimi nedir?
8. 8 bitlik ikiye tümleyen gösterimindeki 11110110 hangi sayıdır?
9. 18 − 25 işlemini 8 bitlik ikiye tümleyenle yapınız.
10. 47 sayısını BCD ve ikili olarak yazınız.
11. İkili 0110 sayısını Gray koduna, Gray kodundaki 0110'ı ikiliye çeviriniz.
12. ASCII'de 1000011 hangi karakterdir? Küçük "c" harfinin kodu nedir?
13. 6 bitlik ikiye tümleyen hangi aralıktaki sayıları gösterebilir?

## Cevaplar

Bütün sonuçlar programla denetlenmiştir; yöntemler yukarıdaki bölümlerdedir.[4][5]

1. (156)₁₀ = **(10011100)₂ = (234)₈ = (9C)₁₆**.
2. 64 + 32 + 8 + 4 + 1 = **109**.
3. 7 × 16 + 11 = **123**; ikili **1111011**; sekizli 1 111 011 → **173**.
4. 0,375 × 2 = 0,75 (0); 0,75 × 2 = 1,5 (1); 0,5 × 2 = 1,0 (1) → **(0,011)₂**.
5. **110001** (27 + 22 = 49).
6. 01101'in birler tümleyeni 10010; 10110 + 10010 = 1 01000; elde LSB'ye eklenir: 01000 + 1 = **01001 = 9** (22 − 13 = 9).
7. 20 = 00010100; ters 11101011; +1 → **11101100**.
8. −128 + 64 + 32 + 16 + 4 + 2 = **−10**.
9. 18 = 00010010; −25 = 11100111; toplam **11111001 = −7**.
10. BCD **0100 0111**; ikili **101111**.
11. 0110 → Gray **0101**; Gray 0110 → ikili **0100**.
12. 1000011 = sütun 4, satır 3 = **C** (onlu 67); "c" = **110 0011** (onlu 99).
13. −2⁵ ile 2⁵ − 1 arası: **−32 ile 31**.

## Terim tablosu

| Türkçe | İngilizce | Diğer kullanımlar |
|---|---|---|
| İkili sayı sistemi | Binary number system | İkilik, binary |
| Sekizli sayı sistemi | Octal | Sekizlik, oktal |
| Onlu sayı sistemi | Decimal | Onluk, desimal |
| On altılı sayı sistemi | Hexadecimal | On altılık, heksadesimal |
| En yüksek değerlikli bit | Most significant bit (MSB) | En ağırlıklı bit |
| En düşük değerlikli bit | Least significant bit (LSB) | En küçük değerlikli bit |
| Birler tümleyeni | One's complement | 1'e tümleyen, evrik |
| İkiler tümleyeni | Two's complement | 2'ye tümleyen |
| İşaret biti | Sign bit | |
| Taşma | Overflow | |
| İkili kodlanmış onluk | Binary coded decimal (BCD) | |
| Yansıtılmış ikili kod | Reflected binary code | Gray kodu |

Türkçe terimler MEB modüllerinden, İngilizce karşılıklar MIT ders notlarından ve Gray'in patentinden alınmıştır.[4][6][5][7]

## Sonuç

Sayı sistemleri konusu birkaç yöntemin sağlam uygulanmasından ibarettir: bölerek onluktan başka tabana, ağırlıklarla toplayarak başka tabandan onluğa geçmek; ikili, sekizli ve on altılı arasında üçerli ve dörderli gruplamak.[4][5] Negatif sayılar ikiye tümleyenle gösterilir ve çıkarma toplamaya dönüşür; bunun için bit sayısını sabit tutmak ve aralığı bilmek gerekir.[5][6] BCD, Gray ve ASCII kodları ise aynı bitlerin farklı amaçlarla nasıl yorumlanabileceğini gösterir.[7][8] Bu konu, mantık kapılarından toplayıcılara kadar dersin bütün sayısal yarısının temelidir.[1]

## Sık Sorulan Sorular

### Sayı sistemleri nelerdir?

Sayısal elektronikte dört sayı sistemi kullanılır: tabanı 2 olan ikili (binary), tabanı 8 olan sekizli (oktal), tabanı 10 olan onlu (desimal) ve tabanı 16 olan on altılı (heksadesimal) sistem. İkili sistemde yalnız 0 ve 1, on altılı sistemde 0-9 rakamları ile A-F harfleri kullanılır; A = 10, F = 15'tir.

### Onluk sayı ikilik sayıya nasıl çevrilir?

Onluk sayı art arda 2'ye bölünür, her bölmenin kalanı yazılır ve kalanlar sondan başa doğru okunur. Örneğin 45 sayısı için kalanlar sırasıyla 1, 0, 1, 1, 0, 1 çıkar; sondan başa okununca 101101 elde edilir. Sonucu denetlemek için basamak değerleri toplanır: 32 + 8 + 4 + 1 = 45.

### İkilik sayı on altılık sayıya nasıl çevrilir?

İkilik sayı sağdan başlayarak dörderli gruplara ayrılır ve her grubun on altılık karşılığı yazılır. Örneğin 01011101 sayısı 0101 ve 1101 gruplarına ayrılır; bunlar 5 ve D'dir, sonuç 5D olur. Sekizliye çevirirken aynı işlem üçerli gruplarla yapılır.

### İkiye tümleme nasıl yapılır?

Önce sayının bütün bitleri ters çevrilir (birler tümleyeni), sonra sonuca 1 eklenir. Örneğin 8 bitlik 45 sayısı 00101101'dir; bitler ters çevrilince 11010010, 1 eklenince 11010011 olur. Bu, −45'in 8 bitlik ikiye tümleyen gösterimidir.

### BCD kodu nedir?

BCD (ikili kodlanmış onluk), onluk sayının her rakamını ayrı ayrı 4 bitlik ikili karşılığıyla yazan koddur. Örneğin 93 sayısı BCD'de 1001 0011 olarak yazılır; oysa 93'ün ikili karşılığı 1011101'dir. BCD, 16 olası 4 bitlik kodun yalnız 10'unu kullanır; 1010 ile 1111 arasındaki kodlar geçersizdir.

### Gray kodu nedir?

Gray kodu, ardışık iki sayının kodlarının yalnız bir bitte farklı olduğu ikili koddur. Frank Gray'in 1953'te patentini aldığı bu kod, sıradan ikili koddan bir tür yansıtma işlemiyle türetildiği için yansıtılmış ikili kod olarak da anılır. İkiliden Gray'e geçerken en soldaki bit aynen yazılır, sonraki her bit komşu iki ikili bitin ÖZEL VEYA'sıdır.

## Kaynaklar

1. Hacettepe Üniversitesi (2024). BTE114 Elektronik Devre Elemanları ders bilgi paketi (Bilgisayar ve Öğretim Teknolojileri Öğretmenliği). Hacettepe Üniversitesi Bologna Bilgi Sistemi. https://bilsis.hacettepe.edu.tr/oibs/bologna/progCourseDetails.aspx?curCourse=78042&lang=tr (TR, erişim: 2026-09-28)
2. Yükseköğretim Kurulu (2018). Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programı. YÖK, Öğretmen Yetiştirme Lisans Programları. https://egitim.yok.gov.tr/tr/document/2432 (TR, erişim: 2026-09-28)
3. Shannon, C. E. (1940). A symbolic analysis of relay and switching circuits. Yüksek lisans tezi, Massachusetts Institute of Technology. https://hdl.handle.net/1721.1/11173 (EN, erişim: 2026-09-28)
4. Millî Eğitim Bakanlığı (2012). Elektrik-elektronik teknolojisi: Temel mantık devreleri (522EE0245). MEB, Mesleki Eğitim ve Öğretim Sisteminin Güçlendirilmesi Projesi (MEGEP) modülü, Ankara. https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Temel%20Mant%C4%B1k%20Devreleri.pdf (TR, erişim: 2026-09-28)
5. Ward, S. (2017). Information (Computation Structures ders notları, bölüm 3). Massachusetts Institute of Technology, 6.004 Computation Structures. https://computationstructures.org/notes/information/notes.html (EN, erişim: 2026-09-28)
6. Millî Eğitim Bakanlığı (2017). Denizcilik: Sayısal elektronik temelleri. MEB, mesleki ve teknik eğitim modülü, Ankara. https://megep.meb.gov.tr/mte_program_modul/moduller/Say%C4%B1sal%20Elektronik%20Temelleri.pdf (TR, erişim: 2026-09-28)
7. Gray, F. (1953). Pulse code communication (ABD patenti 2,632,058). United States Patent Office; başvuru 13 Kasım 1947, Bell Telephone Laboratories. https://patents.google.com/patent/US2632058A/en (EN, erişim: 2026-09-28)
8. Cerf, V. (1969). ASCII format for network interchange (RFC 20). Network Working Group, Request for Comments 20. https://www.rfc-editor.org/rfc/rfc20.txt (EN, erişim: 2026-09-28)
