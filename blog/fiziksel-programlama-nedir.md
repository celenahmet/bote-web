---
title: "Fiziksel Programlama Nedir? BÖTE Dersi Rehberi"
url: https://bote.web.tr/blog/fiziksel-programlama-nedir
author: BÖTE Editör Ekibi
published: 2026-10-04
updated: 2026-10-04
category: Bölüm Rehberi
description: "Fiziksel programlama nedir? BÖTE'deki Fiziksel Programlama dersinin konuları: robotlar, sensör ve motorlar, Arduino, haftalık plan, not dağılımı ve proje."
---

# Fiziksel Programlama Nedir? BÖTE Dersi Rehberi

> Fiziksel programlama nedir? BÖTE'deki Fiziksel Programlama dersinin konuları: robotlar, sensör ve motorlar, Arduino, haftalık plan, not dağılımı ve proje.

Yazan: BÖTE Editör Ekibi · Yayın: 2026-10-04 · Güncelleme: 2026-10-04 · 11 dk okuma · https://bote.web.tr/blog/fiziksel-programlama-nedir

## Özet

- **Fiziksel programlama**, yazılımla donanımı birleştirip gerçek dünyayı algılayan ve ona tepki veren etkileşimli sistemler kurmaktır: program sensörlerden okur, karar verir ve LED, motor ya da hoparlör gibi eyleyicileri sürer.
- Fiziksel Programlama, YÖK'ün 2018 BÖTE lisans programında **7. yarıyılda** okutulan, haftada 2 saat kuramsal ve 2 saat uygulamalı, 3 kredi ve 5 AKTS'lik bir alan eğitimi dersidir.
- Dersin konuları robotların yapısı ve türleri; mekanik, elektromekanik ve elektronik bileşenler; fiziksel programlama yazılımları ve programlama yapılarıdır. Örnek bir izlencede ara sınavdan sonra dört hafta robot tabanlı projeye ayrılır.
- Aynı izlencede notun **yüzde 40'ı proje ve sunumdan** gelir; ara sınav ve final birlikte yüzde 35'tir. Dersi iyi geçmenin yolu dönem boyunca çalışan bir proje kurmaktır.
- Araştırmalar fiziksel programlamada görevi durduran hataların çoğunun koddan değil devreden kaynaklandığını ve bunların sık sık program hatası sanıldığını gösteriyor. Bir şey çalışmadığında önce kablolara bakılır.

Fiziksel Programlama, BÖTE öğrencilerinin dördüncü sınıfta karşılaştığı ve yazılımla donanımın birleştiği bir derstir: yazılan kod ekranda kalmaz, bir LED'i yakar, bir motoru döndürür, bir sensörü okur. Bu yazı dersin haritasını çıkarıyor: fiziksel programlamanın ne olduğunu, resmî ders tanımını, haftalık sırayı, notun nasıl oluştuğunu, projeye nasıl hazırlanılacağını ve öğrencilerin en sık takıldığı noktaları. Konuların çözümlü örneklerle anlatıldığı ayrıntılı yazılar da bu haritaya bağlanıyor.

## Fiziksel programlama nedir?

Fiziksel programlama (İngilizcede physical computing), yazılımla donanımı birleştirerek gerçek dünyayı algılayan ve ona tepki veren etkileşimli fiziksel sistemler kurmaktır.[1] Ekranda çalışan bir programın girdisi klavye ve fare, çıktısı ekrandır. Fiziksel programlamada ise girdi bir sensörden gelir, çıktı bir eyleyiciye gider.

Przybylla ve Romeike'ye göre fiziksel programlama, etkileşimli nesnelerin ve düzeneklerin tasarlanıp gerçekleştirilmesini kapsar ve öğrencilerin kendi hayal güçlerinden çıkan somut ürünler geliştirmesine imkân verir.[2] Bu ürünlerdeki donanım, çevreyle sürekli etkileşim için dönüştürücülerden yararlanır: ses, ışık ya da sıcaklık sensörleri gibi algılayıcılar ve LED, servo motor ya da hoparlör gibi eyleyiciler. İşin tipik araçları mikrodenetleyiciler ve küçük bilgisayarlardır.[2] Aynı yazarların benzetmesiyle, bilgisayarla denetlenen bir nesnede sensörler makinenin gözü ve kulağı, mikrodenetleyici beyni, eyleyiciler de ağzı ve kollarıdır.[2]

Bugün en yaygın araçlardan biri Arduino'dur. Arduino, kolay kullanılan donanım ve yazılıma dayanan açık kaynaklı bir elektronik platformdur. Kartları, bir sensöre düşen ışık ya da bir düğmeye basan parmak gibi girdileri okur ve bunları bir motoru çalıştırmak ya da bir LED'i yakmak gibi çıktılara dönüştürür.[3] Arduino, İtalya'daki Ivrea Etkileşim Tasarımı Enstitüsü'nde, elektronik ve programlama geçmişi olmayan öğrenciler için hızlı prototip üretme aracı olarak doğdu.[3] Öğrencilere ve hobicilere yönelik öteki yaygın kartlar arasında Raspberry Pi ve BBC micro:bit de vardır.[1]

Basit bir örnek: karanlıkta kendiliğinden yanan bir gece lambası. Işık sensörü ortamın ışığını ölçer, program okunan değeri bir eşikle karşılaştırır, değer eşiğin altına düşünce LED yanar. Okuma, karar ve sürme adımlarının her biri dersin bir konusuna karşılık gelir. Sensörden okumayı ve LED'i sürmeyi [Arduino Dijital ve Analog Giriş Çıkış](https://bote.web.tr/blog/arduino-dijital-analog-giris-cikis), eşikle karşılaştırmayı ise [Arduino Programlama: Değişken, Koşul, Döngü ve Fonksiyon](https://bote.web.tr/blog/arduino-degisken-kosul-dongu-fonksiyon) yazısında anlattık.

## Fiziksel Programlama dersi nedir?

Ders, YÖK'ün 2018'de yayımladığı Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programında **7. yarıyılda**, yani dördüncü sınıfın ilk yarıyılında yer alır. Bir alan eğitimi dersidir: haftada 2 saat kuramsal ve 2 saat uygulamalı ders, 3 kredi ve 5 AKTS.[4] YÖK'ün ders tanımı şu konuları sayar:[4]

- Fiziksel programlama ve robotlar
- Robot yapısı ve mimarisi
- Robot türleri ve eğitsel amaçlı robotlar
- Fiziksel programlamada mekanik, elektromekanik ve elektronik bileşenler
- Fiziksel programlama yazılımları ve ortamları
- Fiziksel programlamada kullanılan yapılar
- Robot tabanlı proje geliştirme

Bu tanım bütün üniversiteler için ortak çerçevedir; üniversitelerin izlenceleri dersin nasıl işleneceğini ayrıntılandırır. Örnek olarak Hacettepe Üniversitesi'nin 2024 izlencesinde ders BTE401 koduyla zorunlu ve yüz yüze okutulur. İzlence dersin amacını robotun tanımını, yapısını, bileşenlerini ve çeşitlerini öğretmek, fiziksel programlama ve robot programlamaya ilişkin kavramları ele almak ve robot programlamada kullanılan farklı yapıdaki programlama dillerini öğretmek olarak yazar.[5] Aynı izlenceye göre dersi başarıyla bitiren öğrenci şunları yapabilmelidir:[5]

1. Robot kavramını bilir ve açıklar.
2. Fiziksel programlama ve robot programlamaya ilişkin kavramları bilir.
3. Farklı yapıdaki robot programlama dillerini kullanarak robotları kontrol eden ve çalıştıran programlar oluşturur.
4. Farklı yapıda robotlar oluşturarak projeler hazırlar.

İzlencenin önerdiği kaynak, Wei Lu'nun Beginning Robotics Programming in Java with LEGO Mindstorms (2016) kitabıdır.[5] Kitap, LEGO Mindstorms EV3 robotunu ve EV3'ü Java ile programlamaya imkân veren açık kaynaklı leJOS projesini kullanır. Yayıncının tanıtımına göre kitapta ilk EV3 robotunun adım adım kurulması, leJOS'un yüklenmesi, motorlar için Java programları, sensörlerle davranış programlama ve DFS, BFS, Dijkstra gibi yapay zekâ algoritmaları yer alır; kitap temel Java deneyimi olan öğrenciler, öğretmenler ve yapımcılar içindir.[6] Derste hangi kartın ya da setin kullanılacağı hocaya ve bölümün olanaklarına göre değişebilir; YÖK'ün tanımı belirli bir ürün adı vermez.[4]

## Dersin programdaki yeri

Fiziksel Programlama, programın dört yıl boyunca kurduğu iki hattın buluştuğu derstir:[4]

- **Programlama hattı:** Algoritma Tasarımı ve Geliştirme (2. yarıyıl), Temel Programlama (3. yarıyıl), İleri Programlama (4. yarıyıl) ve Web Tabanlı Programlama (5. yarıyıl). Fiziksel Programlama'dan sonra, 8. yarıyılda Mobil Programlama gelir.[4]
- **Donanım hattı:** Elektronik Devre Elemanları (2. yarıyıl) ve Bilişim Sistemleri Donanımı (3. yarıyıl).[4]

Koşul ve döngü bilmeyen bir öğrenci robotu programlayamaz; direnç ve diyot bilmeyen bir öğrenci de devreyi kuramaz. Devre konularının özeti için [Elektronik Devre Elemanları dersi](https://bote.web.tr/blog/elektronik-devre-elemanlari) rehberine bakabilirsiniz.

**Öğretmenlik açısından.** Fiziksel programlama, BÖTE mezununun okulda doğrudan kullanacağı bir beceridir. MEB'in Türkiye Yüzyılı Maarif Modeli kapsamında 2025'te yayımladığı Bilişim Teknolojileri ve Yazılım öğretim programı (5. ve 6. sınıflar), robot kitlerini öğretim materyalleri arasında sayar ve kodlama ve robotik laboratuvarları gibi ortamların öğrenme sürecine katılmasını ister.[7] Programın 6. sınıftaki Yazılım Tasarımı ve Programlama teması, yazılım geliştirme sürecinde mekanik ya da robotik bir ürün veya sistem ortaya koymayı alan becerileri arasında sayar. Önerilen bir etkinlikte öğretmen, blok tabanlı ortamda hazırlanan bir görüntü tanıma uygulamasının bir robotik kartla bağlanıp fiziksel bir çıktı vermesini gösterir: tanınan nesneye göre bir LED'in yanması ya da bir servo motorun hareket etmesi. Ardından öğrenciler kendi projelerini robotik kartla bütünleştirir.[7] Dersin okuldaki yeri için [Bilişim Teknolojileri ve Yazılım dersi](https://bote.web.tr/blog/bilisim-teknolojileri-ve-yazilim-dersi) yazısına bakabilirsiniz.

## Haftalık konu sırası

Hacettepe Üniversitesi'nin izlencesi 16 haftalık dönemi şöyle planlar:[5]

| Hafta | Konu |
|---|---|
| 1 | Ders tanıtımı |
| 2 | Robot tanımı, yapısı, bileşenleri ve çeşitleri |
| 3 | Sensör ve motor: tanım, çeşitler ve kullanım |
| 4 | Robot yazılımının tanıtımı ve kurulumu |
| 5 | Veri türleri, değişken, sabit ve dizi |
| 6 | Koşullu ifadeler ve karar verme yapıları |
| 7 | Döngü kavramı ve çeşitleri |
| 8 | Ara sınav |
| 9 | Alt yordam ve fonksiyonlar |
| 10 | Hata giderme (debugging) |
| 11-14 | Proje çalışması |
| 15 | Final sınavı |
| 16 | Proje sunumları |

Tablo dersin iki yarısını açıkça gösteriyor. Ara sınava kadarki haftalar robotlara, sensör ve motorlara, robot yazılımına ve programlamanın temel yapılarına ayrılır. Ara sınavdan sonra fonksiyonlar ve hata giderme gelir, ardından dört hafta boyunca proje yürütülür.[5]

## Not nasıl oluşur?

İzlencedeki değerlendirme şöyledir:[5]

| Çalışma | Sayı | Katkı |
|---|---|---|
| Ara sınav | 1 | %15 |
| Ödev | 1 | %10 |
| Devam | 14 | %5 |
| Uygulama | 5 | %10 |
| Proje | 1 | %35 |
| Final | 1 | %20 |
| Sunum | 1 | %5 |

Proje ve sunum birlikte notun yüzde 40'ını oluşturur; ara sınav ve final ise toplam yüzde 35'tir.[5] Yani yazılı sınavlarda iyi not alıp projeyi aksatan öğrenci dersi zor geçer. Dersin toplam iş yükü 150 saat olarak hesaplanır: 30 saat proje, 28 saat derse devam, 14 saat sınıf dışı çalışma, 10'ar saat ödev, sunum hazırlığı ve uygulama, 8 saat laboratuvar ve 40 saat sınavlara hazırlık.[5]

## Dersin konuları

**Robot nedir?** Uluslararası Robotik Federasyonu'nun (IFR) aktardığına göre ISO 8373 standardı robotlardan "bir ölçüde özerklik" bekler. Özerklik, amaçlanan görevleri o anki duruma ve algılamaya dayanarak insan müdahalesi olmadan yerine getirebilmektir.[8] ISO 8373:2021'e göre endüstriyel robot; endüstriyel ortamda otomasyon uygulamaları için kullanılan, otomatik denetimli, yeniden programlanabilir, çok amaçlı ve üç ya da daha fazla eksende programlanabilen bir manipülatördür. Bir yere sabitlenebilir ya da hareketli bir platforma takılabilir.[9] Hizmet robotu ise kişisel ya da mesleki kullanımda insanlar ya da donanım için yararlı işler yapan robottur. Standardın 2021 sürümü, tıbbi robotları endüstriyel ve hizmet robotlarının yanında üçüncü bir sınıf olarak tanımlar.[8] YÖK'ün ders tanımı bunlara eğitsel amaçlı robotları da ekler.[4]

**Mekanik, elektromekanik ve elektronik bileşenler.** Eğitsel robotik için LEGO Mindstorms, Robotis Dream ve VEX IQ gibi modüler setler geliştirilmiştir. Öğrenciler robotun mekanik yapısını bu setlerdeki plastik parçaları birleştirerek tasarlar, elektronik bileşenlerini setin mikroişlemcisi ve sensörleriyle kurar. Robotun çevreyle etkileşmesini ışığa, dokunmaya ve sese duyarlı sensörlerle sağlarlar.[10] Örneğin Robotis Dream setinde piller, redüktörlü motorlar, servo motorlar, çeşitli sensörler, LED'ler, plastik parçalar ve vidalar, Bluetooth modülleri ve kablolar bulunur.[10] Motorlar elektrik enerjisini harekete çevirdiği için elektromekanik bileşenlerin tipik örneğidir. Arduino projelerinde kartla birlikte en sık kullanılan malzemeler arasında LED'ler, servo motorlar ve breadboard denen delikli deney tahtası vardır.[11]

**Yazılımlar ve ortamlar.** Arduino kartları Wiring'e dayanan Arduino programlama diliyle ve Processing'e dayanan Arduino yazılımıyla (IDE) programlanır.[3] İzlencenin kaynak kitabı ise Java kullanır.[6] Kartı kablolamadan önce denemek için Autodesk'in Tinkercad Circuits ortamı kullanılabilir: sanal devre kurulur, Arduino ya da micro:bit blok kodlarla (Codeblocks) ya da Arduino koduyla programlanır ve bileşenlerin nasıl tepki verdiği simülasyonda izlenir.[12]

İzlence, robot programlamada kullanılan farklı yapıdaki programlama dillerinin öğretilmesini amaçlar.[5] Bu diller kabaca ikiye ayrılır: blokların sürüklenip bırakılarak program kurulduğu blok tabanlı ortamlar ve kodun yazıyla yazıldığı metin tabanlı diller. 21 üniversiteden 44 BÖTE öğrencisiyle yapılan bir çalışmada öğretmen adayları blok tabanlı araçlar (Scratch, Alice, App Inventor) hakkında olumlu görüş bildirdi; metin tabanlı Small Basic ise öteki araçlar kadar etkili bulunmadı.[13] Arduino'nun ortaöğretimde kullanımını inceleyen 37 çalışmalık bir sistematik derlemede de kartla en çok kullanılan yazılımın Scratch olduğu görüldü.[11]

**Programlama yapıları.** İzlencenin 5-10. haftaları programlamanın temel yapılarına ayrılır: veri türleri, değişken, sabit ve dizi; koşullu ifadeler; döngüler; alt yordam ve fonksiyonlar; hata giderme.[5] Bu yapıların Arduino'daki karşılıklarını [Arduino Programlama: Değişken, Koşul, Döngü ve Fonksiyon](https://bote.web.tr/blog/arduino-degisken-kosul-dongu-fonksiyon) yazısında, kartın sensörleri okumasını ve LED, motor gibi çıktıları sürmesini [Arduino Dijital ve Analog Giriş Çıkış](https://bote.web.tr/blog/arduino-dijital-analog-giris-cikis) yazısında çözümlü örneklerle anlattık.

## Proje: notun en büyük parçası

İzlencede 11-14. haftalar proje çalışmasına, 16. hafta proje sunumlarına ayrılır. Proje yüzde 35, sunum yüzde 5 değerindedir ve projeye 30 saatlik iş yükü öngörülür.[5] YÖK'ün ders tanımının son maddesi de robot tabanlı proje geliştirmedir.[4]

Türkiye'de eğitsel robotik dersi alan 15 öğretmen adayıyla (9'u BÖTE öğrencisi) yapılan bir çalışmada adaylar dönem sonunda takım arkadaşlarıyla kendi robotlarını tasarladı. Grup çalışmasının yaratıcı fikir üretmeyi kolaylaştırdığını ve akran öğrenmesi sağladığını söylediler; projelerini gerçek yaşamla ilişkilendirmeye ve çocuklara robotik öğretecek oyunlaştırılmış senaryolar kurmaya özen gösterdiler. Bazı katılımcılar ise grup içinde iletişim sorunları yaşadığını ve bireysel çalışmayı tercih ettiğini belirtti.[10] Hodges ve arkadaşlarına göre fiziksel programlama grup çalışmasına uygundur, çünkü işin içinde farklı roller vardır: gövde tasarımı, donanım bağlantıları, algoritma tasarımı ve kullanıcı etkileşimi.[1]

Proje için uygulanabilir bir sıra:

1. **Fikri daraltın.** Tek bir sensör ve tek bir eyleyiciyle çalışan küçük bir çekirdek seçin; ek özellikleri çekirdek çalıştıktan sonra ekleyin. Arduino çalışmalarını derleyen bir incelemede bazı projelerin çok zor olması olumsuz sonuçlar arasında sayılıyor.[11]
2. **Önce simülasyonda kurun.** Devreyi ve kodu Tinkercad Circuits'te deneyin, gerçek bileşenleri sonra bağlayın.[12]
3. **Parça parça test edin.** Her sensörü ve her motoru ayrı, küçük bir programla tek başına deneyin; sonra birleştirin.
4. **Bağlantıları kaydedin.** Hangi bileşenin hangi pine bağlandığını bir tabloda tutun. Robotik dersindeki öğretmen adaylarının yaşadığı sorunlardan biri neyin hangi porta takıldığını unutmaktı.[10]
5. **Sunuma hazırlanın.** Sunum ayrıca puanlanır; çalışan bir gösteri, devre şeması ve kodun kısa bir açıklamasını hazırlayın.[5]

## Ders nasıl çalışılır?

**Hata önce kabloda aranır.** Booth ve arkadaşları, kullanıcıların bir sıcaklık sensörünü Arduino'ya bağlayıp okunan değeri LED'lerle göstermeye çalıştığı bir çalışmada ortaya çıkan sorunları inceledi. Görevi durduran hataların çoğu yanlış kurulan devreden kaynaklanıyordu ve katılımcılar bu sorunları sık sık yanlışlıkla program hatası sandı.[14] Bu yüzden bir şey çalışmadığında koda dokunmadan önce kabloları, pin numaralarını ve toprak (GND) bağlantısını kontrol etmek iyi bir alışkanlıktır.

**Zorlanmak normaldir.** Eğitsel robotik dersi alan öğretmen adayları iki temel zorluk tanımladı: tasarım adımlarında yapılan hatalar ve portlara bağlantı sorunları. Daha az dile getirilen zorluklar uygun kodu belirlemek ve programlama sürecinin karmaşıklığıydı; bir katılımcı özellikle DC motorlarda ve if, else if, else yapılarında kafasının karıştığını anlattı. Adaylar sorunları bireysel çabayla ve iç motivasyonlarını koruyarak aştı; gerektiğinde takım arkadaşlarından ve hocadan yardım istedi, çevrim içi kaynaklardan yararlandı. Deneyim kazandıkça robot tasarımı ve programlama öğrenmenin kolaylaştığını, dersin programlamaya karşı tutumlarını olumlu etkilediğini ve programlama becerilerini geliştirdiğini belirttiler.[10]

**Programlama zorluklarının kaynağı bilinir.** Giriş düzeyi programlamadaki yanılgılar üzerine yapılan araştırmaları derleyen Qian ve Lehman, öğrencilerin sözdizimi bilgisinde, kavramsal bilgide ve strateji bilgisinde zorlandığını gösterdi. Bu zorluklar sözdizimine yabancılık, doğal dil, matematik bilgisi, yanlış zihinsel modeller, strateji eksikliği, programlama ortamları ve öğretimle ilişkilidir.[15] Fiziksel programlamada bunlara devre de eklenir. Öte yandan somut bir cihazın adım adım hata ayıklanıp iyileştirilmesi, öğrencilerin programlama kavramlarını ve yazılım geliştirme sürecini daha iyi anlamasına yardım eder.[1]

**Uygulamalı çalışın.** Arduino ile fiziksel programlama etkinliklerine 6 gün katılan 26 fen bilgisi öğretmen adayı, programın bilgi, beceri ve deneyim kazandırdığını söyledi; yine de adayların yarısı (13 kişi) kendini bu konuda yeterli görmüyordu.[16] Kısa bir eğitim yetmediği için ders saatleri dışında da kartla çalışmak gerekir; izlence de 14 saatlik sınıf dışı çalışma öngörür.[5]

## Ara sınav öncesi kontrol listesi

Ara sınav, izlencenin ilk yedi haftasından sonra gelir.[5] Aşağıdakileri yapabiliyorsanız bu haftaların çekirdeğine hâkimsiniz:

- Robotu tanımlama; endüstriyel, hizmet ve eğitsel robotlara örnek verme
- Bir robotun mekanik, elektromekanik ve elektronik bileşenlerini ayırma
- Sensör ve motor çeşitlerini ve ne işe yaradıklarını sayma
- Kullanılan robot yazılımını kurup karta bir program yükleme
- Veri türlerini, değişkeni, sabiti ve diziyi kullanarak kısa bir program yazma
- if, else if, else ve switch ile karar yapısı kurma
- for ve while döngüleriyle tekrar eden bir işi programlama

## Bu rehberin derin yazıları

Bu yazı dersin haritasıdır. Her konu çözümlü örnekler ve alıştırmalarla ayrı bir yazıda ele alınıyor; yeni yazılar yayımlandıkça bu listeye bağlantı olarak eklenecek. Konular izlencedeki haftalara karşılık gelir:[5]

1. [Arduino Dijital ve Analog Giriş Çıkış](https://bote.web.tr/blog/arduino-dijital-analog-giris-cikis): dijital ve analog giriş ve çıkış, PWM, LED direnci, buton ve potansiyometre
2. [Arduino Programlama: Değişken, Koşul, Döngü ve Fonksiyon](https://bote.web.tr/blog/arduino-degisken-kosul-dongu-fonksiyon): veri türleri, sabit ve dizi, if ve switch, döngüler, fonksiyonlar ve seri monitörle hata ayıklama
3. Robot nedir? Yapısı, bileşenleri ve türleri
4. Sensör ve motor çeşitleri
5. Tinkercad Circuits ile Arduino simülasyonu
6. Robot tabanlı proje geliştirme

## Sonuç

Fiziksel Programlama, BÖTE programının 7. yarıyılında okutulan ve yazılımla donanımı birleştiren bir alan eğitimi dersidir.[4] Örnek izlencede dersin ilk yarısı robotları, sensör ve motorları ve programlamanın temel yapılarını; ikinci yarısı fonksiyonları, hata ayıklamayı ve notun en büyük parçası olan robot tabanlı projeyi kapsar.[5] Dersi iyi bitirmenin yolu, yapıları küçük devrelerde tek tek denemek, bir şey çalışmadığında önce devreyi kontrol etmek ve projeye erken başlamaktır.[14] Bu ders, mezunun okulda Bilişim Teknolojileri ve Yazılım dersinde robotik kartlarla yapacağı etkinliklerin de temelidir.[7]

## Sık Sorulan Sorular

### Fiziksel programlama nedir?

Fiziksel programlama, yazılımla donanımı birleştirerek gerçek dünyayı algılayan ve ona tepki veren etkileşimli sistemler kurmaktır. Program ışık, ses ya da sıcaklık gibi değerleri sensörlerden okur, bir karar verir ve LED, motor ya da hoparlör gibi eyleyicileri sürer. Arduino, Raspberry Pi ve BBC micro:bit bu iş için öğrencilere yönelik yaygın kartlardır. İngilizcede physical computing olarak geçer.

### Fiziksel Programlama dersi hangi yarıyılda okutulur?

YÖK'ün 2018 tarihli Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programında ders 7. yarıyılda, yani dördüncü sınıfın ilk yarıyılında yer alır. Haftada 2 saat kuramsal ve 2 saat uygulamalı bir alan eğitimi dersidir; 3 kredi ve 5 AKTS değerindedir. Hacettepe Üniversitesi'nde BTE401 koduyla zorunlu ders olarak okutulur.

### Fiziksel Programlama dersinde hangi konular var?

YÖK'ün ders tanımına göre konular şunlardır: fiziksel programlama ve robotlar; robot yapısı ve mimarisi; robot türleri ve eğitsel amaçlı robotlar; fiziksel programlamada mekanik, elektromekanik ve elektronik bileşenler; fiziksel programlama yazılımları ve ortamları; fiziksel programlamada kullanılan yapılar; robot tabanlı proje geliştirme. Örnek bir izlencede bunlara sensör ve motorlar, veri türleri, koşullar, döngüler, fonksiyonlar ve hata giderme haftaları eşlik eder.

### Fiziksel programlama için hangi araçlar kullanılır?

Derslerde Arduino gibi mikrodenetleyici kartları ya da LEGO Mindstorms, Robotis Dream ve VEX IQ gibi eğitsel robot setleri kullanılır. Kartı kablolamadan önce Tinkercad Circuits gibi bir simülasyon ortamında devre kurup kod denemek mümkündür. Programlama blok tabanlı ortamlarla ya da Arduino dili ve Java gibi metin tabanlı dillerle yapılır; örnek izlencenin kaynak kitabı LEGO Mindstorms EV3 ile Java kullanır.

### Fiziksel Programlama dersi nasıl geçilir?

Örnek bir izlencede notun yüzde 40'ı proje ve sunumdan gelir; ara sınav yüzde 15, final yüzde 20'dir. Bu yüzden projeye erken başlamak, dönem boyunca kartla düzenli uygulama yapmak ve ara sınava kadar işlenen robot, sensör, motor ve temel programlama yapılarını kavramak gerekir. Araştırmalar fiziksel programlamada hataların çoğunun devreden kaynaklandığını gösterdiği için bir şey çalışmadığında önce kablolar kontrol edilmelidir.

### BÖTE mezunu fiziksel programlamayı nerede kullanır?

Bilişim teknolojileri öğretmeni ortaokulda Bilişim Teknolojileri ve Yazılım dersini verir. MEB'in 2025 tarihli Türkiye Yüzyılı Maarif Modeli öğretim programı robot kitlerini öğretim materyalleri arasında sayar ve 6. sınıfta blok tabanlı ortamda hazırlanan bir yazılımın robotik kartla bağlanıp bir LED'i yakması ya da bir servo motoru hareket ettirmesi gibi etkinlikler önerir. Fiziksel Programlama dersi bu etkinliklerin bilgi temelini verir.

## Kaynaklar

1. Hodges, S., Sentance, S., Finney, J. ve Ball, T. (2020). Physical computing: A key element of modern computer science education. Computer, 53(4), 20–30. https://doi.org/10.1109/MC.2019.2935058 (EN, erişim: 2026-10-04)
2. Przybylla, M. ve Romeike, R. (2014). Physical computing and its scope: Towards a constructionist computer science curriculum with physical computing. Informatics in Education, 13(2), 225–240. https://doi.org/10.15388/infedu.2014.14 (EN, erişim: 2026-10-04)
3. Arduino (2026). What is Arduino?. Arduino Documentation. https://docs.arduino.cc/learn/starting-guide/whats-arduino/ (EN, erişim: 2026-10-04)
4. Yükseköğretim Kurulu (2018). Bilgisayar ve Öğretim Teknolojileri Öğretmenliği lisans programı. YÖK, Öğretmen Yetiştirme Lisans Programları. https://egitim.yok.gov.tr/tr/document/2432 (TR, erişim: 2026-10-04)
5. Hacettepe Üniversitesi (2024). BTE401 Fiziksel Programlama ders bilgi paketi (Bilgisayar ve Öğretim Teknolojileri Öğretmenliği). Hacettepe Üniversitesi Bologna Bilgi Sistemi. https://bilsis.hacettepe.edu.tr/oibs/bologna/progCourseDetails.aspx?curCourse=78274&lang=tr (TR, erişim: 2026-10-04)
6. Lu, W. (2016). Beginning robotics programming in Java with LEGO Mindstorms. Apress, Berkeley. https://doi.org/10.1007/978-1-4842-2005-4 (EN, erişim: 2026-10-04)
7. Millî Eğitim Bakanlığı (2025). Bilişim Teknolojileri ve Yazılım Dersi Öğretim Programı (5 ve 6. Sınıflar), Türkiye Yüzyılı Maarif Modeli. MEB, Talim ve Terbiye Kurulu Başkanlığı. https://tymm.meb.gov.tr/assets/pdf/bilisim-teknolojileri-ve-yazilim-tegm.pdf (TR, erişim: 2026-10-04)
8. International Federation of Robotics (2026). Service robots. IFR. https://ifr.org/service-robots (EN, erişim: 2026-10-04)
9. International Federation of Robotics (2026). Industrial robots. IFR. https://ifr.org/industrial-robots (EN, erişim: 2026-10-04)
10. Küçük, S. ve Şişman, B. (2018). Pre-service teachers' experiences in learning robotics design and programming. Informatics in Education, 17(2), 301–320. https://doi.org/10.15388/infedu.2018.16 (EN, erişim: 2026-10-04)
11. Marín-Marín, J.-A., García-Tudela, P. A. ve Duo-Terrón, P. (2024). Computational thinking and programming with Arduino in education: A systematic review for secondary education. Heliyon, 10(8), e29177. https://doi.org/10.1016/j.heliyon.2024.e29177 (EN, erişim: 2026-10-04)
12. Autodesk (2026). Tinkercad Circuits. Autodesk Tinkercad. https://www.tinkercad.com/circuits (TR, erişim: 2026-10-04)
13. Altıok, S. ve Yükseltürk, E. (2018). Pre-service information technologies teachers' views on computer programming tools for K-12 level. International Journal of Computer Science Education in Schools, 2(3). https://doi.org/10.21585/ijcses.v2i3.28 (EN, erişim: 2026-10-04)
14. Booth, T., Stumpf, S., Bird, J. ve Jones, S. (2016). Crossed wires: Investigating the problems of end-user developers in a physical computing task. Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems, 3485–3497, ACM. https://doi.org/10.1145/2858036.2858533 (EN, erişim: 2026-10-04)
15. Qian, Y. ve Lehman, J. (2017). Students' misconceptions and other difficulties in introductory programming: A literature review. ACM Transactions on Computing Education, 18(1), 1–24. https://doi.org/10.1145/3077618 (EN, erişim: 2026-10-04)
16. Sarı, U. ve Yazıcı, Y. Y. (2020). STEM eğitimi ve Arduino uygulamaları hakkında öğretmen adaylarının görüşleri. SDU International Journal of Educational Studies, 7(2), 246–261. https://doi.org/10.33710/sduijes.701220 (TR, erişim: 2026-10-04)
