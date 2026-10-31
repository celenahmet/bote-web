---
title: "Bit ve Byte Nedir? Bellek Birimleri ve Donanım"
description: "Bit ve byte nedir, 1 KB kaç byte? Bellek birimleri sıralaması (KB, MB, GB, TB), donanım ve yazılım, giriş-çıkış birimleri ve depolama; BTY 5. sınıf konusu."
imageAlt: "Bit ve Byte Nedir? Bellek Birimleri ve Donanım"
date: 2026-10-31
category: egitim-teknolojileri
type: rehber
tags: [bit byte nedir, bellek birimleri, 1 KB kaç byte, donanım ve yazılım, BTY 5. sınıf]
summary:
  - "**Bit** bilgisayardaki en küçük veri birimi: 0 ya da 1. **1 byte = 8 bit**."
  - "Bellek birimleri küçükten büyüğe: bit, byte, KB, MB, GB, TB."
  - "Okulda genelde **1 KB = 1024 byte** öğretilir; uluslararası standartta 1024 için **kibibyte (KiB)**, 1000 için kilobyte (kB) kullanılır."
  - "**Donanım** bilgisayarın fiziksel parçaları, **yazılım** onu çalıştıran programlar."
  - "BTY 5. sınıfta **BTY.5.1.5** \"Bilgisayar sistemlerini çözümleyebilme\" kazanımı."
faq:
  - q: "Bit nedir?"
    a: "Bilgisayardaki en küçük veri birimidir; yalnız 0 ya da 1 değerini alır. İngilizce binary digit (ikili basamak) sözcüklerinden türemiştir."
  - q: "Byte nedir?"
    a: "8 bitten oluşan veri birimidir. Bir harf ya da rakam genellikle 1 byte ile saklanır."
  - q: "1 KB kaç byte?"
    a: "Okul kitaplarında ve bellek hesaplarında genelde 1024 byte. Uluslararası standartta 1024 byte için kibibyte (KiB), 1000 byte için kilobyte (kB) adı kullanılır."
  - q: "Bellek birimleri sıralaması nasıl?"
    a: "Küçükten büyüğe: bit, byte, kilobyte (KB), megabyte (MB), gigabyte (GB), terabyte (TB), petabyte (PB). Her basamak bir öncekinin yaklaşık bin (1024) katıdır."
  - q: "Donanım ve yazılım farkı nedir?"
    a: "Donanım bilgisayarın dokunulabilen fiziksel parçalarıdır (işlemci, bellek, klavye); yazılım donanımı çalıştıran programlardır (işletim sistemi, uygulamalar)."
  - q: "Giriş ve çıkış birimleri nelerdir?"
    a: "Giriş birimleri veri alır (klavye, fare, mikrofon), çıkış birimleri sonucu verir (ekran, yazıcı, hoparlör). Dokunmatik ekran gibi bazı araçlar ikisini birden yapar."
sources:
  - id: bty-program
    kind: resmi
    title: "Bilişim Teknolojileri ve Yazılım Dersi Öğretim Programı (5 ve 6. Sınıflar), Türkiye Yüzyılı Maarif Modeli 2025"
    publisher: "Millî Eğitim Bakanlığı Talim ve Terbiye Kurulu Başkanlığı"
    year: 2025
    url: "https://mufredat.meb.gov.tr/Dosyalar/202591115327350-bili%C5%9Fim%20d%C3%B6p.pdf"
    lang: tr
    accessed: 2026-10-31
    note: "Temalar, öğrenme çıktıları, ders saatleri ve yüzdeleri; öğrenme-öğretme uygulamaları ve değerlendirme önerileri."
  - id: tymm-bty
    kind: resmi
    title: "Bilişim Teknolojileri ve Yazılım Dersi (Türkiye Yüzyılı Maarif Modeli öğretim programı sayfası)"
    publisher: "Millî Eğitim Bakanlığı"
    year: 2026
    url: "https://tymm.meb.gov.tr/ogretim-programlari/bilisim-teknolojileri-ve-yazilim-dersi/6"
    lang: tr
    accessed: 2026-10-31
    note: "Programın resmî sayfası; temalara göre içerik."
  - id: nist-ikili
    kind: resmi
    title: "Prefixes for binary multiples"
    publisher: "National Institute of Standards and Technology (NIST)"
    year: 2000
    url: "https://physics.nist.gov/cuu/Units/binary.html"
    lang: en
    accessed: 2026-10-31
    note: "IEC'nin 1998'de kabul ettiği ikili önekler: kibi (2^10 = 1024), mebi, gibi; SI önekleri (kilo = 1000) ile farkı."
  - id: shannon1948
    kind: makale
    author: "Shannon, C. E."
    title: "A mathematical theory of communication"
    publisher: "Bell System Technical Journal, 27(3), 379–423"
    year: 1948
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    lang: en
    accessed: 2026-10-31
    note: "Bilgi kuramının kurucu makalesi; \"bit\" (binary digit) sözcüğünü J. W. Tukey'e atfederek bilginin ölçü birimi olarak kullanır."
  - id: iste-ogrenci
    kind: web
    title: "ISTE Standards: For Students"
    publisher: "International Society for Technology in Education (ISTE)"
    year: 2016
    url: "https://iste.org/standards/students"
    lang: en
    accessed: 2026-10-31
    note: "Öğrenciler için dijital vatandaş, bilgi oluşturucu, bilgi işlemsel düşünür gibi yedi rol."
  - id: digcomp22
    kind: rapor
    author: "Vuorikari, R., Kluzer, S. ve Punie, Y."
    title: "DigComp 2.2: The Digital Competence Framework for Citizens"
    publisher: "Publications Office of the European Union"
    year: 2022
    url: "https://doi.org/10.2760/115376"
    lang: en
    accessed: 2026-10-31
    note: "Bilgi ve veri okuryazarlığı, iletişim ve iş birliği, dijital içerik üretimi, güvenlik ve problem çözme alanları."
---

Bit ve byte, Bilişim Teknolojileri ve Yazılım (BTY) dersinin 5. sınıfta işlenen "bilgisayar sistemleri" konusunun temel kavramları. Telefonun "64 GB", bir fotoğrafın "3 MB" olması bu birimlerle ölçülüyor. Bu yazı bit ve byte'ı, bellek birimlerini, donanım ve yazılımı ve depolama birimlerini programın kazanımları ve uluslararası standartla anlatıyor.[@bty-program]

## BTY programında bilgisayar sistemleri

5. sınıfın ilk temasındaki **BTY.5.1.5 "Bilgisayar sistemlerini çözümleyebilme"** öğrenme çıktısında öğrenciler bilgisayar sistemlerinin temel bileşenlerini belirliyor. Konu "Sizce bilgisayar hangi bölümlerden oluşuyor?" sorusuyla açılıyor; öğretmen donanım, yazılım, bit ve byte kavramlarını tanımlıyor ve bu terimlerin verinin nasıl depolandığı ve işlendiğiyle ilişkisini anlatıyor.[@bty-program] Yılın tamamı için [BTY 5. sınıf konuları](/blog/bty-5-sinif-konulari).

## Bit nedir?

**Bit**, bilgisayardaki en küçük veri birimidir ve yalnız iki değer alır: **0 ya da 1**. Bilgisayarın içindeki her şey (yazı, resim, ses, video) sonunda bu iki değerin dizilerine dönüşür. Sözcük İngilizce "binary digit" (ikili basamak) ifadesinden geliyor; bilgi kuramının kurucu makalesinde Claude Shannon bu adı J. W. Tukey'e atfederek bilginin ölçü birimi olarak kullandı.[@shannon1948]

Bir bit iki durum gösterebilir (açık/kapalı gibi). İki bit 4, üç bit 8, sekiz bit 256 farklı durum gösterebilir. Bu yüzden bit sayısı arttıkça saklanabilecek bilgi katlanarak büyür.

## Byte nedir?

**Byte**, 8 bitten oluşan veri birimidir: **1 byte = 8 bit**.[@nist-ikili] Bir harf ya da rakam genellikle 1 byte ile saklanır. Dosya büyüklükleri ve bellek kapasiteleri byte ve katlarıyla ifade edilir.

Program bu noktada dijital ölçü birimlerini günlük hayattaki ölçü birimlerine benzetiyor: metre ve kilogram anlatımında kullanılan "merdiven" tahtaya çizilip dijital ölçü birimleri küçükten büyüğe sıralanıyor.[@bty-program]

## Bellek birimleri sıralaması

| Birim | Simge | Okulda öğretilen değer |
|---|---|---|
| Bit | b | 0 ya da 1 |
| Byte | B | 8 bit |
| Kilobyte | KB | 1024 byte |
| Megabyte | MB | 1024 KB |
| Gigabyte | GB | 1024 MB |
| Terabyte | TB | 1024 GB |
| Petabyte | PB | 1024 TB |

**1024 mü, 1000 mi?** Okul kitaplarında ve bellek hesaplarında birimler 1024 (2 üzeri 10) katıyla büyür. Ama uluslararası standartta durum biraz farklı: Uluslararası Elektroteknik Komisyonu (IEC) 1998'de ikili katlar için ayrı önekler kabul etti. Buna göre **1 kibibyte (KiB) = 1024 byte**, **1 kilobyte (kB) = 1000 byte**; aynı şekilde 1 MiB = 1.048.576 byte, 1 MB = 1.000.000 byte.[@nist-ikili]

Bu fark günlük hayatta görülüyor: üreticiler disk kapasitesini çoğu zaman 1000'li birimlerle yazarken bazı işletim sistemleri 1024'lü birimlerle gösterir, bu yüzden "1 TB" diskte daha az alan görünebilir. Okul sınavında aksi söylenmedikçe 1024 esas alınır.

## Donanım ve yazılım

Program donanımı bilgisayarın fiziksel bileşenleri (işlemci, bellek, depolama birimleri gibi) olarak tanımlıyor; öğrenciler donanım ve yazılım kavramlarını oyunlaştırılmış bir eşleştirme etkinliğiyle pekiştiriyor.[@bty-program]

- **Donanım:** Dokunulabilen parçalar. İç donanım: işlemci, anakart, RAM bellek. Dış donanım: ekran, yazıcı, hoparlör.
- **Yazılım:** Donanımı çalıştıran programlar. İşletim sistemi bilgisayarı yönetir; uygulama yazılımları (kelime işlemci, tarayıcı, oyun) belirli işler yapar.

"Dışında ne var, içinde ne var?" sunumuyla iç ve dış donanım birimleri gruplandırılıyor.[@bty-program]

## Giriş ve çıkış birimleri

Program bazı araçların veri girişi, bazılarının veri çıkışı, bazılarının ikisi için de kullanıldığını anlatıyor; sınıfta girişte "deve", çıkışta "cüce" oyunuyla birimler ilişkilendiriliyor.[@bty-program]

| Tür | Örnekler |
|---|---|
| Giriş birimi | Klavye, fare, mikrofon, kamera, tarayıcı |
| Çıkış birimi | Ekran, yazıcı, hoparlör, kulaklık |
| Giriş-çıkış | Dokunmatik ekran, USB bellek, modem |

## Depolama birimleri

Programda öğretmen sabit disk, SSD, USB bellek ve bulut depolama gibi yöntemlerin ne olduğunu, nasıl çalıştığını ve hangi durumlarda kullanıldığını anlatıyor; öğrenciler bu birimleri **veri erişim hızı, kapasite ve kullanım amacı** açısından karşılaştırıyor.[@bty-program]

| Depolama | Özellik |
|---|---|
| Sabit disk (HDD) | Dönen disk; büyük kapasite, görece yavaş |
| SSD | Hareketli parça yok; hızlı, sessiz |
| USB bellek | Taşınabilir, küçük kapasite |
| Bulut depolama | İnternet üzerinden; her yerden erişim, bağlantı gerekir |

## Piksel etkinliği: veri nasıl sıkıştırılır?

Programın en keyifli etkinliklerinden biri piksel çalışma kâğıdı: gruplar boş bir matrisin kutucuklarını bir kurala göre boyuyor, kâğıtlar birleşince saklı resim ortaya çıkıyor. Bu etkinlikte programcıların verileri sıkıştırmak için kullandığı yöntemlerden biri olan **dizi boyu kodlaması** (aynı renkteki ardışık kutucukları "5 beyaz, 3 siyah" gibi saymak) uygulanıyor; bu yöntem olmasaydı resimleri bir yerden başka bir yere göndermenin zor olacağı anlatılıyor.[@bty-program]

ISTE'nin öğrenci standartları da veriyi temsil etme ve soyutlamayı "bilgi işlemsel düşünür" rolünün parçası sayıyor;[@iste-ogrenci] DigComp 2.2 ise cihaz ve yazılımları tanımayı dijital yetkinliğin temeli olarak görüyor.[@digcomp22] Programın resmî sayfasında temaya göre içerikler bulunuyor.[@tymm-bty]
