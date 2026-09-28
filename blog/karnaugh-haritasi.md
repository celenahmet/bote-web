---
title: "Karnaugh Haritası: Gruplama Kuralları ve Quine-McCluskey"
url: https://bote.web.tr/blog/karnaugh-haritasi
author: BÖTE Editör Ekibi
published: 2026-09-28
updated: 2026-09-28
category: Bölüm Rehberi
description: "Karnaugh haritası konu anlatımı: 2, 3 ve 4 değişkenli haritalar, gruplama kuralları, fark etmez durumlar ve Quine-McCluskey yöntemi, çözümlü örneklerle."
---

# Karnaugh Haritası: Gruplama Kuralları ve Quine-McCluskey

> Karnaugh haritası konu anlatımı: 2, 3 ve 4 değişkenli haritalar, gruplama kuralları, fark etmez durumlar ve Quine-McCluskey yöntemi, çözümlü örneklerle.

Yazan: BÖTE Editör Ekibi · Yayın: 2026-09-28 · Güncelleme: 2026-09-28 · 10 dk okuma · https://bote.web.tr/blog/karnaugh-haritasi

## Özet

- Karnaugh haritası, bir Boole fonksiyonunu **en az kapıyla** kurmak için doğruluk tablosunu komşuluk ilişkisini gösteren bir tabloya dizer. n değişkenli haritada 2ⁿ hücre vardır.
- Sütun ve satır başlıkları **00, 01, 11, 10** sırasıyla yazılır (Gray sırası). Böylece yan yana her iki hücre yalnız bir değişkende farklıdır.
- Gruplama kuralları: yalnız 1'ler gruplanır; grup büyüklüğü 1, 2, 4, 8, 16 olmalıdır; gruplar mümkün olduğunca büyük olmalı, çapraz grup yapılmaz, hiçbir 1 açıkta kalmaz; kenarlar ve köşeler birbirine komşudur.
- **Fark etmez (X)** hücreleri, grubu büyütüyorsa 1, büyütmüyorsa 0 sayılır.
- Değişken sayısı arttığında **Quine-McCluskey** yöntemi kullanılır: tek bitte farklı terimler art arda birleştirilir, asal çarpımlar bulunur ve bir tabloyla en az sayıda terim seçilir.

Bu yazı, [Elektronik Devre Elemanları dersi](https://bote.web.tr/blog/elektronik-devre-elemanlari) rehberinin sadeleştirme bölümüdür. Örnek bir izlencede altıncı hafta bu konuya ayrılır: Karnaugh diyagramları, minterm ve maxterm ifadeler ve Quine-McCluskey yöntemi.[1] YÖK'ün ders tanımı da Karnaugh haritasını adıyla sayar.[2] Yazıyı okumadan önce [mantık kapıları ve Boole cebiri](https://bote.web.tr/blog/mantik-kapilari-ve-boole-cebiri) yazısındaki minterm kavramını ve [sayı sistemleri](https://bote.web.tr/blog/sayi-sistemleri) yazısındaki Gray kodunu bilmek işinizi kolaylaştırır.

## Karnaugh haritası nedir ve neden kullanılır?

Bir fonksiyonu Boole kurallarıyla sadeleştirmek mümkündür ama hangi kuralı nerede uygulayacağınızı görmek her zaman kolay değildir. Karnaugh haritası bu işi görsel ve daha güvenilir hâle getirir. MEB modülünün vurguladığı gibi amaç, aynı işi gören ifadeyi en az kapıyla elde etmektir; böylece devrenin hem boyutu küçülür hem maliyeti düşer.[3] Maurice Karnaugh bu harita yöntemini 1953'te kombinasyonel, yani sıralı olmayan mantık devrelerinin verimli biçimde kurulması için önerdi.[4]

Haritanın dayandığı kural basittir: yalnız bir değişkende farklı olan iki terim birleşir ve o değişken düşer, AB + AB' = A. Harita, doğruluk tablosunun satırlarını **birleşebilecek terimler yan yana gelecek** biçimde dizer. Bunun için satır ve sütun başlıkları 00, 01, 10, 11 sırasıyla değil, **00, 01, 11, 10** sırasıyla yazılır.[3] Bu, ardışık iki kodun yalnız bir bitte farklı olduğu Gray sırasıdır.[5]

## Haritayı kurmak

n değişkenli bir haritada 2ⁿ hücre vardır: 2 değişkende 4, 3 değişkende 8, 4 değişkende 16 hücre.[3] Her hücre doğruluk tablosunun bir satırına, yani bir minterme karşılık gelir. Doğruluk tablosundaki satır numarasını hücreye yazmak, 1'leri haritaya aktarırken hatayı azaltır.[3]

**3 değişkenli harita.** Sütunlar AB, satırlar C'dir. Hücrelerdeki sayılar minterm numarasıdır (m = 4A + 2B + C):

| C \ AB | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 0 | m0 | m2 | m6 | m4 |
| 1 | m1 | m3 | m7 | m5 |

**4 değişkenli harita.** Bu yazıda satırlar AB, sütunlar CD'dir (m = 8A + 4B + 2C + D):

| AB \ CD | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 00 | m0 | m1 | m3 | m2 |
| 01 | m4 | m5 | m7 | m6 |
| 11 | m12 | m13 | m15 | m14 |
| 10 | m8 | m9 | m11 | m10 |

Tabloyu ezberlemek yerine sırayı akılda tutun: üçüncü sütun 11, dördüncü sütun 10'dur. Bu yüzden 4 değişkenli haritada m2, m3'ün **sağına** düşer. Değişkenlerin satır ve sütunlara yerleşimi değiştirilebilir; o zaman hücrelerin içi de değişir, buna dikkat etmek gerekir.[3]

MEB'in modülüne göre Karnaugh haritası en fazla 6 değişkenli ifadeleri sadeleştirmek için kullanılır; en çok kullanılanlar 2, 3 ve 4 değişkenli haritalardır.[3]

## Gruplama kuralları

Gruplama, haritanın en can alıcı adımıdır. MEB modülündeki kurallar şunlardır:[3]

1. **Yalnız 1'ler gruplanır.** Boş hücreler 0'dır ve gruba katılmaz.
2. **Grup büyüklüğü 1, 2, 4, 8, 16 olmalıdır.** Üç ya da altı hücrelik grup olmaz.
3. **Gruplar mümkün olduğunca büyük olmalıdır.** Hedef en çok 1'i en az grupla örtmektir.
4. **Hiçbir 1 açıkta kalmamalıdır.**
5. **Çapraz grup yapılmaz.** Gruplar yan yana ya da alt alta hücrelerden oluşan dikdörtgenlerdir.
6. **Kenarlar komşudur.** Haritanın en sağındaki sütun en solundakiyle, en alttaki satır en üsttekiyle komşudur. 4 değişkenli haritada dört köşe (m0, m2, m8, m10) de tek bir dörtlü grup oluşturabilir.
7. **Bir hücre birden fazla grupta yer alabilir.** Bir 1'i iki gruba birden katmak, grupları büyütüyorsa doğru yoldur.

**Gruptan terim yazmak.** Bir grubun içinde değeri değişmeyen değişkenler terimde kalır; değeri değişen değişkenler düşer. Değeri 1 olan değişken düz, 0 olan değişken değilli yazılır.[3] 4 değişkenli bir haritada 2 hücrelik grup 3 harfli, 4 hücrelik grup 2 harfli, 8 hücrelik grup tek harfli bir terim verir. Bütün hücreler 1 ise fonksiyon 1'dir.

## Çözümlü örnekler

**Örnek 1 (2 değişken).** Y = A'B + AB' + AB. MEB modülündeki örnek:[3] Haritada 01, 10 ve 11 hücrelerinde 1 vardır. 01 ile 11 hücreleri B = 1 satırında bir grup, 10 ile 11 hücreleri A = 1 sütununda bir grup oluşturur. 11 hücresi iki grupta birden yer alır. **Y = A + B**. Üç VE, bir VEYA ve iki DEĞİL kapısı yerine tek bir VEYA kapısı yeter.

**Örnek 2 (3 değişken).** y = ABC' + A'B'C + BC. MEB modülündeki örnektir.[3] Önce ifadeyi mintermlere açalım: ABC' = m6, A'B'C = m1; BC ise hem A'BC (m3) hem ABC (m7) demektir. Yani y = Σm(1, 3, 6, 7) ve haritaya dört 1 yazılır.

- m1 ve m3 (C = 1 satırında, AB = 00 ve 01 sütunlarında): A = 0 ve C = 1 sabit, B değişiyor → **A'C**
- m6 ve m7 (AB = 11 sütununda, iki satırda): A = 1 ve B = 1 sabit, C değişiyor → **AB**
- **Sonuç: y = A'C + AB**

m3 ile m7 de bir çift oluşturur (BC), ama bu grubun iki 1'i zaten öteki gruplarca örtülüdür; BC terimini eklemek ifadeyi uzatır. [Mantık kapıları ve Boole cebiri](https://bote.web.tr/blog/mantik-kapilari-ve-boole-cebiri) yazısındaki uzlaşı kuralı da aynı sonucu verir.

**Örnek 3 (4 değişken, köşeler).** F = Σm(0, 2, 5, 7, 8, 10, 13, 15).

- Dört köşe m0, m2, m8, m10: B = 0 ve D = 0 sabit → **B'D'**
- Ortadaki kare m5, m7, m13, m15: B = 1 ve D = 1 sabit → **BD**
- **Sonuç: F = B'D' + BD**, yani B ile D aynıyken 1 veren ÖZEL VEYA DEĞİL fonksiyonu.

Köşelerin komşu olduğunu unutan öğrenci burada dört ayrı ikili grup kurar ve daha uzun bir ifade bulur.

**Örnek 4 (fark etmezlerle).** BCD kodunda gelen bir rakam 5 ya da daha büyükse 1 veren devreyi tasarlayalım. BCD'de 10-15 arası kodlar hiç gelmez; bu hücreler fark etmezdir.

- F = Σm(5, 6, 7, 8, 9) + d(10, 11, 12, 13, 14, 15)
- A = 1 olan sekiz hücre (m8-m15): 8 ve 9 bizim 1'lerimiz, geri kalanı X → **A**
- m5, m7, m13, m15: B = 1 ve D = 1 → **BD**
- m6, m7, m14, m15: B = 1 ve C = 1 → **BC**
- **Sonuç: F = A + BD + BC**

X'ler olmasaydı A = 1 olan grup yalnız m8 ve m9'dan oluşur, AB'C' gibi daha uzun bir terim çıkardı.

**Örnek 5 (0'ları gruplamak).** Bazen 0'ları gruplamak daha kısadır. F(A, B, C)'nin yalnız m3 ve m7'de 0 olduğunu varsayalım. 0'lar gruplanınca F' = BC bulunur. De Morgan'la **F = (BC)' = B' + C'** elde edilir. Bu, fonksiyonun maxtermlerin çarpımı biçiminden sadeleştirilmesidir.

## Fark etmez (X) durumları

Bazı tasarımlarda belirli giriş durumları hiç oluşmaz ya da o durumlarda çıkışın ne olduğu önemsizdir. Bu hücrelere 0 ve 1 dışında bir işaret, **X** yazılır; bunlara fark etmez ya da önemsiz denir.[3] X hücreleri gruplamada duruma göre 1 ya da 0 sayılır. Amaç en büyük gruplamayı yapmaktır: grubu büyütmeye yarayan X'ler gruba katılır, işe yaramayanlar dışarıda bırakılır.[3]

McCluskey de aynı durumu tasarımcının kolaylığı için fonksiyona katılabilecek terimler olarak tanımlar. Bu satırlara verilecek değer (0 ya da 1), devreyi sadeleştirecek biçimde seçilir.[6]

## Quine-McCluskey yöntemi

Karnaugh haritası 5-6 değişkende kullanışsızlaşır; komşulukları gözle görmek zorlaşır. Bu durumda sistemli bir tablo yöntemi kullanılır. McCluskey 1956'da, bir Boole fonksiyonunu **en az sayıda çarpımın toplamı** olarak yazmak için Quine'ın yöntemini sadeleştirip genişleten sistemli bir yöntem yayımladı.[6][7]

**Temel kavram: asal çarpım.** Doğruluk tablosunun 1 olan satırlarını gerçekleştiren çarpım terimlerinden, başka daha basit bir terimin kapsamadığı terime **asal çarpım** (prime implicant) denir.[8] Karnaugh haritasındaki her "genişletilemeyen en büyük grup" bir asal çarpımdır.

**Adımlar.**

1. Mintermleri ikili yazın ve içerdikleri 1 sayısına göre gruplayın.
2. Komşu gruplardaki, **yalnız bir bitte farklı** terimleri birleştirin; farklı bitin yerine tire (-) koyun ve birleşen terimleri işaretleyin. McCluskey'e göre bu, terimlerin ondalık etiketlerinin **2'nin bir kuvveti kadar** farklı olmasıyla da görülebilir.[6]
3. Aynı işlemi tireli terimlerle, tireler aynı yerdeyken tekrarlayın; birleşme kalmayana kadar sürdürün.
4. Hiç işaretlenmemiş terimler **asal çarpımlardır**.
5. **Asal çarpım tablosu** kurun: satırlar asal çarpımlar, sütunlar mintermlerdir; bir asal çarpım bir mintermi örtüyorsa kesişime çarpı konur. Yalnız tek çarpı bulunan bir sütunun satırı **zorunlu olarak seçilir**. Sonra kalan sütunları örten en az sayıda satır seçilir.[6]

McCluskey'in notuna göre asal çarpım tablosunu ilk tartışan Quine'dır, ama Quine tablodan en kısa toplamı bulmak için sistemli bir yol vermemiştir.[6]

**Örnek 6.** F(A, B, C, D) = Σm(0, 1, 2, 5, 8, 9, 10)

*Adım 1, 1 sayısına göre gruplama:*

| 1 sayısı | Mintermler |
|---|---|
| 0 | 0 (0000) |
| 1 | 1 (0001), 2 (0010), 8 (1000) |
| 2 | 5 (0101), 9 (1001), 10 (1010) |

*Adım 2, ikili birleşmeler:* 0-1 (000-), 0-2 (00-0), 0-8 (-000), 1-5 (0-01), 1-9 (-001), 2-10 (-010), 8-9 (100-), 8-10 (10-0).

*Adım 3, dörtlü birleşmeler:* 0-1-8-9 (-00-) ve 0-2-8-10 (-0-0). 1-5 (0-01) başka bir terimle birleşemez.

*Adım 4, asal çarpımlar:* **B'C'** (-00-, m0, m1, m8, m9), **B'D'** (-0-0, m0, m2, m8, m10) ve **A'C'D** (0-01, m1, m5).

*Adım 5, tablo:*

| Asal çarpım | m0 | m1 | m2 | m5 | m8 | m9 | m10 |
|---|---|---|---|---|---|---|---|
| B'C' | × | × | | | × | × | |
| B'D' | × | | × | | × | | × |
| A'C'D | | × | | × | | | |

m5 sütununda yalnız A'C'D, m9 sütununda yalnız B'C', m2 ve m10 sütunlarında yalnız B'D' vardır. Üçü de zorunludur ve birlikte bütün sütunları örter. **Sonuç: F = B'C' + B'D' + A'C'D**.

## İleri not: fazladan terim ne işe yarar?

En kısa ifade her zaman tek doğru cevap değildir. MIT'nin ders notlarında Y = C'A + CB fonksiyonu için şu durum incelenir: A = B = 1 iken C değişirse, çıkışı 1'de tutma görevi bir yoldan ötekine geçer. Kısa bir süre hiçbir yol çıkışı 1'de tutmayabilir ve çıkış belirsizleşir. Mantıksal olarak gereksiz olan AB terimi devreye eklenince bu açık kapanır. Notlara göre bütün asal çarpımları içeren bir çarpımlar toplamı devresi bu tür geçişlerde güvenlidir.[8] Sınavlarda genellikle en kısa ifade istenir; ama tasarım sorularında bu farkı bilmek artı puan getirir. Aynı notlar, sadeleştirme yazılımlarının bu tür indirgeme adımlarını art arda uygulayarak çalıştığını da belirtir.[8]

## Sık yapılan hatalar

- **Başlıkları 00, 01, 10, 11 sırasıyla yazmak.** Doğru sıra 00, 01, 11, 10'dur.[3]
- **Kenar ve köşe komşuluğunu unutmak.** Sağ ile sol, üst ile alt kenar komşudur; dört köşe bir gruptur.
- **3 ya da 6 hücrelik grup kurmak.** Gruplar 1, 2, 4, 8, 16 hücreliktir.[3]
- **Grubu büyütmemek.** Dörtlü grup kurulabilecekken iki ikili grup kurmak ifadeyi uzatır.
- **Çapraz grup kurmak.** Çapraz duran hücreler iki değişkende farklıdır ve birleşmez.[3]
- **Gereksiz grup eklemek.** Bütün 1'leri zaten örtülmüş bir grup (Örnek 2'deki BC) ifadeyi uzatır.
- **Gerekmeyen X'leri gruplara katmak.** X yalnız grubu büyütüyorsa kullanılır.[3]

## Alıştırmalar

Alıştırmalar örnek izlencenin 6. haftasını kapsar.[1] Her birinde en kısa çarpımlar toplamını bulunuz.

1. F(A, B) = Σm(1, 2, 3)
2. F(A, B, C) = Σm(0, 2, 4, 6)
3. F(A, B, C) = Σm(0, 1, 2, 3, 7)
4. F(A, B, C) = Σm(2, 3, 4, 5)
5. F(A, B, C, D) = Σm(0, 1, 2, 3, 8, 9, 10, 11)
6. F(A, B, C, D) = Σm(1, 3, 5, 7, 9, 11, 13, 15)
7. F(A, B, C, D) = Σm(0, 2, 8, 10)
8. F(A, B, C, D) = Σm(1, 3, 7, 11, 15) + d(0, 2, 5)
9. F(A, B, C, D) = Σm(4, 5, 6, 7, 12, 13, 14, 15)

## Cevaplar

Bütün cevaplar programla, Quine-McCluskey yöntemi ve doğruluk tablosu karşılaştırmasıyla denetlenmiştir.[6]

1. **F = A + B**
2. **F = C'** (C = 0 satırının tamamı)
3. **F = A' + BC** (A = 0 dörtlüsü ve m3-m7 çifti)
4. **F = A'B + AB'**, yani A ⊕ B
5. **F = B'** (B = 0 olan iki satırın sekiz hücresi)
6. **F = D** (D = 1 olan iki sütunun sekiz hücresi)
7. **F = B'D'** (dört köşe)
8. **F = A'B' + CD**. X'ler m0 ve m2 kullanılarak A'B' dörtlüsü kurulur; m3, m7, m11, m15 dörtlüsü CD'dir. **F = A'D + CD** de aynı sayıda terim ve harfle doğru bir cevaptır; burada A'D dörtlüsünü m5 fark etmezi tamamlar. Bir fonksiyonun birden fazla en kısa ifadesi olabilir.
9. **F = B** (B = 1 olan iki satır)

## Terim tablosu

| Türkçe | İngilizce | Diğer kullanımlar |
|---|---|---|
| Karnaugh haritası | Karnaugh map, K-map | Karno haritası, Karnaugh diyagramı |
| Gruplama | Grouping | Gruplandırma |
| Fark etmez | Don't care | Önemsiz, X |
| Çarpımlar toplamı | Sum of products (SOP) | |
| Toplamlar çarpımı | Product of sums (POS) | |
| Asal çarpım | Prime implicant | |
| Zorunlu asal çarpım | Essential prime implicant | |
| Asal çarpım tablosu | Prime implicant table | |
| Quine-McCluskey yöntemi | Quine-McCluskey method | Tablo yöntemi |

Karno haritası, gruplandırma, fark etmez ve önemsiz adları MEB modülünden; İngilizce terimler MIT notları ile McCluskey'in makalesinden alınmıştır.[3][8][6]

## Sonuç

Karnaugh haritası, doğruluk tablosunu komşu hücreler yalnız bir değişkende farklı olacak biçimde dizerek sadeleştirmeyi görsel bir gruplama işine dönüştürür.[4][3] Doğru sonuç için başlık sırasını (00, 01, 11, 10), grup büyüklüklerini, kenar komşuluğunu ve fark etmez kuralını bilmek yeterlidir.[3] Değişken sayısı arttığında aynı iş Quine-McCluskey yöntemiyle, asal çarpımlar ve asal çarpım tablosu üzerinden sistemli biçimde yapılır.[6][7] Sadeleştirilmiş ifadeler, sonraki konu olan toplayıcı, kod çözücü ve çoklayıcı tasarımının da temelidir.[1]

## Sık Sorulan Sorular

### Karnaugh haritası nedir?

Karnaugh haritası, bir Boole fonksiyonunu sadeleştirmek için doğruluk tablosunun hücrelerini, yan yana hücreler yalnız bir değişkende farklı olacak biçimde dizen bir tablodur. Maurice Karnaugh 1953'te kombinasyonel mantık devrelerinin sentezi için bu harita yöntemini önerdi. Haritada komşu 1'ler gruplanarak fonksiyonun en kısa ifadesi, dolayısıyla en az kapıyla kurulan devresi bulunur.

### Karnaugh haritasında gruplama nasıl yapılır?

Yalnız 1 olan hücreler gruplanır. Grup büyüklüğü 1, 2, 4, 8 ya da 16 olmalıdır; 3 ya da 6 hücrelik grup olmaz. Gruplar dikdörtgen biçiminde, yan yana ya da alt alta olmalıdır; çapraz grup yapılmaz. Gruplar mümkün olan en büyük boyutta tutulur, hiçbir 1 açıkta kalmaz ve bir hücre birden fazla grupta yer alabilir. Haritanın sağ ve sol kenarları ile üst ve alt kenarları birbirine komşudur.

### Karnaugh haritasında neden 00, 01, 11, 10 sırası kullanılır?

Bu sıra Gray kodu sırasıdır: ardışık iki başlık yalnız bir bitte farklıdır. Böylece haritada yan yana duran iki hücre yalnız bir değişkende farklı olur ve AB + AB' = A kuralıyla birleştirilebilir. 00, 01, 10, 11 sırası kullanılsaydı 01 ile 10 yan yana gelir ve iki bitte farklı olurdu.

### Karnaugh haritasında fark etmez (X) ne demektir?

Fark etmez, bazı giriş durumlarının hiç oluşmadığı ya da çıkışın o durumda önemsiz olduğu hücreler için kullanılır ve X ile gösterilir. X hücreleri gruplamada istenirse 1, istenirse 0 sayılır; amaç en büyük grupları kurmaktır. Grubu büyütmeyen X'ler gruplara katılmaz.

### Quine-McCluskey yöntemi nedir?

Quine-McCluskey, Boole fonksiyonunu en az terimli çarpımlar toplamı olarak yazmak için sistemli, tablo tabanlı bir yöntemdir. Mintermler ikili yazılır, yalnız bir bitte farklı olan terimler art arda birleştirilir; birleşemeyen terimler asal çarpımlardır. Ardından bir asal çarpım tablosuyla bütün mintermleri örten en az sayıda asal çarpım seçilir. Yöntem Quine'ın 1952 çalışmasına ve McCluskey'in 1956'daki genişletmesine dayanır.

### Karnaugh haritası kaç değişkene kadar kullanılır?

MEB'in Temel Mantık Devreleri modülüne göre Karnaugh haritası en fazla 6 değişkenli ifadeleri sadeleştirmek için kullanılır; uygulamada en çok 2, 3 ve 4 değişkenli haritalar kullanılır. Değişken sayısı arttıkça komşulukları görmek zorlaştığı için daha büyük fonksiyonlarda Quine-McCluskey gibi tablo yöntemleri tercih edilir.

## Kaynaklar

1. Hacettepe Üniversitesi (2024). BTE114 Elektronik Devre Elemanları ders bilgi paketi (Bilgisayar ve Öğretim Teknolojileri Öğretmenliği). Hacettepe Üniversitesi Bologna Bilgi Sistemi. https://bilsis.hacettepe.edu.tr/oibs/bologna/progCourseDetails.aspx?curCourse=78042&lang=tr (TR, erişim: 2026-09-28)
2. Yükseköğretim Kurulu (2018). Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programı. YÖK, Öğretmen Yetiştirme Lisans Programları. https://egitim.yok.gov.tr/tr/document/2432 (TR, erişim: 2026-09-28)
3. Millî Eğitim Bakanlığı (2012). Elektrik-elektronik teknolojisi: Temel mantık devreleri (522EE0245). MEB, Mesleki Eğitim ve Öğretim Sisteminin Güçlendirilmesi Projesi (MEGEP) modülü, Ankara. https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Temel%20Mant%C4%B1k%20Devreleri.pdf (TR, erişim: 2026-09-28)
4. Karnaugh, M. (1953). The map method for synthesis of combinational logic circuits. Transactions of the American Institute of Electrical Engineers, Part I: Communication and Electronics, 72(5), 593–599. https://doi.org/10.1109/TCE.1953.6371932 (EN, erişim: 2026-09-28)
5. Gray, F. (1953). Pulse code communication (ABD patenti 2,632,058). United States Patent Office; başvuru 13 Kasım 1947, Bell Telephone Laboratories. https://patents.google.com/patent/US2632058A/en (EN, erişim: 2026-09-28)
6. McCluskey, E. J. (1956). Minimization of Boolean functions. Bell System Technical Journal, 35(6), 1417–1444. https://doi.org/10.1002/j.1538-7305.1956.tb03835.x (EN, erişim: 2026-09-28)
7. Quine, W. V. (1952). The problem of simplifying truth functions. The American Mathematical Monthly, 59(8), 521–531. https://doi.org/10.1080/00029890.1952.11988183 (EN, erişim: 2026-09-28)
8. Ward, S. (2017). Combinational logic (Computation Structures ders notları, bölüm 7). Massachusetts Institute of Technology, 6.004 Computation Structures. https://computationstructures.org/notes/combinational_logic/notes.html (EN, erişim: 2026-09-28)
