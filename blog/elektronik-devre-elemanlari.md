---
title: "Elektronik Devre Elemanları Nelerdir? BÖTE Dersi Rehberi"
url: https://bote.web.tr/blog/elektronik-devre-elemanlari
author: BÖTE Editör Ekibi
published: 2026-09-28
updated: 2026-09-28
category: Bölüm Rehberi
description: "Elektronik Devre Elemanları dersinin bütün konuları: direnç, kondansatör, diyot, Ohm ve Kirchhoff yasaları, sayı sistemleri, mantık kapıları ve Boole cebiri."
---

# Elektronik Devre Elemanları Nelerdir? BÖTE Dersi Rehberi

> Elektronik Devre Elemanları dersinin bütün konuları: direnç, kondansatör, diyot, Ohm ve Kirchhoff yasaları, sayı sistemleri, mantık kapıları ve Boole cebiri.

Yazan: BÖTE Editör Ekibi · Yayın: 2026-09-28 · Güncelleme: 2026-09-28 · 10 dk okuma · https://bote.web.tr/blog/elektronik-devre-elemanlari

## Özet

- Elektronik Devre Elemanları, YÖK'ün 2018 BÖTE lisans programında **2. yarıyılda** okutulan, 3 saatlik ve 5 AKTS'lik zorunlu bir alan eğitimi dersidir.
- Dersin iki yarısı vardır: **devre elemanları ve devre yasaları** (direnç, kondansatör, bobin, diyot, transistör, Ohm ve Kirchhoff yasaları, ölçme aletleri, elektrik güvenliği) ile **sayısal sistemler** (sayı sistemleri, mantık kapıları, Boole cebiri, Karnaugh haritası, sayıcılar).
- Örnek bir izlencede 14 haftanın 13'ü sayısal sistemlere ayrılır; ama YÖK'ün ders tanımı analog konuları da kapsar. Sınava iki yarıya da hazırlanarak girmek gerekir.
- Öğrencilerin en sık düştüğü hatalar bellidir: pili sabit bir akım kaynağı sanmak, akım, gerilim ve direnci birbirine karıştırmak, Türkçe bir koşulu Boole ifadesine çevirirken hata yapmak.
- Bu yazı dersin haritasıdır. Her konu, çözümlü örnekler ve alıştırmalarla ayrı derin yazılarda ele alınıyor.

Elektronik Devre Elemanları, BÖTE öğrencilerinin birinci yılda karşılaştığı en teknik derslerden biridir. Direnç ve kondansatörle başlayan konular, bilgisayarın temelindeki mantık devrelerine ve sayıcılara uzanır. Bu yazı dersin bütün haritasını çıkarıyor: resmî ders tanımını, haftalık sırayı, her konuda bilinmesi gerekenleri ve öğrencilerin en sık yaptığı hataları. Her konunun çözümlü örneklerle anlatıldığı ayrıntılı yazılar da bu haritaya bağlanıyor.

## Elektronik Devre Elemanları dersi nedir?

Ders, YÖK'ün 2018'de yayımladığı Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programında **2. yarıyılda** yer alır. Zorunlu bir alan eğitimi dersidir: haftada 3 saat kuramsal ders, 3 kredi ve 5 AKTS.[1] YÖK'ün ders tanımı şu konuları sayar:[1]

- Dirençler, kondansatörler, bobinler; diyot, transistör ve diğer yarı iletken elemanlar
- Voltmetre, ampermetre ve ohmmetre gibi ölçme aletlerinin kullanımı
- İletken, yalıtkan ve yarı iletken
- Doğru akım, alternatif akım; seri, paralel ve karışık devreler; akım, direnç, Ohm Yasası, Kirchhoff Gerilim Yasası ve güç
- Sayı sistemleri ve mantık kapısı devreleri
- Boole cebiri: Boole yasaları, De Morgan teoremi, Karnaugh haritası
- Sayısal devre tasarımı ve sayıcılar
- Elektrik kazalarına karşı korunma ve ilk yardım

Bu tanım bütün üniversiteler için ortak çerçevedir. Üniversitelerin izlenceleri ise dersin nasıl işleneceğini ayrıntılandırır. Örnek olarak Hacettepe Üniversitesi'nin 2024 izlencesi dersin amacını sayısal sistemleri tanımak, sayısal sistem tasarımının temel mantığını kavramak, bilgisayar mantığıyla cebir arasında ilişki kurmak ve kombinasyonel ve ardışık devreleri çözümleyebilmek olarak yazar.[2] Aynı izlenceye göre dersi başarıyla bitiren öğrenci şunları yapabilmelidir:[2]

1. Sayısal sistemleri anlar ve bilgisayar bilimleriyle ilişkisini kurar.
2. Boole cebirinin temel ilkeleriyle mantık ifadeleri üzerinde işlem yapar ve bu ifadeleri sadeleştirir.
3. Farklı mantık kapıları içeren devreleri çözümler ve tasarlar.
4. Mantık devrelerinin bilgisayar donanımıyla ilişkisini kurar.
5. Analog ve sayısal sistemleri tanır, farklarını bilir ve birinden ötekine çevirim yapar.

Bu izlencede yarıyıl içi çalışmaların ağırlığı yüzde 50'dir: ara sınav yüzde 35, ödev yüzde 15. Dersin toplam iş yükü 150 saat olarak hesaplanır; bunun 42 saati derse devam, 42 saati sınıf dışı çalışma, 10 saati ödev, 56 saati sınavlara hazırlıktır.[2]

## Dersin programdaki yeri

Elektronik Devre Elemanları kendi başına bitmeyen bir derstir; programın sonraki derslerine zemin hazırlar. YÖK programındaki **Bilişim Sistemleri Donanımı** dersi bilgisayar mantığı ve mimarisini, ROM, RAM ve önbellek gibi bellek türlerini işler. Dördüncü sınıftaki [Fiziksel Programlama](https://bote.web.tr/blog/fiziksel-programlama-nedir) dersi ise robotların mekanik, elektromekanik ve elektronik bileşenlerini kapsar.[1] Birinci yıldaki mantık kapıları olmadan bellek devreleri, direnç ve diyot bilgisi olmadan da bir robot kitindeki devre anlaşılmaz.

Bu bağ, bilişim teknolojileri öğretmeni için doğrudan meslek bilgisidir. Okullarda bilişim ve yazılım derslerini veren öğretmen, öğrencilerine bilgisayarın ve robotik kitlerin nasıl çalıştığını anlatırken bu dersteki kavramları kullanır. Dersin öğretmenlik açısından okulda nereye oturduğu için [Bilişim Teknolojileri ve Yazılım dersi](https://bote.web.tr/blog/bilisim-teknolojileri-ve-yazilim-dersi) yazısına bakabilirsiniz.

## Haftalık konu sırası

Hacettepe Üniversitesi'nin izlencesi 14 haftalık planın 13 haftasını sayısal sistemlere ayırır:[2]

| Hafta | Konu |
|---|---|
| 1 | Sayı sistemleri: ikili, sekizli, on altılı; taban dönüşümleri |
| 2 | Negatif sayılar, bire ve ikiye tümleme; BCD, Gray, ASCII kodları |
| 3 | Mantık devreleri; TTL ve CMOS |
| 4 | Boole teoremleri ve mantık kapıları |
| 5 | Boole teoremleri ve kapılarla uygulamalar |
| 6 | Sadeleştirme: Karnaugh diyagramları, minterm ve maxterm, Quine-McCluskey |
| 7 | Kombinasyonel devreler: toplayıcılar, çıkarıcılar |
| 8 | Kod çözücüler, çoklayıcılar, tekleyiciler |
| 9 | Ara sınav |
| 10 | Bellek devreleri: RAM, ROM, programlanabilir mantık aygıtları |
| 11 | Sıralı devreler: flip-floplar, osilatörler |
| 12 | Saklayıcılar ve sayıcılar |
| 13 | Sayısaldan analoğa çeviriciler (DAC) |
| 14 | Analogdan sayısala çeviriciler (ADC) |

Tablo önemli bir ayrıntıyı gösteriyor. YÖK'ün ders tanımında yer alan direnç, kondansatör, diyot, ölçme aletleri, Ohm ve Kirchhoff yasaları ve elektrik güvenliği bu haftalık planda ayrı bir hafta olarak görünmüyor.[1][2] Dersi farklı hocalar farklı ağırlıklarla işleyebilir; ama resmî tanım iki yarıyı da kapsadığı için sınava iki yarıya da hazırlanmak gerekir. Bu rehber de iki yarıyı birlikte ele alıyor.

## Birinci yarı: devre elemanları ve devre yasaları

**Ohm yasası.** Birçok maddeden geçen akım, uygulanan gerilimle doğru orantılıdır. Georg Simon Ohm bunu 1827'de yayımladığı bir makalede, farklı uzunlukta teller içeren devrelerde akımı ve gerilimi ölçerek gösterdi. Bu ilişki V = I × R biçiminde yazılır. Ohm yasası bir doğa yasası değil, deneyle gözlenen bir ilişkidir: ona uyan elemanlara omik, uymayanlara omik olmayan elemanlar denir.[3] Örnek: 4 ohm'luk bir direncin uçlarına 12 volt uygulanırsa akım 12 / 4 = 3 amperdir.

**Seri, paralel ve karışık devreler; Kirchhoff yasaları.** Seri devrede elemanlardan aynı akım geçer, paralel devrede elemanların uçlarındaki gerilim aynıdır.[3] Seri ve paralel parçalara ayrılamayan devreler Gustav Kirchhoff'un iki kuralıyla çözülür. **Düğüm kuralı:** bir düğüme giren akımların toplamı, çıkan akımların toplamına eşittir. **Çevre kuralı:** kapalı bir yol boyunca potansiyel değişimlerinin cebirsel toplamı sıfırdır.[3] Örnek: 12 voltluk bir kaynağa 2 ohm ve 4 ohm seri bağlansın. Eşdeğer direnç 6 ohm, akım 12 / 6 = 2 amperdir. Dirençlerin üzerindeki gerilimler 4 ve 8 volttur; toplamları kaynağın 12 voltuna eşittir, yani çevre kuralı sağlanır. Aynı iki direnç yerine 6 ohm ve 3 ohm paralel bağlansaydı eşdeğer direnç (6 × 3) / (6 + 3) = 2 ohm olurdu. Karışık devreler, iki kaynaklı devreler ve iç direnç çözümlü örneklerle [Ohm ve Kirchhoff kanunları](https://bote.web.tr/blog/ohm-ve-kirchhoff-kanunlari) yazısında.

**Kondansatör ve bobin.** Kondansatör elektrik yükü ve elektrik enerjisi depolayan bir aygıttır; genellikle aralarında yalıtkan bir malzeme bulunan iki iletken levhadan oluşur. Sığa (kapasitans), levhalarda depolanabilen en büyük yükün uygulanan gerilime oranıdır.[3] Bobin ise devrede öz indüktans sağlayan elemandır; temel biçimi uzun bir tel sargısıdır.[3]

**Doğru akım ve alternatif akım.** Doğru akım, yükün yalnız bir yönde akmasıdır. Alternatif akımda ise yükün akış yönü periyodik olarak tersine döner. Avrupa'da prizlerdeki gerilim 50 hertz frekansla sinüs biçiminde değişir.[3]

**Yarı iletkenler: diyot ve transistör.** Diyot, akımın yalnız bir yönde geçmesine izin veren, tek yönlü bir vana gibi çalışan devre elemanıdır. p tipi ve n tipi yarı iletkenin birleştirilmesiyle oluşan p-n eklemi, doğru kutuplamada akımı kolayca geçirir, ters kutuplamada çok az geçirir. Transistör ise elektrik sinyallerini yükseltebilen ya da anahtarlayabilen aygıttır ve bilgisayar teknolojisinin temel bileşenidir.[4]

**Ölçme aletleri.** Ampermetre ölçülecek elemana **seri**, voltmetre **paralel** bağlanır; çünkü seri elemanlardan aynı akım geçer, paralel elemanların uçlarında aynı gerilim bulunur. Ohmmetre bir elemanın direncini ölçer ve Ohm yasasına göre çalışır. Ölçülecek eleman devreden ayrılmalıdır; aksi hâlde devrenin eşdeğer direnci ölçülür. Ohmmetre, içinden akım geçen canlı bir devreye asla bağlanmamalıdır.[3] Sınavlarda en sık sorulan ayrıntılardan biri budur.

**Elektrik güvenliği ve ilk yardım.** Elektriğin iki tehlikesi vardır: aşırı akımın yangın gibi ısıl etkiler doğurması ve akımın insan vücudundan geçmesi. Kalpten 300 miliamperin üzerinde bir akım geçmesi ölüme yol açabilir; elektrik çarpmasına bağlı ölümlerin çoğu kalbin düzensiz çalışmasına (ventrikül fibrilasyonu) bağlıdır. Sigortalar ve devre kesiciler aşırı akımı sınırlar; devreyle çalışırken akımın kalpten geçme olasılığını azaltmak için tek elle çalışmak yaygın bir önlemdir.[3] Sağlık Bakanlığı'nın ilk yardım eğitim kitabına göre elektrik yaralanmasında önce akım kesilir. Akım kesilemiyorsa tahta çubuk ya da ip gibi bir cisimle temas kesilir. Ardından hava yolu, solunum ve dolaşım değerlendirilir. Kişiye su ile müdahale edilmez, kişi hareket ettirilmez, yanık bölge temiz bir bezle örtülür ve 112 aranır.[5]

## İkinci yarı: sayısal sistemler

**Sayı sistemleri.** Sayısal devreler bilgiyi 0 ve 1 ile, yani ikili sistemde tutar. Sekizli ve on altılı sistemler ise uzun ikili sayıları kısaltmak için kullanılır.[2] Örnek: onluk 45 sayısı 32 + 8 + 4 + 1 olarak yazılır ve ikili sistemde 101101 olur. İkili rakamlar sağdan üçerli gruplanırsa (101 101) sekizlik 55, dörderli gruplanırsa (0010 1101) on altılık 2D elde edilir.

**Negatif sayılar ve kodlar.** Bilgisayar negatif sayıları çoğunlukla ikiye tümleyen biçiminde tutar. Örnek: 8 bitlik 45, yani 00101101, önce ters çevrilir (11010010) sonra 1 eklenir; −45'in ikiye tümleyen gösterimi 11010011'dir. BCD, Gray ve ASCII gibi kodlar sayıları ve karakterleri farklı amaçlarla temsil eder.[2] Dönüşümler, tümleyenler ve kodlar çözümlü örneklerle [sayı sistemleri](https://bote.web.tr/blog/sayi-sistemleri) yazısında.

**Boole cebiri.** Mantık devrelerinin matematiği George Boole'a dayanır. Boole 1854'te yayımladığı kitabında, aynı anlamdaki iki sembolün birleşiminin sembolün kendisine eşit olduğunu, yani xx = x, kısaca x² = x olduğunu sembollerin genel yasalarından biri olarak verdi.[6] Bu cebir yaklaşık seksen yıl sonra elektrik devrelerine taşındı. Claude Shannon, röle ve anahtar devrelerini denklemlerle gösterdi. Bu denklemleri işlemek için geliştirdiği hesabın, Boole'un mantık cebirine dayanan önermeler hesabının tam karşılığı olduğunu gösterdi.[7] Ders tanımında adıyla geçen kurallardan biri De Morgan teoremidir: (A · B)' = A' + B' ve (A + B)' = A' · B'. Burada kesme işareti (') değil anlamına gelir.[1]

**Mantık kapıları.** Boole işlemleri devrede kapılarla gerçekleştirilir; kapıların doğruluk tabloları, bütün Boole kuralları ve çözümlü örnekler [mantık kapıları ve Boole cebiri](https://bote.web.tr/blog/mantik-kapilari-ve-boole-cebiri) yazısında. İzlencede yedi temel kapı yer alır: VE, VEYA, DEĞİL, VE DEĞİL (NAND), VEYA DEĞİL (NOR), ÖZEL VEYA (XOR) ve ÖZEL VEYA DEĞİL (XNOR).[2] Her kapı bir doğruluk tablosuyla tanımlanır. TTL ve CMOS devre aileleri ve bunların karşılaştırılması da izlencenin konuları arasındadır.[2]

**Sadeleştirme.** Aynı işi yapan bir devrenin daha az kapıyla kurulması hem maliyeti hem hata olasılığını düşürür. Maurice Karnaugh 1953'te kombinasyonel mantık devrelerini verimli biçimde kurmak için harita yöntemini önerdi.[8] Değişken sayısı arttığında haritalar zorlaşır; bu durumda Quine'ın 1952 ve McCluskey'in 1956 çalışmalarına dayanan tablo yöntemi kullanılır.[9][10] Gruplama kuralları ve çözümlü örnekler [Karnaugh haritası](https://bote.web.tr/blog/karnaugh-haritasi) yazısında.

**Kombinasyonel ve sıralı devreler.** Kombinasyonel, yani sıralı olmayan devrelerin çıkışı yalnız o anki girişlere bağlıdır:[8] toplayıcılar, çıkarıcılar, kod çözücüler ve çoklayıcılar bu türdendir. Sıralı devrelerde ise çıkış önceki durumlara da bağlıdır; flip-floplar, saklayıcılar ve sayıcılar bu gruptadır.[2] Örnek: iki biti toplayan yarım toplayıcının toplam çıkışı S = A ⊕ B, elde çıkışı C = A · B'dir.

**Çeviriciler.** Dersin son haftaları analog ve sayısal dünya arasındaki köprüye ayrılır: DAC sayısal değeri analog gerilime, ADC analog gerilimi sayısal değere çevirir.[2] Bu köprünün gündelik bir örneği sayısal ölçü aletleridir. Sayısal bir voltmetre, ölçtüğü analog gerilimi bir analogdan sayısala çeviriciyle 0 ve 1'lere dönüştürüp ekranda gösterir.[3]

## Ders nasıl çalışılır?

**Konular birbirine zincirle bağlıdır.** Sayı sistemleri olmadan Boole cebiri, Boole cebiri olmadan Karnaugh haritası, kapılar olmadan toplayıcı ve sayıcı anlaşılmaz. İzlencedeki sıra bu bağımlılığı izler.[2] Bir haftayı atlayan öğrenci, sonraki haftaları da kaçırır.

**Devrelerde kavram, formülden önce gelir.** Elektrik devreleri öğrencilerin en çok zorlandığı konulardan biridir ve bu zorluklar uzun süredir araştırılmaktadır.[11] Engelhardt ve Beichner'in lise ve üniversite öğrencileriyle geliştirdiği 29 soruluk tanı testine göre öğrenciler, öğretimden sonra bile birden çok kavram yanılgısı taşıyor. Görüşmelerde en sık başvurulan düşünce **pilin sabit bir akım kaynağı olduğu**ydu. Öğrenciler akıma odaklanıyor ve akımın özelliklerini gerilime ya da dirence yüklüyor.[12] Türkiye'de üç okuldan 97 on birinci sınıf öğrencisiyle yapılan bir çalışma da benzer yanılgılar buldu. Bunların en belirgini "akım pilde depo edilir" düşüncesiydi.[13] Bu yanılgıları taşıyan bir öğrenci formülü doğru yazsa bile yorum sorusunda hata yapar. Ohm yasasında gerilim neden, akım sonuçtur: aynı pile bağlanan devrenin direnci değişirse akım da değişir.[3]

**Boole ifadesine çeviri ayrı bir beceridir.** Herman ve arkadaşları sayısal mantık dersini yeni bitirmiş öğrencilerle görüştü. Öğrencilerin önermeler mantığını anlamada ve sözle verilen bir koşulu Boole ifadesine çevirmede yaygın yanılgılar taşıdığını gösterdi.[14] "Kapı açık ve alarm kurulu değilse ışık yansın" gibi bir cümleyi ifadeye çevirmek, ifadeyi sadeleştirmek kadar çalışılması gereken ayrı bir beceridir.

**Açık uçlu sorulara hazırlanın.** Türkiye'de üç üniversitenin mantık tasarımı derslerindeki ortak kazanımlardan yola çıkılarak 15 açık uçlu sorudan oluşan bir ölçme aracı geliştirildi. Altı alan uzmanının görüşüyle kapsam geçerlik oranı 0,84 bulundu, araç 88 öğrenciye uygulandı ve yanıtlar bir rubrikle puanlandı.[15] Bu tür sınavlarda yalnız sonucu değil, çözüm adımlarını ve devre çizimini de göstermek gerekir.

**Sınav öncesi kontrol listesi.** Aşağıdaki becerilerin her birini kâğıt kalemle, hesap makinesi kullanmadan yapabiliyorsanız dersin çekirdeğine hâkimsiniz:[1][2]

- Onluk, ikili, sekizli ve on altılı sistemler arasında dönüşüm; ikiye tümleyenle toplama ve çıkarma
- BCD ve Gray kodlarına çevirme
- Yedi temel kapının doğruluk tablosunu yazma; bir devrenin çıkış ifadesini bulma
- Boole yasaları ve De Morgan teoremleriyle ifade sadeleştirme; dört değişkenli Karnaugh haritası
- Yarım ve tam toplayıcı, kod çözücü ve çoklayıcı tasarlama
- Flip-flop türlerinin doğruluk tablolarını bilme; basit bir sayıcının durum geçişlerini çıkarma
- Seri, paralel ve karışık devrelerde eşdeğer direnç, akım ve gerilim hesabı; Kirchhoff yasalarıyla çözüm
- Ampermetre, voltmetre ve ohmmetrenin devreye nasıl bağlanacağını açıklama
- Elektrik çarpmasında ilk yardım adımlarını sırayla sayma

## Bu rehberin derin yazıları

Bu yazı dersin haritasıdır. Her konu, çözümlü örnekler ve alıştırmalarla ayrı bir yazıda derinlemesine ele alınacak ve yayımlandıkça bu listeye bağlantı olarak eklenecek:[2]

1. [Mantık kapıları ve Boole cebiri](https://bote.web.tr/blog/mantik-kapilari-ve-boole-cebiri): doğruluk tabloları, Boole yasaları ve De Morgan teoremleri
2. [Ohm ve Kirchhoff kanunları](https://bote.web.tr/blog/ohm-ve-kirchhoff-kanunlari): seri, paralel ve karışık devre çözümleri
3. [Sayı sistemleri, tümleyenler ve sayısal kodlar](https://bote.web.tr/blog/sayi-sistemleri)
4. [Karnaugh haritası ve Quine-McCluskey yöntemi](https://bote.web.tr/blog/karnaugh-haritasi)
5. Kombinasyonel devreler: toplayıcılar, kod çözücüler, çoklayıcılar
6. Flip-floplar, saklayıcılar ve sayıcılar
7. Diyot, transistör ve yarı iletkenler; kondansatör ve bobin
8. DAC ve ADC; TTL ve CMOS; bellek devreleri
9. Ölçme aletleri ve elektrik güvenliği

## Sonuç

Elektronik Devre Elemanları, BÖTE programında birinci yılın ikinci yarıyılında okutulan, direnç ve diyottan mantık kapılarına ve sayıcılara uzanan zorunlu bir derstir.[1] Resmî tanım analog ve sayısal konuları birlikte kapsar; örnek bir izlence ise haftaların büyük bölümünü sayısal sistemlere ayırır.[1][2] Dersi iyi bitirmenin yolu, konuları izlencedeki sırayla ve birbirine bağlayarak çalışmak, devre sorularında önce hangi büyüklüğün sorulduğunu netleştirmek ve her konuyu elle çözülmüş örneklerle pekiştirmektir.[12][14] Bu dersin kavramları Bilişim Sistemleri Donanımı ve Fiziksel Programlama derslerinde yeniden karşınıza çıkacak; burada kurulan temel, o dersleri de kolaylaştırır.[1]

## Sık Sorulan Sorular

### Elektronik devre elemanları nelerdir?

Temel elektronik devre elemanları direnç, kondansatör, bobin, diyot ve transistördür. Direnç akıma karşı koyar, kondansatör elektrik yükü ve enerji depolar, bobin öz indüktans sağlar, diyot akımın yalnız bir yönde geçmesine izin verir, transistör ise elektrik sinyallerini yükseltir ya da anahtarlar. BÖTE'deki Elektronik Devre Elemanları dersi bu elemanların yanında devre yasalarını, ölçme aletlerini ve sayısal sistemleri de kapsar.

### Elektronik Devre Elemanları dersi hangi yarıyılda okutulur?

YÖK'ün 2018'de yayımladığı Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programında ders 2. yarıyılda yer alır. Haftada 3 saat kuramsal derstir, 3 kredi ve 5 AKTS değerindedir ve zorunlu bir alan eğitimi dersidir.

### Elektronik Devre Elemanları dersinde hangi konular var?

YÖK'ün ders tanımına göre konular şunlardır: dirençler, kondansatörler, bobinler, diyot ve transistör gibi yarı iletken elemanlar; voltmetre, ampermetre ve ohmmetre gibi ölçme aletleri; iletken, yalıtkan ve yarı iletken; doğru akım, alternatif akım, seri, paralel ve karışık devreler ile Ohm ve Kirchhoff yasaları; sayı sistemleri, mantık kapıları, Boole cebiri, De Morgan teoremleri, Karnaugh haritası; sayısal devre tasarımı; sayıcılar; elektrik kazalarına karşı korunma ve ilk yardım.

### Elektronik Devre Elemanları dersi nasıl çalışılır?

Konular birbirine bağlıdır: sayı sistemleri olmadan Boole cebiri, Boole cebiri olmadan Karnaugh haritası, mantık kapıları olmadan toplayıcılar ve sayıcılar anlaşılmaz. Bu yüzden haftalık sırayı izlemek, her konuda elle çözülmüş örnekler yapmak ve devre yasalarında yalnız formül değil kavram üzerinde durmak gerekir. Araştırmalar öğrencilerin akım, gerilim ve direnci karıştırdığını gösteriyor; her soruda hangi büyüklüğün sorulduğunu önce yazmak bu hatayı azaltır.

### Elektronik Devre Elemanları dersi BÖTE'de neden var?

Ders, programın sonraki derslerine temel hazırlar. Bilişim Sistemleri Donanımı dersinde bilgisayar mantığı ve mimarisi, RAM ve ROM gibi bellek türleri; Fiziksel Programlama dersinde ise robotların elektronik bileşenleri işlenir. Bilişim teknolojileri öğretmeni, öğrencilerine bilgisayarın ve robotik kitlerin nasıl çalıştığını anlatırken bu dersteki kavramları kullanır.

### Elektrik çarpmasında ilk yardım nasıl yapılır?

Sağlık Bakanlığı'nın ilk yardım eğitim kitabına göre kişiye dokunmadan önce elektrik akımı kesilir; kesilemiyorsa tahta çubuk ya da ip gibi bir cisimle elektrik teması kesilir. Ardından hava yolu, solunum ve dolaşım değerlendirilir, kişiye su ile müdahale edilmez, kişi hareket ettirilmez, yanık bölge temiz bir bezle örtülür ve 112 aranır.

## Kaynaklar

1. Yükseköğretim Kurulu (2018). Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programı. YÖK, Öğretmen Yetiştirme Lisans Programları. https://egitim.yok.gov.tr/tr/document/2432 (TR, erişim: 2026-09-28)
2. Hacettepe Üniversitesi (2024). BTE114 Elektronik Devre Elemanları ders bilgi paketi (Bilgisayar ve Öğretim Teknolojileri Öğretmenliği). Hacettepe Üniversitesi Bologna Bilgi Sistemi. https://bilsis.hacettepe.edu.tr/oibs/bologna/progCourseDetails.aspx?curCourse=78042&lang=tr (TR, erişim: 2026-09-28)
3. Ling, S. J., Sanny, J. ve Moebs, W. (2016). University Physics, Volume 2. OpenStax (açık erişimli ders kitabı). https://openstax.org/details/books/university-physics-volume-2 (EN, erişim: 2026-09-28)
4. Ling, S. J., Sanny, J. ve Moebs, W. (2016). University Physics, Volume 3. OpenStax (açık erişimli ders kitabı). https://openstax.org/books/university-physics-volume-3/pages/9-7-semiconductor-devices (EN, erişim: 2026-09-28)
5. İnan, H. F., Kurt, Z. ve Kubilay, İ. (2011). Temel ilkyardım uygulamaları eğitim kitabı. T.C. Sağlık Bakanlığı, Temel Sağlık Hizmetleri Genel Müdürlüğü. https://www.ilkyardim.org.tr/dokumanlar/Saglik-Bakanligi-Ilk-Yardim.pdf (TR, erişim: 2026-09-28)
6. Boole, G. (1854). An investigation of the laws of thought, on which are founded the mathematical theories of logic and probabilities. Walton and Maberly, Londra (Project Gutenberg sayısal baskısı). https://www.gutenberg.org/ebooks/15114 (EN, erişim: 2026-09-28)
7. Shannon, C. E. (1940). A symbolic analysis of relay and switching circuits. Yüksek lisans tezi, Massachusetts Institute of Technology. https://hdl.handle.net/1721.1/11173 (EN, erişim: 2026-09-28)
8. Karnaugh, M. (1953). The map method for synthesis of combinational logic circuits. Transactions of the American Institute of Electrical Engineers, Part I: Communication and Electronics, 72(5), 593–599. https://doi.org/10.1109/TCE.1953.6371932 (EN, erişim: 2026-09-28)
9. Quine, W. V. (1952). The problem of simplifying truth functions. The American Mathematical Monthly, 59(8), 521–531. https://doi.org/10.1080/00029890.1952.11988183 (EN, erişim: 2026-09-28)
10. McCluskey, E. J. (1956). Minimization of Boolean functions. Bell System Technical Journal, 35(6), 1417–1444. https://doi.org/10.1002/j.1538-7305.1956.tb03835.x (EN, erişim: 2026-09-28)
11. McDermott, L. C. ve Shaffer, P. S. (1992). Research as a guide for curriculum development: An example from introductory electricity. Part I: Investigation of student understanding. American Journal of Physics, 60(11), 994–1003. https://doi.org/10.1119/1.17003 (EN, erişim: 2026-09-28)
12. Engelhardt, P. V. ve Beichner, R. J. (2004). Students' understanding of direct current resistive electrical circuits. American Journal of Physics, 72(1), 98–115. https://doi.org/10.1119/1.1614813 (EN, erişim: 2026-09-28)
13. Aykutlu, I. ve Şen, A. İ. (2012). Üç aşamalı test, kavram haritası ve analoji kullanılarak lise öğrencilerinin elektrik akımı konusundaki kavram yanılgılarının belirlenmesi. Eğitim ve Bilim, 37(166), 275–288. https://doi.org/10.15390/es.2012.1094 (TR, erişim: 2026-09-28)
14. Herman, G. L., Loui, M. C., Kaczmarczyk, L. ve Zilles, C. (2012). Describing the what and why of students' difficulties in Boolean logic. ACM Transactions on Computing Education, 12(1), 1–28. https://doi.org/10.1145/2133797.2133800 (EN, erişim: 2026-09-28)
15. Balcı, B., Çiloğlugil, B. ve İnceoğlu, M. M. (2019). Mantık tasarımı dersi için açık uçlu sorulardan oluşan bir ölçme aracı geliştirilmesi: Geçerlik ve güvenirlik çalışması. Manisa Celal Bayar Üniversitesi Sosyal Bilimler Dergisi, 17(3), 66–95. https://doi.org/10.18026/cbayarsos.485525 (TR, erişim: 2026-09-28)
