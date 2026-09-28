---
title: "Ohm ve Kirchhoff Kanunları: Seri ve Paralel Devre Çözümleri"
url: https://bote.web.tr/blog/ohm-ve-kirchhoff-kanunlari
author: BÖTE Editör Ekibi
published: 2026-09-28
updated: 2026-09-28
category: Bölüm Rehberi
description: "Ohm kanunu, güç, Kirchhoff'un akımlar ve gerilimler kanunu; seri, paralel ve karışık devrelerde eşdeğer direnç, akım ve gerilim hesabı, çözümlü örnekler."
---

# Ohm ve Kirchhoff Kanunları: Seri ve Paralel Devre Çözümleri

> Ohm kanunu, güç, Kirchhoff'un akımlar ve gerilimler kanunu; seri, paralel ve karışık devrelerde eşdeğer direnç, akım ve gerilim hesabı, çözümlü örnekler.

Yazan: BÖTE Editör Ekibi · Yayın: 2026-09-28 · Güncelleme: 2026-09-28 · 13 dk okuma · https://bote.web.tr/blog/ohm-ve-kirchhoff-kanunlari

## Özet

- **Ohm kanunu:** V = I × R. Gerilim neden, akım sonuçtur. Ohm kanunu bir doğa yasası değil, birçok malzemede gözlenen deneysel bir ilişkidir.
- **Seri devrede** bütün dirençlerden aynı akım geçer, gerilim bölünür: R = R₁ + R₂ + ... **Paralel devrede** bütün dirençlerin uçlarında aynı gerilim vardır, akım bölünür: 1/R = 1/R₁ + 1/R₂ + ...
- **Kirchhoff'un akımlar kanunu:** bir düğüme giren akımların toplamı çıkanların toplamına eşittir. **Gerilimler kanunu:** kapalı bir yol boyunca gerilim değişimlerinin toplamı sıfırdır.
- Gerçek bir pilin iç direnci vardır: uç gerilimi V = ε − I × r'dir. Güç P = V × I = I² × R = V² / R ile hesaplanır.
- Araştırmalar, öğrencilerin pili sabit bir akım kaynağı sandığını ve akımı pilde depolanan bir şey gibi düşündüğünü gösteriyor. Doğrusu, akımı devrenin direnci belirler.

Bu yazı, [Elektronik Devre Elemanları dersi](https://bote.web.tr/blog/elektronik-devre-elemanlari) rehberinin ikinci derin yazısıdır ve dersin analog yarısının çekirdeğini ele alır: Ohm kanununu, gücü, seri, paralel ve karışık devreleri ve Kirchhoff kanunlarını. YÖK'ün ders tanımı bu konuları açıkça sayar: doğru akım, alternatif akım, seri, paralel ve karışık devreler ile akım, direnç, Ohm Kanunu, Kirchhoff Gerilim Kanunu ve güç.[1] Örnek bir izlencenin haftalık planı sayısal konulara ağırlık verse de, analog ve sayısal sistemleri tanımak dersin öğrenme çıktılarından biridir.[2] Yazının sonundaki alıştırmaları çözebiliyorsanız bu bölümden gelecek sorulara hazırsınız.

## Temel büyüklükler: akım, gerilim, direnç

Devre sorularının çoğu üç büyüklük üzerine kuruludur ve bunları birbirinden ayırmak ilk iştir:[3][4]

- **Akım (I, amper):** Birim zamanda geçen elektrik yüküdür. MEB modülünün tanımıyla saniyedeki elektrik yükü miktarıdır.[4]
- **Gerilim (V, volt):** İki nokta arasındaki potansiyel farktır. Kaynağın sağladığı gerilime **elektromotor kuvvet (EMK, ε)**, bir yükün uçlarında oluşan gerilime **gerilim düşümü** denir.[4]
- **Direnç (R, ohm):** Bir elemanın akıma karşı koyma özelliğidir. Silindir biçimli bir iletkenin direnci R = ρ × L / A ile bulunur. Burada ρ malzemenin özdirenci, L uzunluğu, A kesit alanıdır. Bakırın özdirenci 1,68 × 10⁻⁸ Ω·m'dir.[3]

**Örnek (tel direnci).** 10 metre uzunluğunda, kesiti 1 mm² (1 × 10⁻⁶ m²) olan bakır telin direnci R = 1,68 × 10⁻⁸ × 10 / 10⁻⁶ = **0,168 ohm**'dur. Tel iki kat uzasaydı direnç iki katına, kesit iki kat büyüseydi direnç yarıya inerdi.

## Ohm kanunu ve güç

Birçok malzemede akım, uygulanan gerilimle doğru orantılıdır. Georg Simon Ohm bunu 1827'de, farklı uzunlukta teller içeren devrelerde gerilimi ve akımı ölçerek gösterdi.[3][5] Bu ilişki şöyle yazılır:[4]

**V = I × R**, buradan **I = V / R** ve **R = V / I**

Ohm kanunu bir doğa yasası değil, deneyle gözlenen bir ilişkidir. Akımı gerilimle doğru orantılı olan elemanlara **omik**, olmayanlara **omik olmayan** elemanlar denir. Ohm kanunu bir neden-sonuç ilişkisi olarak da okunabilir: **gerilim neden, akım sonuçtur.**[3] Diyot omik olmayan elemanlara örnektir: ters kutuplamada neredeyse hiç akım geçirmez, doğru kutuplamada ise uçlarındaki gerilim yaklaşık 0,7 voltu aşınca iletir. Gerçek değer diyoda bağlıdır ve akım ile gerilim arasındaki ilişki doğrusal değildir.[3]

Bir direncin harcadığı güç, gerilim ile akımın çarpımıdır. Ohm kanunuyla birleştirilince üç eşdeğer biçim çıkar:[3]

**P = V × I = I² × R = V² / R**

**Örnek 1.** 4 ohm'luk bir direncin uçlarına 12 volt uygulanıyor. Akım I = 12 / 4 = **3 A**'dir. Güç P = 12 × 3 = **36 W**'tır; aynı sonucu I² × R = 9 × 4 ve V² / R = 144 / 4 de verir. Üç formülden birinin sonucu ötekilerle tutmuyorsa bir hesap hatası vardır.

## Seri devreler

Dirençler, akım onlardan sırayla geçiyorsa seri bağlıdır. Yük akışı için tek bir yol olduğundan **her dirençten aynı akım geçer.**[3] Seri devrenin özellikleri:[3]

- Eşdeğer direnç dirençlerin toplamıdır: **R = R₁ + R₂ + R₃ + ...**
- Her dirençten aynı akım geçer.
- Kaynak gerilimi dirençler arasında bölünür; dirençler üzerindeki gerilimlerin toplamı kaynak gerilimine eşittir.

Bu son özellik Kirchhoff'un gerilimler kanunudur. MEB modülü seri devrenin eşdeğer direncini tam da bu kanundan türetir: kaynak gerilimi V = V₁ + V₂ = I × R₁ + I × R₂ = I × (R₁ + R₂) olduğuna göre eşdeğer direnç R₁ + R₂'dir.[4] Aynı akıl yürütmeden **gerilim bölücü** kuralı çıkar: seri bir dirence düşen gerilim, kaynak geriliminin o direncin toplam dirence oranıyla çarpımıdır, Vₖ = V × Rₖ / R.

**Örnek 2.** 2, 3 ve 5 ohm'luk üç direnç 20 voltluk bir kaynağa seri bağlanmış.

- Eşdeğer direnç: 2 + 3 + 5 = 10 ohm
- Akım: 20 / 10 = 2 A (üç dirençten de aynı)
- Gerilimler: 2 × 2 = 4 V, 2 × 3 = 6 V, 2 × 5 = 10 V
- Denetim: 4 + 6 + 10 = 20 V, kaynak gerilimine eşit.

Büyük dirence büyük gerilim düşer. Bu, seri devrelerde sık sorulan bir sezgidir.

## Paralel devreler

Dirençlerin bir ucu ortak bir noktaya, öteki ucu başka bir ortak noktaya bağlıysa dirençler paraleldir. **Her direncin uçlarında aynı gerilim bulunur.**[3] Paralel devrenin özellikleri:[3]

- Eşdeğer direnç: **1/R = 1/R₁ + 1/R₂ + 1/R₃ + ...**
- Eşdeğer direnç, bileşimdeki **en küçük dirençten bile küçüktür.**
- Her direncin uçlarında aynı gerilim bulunur.
- Toplam akım kollara bölünür; kol akımlarının toplamı devreye giren akıma eşittir.

Son özellik Kirchhoff'un akımlar kanunudur; MEB modülü paralel eşdeğer direnci bu kanunla ve Ohm kanunuyla türetir.[4] Evlerdeki ve arabalardaki elektrik tesisatı paralel bağlıdır. Böylece her cihaz kaynağın tam gerilimini alır ve ötekilerden bağımsız çalışabilir.[3]

İki direnç için pratik formül: **R = (R₁ × R₂) / (R₁ + R₂)**, yani çarpımın toplama bölümü. İki kola bölünen akım için de **akım bölücü** kuralı vardır: bir koldan geçen akım, toplam akımın **öteki** kolun direncinin toplama oranıyla çarpımıdır, I₁ = I × R₂ / (R₁ + R₂). Akım, direnci küçük olan kolu tercih eder.

**Örnek 3.** 6 ohm ve 3 ohm'luk iki direnç 12 voltluk bir kaynağa paralel bağlanmış.

- Eşdeğer direnç: (6 × 3) / (6 + 3) = 18 / 9 = 2 ohm
- Toplam akım: 12 / 2 = 6 A
- Kol akımları: 12 / 6 = 2 A ve 12 / 3 = 4 A (her iki direncin uçlarında 12 V)
- Denetim: 2 + 4 = 6 A. Akım bölücüyle de 6 × 3 / 9 = 2 A bulunur.

## Karışık devreler adım adım

Karışık devreler seri ve paralel bölümlerin birleşimidir. Çözüm yöntemi, seri ya da paralel olduğu açık olan parçaları tek tek eşdeğer dirence indirgemek ve devre tek bir dirence inene kadar devam etmektir. OpenStax'in deyişiyle bu süreç zor olmaktan çok zaman alıcıdır.[3] Sonra aynı yoldan geri dönülerek her elemanın akımı ve gerilimi bulunur.

**Örnek 4.** 24 voltluk bir kaynağa önce 4 ohm'luk bir direnç seri bağlanmış; bu direncin ardından devre ikiye ayrılıyor ve 6 ohm ile 12 ohm'luk dirençler paralel kollar oluşturuyor.

1. Paralel bölüm: (6 × 12) / (6 + 12) = 72 / 18 = 4 ohm
2. Toplam direnç: 4 + 4 = 8 ohm
3. Kaynaktan çekilen akım: 24 / 8 = 3 A. Bu akımın tamamı seri bağlı 4 ohm'dan geçer.
4. 4 ohm'luk dirence düşen gerilim: 3 × 4 = 12 V. Geriye paralel bölüm için 24 − 12 = 12 V kalır.
5. Kol akımları: 12 / 6 = 2 A ve 12 / 12 = 1 A. Denetim: 2 + 1 = 3 A.
6. Güç denetimi: kaynağın verdiği güç 24 × 3 = 72 W; dirençlerin harcadığı 36 + 24 + 12 = 72 W.

Son adımı sınavda yapmanız gerekmez ama yaparsanız hatayı yakalarsınız: kaynağın verdiği güç, dirençlerin harcadığı güçlerin toplamına eşit olmalıdır.

## Kirchhoff kanunları

Bazı devreler seri ve paralel parçalara ayrılamaz; özellikle birden fazla kaynak içeren devreler böyledir. Bu devreler Gustav Kirchhoff'un (1824-1887) adını taşıyan iki kanunla çözülür. Bu iki kanun basit ya da karmaşık her devreye uygulanabilir.[3]

**Kirchhoff'un akımlar kanunu (düğüm kuralı).** Bir devrede her düğüm noktasına gelen akımların toplamı, giden akımların toplamına eşittir.[4] Düğüm, üç ya da daha fazla telin birleştiği noktadır.[3] Kanun, yükün korunumunun sonucudur: düğümde elektrik yükü kendiliğinden artamaz ya da eksilemez.[4]

**Kirchhoff'un gerilimler kanunu (çevre kuralı).** Kapalı bir devre yolu boyunca potansiyel değişimlerinin cebirsel toplamı sıfırdır.[3] MEB modülünün ifadesiyle, herhangi kapalı bir devrede EMK'ler toplamı, yükler üzerinde düşen gerilimlerin toplamına eşittir.[4] Kanun enerjinin korunumuna dayanır: kaynağın verdiği enerji, yoldaki elemanlarda başka biçimlere dönüşür.[3]

**İşaret kuralları.** Gerilimler kanunu uygulanırken polariteye dikkat edilmelidir; önce çevrenin dolaşılacağı yön seçilir.[4] Sonra şu kurallar uygulanır:[3]

| Geçilen eleman | Geçiş yönü | Gerilim değişimi |
|---|---|---|
| Direnç | Akımla aynı yönde | −I × R |
| Direnç | Akıma ters yönde | +I × R |
| Kaynak | Eksi uçtan artı uca | +ε |
| Kaynak | Artı uçtan eksi uca | −ε |

**Çözüm adımları.**

1. Her kola bir akım adı verin (I₁, I₂, ...) ve yönünü rastgele seçin. Yanlış seçilen yönün cezası yoktur: sonuç eksi çıkarsa akım ters yönde akıyordur.
2. Düğümler için akımlar kanununu yazın.
3. Bağımsız çevreler için gerilimler kanununu, işaret kurallarına uyarak yazın.
4. Bilinmeyen sayısı kadar denklemi çözün.

**Örnek 5 (iki kaynaklı devre).** Devrede üst ve alt olmak üzere iki düğüm, bunları birleştiren üç kol var:

- **Sol kol:** 12 V'luk kaynak ve 2 ohm'luk direnç (kaynağın artı ucu üst düğüme bakıyor)
- **Orta kol:** yalnız 4 ohm'luk direnç
- **Sağ kol:** 6 V'luk kaynak ve 2 ohm'luk direnç (kaynağın artı ucu yine üst düğüme bakıyor)

Sol ve sağ kolda akımın yukarı, orta kolda aşağı aktığını varsayalım: I₁ sol kol, I₂ orta kol, I₃ sağ kol.

- Akımlar kanunu (üst düğüm): I₁ + I₃ = I₂
- Sol çevre (sol kol ve orta kol): 12 − 2 × I₁ − 4 × I₂ = 0
- Sağ çevre (sağ kol ve orta kol): 6 − 2 × I₃ − 4 × I₂ = 0

İkinci denklemden I₁ = 6 − 2 × I₂, üçüncüden I₃ = 3 − 2 × I₂. Bunlar birinciye yazılırsa 9 − 4 × I₂ = I₂, yani **I₂ = 1,8 A**. Buradan **I₁ = 2,4 A** ve **I₃ = −0,6 A** bulunur.

I₃'ün eksi çıkması, sağ koldaki akımın varsaydığımız gibi yukarı değil **aşağı** aktığını gösterir: 0,6 amperlik akım 6 voltluk kaynağa artı ucundan girer. Denetim: sol çevrede 12 − 2 × 2,4 − 4 × 1,8 = 12 − 4,8 − 7,2 = 0. Orta dirence düşen gerilim 4 × 1,8 = 7,2 V'tur.

## Gerçek pil: iç direnç ve uç gerilimi

Şimdiye kadar kaynakları ideal saydık. İdeal bir pil, çektiği akımdan bağımsız olarak uçlarında sabit bir gerilim tutan ve iç direnci olmayan bir EMK kaynağıdır. Gerçek bir pilin ise iç direnci (r) vardır ve uç gerilimi her zaman EMK'sinden küçüktür:[3]

**V(uç) = ε − I × r**

**Örnek 6.** EMK'si 12 V, iç direnci 0,5 ohm olan bir pile 5,5 ohm'luk bir yük bağlanıyor. Toplam direnç 0,5 + 5,5 = 6 ohm, akım 12 / 6 = **2 A**'dir. Uç gerilimi 12 − 2 × 0,5 = **11 V**'tur; bu, yük üzerindeki 2 × 5,5 = 11 V ile aynıdır.

## Ölçme: ampermetre, voltmetre, ohmmetre

YÖK'ün ders tanımı voltmetre, ampermetre ve ohmmetrenin kullanımını ayrıca sayar.[1] Kurallar devre özelliklerinden çıkar:[3]

- **Ampermetre** ölçülen elemana **seri** bağlanır, çünkü seri elemanlardan aynı akım geçer.
- **Voltmetre** ölçülen elemana **paralel** bağlanır, çünkü paralel elemanların uçlarında aynı gerilim vardır. Devreyi etkilememek için voltmetrenin direnci çok büyük olmalıdır.
- **Ohmmetre** direnci Ohm kanununu kullanarak ölçer. Ölçülecek eleman devreden ayrılmalıdır, yoksa devrenin eşdeğer direnci ölçülür. Ohmmetre, içinden akım geçen canlı bir devreye asla bağlanmamalıdır; bu ölçü aletine zarar verebilir.

Akım, gerilim ve direnci ölçen aletlere avometre denir; analog ve dijital tipleri vardır.[4]

## Öğrencilerin sık yaptığı hatalar

Elektrik devreleri, öğrenci anlayışının uzun süredir araştırıldığı konulardan biridir. McDermott ve Shaffer bu araştırmaların program geliştirmeye nasıl rehber olabileceğini gösterdi.[6] Engelhardt ve Beichner'in 29 soruluk tanı testine göre lise ve üniversite öğrencileri, öğretimden sonra bile birden çok kavram yanılgısı taşıyor. Görüşmelerde en sık başvurulan düşünce, **pilin sabit bir akım kaynağı olduğu**ydu. Öğrenciler akıma odaklanıyor ve akımın özelliklerini gerilime ya da dirence yüklüyordu.[7] Türkiye'de 97 on birinci sınıf öğrencisiyle yapılan bir çalışmada da **"akım pilde depo edilir"** yanılgısı belirlendi.[8]

Bu yanılgıların düzeltilmesi yukarıdaki kanunlarda saklıdır:

- **Pil sabit akım vermez.** Pil yaklaşık sabit bir gerilim sağlar; akımı devrenin direnci belirler (I = V / R). Aynı pile daha büyük bir direnç bağlanırsa akım azalır.[3]
- **Akım yolda "tükenmez".** Seri bağlı elemanlardan aynı akım geçer; birinci direnç akımı eksiltmez, gerilimi paylaşır.[3]
- **Akım pilde depolanmaz.** Düğümlerde yük birikmez; akım kapalı devre boyunca dolaşır.[4]
- **Paralele direnç eklemek toplam direnci azaltır.** Yeni bir kol, akım için yeni bir yol açar; eşdeğer direnç en küçük dirençten bile küçüktür.[3]
- **Gerilim bir noktada değil, iki nokta arasında tanımlıdır.** "Direncin gerilimi" demek, direncin iki ucu arasındaki potansiyel fark demektir.[4]

## Alıştırmalar

Alıştırmalar, YÖK ders tanımındaki devre ve ölçme konularını kapsar.[1]

1. 9 voltluk bir pile 3 kΩ'luk bir direnç bağlanıyor. Akım kaç miliamperdir?
2. 220 V'ta 100 W güç harcayan bir lambanın çektiği akımı ve direncini bulunuz.
3. 10 ohm ve 20 ohm seri bağlanıp 12 V'a bağlanıyor. Akımı ve her direncin gerilimini bulunuz.
4. 10, 20 ve 20 ohm'luk üç direnç paralel bağlanıyor. Eşdeğer direnç kaç ohm'dur?
5. 2 ohm'luk bir direnç, birbirine paralel bağlı 3 ohm ve 6 ohm'luk dirençlerle seri bağlanıp 12 V'a bağlanıyor. Kaynak akımını, paralel bölümün gerilimini ve kol akımlarını bulunuz.
6. 1 ohm ile 1000 ohm paralel bağlanıyor. Eşdeğer direnç 1 ohm'dan büyük mü küçük mü? Değerini bulunuz.
7. EMK'si 9 V, iç direnci 1 ohm olan pile 8 ohm'luk yük bağlanıyor. Akımı ve uç gerilimini bulunuz.
8. Bir düğüme 5 A ve 2 A'lık iki akım giriyor, 4 A'lık bir akım çıkıyor. Düğümden çıkan öteki kolun akımı nedir?
9. 24 voltluk kaynağın bulunduğu kapalı bir çevrede üç direnç var; ikisinin üzerinde 8 V ve 10 V düşüyor. Üçüncü dirence kaç volt düşer?
10. Örnek 5'teki devrede sağ kaynağın gerilimi de 12 V olsaydı üç kolun akımları ne olurdu?
11. Bir öğrenci ohmmetreyi devreye bağlı ve pil takılıyken bir dirence değdiriyor. Neden yanlış yapıyor?
12. 100 m uzunluğunda, kesiti 2,5 mm² olan bakır telin direnci kaç ohm'dur?

## Cevaplar

Bütün sonuçlar kesirli tam hesapla denetlenmiştir; kullanılan formüller yukarıdaki bölümlerdedir.[3][4]

1. I = 9 / 3000 = 0,003 A = **3 mA**.
2. I = P / V = 100 / 220 ≈ **0,45 A**; R = V² / P = 48400 / 100 = **484 ohm**.
3. R = 30 ohm, I = 12 / 30 = **0,4 A**; V₁₀ = **4 V**, V₂₀ = **8 V**.
4. 1/R = 1/10 + 1/20 + 1/20 = 0,2; **R = 5 ohm**.
5. Paralel bölüm (3 × 6) / 9 = 2 ohm; toplam 4 ohm; kaynak akımı **3 A**; paralel bölümün gerilimi 3 × 2 = **6 V**; kol akımları 6 / 3 = **2 A** ve 6 / 6 = **1 A**.
6. **Küçüktür:** 1000 / 1001 ≈ **0,999 ohm**. Paralel eşdeğer, en küçük dirençten bile küçüktür.
7. I = 9 / (1 + 8) = **1 A**; uç gerilimi 9 − 1 × 1 = **8 V**.
8. Giren 5 + 2 = 7 A, çıkan 4 A; öteki koldan **3 A** çıkar.
9. 24 − 8 − 10 = **6 V**.
10. Devre simetrik olur: I₁ = I₃ = **1,2 A** (ikisi de yukarı), orta koldan I₂ = **2,4 A**; orta dirence 4 × 2,4 = 9,6 V düşer.
11. Ohmmetre ölçüm için kendi iç akımını kullanır; eleman devreden ayrılmadığı için **devrenin eşdeğer direnci** ölçülür ve **canlı devreye bağlanan ohmmetre zarar görebilir.**
12. R = 1,68 × 10⁻⁸ × 100 / (2,5 × 10⁻⁶) = **0,672 ohm**.

Mantık kapıları, sayı sistemleri ve sayıcılar gibi sayısal konular için [Elektronik Devre Elemanları dersi](https://bote.web.tr/blog/elektronik-devre-elemanlari) rehberine ve [mantık kapıları ve Boole cebiri](https://bote.web.tr/blog/mantik-kapilari-ve-boole-cebiri) yazısına bakabilirsiniz.

## Terim tablosu

| Türkçe | İngilizce | Diğer kullanımlar |
|---|---|---|
| Ohm kanunu | Ohm's law | Ohm yasası |
| Kirchhoff'un akımlar kanunu | Kirchhoff's junction rule, current law | Düğüm kuralı, Kirchhoff'un birinci kanunu |
| Kirchhoff'un gerilimler kanunu | Kirchhoff's loop rule, voltage law | Çevre kuralı, Kirchhoff'un ikinci kanunu |
| Elektromotor kuvvet | Electromotive force (emf) | EMK |
| Uç gerilimi | Terminal voltage | |
| İç direnç | Internal resistance | |
| Eşdeğer direnç | Equivalent resistance | Eş değer direnç, toplam direnç |
| Özdirenç | Resistivity | |
| Omik eleman | Ohmic component | |
| Düğüm | Junction, node | Düğüm noktası |
| Gerilim düşümü | Potential drop | |

Türkçe kanun adları, EMK, eş değer direnç, düğüm noktası ve gerilim düşümü MEB modülünden; İngilizce karşılıklar OpenStax'ten alınmıştır.[4][3]

## Sonuç

Doğru akım devrelerindeki soruların neredeyse tamamı birkaç ilkeyle çözülür: Ohm kanunu, güç formülleri, seri ve paralel bağlantının özellikleri ve Kirchhoff'un iki kanunu.[3][4] Seri devrede akım ortaktır ve gerilim bölünür. Paralel devrede gerilim ortaktır ve akım bölünür. Seri ve paralel parçalara ayrılamayan devreler düğüm ve çevre denklemleriyle çözülür.[3] Öğrencilerin en sık yanıldığı noktalar, pili sabit akım kaynağı sanmak ve akımı depolanan ya da tükenen bir şey gibi düşünmektir.[7][8] Her sonucu bir kanunla (akımlar toplamı, gerilimler toplamı ya da güç dengesi) denetlemek, hem bu yanılgılardan hem de hesap hatalarından korur.

## Sık Sorulan Sorular

### Ohm kanunu nedir?

Ohm kanunu, bir iletkenden geçen akımın uçlarına uygulanan gerilimle doğru orantılı olduğunu söyler: V = I × R. Burada V volt cinsinden gerilim, I amper cinsinden akım, R ohm cinsinden dirençtir. Georg Simon Ohm bu ilişkiyi 1827'de deneyle gösterdi. Ohm kanunu her malzemede geçerli değildir; ona uyan elemanlara omik, uymayanlara omik olmayan elemanlar denir.

### Ohm kanunu formülü nedir?

Ohm kanununun formülü V = I × R'dir; buradan akım I = V / R, direnç R = V / I olarak bulunur. V volt, I amper, R ohm cinsindendir. Güç de bu formülle birleştirilerek P = V × I = I² × R = V² / R biçiminde hesaplanır. Örneğin 4 ohm'luk dirence 12 volt uygulanırsa akım 3 amper, güç 36 watt olur.

### Kirchhoff kanunları nelerdir?

Kirchhoff'un iki kanunu vardır. Akımlar kanunu: bir düğüm noktasına gelen akımların toplamı, giden akımların toplamına eşittir; bu, yükün düğümde birikmemesinin sonucudur. Gerilimler kanunu: kapalı bir devre yolu boyunca gerilim değişimlerinin cebirsel toplamı sıfırdır; başka bir deyişle kaynakların gerilimleri toplamı, yükler üzerinde düşen gerilimlerin toplamına eşittir.

### Seri ve paralel devre arasındaki fark nedir?

Seri devrede elemanlar arka arkaya bağlanır ve akımın izleyebileceği tek bir yol vardır; bu yüzden bütün elemanlardan aynı akım geçer ve kaynak gerilimi elemanlar arasında bölünür. Paralel devrede elemanların iki ucu ortak noktalara bağlanır; bütün elemanların uçlarında aynı gerilim bulunur ve akım kollara bölünür. Seri eşdeğer direnç dirençlerin toplamıdır; paralel eşdeğer direnç ise en küçük dirençten bile küçüktür.

### Paralel bağlı iki direncin eşdeğeri nasıl bulunur?

İki direnç için kısa yol çarpımın toplama bölümüdür: R = (R₁ × R₂) / (R₁ + R₂). Örneğin 6 ohm ile 3 ohm paralel bağlanırsa eşdeğer direnç 18 / 9 = 2 ohm olur. Üç ve daha fazla direnç için 1/R = 1/R₁ + 1/R₂ + 1/R₃ + ... formülü kullanılır.

### Ampermetre ve voltmetre devreye nasıl bağlanır?

Ampermetre, akımını ölçeceği elemana seri bağlanır, çünkü seri elemanlardan aynı akım geçer. Voltmetre, gerilimini ölçeceği elemana paralel bağlanır, çünkü paralel elemanların uçlarında aynı gerilim bulunur. Ohmmetre ile ölçüm yapılırken eleman devreden ayrılmalı ve ohmmetre içinden akım geçen bir devreye bağlanmamalıdır.

## Kaynaklar

1. Yükseköğretim Kurulu (2018). Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programı. YÖK, Öğretmen Yetiştirme Lisans Programları. https://egitim.yok.gov.tr/tr/document/2432 (TR, erişim: 2026-09-28)
2. Hacettepe Üniversitesi (2024). BTE114 Elektronik Devre Elemanları ders bilgi paketi (Bilgisayar ve Öğretim Teknolojileri Öğretmenliği). Hacettepe Üniversitesi Bologna Bilgi Sistemi. https://bilsis.hacettepe.edu.tr/oibs/bologna/progCourseDetails.aspx?curCourse=78042&lang=tr (TR, erişim: 2026-09-28)
3. Ling, S. J., Sanny, J. ve Moebs, W. (2016). University Physics, Volume 2. OpenStax (açık erişimli ders kitabı). https://openstax.org/details/books/university-physics-volume-2 (EN, erişim: 2026-09-28)
4. Millî Eğitim Bakanlığı (2011). Endüstriyel otomasyon teknolojileri: Doğru akım devreleri (522EE0159). MEB, Mesleki Eğitim ve Öğretim Sisteminin Güçlendirilmesi Projesi (MEGEP) modülü, Ankara. https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Do%C4%9Fru%20Ak%C4%B1m%20Devreleri.pdf (TR, erişim: 2026-09-28)
5. Ohm, G. S. (1827). Die galvanische Kette, mathematisch bearbeitet. T. H. Riemann, Berlin (Internet Archive sayısal kopyası). https://archive.org/details/diegalvanischeke00ohmg (DE, erişim: 2026-09-28)
6. McDermott, L. C. ve Shaffer, P. S. (1992). Research as a guide for curriculum development: An example from introductory electricity. Part I: Investigation of student understanding. American Journal of Physics, 60(11), 994–1003. https://doi.org/10.1119/1.17003 (EN, erişim: 2026-09-28)
7. Engelhardt, P. V. ve Beichner, R. J. (2004). Students' understanding of direct current resistive electrical circuits. American Journal of Physics, 72(1), 98–115. https://doi.org/10.1119/1.1614813 (EN, erişim: 2026-09-28)
8. Aykutlu, I. ve Şen, A. İ. (2012). Üç aşamalı test, kavram haritası ve analoji kullanılarak lise öğrencilerinin elektrik akımı konusundaki kavram yanılgılarının belirlenmesi. Eğitim ve Bilim, 37(166), 275–288. https://doi.org/10.15390/es.2012.1094 (TR, erişim: 2026-09-28)
