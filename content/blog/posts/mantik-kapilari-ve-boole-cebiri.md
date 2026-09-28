---
title: "Mantık Kapıları ve Boole Cebiri: Konu Anlatımı, Örnekler"
citeTitle: "Mantık kapıları ve Boole cebiri: Konu anlatımı, örnekler"
description: "Mantık kapıları ve Boole cebiri konu anlatımı: yedi kapının doğruluk tabloları, Boole kuralları, De Morgan teoremleri, minterm ve maxterm, çözümlü örnekler."
date: 2026-09-28
category: bolum-rehberi
type: rehber
tags: [mantık kapıları, lojik kapılar, boole cebiri, boolean matematiği, de morgan teoremi, doğruluk tablosu, minterm, maxterm, nand, özel veya, elektronik devre elemanları]
summary:
  - "Boole cebirinde değişkenler yalnız 0 ve 1 değerini alır. Üç temel işlem VE (·), VEYA (+) ve DEĞİL (') işlemleridir; sıradan cebirden ayrılan kural **1 + 1 = 1**'dir."
  - "Yedi temel kapı vardır: VE, VEYA, DEĞİL, VE DEĞİL (NAND), VEYA DEĞİL (NOR), ÖZEL VEYA (XOR) ve ÖZEL VEYA DEĞİL (XNOR). Her biri bir doğruluk tablosuyla tanımlanır."
  - "Her Boole kuralının bir **eşi (düali)** vardır: + ile · ve 0 ile 1 yer değiştirince eş kural çıkar. Bir kuralı kanıtlamak ikisini birden kanıtlar."
  - "**De Morgan:** (A · B)' = A' + B' ve (A + B)' = A' · B'. Bir ifadenin değili, her değişken değillenip + ile · yer değiştirilerek bulunur."
  - "Her doğruluk tablosu mintermlerin toplamı ya da maxtermlerin çarpımı olarak yazılabilir. VE DEĞİL ya da VEYA DEĞİL kapısı tek başına her devreyi kurmaya yeter."
faq:
  - q: "Mantık kapıları nelerdir?"
    a: "Temel mantık kapıları VE (AND), VEYA (OR), DEĞİL (NOT), VE DEĞİL (NAND), VEYA DEĞİL (NOR), ÖZEL VEYA (XOR) ve ÖZEL VEYA DEĞİL (XNOR) kapılarıdır. VE kapısı bütün girişler 1 ise 1, VEYA kapısı en az bir giriş 1 ise 1, DEĞİL kapısı girişin tersini verir. VE DEĞİL ve VEYA DEĞİL bu kapıların değilidir. ÖZEL VEYA iki giriş farklı olduğunda 1, ÖZEL VEYA DEĞİL ise girişler aynı olduğunda 1 verir."
  - q: "Boole cebiri nedir?"
    a: "Boole cebiri, değişkenlerin yalnız 0 ve 1 değerini aldığı, VE, VEYA ve DEĞİL işlemleriyle çalışan bir cebirdir. Adını 1854'te mantığın yasalarını cebirsel sembollerle yazan George Boole'dan alır. Claude Shannon bu cebirin röle ve anahtar devrelerine birebir uyduğunu gösterdi; bugün sayısal devrelerin çözümlenmesinde ve tasarımında kullanılır."
  - q: "De Morgan teoremi nedir?"
    a: "De Morgan teoremi bir çarpımın ya da toplamın değilini verir: (A · B)' = A' + B' ve (A + B)' = A' · B'. Kısaca, değil çizgisi kırılırken işlem değişir: VE, VEYA'ya; VEYA, VE'ye dönüşür. Teorem ikiden fazla değişken için de geçerlidir: (A + B + C)' = A' · B' · C'."
  - q: "Boole cebiri kuralları nelerdir?"
    a: "Başlıca kurallar şunlardır: A + 0 = A, A · 1 = A; A + 1 = 1, A · 0 = 0; A + A = A, A · A = A; A + A' = 1, A · A' = 0; (A')' = A; yer değiştirme, birleşme ve dağılma kuralları; yutma kuralları A + AB = A ve A(A + B) = A; A + A'B = A + B ve De Morgan teoremleri. Dağılmanın ikinci biçimi olan A + BC = (A + B)(A + C) sıradan cebirde geçerli değildir."
  - q: "Minterm ve maxterm nedir?"
    a: "Minterm, bütün değişkenlerin düz ya da değilli olarak çarpıldığı ve doğruluk tablosunun yalnız bir satırında 1 olan terimdir. Maxterm ise bütün değişkenlerin toplandığı ve yalnız bir satırda 0 olan terimdir. Bir fonksiyon, 1 olduğu satırların mintermlerinin toplamı (Σm) ya da 0 olduğu satırların maxtermlerinin çarpımı (ΠM) olarak yazılabilir."
  - q: "Neden VE DEĞİL (NAND) kapısına evrensel kapı denir?"
    a: "Çünkü yalnız VE DEĞİL kapılarıyla DEĞİL, VE ve VEYA işlemlerinin hepsi kurulabilir: A'nın değili (A · A)', A · B ise VE DEĞİL çıkışının bir kez daha değillenmesiyle, A + B ise De Morgan gereği (A' · B')' olarak elde edilir. Bu üç işlemle her Boole fonksiyonu yazılabildiği için VE DEĞİL tek başına her devreyi kurmaya yeter. Aynısı VEYA DEĞİL (NOR) için de geçerlidir."
changes:
  - date: 2026-09-28
    text: "Yayımlandı. Boole (1854) ve Shannon (1940) tam metinden; Türkçe terimler, kurallar ve bir örnek MEB'in Temel Mantık Devreleri modülünden (2012); ders kapsamı YÖK 2018 programından ve örnek izlenceden. Bütün örnekler ve alıştırma cevapları doğruluk tablosuyla denetlendi."
sources:
  - id: boole1854
    kind: kitap
    author: "Boole, G."
    title: "An investigation of the laws of thought, on which are founded the mathematical theories of logic and probabilities"
    publisher: "Walton and Maberly, Londra (Project Gutenberg sayısal baskısı)"
    year: 1854
    url: "https://www.gutenberg.org/ebooks/15114"
    lang: en
    accessed: 2026-09-28
    note: "Bölüm II, madde 9: aynı anlamdaki iki sembolün birleşimi xx = x, yani x² = x; sembollerin ikinci genel yasası. Tam metin."
  - id: shannon1940
    kind: tez
    author: "Shannon, C. E."
    title: "A symbolic analysis of relay and switching circuits"
    publisher: "Yüksek lisans tezi, Massachusetts Institute of Technology"
    year: 1940
    url: "https://hdl.handle.net/1721.1/11173"
    lang: en
    accessed: 2026-09-28
    note: "Engel (hinderance) gösterimi: 0 kapalı devre, 1 açık devre, + seri, · paralel bağlantı; postulatlar eşler hâlinde (düalite), sıradan cebirden ayrılan tek postulat 1 + 1 = 1 (s. 6); kanıt yöntemi tam tümevarım (s. 7); De Morgan teoremi (s. 10); önermeler hesabıyla tam benzerlik; açılım teoremi ve tam açılım (s. 12-13, denklem 10-12); genelleştirilmiş De Morgan (s. 13-14, denklem 13). Aynı çalışma 1938'de Transactions of the AIEE 57(12), 713-723'te yayımlandı. Tam metin."
  - id: meb2012
    kind: resmi
    author: "Millî Eğitim Bakanlığı"
    title: "Elektrik-elektronik teknolojisi: Temel mantık devreleri (522EE0245)"
    publisher: "MEB, Mesleki Eğitim ve Öğretim Sisteminin Güçlendirilmesi Projesi (MEGEP) modülü, Ankara"
    year: 2012
    url: "https://megep.meb.gov.tr/mte_program_modul/moduller_pdf/Temel%20Mant%C4%B1k%20Devreleri.pdf"
    lang: tr
    accessed: 2026-09-28
    note: "Türkçe kapı adları TAMPON, VE, VEYA, DEĞİL, VEDEĞİL, VEYADEĞİL, ÖZELVEYA, ÖZELVEYA DEĞİL; 1 YÜKSEK, 0 ALÇAK gerilim; Boolean toplama ve çarpma kuralları; yer değiştirme, birleşme, dağılma kanunları; yutma kuralı; De Morgan teoremleri ve çok değişkenli biçimleri; A(AB + C) örneği (s. 47-52). Tam metin."
  - id: yok2018
    kind: resmi
    author: "Yükseköğretim Kurulu"
    title: "Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programı"
    publisher: "YÖK, Öğretmen Yetiştirme Lisans Programları"
    year: 2018
    url: "https://egitim.yok.gov.tr/tr/document/2432"
    lang: tr
    accessed: 2026-09-28
    note: "Elektronik Devre Elemanları ders tanımı: sayı sistemleri, mantıksal kapı devreleri, Boolean matematiği (Boolean kanunu, De Morgan teoremi, Karnaugh haritası). Tam metin."
  - id: hacettepe2024
    kind: resmi
    author: "Hacettepe Üniversitesi"
    title: "BTE114 Elektronik Devre Elemanları ders bilgi paketi (Bilgisayar ve Öğretim Teknolojileri Öğretmenliği)"
    publisher: "Hacettepe Üniversitesi Bologna Bilgi Sistemi"
    year: 2024
    url: "https://bilsis.hacettepe.edu.tr/oibs/bologna/progCourseDetails.aspx?curCourse=78042&lang=tr"
    lang: tr
    accessed: 2026-09-28
    note: "4. hafta Boole teoremleri ve yedi mantık kapısı; 5. hafta uygulamalar; 6. hafta minterm ve maxterm; öğrenme çıktısı 2 ve 3: Boole cebiriyle işlem ve sadeleştirme, kapılı devreleri çözümleme ve tasarlama. Tam metin."
  - id: herman2012
    kind: makale
    author: "Herman, G. L., Loui, M. C., Kaczmarczyk, L. ve Zilles, C."
    title: "Describing the what and why of students' difficulties in Boolean logic"
    publisher: "ACM Transactions on Computing Education, 12(1), 1–28"
    year: 2012
    url: "https://doi.org/10.1145/2133797.2133800"
    lang: en
    accessed: 2026-09-28
    note: "Sayısal mantık tasarımı dersini yeni bitirmiş öğrencilerle görüşmeler; önermeler mantığında ve İngilizce koşulları Boole ifadelerine çevirmede yaygın yanılgılar. Özgün özetten."
  - id: herman2010
    kind: bildiri
    author: "Herman, G. L., Loui, M. C. ve Zilles, C."
    title: "Creating the digital logic concept inventory"
    publisher: "Proceedings of the 41st ACM Technical Symposium on Computer Science Education (SIGCSE '10), 102–106"
    year: 2010
    url: "https://doi.org/10.1145/1734263.1734298"
    lang: en
    accessed: 2026-09-28
    note: "Kavram envanteri: öğrencinin kavramsal çerçevesinin disiplinin kabul görmüş çerçevesiyle ne kadar örtüştüğünü ölçen standart araç; sayısal mantık için geliştirilmesi ve geçerlik-güvenirlik denetimi. Özgün özetten."
  - id: herman2014
    kind: makale
    author: "Herman, G. L., Zilles, C. ve Loui, M. C."
    title: "A psychometric evaluation of the digital logic concept inventory"
    publisher: "Computer Science Education, 24(4), 277–303"
    year: 2014
    url: "https://doi.org/10.1080/08993408.2014.970781"
    lang: en
    accessed: 2026-09-28
    note: "Sayısal Mantık Kavram Envanteri (DLCI) bütün olarak ve ders sonu ölçümü olarak araştırma amaçlı kullanım için yeterince güvenilir; geniş bir yetenek aralığında ayırt edici, en çok zayıf öğrenciler hakkında bilgi veriyor. Özgün özetten."
  - id: balci2019
    kind: makale
    author: "Balcı, B., Çiloğlugil, B. ve İnceoğlu, M. M."
    title: "Mantık tasarımı dersi için açık uçlu sorulardan oluşan bir ölçme aracı geliştirilmesi: Geçerlik ve güvenirlik çalışması"
    publisher: "Manisa Celal Bayar Üniversitesi Sosyal Bilimler Dergisi, 17(3), 66–95"
    year: 2019
    url: "https://doi.org/10.18026/cbayarsos.485525"
    lang: tr
    accessed: 2026-09-28
    note: "Üç üniversitenin mantık tasarımı derslerindeki ortak kazanımlardan 15 açık uçlu soruluk ölçme aracı; kapsam geçerlik oranı 0,84; 88 öğrenci; rubrikle puanlama. Özgün özetten."
---

Bu yazı, [Elektronik Devre Elemanları dersi](/blog/elektronik-devre-elemanlari) rehberinin ilk derin yazısıdır ve dersin sayısal yarısının çekirdeğini ele alır: mantık kapılarını ve Boole cebirini. Amaç, bu konudan gelebilecek her soruyu kâğıt kalemle çözebilmenizdir. Yazının sonunda cevaplı alıştırmalar var; önce anlatımı okuyun, sonra alıştırmaları cevaplara bakmadan çözün.

## Boole cebiri nedir?

Boole cebiri, değişkenlerin yalnız iki değer aldığı bir cebirdir: **0 ve 1**. Sayısal devrelerde 1 yüksek gerilim düzeyini, 0 alçak gerilim düzeyini gösterir.[@meb2012] Ders bu cebiri YÖK'ün tanımıyla "Boolean matematiği" adıyla ve De Morgan teoremi ile Karnaugh haritasıyla birlikte kapsar.[@yok2018] Örnek bir izlencede dördüncü hafta Boole teoremlerine ve mantık kapılarına, beşinci hafta bunlarla uygulamalara ayrılır.[@hacettepe2024]

Cebirin adı George Boole'dan gelir. Boole 1854'te yayımladığı kitabında mantığın yasalarını cebirsel sembollerle yazdı. Kitaptaki yasalardan biri, aynı anlamdaki iki sembolün birleşiminin sembolün kendisine eşit olmasıdır: xx = x, kısaca x² = x.[@boole1854] Sıradan cebirde bu eşitlik yalnız 0 ve 1 için doğrudur; Boole cebirinde ise değişkenler zaten yalnız bu iki değeri aldığı için her zaman doğrudur.

Bu cebirin devrelere taşınması Claude Shannon'la oldu. Shannon, röle ve anahtar devrelerini denklemlerle gösterdi. Geliştirdiği hesabın, Boole'un mantık cebirine dayanan önermeler hesabının tam karşılığı olduğunu gösterdi.[@shannon1940] Bu yüzden bir mantık kuralı aynı zamanda bir devre kuralıdır.

**Üç temel işlem** vardır:[@meb2012]

- **VE (çarpma, ·):** 0 · 0 = 0, 0 · 1 = 0, 1 · 0 = 0, 1 · 1 = 1. Sonuç yalnız iki giriş de 1 ise 1'dir.
- **VEYA (toplama, +):** 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 1. Sonuç en az bir giriş 1 ise 1'dir.
- **DEĞİL (tümleyen, '):** 0' = 1, 1' = 0. Bu yazıda değil işareti olarak kesme (A') kullanılıyor; ders kitaplarında aynı işlem harfin üstüne çizilen bir çizgiyle de gösterilir.

Dikkat: **1 + 1 = 1**'dir, 2 değil. Shannon da postulatları sıralarken sıradan cebirden ayrılan tek postulatın bu olduğunu vurgular.[@shannon1940] Boole toplaması sayı toplaması değil, "en az biri doğru mu?" sorusudur.

## Mantık kapıları ve doğruluk tabloları

Boole işlemleri devrede **mantık kapılarıyla** gerçekleştirilir. MEB'in modülündeki Türkçe adlarıyla temel kapılar şunlardır: TAMPON, VE, VEYA, DEĞİL, VEDEĞİL, VEYADEĞİL, ÖZELVEYA ve ÖZELVEYA DEĞİL.[@meb2012] Örnek izlencede tamponun dışındaki yedi kapı işlenir.[@hacettepe2024] DEĞİL kapısının tek girişi vardır ve girişin tersini verir. İki girişli kapıların doğruluk tablosu şöyledir:

| A | B | VE (A · B) | VEYA (A + B) | VE DEĞİL (A · B)' | VEYA DEĞİL (A + B)' | ÖZEL VEYA (A ⊕ B) | ÖZEL VEYA DEĞİL (A ⊕ B)' |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

Tabloyu ezberlemek yerine kuralı akılda tutmak daha güvenlidir:

- **VE:** bütün girişler 1 ise 1. **VE DEĞİL:** bütün girişler 1 ise 0, aksi hâlde 1.
- **VEYA:** en az bir giriş 1 ise 1. **VEYA DEĞİL:** bütün girişler 0 ise 1, aksi hâlde 0.
- **ÖZEL VEYA:** girişler farklıysa 1. İfadesi A ⊕ B = A'B + AB'.
- **ÖZEL VEYA DEĞİL:** girişler aynıysa 1. İfadesi (A ⊕ B)' = A'B' + AB. Bu yüzden eşitlik kapısı olarak da düşünülebilir.

Üç ve daha çok girişli ÖZEL VEYA'yı iki girişlilerin art arda bağlanması olarak düşünün: A ⊕ B ⊕ C. Bu ifade, girişlerdeki 1'lerin sayısı **tek** olduğunda 1 verir. Örneğin 1 ⊕ 1 ⊕ 1 = 0 ⊕ 1 = 1'dir.

Kapıların anahtarlarla ilişkisini de bilmek işe yarar. Kapalı anahtar 1, açık anahtar 0 sayılırsa, iki anahtarın **seri** bağlandığı bir yoldan akım ancak ikisi de kapalıysa geçer: bu VE'dir. **Paralel** bağlantıda ise anahtarlardan biri kapalıysa akım geçer: bu VEYA'dır. Shannon, 1 ve 0'ı bunun tersine atayan bir gösterim kullandı. Onun "engel" gösteriminde 0 kapalı, 1 açık devredir; toplama seri, çarpma paralel bağlantıdır.[@shannon1940] İki gösterim birbirinin eşidir, yani aynı cebirin iki okunuşudur.

## Boole cebirinin kuralları

Aşağıdaki tablo temel kuralları eş çiftler hâlinde veriyor. Yer değiştirme, birleşme ve dağılma kanunu ile yutma kuralı adları MEB'in modülünden alınmıştır.[@meb2012][@shannon1940]

| Kural | VEYA biçimi | VE biçimi |
|---|---|---|
| Etkisiz eleman | A + 0 = A | A · 1 = A |
| Yutan eleman | A + 1 = 1 | A · 0 = 0 |
| Aynı kuvvet | A + A = A | A · A = A |
| Tümleyen | A + A' = 1 | A · A' = 0 |
| Çift değil | (A')' = A | (A')' = A |
| Yer değiştirme | A + B = B + A | A · B = B · A |
| Birleşme | (A + B) + C = A + (B + C) | (A · B) · C = A · (B · C) |
| Dağılma | A + B · C = (A + B) · (A + C) | A · (B + C) = A · B + A · C |
| Yutma | A + A · B = A | A · (A + B) = A |
| Gereksiz değil | A + A' · B = A + B | A · (A' + B) = A · B |
| De Morgan | (A + B)' = A' · B' | (A · B)' = A' + B' |

İki kurala özellikle dikkat edin. **Dağılmanın VEYA biçimi**, A + BC = (A + B)(A + C), sıradan cebirde yanlıştır ama Boole cebirinde doğrudur. **Aynı kuvvet** kuralı, Boole'un x² = x yasasıdır.[@boole1854]

**Düalite ilkesi.** Tablodaki her satırın iki sütunu birbirinin eşidir. Bir kuralda + ile · ve 0 ile 1 yer değiştirilirse eş kural çıkar. Shannon, postulatları tam da bu yüzden eşler hâlinde sıraladı: böylece her teoremin bir eşi olur ve birini kanıtlamak ikisini birden kanıtlar.[@shannon1940]

**Tam tümevarımla kanıt.** Değişkenler yalnız 0 ve 1 olduğu için bir kuralı kanıtlamanın en güvenilir yolu, bütün durumları tek tek denemektir. Shannon bu yönteme tam tümevarım (perfect induction) der ve çok genel olduğu için tercih edilmesi gerektiğini yazar.[@shannon1940] Örnek olarak A + A'B = A + B kuralını kanıtlayalım:

| A | B | A' | A'B | A + A'B | A + B |
|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 1 | 1 | 0 | 0 | 1 | 1 |

Son iki sütun her satırda aynı olduğu için iki ifade eşittir. Bu yöntem her kural için işler; "kanıtlayınız" diye sorulan bir eşitliği böyle bir tabloyla göstermek, bütün durumları denediğiniz için tam bir kanıttır.[@shannon1940]

## De Morgan teoremleri

De Morgan teoremleri bir toplamın ya da çarpımın değilini verir:[@meb2012]

- (A + B)' = A' · B'
- (A · B)' = A' + B'

Akılda tutmanın kısa yolu: **değil çizgisi kırılırken işlem değişir.** VEYA'nın değili, değillerin VE'sidir; VE'nin değili, değillerin VEYA'sıdır. Teorem ikiden fazla değişken için de geçerlidir: (A + B + C)' = A' · B' · C' ve (A · B · C)' = A' + B' + C'.[@meb2012] Shannon, teoremin iki terim için bütün değerler denenerek doğrulanabileceğini ve tümevarımla n değişkene genişletilebileceğini belirtir.[@shannon1940]

Shannon teoremi daha da genelleştirir: **bir fonksiyonun değili, her değişkeni değillenip + ile · yer değiştirilerek bulunur.** Parantezler yerinde kalır.[@shannon1940] Örnek:

- F = AB + C ise F' = (A' + B') · C'
- F = A(B + C') ise F' = A' + B'C

İkinci örneği adım adım da doğrulayabilirsiniz: [A(B + C')]' = A' + (B + C')' = A' + B' · C.

**En sık hata:** (A + B)' ifadesini A' + B' diye yazmak. Bu yanlıştır; A = 1, B = 0 için (1 + 0)' = 0 olur, oysa 1' + 0' = 0 + 1 = 1'dir. Bir kuraldan şüphe ettiğinizde tek bir satır denemek hatayı yakalamaya yeter.

## Çözümlü sadeleştirme örnekleri

Sadeleştirme, aynı işi daha az kapıyla yapan ifadeyi bulmaktır. İzlencenin öğrenme çıktılarından biri Boole cebiriyle mantık ifadeleri üzerinde işlem yapıp bunları sadeleştirebilmektir.[@hacettepe2024] Her adımda hangi kuralı kullandığınızı yazmak, açık uçlu sorularda puanı kurtarır.

**Örnek 1.** F = A'B + AB + AB'

- A'B + AB = B(A' + A) = B · 1 = B (dağılma, tümleyen, etkisiz eleman)
- F = B + AB' = B + B'A = B + A (gereksiz değil kuralı)
- **Sonuç: F = A + B**

**Örnek 2.** F = (A + B)(A + B')

- Dağılmanın VEYA biçimiyle: (A + B)(A + B') = A + B · B' = A + 0 = A
- **Sonuç: F = A**

**Örnek 3.** F = A(AB + C). MEB modülündeki örnek:[@meb2012]

- A · A · B + A · C = AB + AC (dağılma, aynı kuvvet)
- **Sonuç: F = AB + AC = A(B + C)**

**Örnek 4.** F = XY + X'Z + YZ. Bu örnekte bir terim tümüyle gereksizdir.

- YZ = YZ(X + X') = XYZ + X'YZ
- F = XY + XYZ + X'Z + X'YZ
- XY + XYZ = XY ve X'Z + X'YZ = X'Z (yutma)
- **Sonuç: F = XY + X'Z**

Bu son örnekteki kalıba **uzlaşı (konsensüs)** kuralı denir: XY + X'Z + YZ = XY + X'Z. Birinde X, ötekinde X' bulunan iki terim varsa, geri kalan harflerin çarpımı olan terim (burada YZ) silinebilir.

## Doğruluk tablosundan ifadeye: minterm ve maxterm

Sınavlarda sık gelen bir soru türü şudur: doğruluk tablosu verilir, ifade istenir. Bunun genel bir yolu vardır. Shannon, her fonksiyonun bir değişkene göre açılabileceğini gösterdi: F = A · F(A = 1) + A' · F(A = 0). Bu açılım bütün değişkenlere uygulanınca fonksiyon, değişkenlerin düz ya da değilli bütün çarpımlarının toplamına dönüşür. Her çarpımın katsayısı, fonksiyonun o çarpım 1 iken aldığı değerdir.[@shannon1940] Bugün bu çarpımlara **minterm** denir. Minterm ve maxterm ifadeler izlencenin altıncı haftasının konusudur.[@hacettepe2024]

- **Minterm (mᵢ):** bütün değişkenlerin çarpımıdır. Satırda 0 olan değişken değilli, 1 olan düz yazılır. Minterm yalnız kendi satırında 1'dir. Örneğin A = 0, B = 1, C = 1 satırı (onluk 3) için m₃ = A'BC.
- **Maxterm (Mᵢ):** bütün değişkenlerin toplamıdır. Satırda 1 olan değişken değilli, 0 olan düz yazılır. Maxterm yalnız kendi satırında 0'dır. Örneğin 3 numaralı satır için M₃ = A + B' + C'.
- **Mintermlerin toplamı (Σm):** fonksiyon, 1 olduğu satırların mintermlerinin toplamıdır. **Maxtermlerin çarpımı (ΠM):** fonksiyon, 0 olduğu satırların maxtermlerinin çarpımıdır. Shannon ikinci biçimi de aynı açılımın eşi olarak verir.[@shannon1940]

**Örnek: çoğunluk fonksiyonu.** Üç girişten en az ikisi 1 olduğunda 1 veren fonksiyonu yazalım.

| Satır | A | B | C | F |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 |
| 2 | 0 | 1 | 0 | 0 |
| 3 | 0 | 1 | 1 | 1 |
| 4 | 1 | 0 | 0 | 0 |
| 5 | 1 | 0 | 1 | 1 |
| 6 | 1 | 1 | 0 | 1 |
| 7 | 1 | 1 | 1 | 1 |

- Minterm toplamı: F = Σm(3, 5, 6, 7) = A'BC + AB'C + ABC' + ABC
- Maxterm çarpımı: F = ΠM(0, 1, 2, 4) = (A + B + C)(A + B + C')(A + B' + C)(A' + B + C)
- Sadeleştirme: ABC terimini aynı kuvvet kuralıyla (ABC = ABC + ABC + ABC) üç kez kullanalım. A'BC + ABC = BC, AB'C + ABC = AC, ABC' + ABC = AB. **Sonuç: F = AB + AC + BC**

Aynı sadeleştirme Karnaugh haritasıyla çok daha hızlı yapılır. Harita yöntemi rehberin ayrı bir yazısında ele alınıyor.

## İfadeden devreye, devreden ifadeye

**İfadeden devreye.** F = A'B + AC ifadesini kurmak için bir DEĞİL kapısı (A'), iki iki girişli VE kapısı (A'B ve AC) ve bir iki girişli VEYA kapısı gerekir. Çizimde soldan sağa ilerleyin: önce değiller, sonra çarpımlar, en sonda toplam.

**Devreden ifadeye.** Devreyi girişten çıkışa doğru izleyip her kapının çıkışına ifadesini yazın. Örneğin A ve B bir VE DEĞİL kapısına, bu kapının çıkışı ile C bir VEYA kapısına giriyorsa çıkış F = (AB)' + C olur. De Morgan'la bu, F = A' + B' + C biçimine de getirilebilir.

MEB'in modülü bu iki beceriyi ayrı başlıklar altında çalıştırır: Boole ifadesinden devre çizmek ve devreden Boole ifadesi çıkarmak.[@meb2012]

## Evrensel kapılar: yalnız VE DEĞİL ile her devre

VE DEĞİL kapısı tek başına bütün Boole işlemlerini kurmaya yeter. Kanıtı De Morgan teoremine dayanır:[@meb2012][@shannon1940]

- **DEĞİL:** A'yı iki girişine birden veren VE DEĞİL kapısı (A · A)' = A' verir.
- **VE:** VE DEĞİL kapısının çıkışını bir VE DEĞİL tersleyiciden daha geçirirsek ((AB)')' = AB elde ederiz.
- **VEYA:** Girişleri önce terslersek (A' · B')' = A + B elde ederiz (De Morgan).

DEĞİL, VE ve VEYA ile her fonksiyon yazılabildiği için VE DEĞİL kapısı her devreyi kurabilir. Aynısı VEYA DEĞİL için de geçerlidir: (A + A)' = A', ((A + B)')' = A + B ve (A' + B')' = AB.

İki düzeyli toplam-çarpım ifadeleri doğrudan VE DEĞİL devresine dönüşür. Örneğin F = AB + CD için De Morgan'ı iki kez uygularsak F = ((AB)' · (CD)')' buluruz. Bu ifade, iki VE DEĞİL kapısının çıkışlarının üçüncü bir VE DEĞİL kapısına girmesiyle kurulur.

## Sözel bir koşulu Boole ifadesine çevirmek

Sayısal mantık dersini yeni bitirmiş öğrencilerle yapılan görüşmeler, öğrencilerin önermeler mantığını anlamada ve sözle verilen bir koşulu Boole ifadesine çevirmede yaygın yanılgılar taşıdığını gösterdi.[@herman2012] Bu çeviri, sadeleştirmeden ayrı bir beceridir ve ayrıca çalışılmalıdır. Yol şudur: önce her koşula bir harf verin ve 1'in neyi anlattığını yazın; sonra "ve", "veya", "değil" sözcüklerini işlemlere çevirin.

- **"Kapı açıksa ve alarm kurulu değilse ışık yansın."** K = 1 kapı açık, A = 1 alarm kurulu olsun. L = K · A'.
- **"Üç hakemden en az ikisi evet derse sporcu geçsin."** Bu, yukarıdaki çoğunluk fonksiyonudur: G = AB + AC + BC.
- **"İki anahtardan yalnız biri kapalıysa lamba yansın."** "Yalnız biri" ikisinin birden kapalı olmasını dışarıda bırakır: L = A ⊕ B.
- **"Kasa, müdürlerden biri ile kasiyer birlikte anahtar çevirdiğinde açılsın."** M₁ ve M₂ müdürler, K kasiyer: F = K · (M₁ + M₂).

Gündelik dildeki "ya ... ya ..." çoğu zaman ikisinden yalnız birini anlatır; mantıktaki VEYA ise ikisi birden doğru olduğunda da 1 verir. Çeviri sorularında bu farka özellikle dikkat edin.

Öğrenci anlayışını ölçmek için geliştirilmiş araçlar da vardır. Sayısal Mantık Kavram Envanteri (DLCI), öğrencinin kavramsal anlayışının alanın kabul görmüş çerçevesiyle ne kadar örtüştüğünü ölçmek için geliştirildi. Envanterin, bütün olarak ve ders sonunda kullanıldığında araştırma amaçları için yeterince güvenilir olduğu gösterildi.[@herman2010][@herman2014] Türkiye'de de üç üniversitenin mantık tasarımı derslerindeki ortak kazanımlardan 15 açık uçlu sorudan oluşan bir ölçme aracı geliştirildi. Aracın kapsam geçerlik oranı 0,84 bulundu ve yanıtlar bir rubrikle puanlandı.[@balci2019] Açık uçlu sınavlarda yalnız sonucu değil, kullandığınız kuralı da yazmanız bu yüzden önemlidir.

## Sık yapılan hatalar

- **1 + 1 = 2 yazmak.** Boole toplamasında 1 + 1 = 1'dir.[@meb2012]
- **(A + B)' = A' + B' yazmak.** Doğrusu A' · B'dir; değil çizgisi kırılırken işlem değişir.
- **(AB)' ile A'B' ifadesini karıştırmak.** (AB)' = A' + B'dir; A'B' ise (A + B)' ifadesine eşittir.
- **A + BC ifadesini (A + B)C sanmak.** Doğru açılım (A + B)(A + C)'dir.
- **Çok girişli ÖZEL VEYA'yı "yalnız bir giriş 1" sanmak.** Çok girişli ÖZEL VEYA, tek sayıda 1 olduğunda 1 verir; 1 ⊕ 1 ⊕ 1 = 1'dir.
- **Minterm ve maxtermde değil işaretini ters koymak.** Mintermde 0 olan değişken değillenir, maxtermde 1 olan değişken değillenir.

## Alıştırmalar

Alıştırmalar, örnek izlencenin 4, 5 ve 6. haftalarındaki konuları kapsar.[@hacettepe2024]

1. F = A'B + AB' ifadesinin doğruluk tablosunu yazınız. Bu hangi kapıdır?
2. Sadeleştiriniz: F = AB + AB'
3. Sadeleştiriniz: F = A + A'B + AB
4. De Morgan ile değilini bulunuz: F = A'B + C
5. Sadeleştiriniz: F = (A + B)(A' + C)
6. F(A, B, C) = Σm(1, 3, 5, 7) fonksiyonunu sadeleştiriniz.
7. F(A, B, C) = Σm(0, 2, 4, 6) fonksiyonunu sadeleştiriniz.
8. F = A + B fonksiyonunu maxtermlerin çarpımı olarak yazınız.
9. F = AB fonksiyonunu yalnız VEYA DEĞİL kapılarıyla kurunuz.
10. F = A ⊕ B ⊕ C fonksiyonunu mintermlerin toplamı olarak yazınız.
11. "Bir makine, güvenlik kapağı kapalıyken (K = 1) iki başlatma düğmesinden (D₁, D₂) en az birine basıldığında çalışsın" koşulunu ifadeye çeviriniz.

## Cevaplar

Bütün cevaplar, Shannon'ın tam tümevarım yöntemiyle, yani bütün giriş durumları denenerek denetlenmiştir.[@shannon1940]

1. Tablo 00 → 0, 01 → 1, 10 → 1, 11 → 0 verir. Girişler farklıyken 1 olduğu için bu ÖZEL VEYA'dır: F = A ⊕ B.
2. AB + AB' = A(B + B') = A · 1 = **A**.
3. A + AB = A (yutma), sonra A + A'B = A + B (gereksiz değil). **F = A + B**.
4. F' = (A'B)' · C' = **(A + B') · C'**.
5. Açalım: AA' + AC + A'B + BC = AC + A'B + BC. Uzlaşı kuralıyla BC silinir: **F = AC + A'B**.
6. 1, 3, 5, 7 satırlarının ortak yanı C = 1 olmasıdır; A ve B her değeri alır. **F = C**.
7. 0, 2, 4, 6 satırlarında C = 0'dır. **F = C'**.
8. A + B yalnız A = 0, B = 0 satırında 0'dır. Bu satırın maxtermi M₀ = A + B'dir: **F = ΠM(0) = A + B**.
9. AB = (A' + B')' (De Morgan). A' = (A + A)' ve B' = (B + B)' ile: **F = ((A + A)' + (B + B)')'**. Üç VEYA DEĞİL kapısı gerekir.
10. Tek sayıda 1 içeren satırlar 001, 010, 100 ve 111'dir: **F = Σm(1, 2, 4, 7) = A'B'C + A'BC' + AB'C' + ABC**.
11. **F = K · (D₁ + D₂)**.

Karnaugh haritası, kombinasyonel devreler ve sayıcılar gibi sonraki konular için [Elektronik Devre Elemanları dersi](/blog/elektronik-devre-elemanlari) rehberine dönebilirsiniz.

## Terim tablosu

| Türkçe | İngilizce | Diğer kullanımlar |
|---|---|---|
| VE kapısı | AND gate | Boole çarpması |
| VEYA kapısı | OR gate | Boole toplaması |
| DEĞİL kapısı | NOT gate, inverter | Tümleyen, komplement |
| VE DEĞİL | NAND | VEDEĞİL |
| VEYA DEĞİL | NOR | VEYADEĞİL |
| ÖZEL VEYA | XOR, EXOR | ÖZELVEYA |
| ÖZEL VEYA DEĞİL | XNOR, EXNOR | ÖZELVEYA DEĞİL |
| Doğruluk tablosu | Truth table | |
| Yer değiştirme kanunu | Commutative law | |
| Birleşme kanunu | Associative law | |
| Dağılma kanunu | Distributive law | |
| Yutma kuralı | Absorption law | |
| Düalite ilkesi | Duality principle | |
| Tam tümevarım | Perfect induction | Bütün durumları deneme |
| Minterm, maxterm | Minterm, maxterm | |

Türkçe kapı adları ile yer değiştirme, birleşme, dağılma ve yutma adları MEB modülünden; tam tümevarım ve düalite ilkesi Shannon'dan alınmıştır.[@meb2012][@shannon1940]

## Sonuç

Boole cebiri, yalnız 0 ve 1 değerleriyle çalışan ve sıradan cebirden 1 + 1 = 1 gibi birkaç kuralla ayrılan bir cebirdir.[@shannon1940][@meb2012] Mantık kapıları bu cebirin devredeki karşılığıdır ve her biri bir doğruluk tablosuyla tanımlanır.[@meb2012] Kuralları eş çiftler hâlinde öğrenmek, şüphe edilen her eşitliği doğruluk tablosuyla denemek, doğruluk tablosunu minterm ya da maxterm açılımıyla ifadeye çevirmek bu konudaki soruların neredeyse tamamını çözmeye yeter.[@shannon1940][@hacettepe2024] Sözel koşulları ifadeye çevirmek ise ayrıca çalışılması gereken bir beceridir.[@herman2012]
