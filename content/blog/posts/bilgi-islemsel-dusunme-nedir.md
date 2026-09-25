---
title: "Bilgi İşlemsel Düşünme Nedir? Tanım, Bileşenler ve Örnekler"
description: "Bilgi işlemsel düşünme (computational thinking) nedir, hangi becerilerden oluşur ve okullarda nasıl öğretilir? Wing'in tanımından Avrupa'daki uygulamalara rehber."
date: 2026-09-25
category: egitim-teknolojileri
tags: [bilgi işlemsel düşünme, computational thinking, kodlama, problem çözme, bilgisayar bilimi]
summary:
  - "**Bilgi işlemsel düşünme**, problemleri bir bilgisayarın da uygulayabileceği adımlarla çözmeye yönelik bir düşünme biçimidir."
  - "Kavramı 2006'da Jeannette Wing yaygınlaştırdı: ona göre bu beceri yalnızca bilgisayar bilimcilere değil herkese gereklidir."
  - "Başlıca bileşenler: problemi parçalara ayırma, soyutlama, örüntü bulma, algoritma tasarlama ve hata ayıklama."
  - "Kodlama bu becerinin en görünür uygulamasıdır ama tek yolu değildir."
faq:
  - q: "Bilgi işlemsel düşünme nedir?"
    a: "Problemleri, bir bilgisayarın ya da insanın uygulayabileceği adımlarla çözülebilir hâle getirmeye yönelik düşünme biçimidir. İngilizcede computational thinking olarak geçer."
  - q: "Bilgi işlemsel düşünmenin bileşenleri nelerdir?"
    a: "Alanyazında en sık anılan bileşenler problemi parçalara ayırma (ayrıştırma), soyutlama, örüntü tanıma, algoritma tasarlama ve hata ayıklamadır. Grover ve Pea'nın derlemesi koşullu mantık, yineleme ve verimlilik gibi öğeleri de sayar."
  - q: "Bilgi işlemsel düşünme ile kodlama aynı şey mi?"
    a: "Hayır. Kodlama bu düşünme biçiminin en görünür uygulamasıdır; ancak problem ayrıştırma ve algoritma tasarlama bilgisayarsız etkinliklerle de öğretilebilir."
  - q: "Bilgi işlemsel düşünme kavramını kim ortaya attı?"
    a: "Kavram, Jeannette Wing'in 2006'da Communications of the ACM dergisinde yayımlanan kısa makalesiyle yaygınlaştı. Wing, bu becerinin okuma, yazma ve aritmetik gibi her çocuğun analitik yeteneğine eklenmesi gerektiğini savundu."
  - q: "Bilgi işlemsel düşünme hangi derste öğretilir?"
    a: "Türkiye'de ortaokuldaki Bilişim Teknolojileri ve Yazılım dersi problem çözme ve programlamaya yer verir. Avrupa'da ise bilişim bazı ülkelerde ayrı ders, bazılarında diğer derslere entegre biçimde öğretiliyor."
  - q: "Bilgi işlemsel düşünme nasıl geliştirilir?"
    a: "Günlük problemleri adımlara bölmek, blok tabanlı programlama araçlarıyla küçük projeler yapmak ve yapılan hataları sistemli biçimde ayıklamak etkili yollardır. Önemli olan sonucu değil süreci tartışmaktır."
sources:
  - id: wing2006
    author: "Wing, J. M."
    title: "Computational Thinking"
    publisher: "Communications of the ACM, 49(3), 33–35"
    year: 2006
    url: "https://doi.org/10.1145/1118178.1118215"
    lang: en
    accessed: 2026-09-25
  - id: grover2013
    author: "Grover, S. ve Pea, R."
    title: "Computational Thinking in K–12: A Review of the State of the Field"
    publisher: "Educational Researcher, 42(1), 38–43"
    year: 2013
    url: "https://doi.org/10.3102/0013189X12463051"
    lang: en
    accessed: 2026-09-25
  - id: k12cs
    title: "K–12 Computer Science Framework"
    publisher: "K–12 Computer Science Framework Steering Committee"
    year: 2016
    url: "https://k12cs.org"
    lang: en
    accessed: 2026-09-25
  - id: eurydice-inf
    author: "European Commission / EACEA / Eurydice"
    title: "Informatics Education at School in Europe"
    publisher: "Publications Office of the European Union"
    year: 2022
    url: "https://op.europa.eu/en/publication-detail/-/publication/c2fcfd3c-438e-11ed-92ed-01aa75ed71a1/language-en"
    lang: en
    accessed: 2026-09-25
  - id: bty-program
    title: "Ortaokul ve İmam Hatip Ortaokulu Bilişim Teknolojileri ve Yazılım Dersi (5 ve 6. Sınıflar) Öğretim Programı"
    publisher: "MEB Talim ve Terbiye Kurulu Başkanlığı"
    year: 2018
    url: "https://mufredat.meb.gov.tr/Dosyalar/2018124103559587-Bili%C5%9Fim%20Teknolojileri%20ve%20Yaz%C4%B1l%C4%B1m%205-6.%20S%C4%B1n%C4%B1flar.pdf"
    lang: tr
    accessed: 2026-09-25
  - id: resnick2009
    author: "Resnick, M. vd."
    title: "Scratch: Programming for All"
    publisher: "Communications of the ACM, 52(11), 60–67"
    year: 2009
    url: "https://doi.org/10.1145/1592761.1592779"
    lang: en
    accessed: 2026-09-25
---

"Kodlama öğrenmek" son yıllarda eğitimin en popüler hedeflerinden biri oldu. Ancak eğitim araştırmacıları kodlamanın arkasındaki daha genel bir beceriye dikkat çekiyor: **bilgi işlemsel düşünme** (*computational thinking*). Bu yazıda kavramın ne olduğunu, hangi bileşenlerden oluştuğunu ve okullarda nasıl öğretildiğini açıklıyoruz.

## Kavramın kısa hikâyesi

Kavramı geniş kitlelere tanıtan metin, Jeannette Wing'in 2006'da *Communications of the ACM* dergisinde yayımlanan kısa makalesidir. Wing'e göre bilgi işlemsel düşünme yalnızca bilgisayar bilimcilerin değil herkesin kullanabileceği temel bir beceridir. Okuma, yazma ve aritmetiğin yanına her çocuğun analitik yeteneği olarak eklenmelidir.[@wing2006] Wing bu düşünme biçimini programlamayla sınırlamaz: bir problemi yeniden formüle etmek, uygun soyutlamayı seçmek ve karmaşık bir sistemi parçalarına ayırmak da bu kapsamdadır.

## Bileşenler

Grover ve Pea'nın okul öncesinden liseye kadar olan alanyazını derleyen çalışması, bilgi işlemsel düşünmenin öğelerini şöyle sıralar: soyutlama ve örüntü genellemesi, bilginin sistemli işlenmesi, sembol sistemleri, algoritmik akış kontrolü, yapılandırılmış problem ayrıştırma, yinelemeli düşünme, koşullu mantık, verimlilik ve hata ayıklama.[@grover2013] Okullarda bu liste genellikle beş temel beceriye indirgenir:

| Beceri | Ne demek? | Sınıf örneği |
|---|---|---|
| Ayrıştırma | Problemi küçük parçalara bölmek | Bir oyunu karakter, puan ve seviye bölümlerine ayırmak |
| Soyutlama | Gereksiz ayrıntıyı atıp özü bulmak | Metro haritasının gerçek mesafeleri değil bağlantıları göstermesi |
| Örüntü tanıma | Benzerlikleri görmek | Tekrarlayan hareketleri döngüyle yazmak |
| Algoritma | Adım adım çözüm yazmak | Bir robotu labirentten çıkaracak komut dizisi |
| Hata ayıklama | Yanlışı bulup düzeltmek | Beklenmeyen sonucu adım adım izlemek |

ABD'deki K–12 Bilgisayar Bilimi Çerçevesi de benzer bir yaklaşımla soyutlama geliştirme, hesaplamalı ürünler oluşturma ve bu ürünleri test edip iyileştirme gibi uygulamaları öne çıkarır.[@k12cs]

## Okullarda nasıl öğretiliyor?

Avrupa'da okul bilişim eğitimini karşılaştıran Eurydice raporu, bilişimin bazı sistemlerde ayrı ders, bazılarında ise matematik ve fen gibi derslere entegre biçimde öğretildiğini gösteriyor. Sistemlerin üçte ikisinden fazlası programlarını güncelleyen reformlar yürütüyor.[@eurydice-inf] Türkiye'de ise ortaokuldaki **Bilişim Teknolojileri ve Yazılım** dersinin öğretim programı, problem çözme ve programlamaya ayrı bir yer verir.[@bty-program] Ders hakkında ayrıntı için [BTY dersi rehberimize](/blog/bilisim-teknolojileri-ve-yazilim-dersi) bakabilirsiniz.

## Sınıfta örnek bir etkinlik: sandviç algoritması

Bilgi işlemsel düşünmeyi öğretmek için her zaman bilgisayar gerekmez. Sık kullanılan bir etkinlikte öğrencilerden bir sandviç hazırlamanın adımlarını yazmaları istenir. Öğretmen yazılan adımları harfiyen uygular: "Ekmeğe peynir koy" denildiğinde paketi açmadan peyniri ekmeğin üzerine bırakır. Sınıf gülerken önemli bir ders çıkar: bir algoritma, uygulayıcının hiçbir şeyi tahmin etmesine gerek bırakmayacak kadar açık olmalıdır.

Etkinlik sonrasında öğrenciler adımlarını yeniden yazar. Bu sırada farkında olmadan beş beceriyi birlikte kullanırlar. Görevi alt adımlara ayırırlar (ayrıştırma), gereksiz ayrıntıyı atarlar (soyutlama), tekrar eden işleri fark ederler (örüntü tanıma), adımları sıralarlar (algoritma) ve hataları düzeltirler (hata ayıklama). Aynı mantık daha sonra blok tabanlı programlama araçlarına taşınabilir; Scratch gibi araçlar öğrencilerin kendi fikirlerini proje hâline getirmesine olanak tanır.[@resnick2009]

## Nasıl değerlendirilir?

Değerlendirmede yalnızca çalışan ürüne bakmak yanıltıcı olabilir. Bir öğrencinin kodu çalışıyor olabilir ama nedenini açıklayamayabilir. Bu yüzden öğretmenler süreç odaklı araçlar kullanır:

- **Düşünme günlükleri:** Öğrenci problemi nasıl parçalara ayırdığını ve nerede takıldığını yazar.
- **Kod okuma soruları:** Verilen kısa bir programın ne yapacağını tahmin etmek, yazmaktan farklı bir beceri ölçer.
- **Eşli çalışma gözlemi:** Öğrencilerin hatayı nasıl tartıştığı, bilgi işlemsel düşünmenin en görünür göstergelerinden biridir.

## Tartışmalı noktalar

Kavramın popülerliği bazı soru işaretlerini de beraberinde getirdi. Grover ve Pea, tanım konusunda tam bir uzlaşı olmadığını ve bu becerinin nasıl ölçüleceğinin hâlâ açık bir araştırma sorusu olduğunu vurgular.[@grover2013] Kodlama etkinliklerinin kendiliğinden genel problem çözme becerisine dönüşeceğini varsaymak da doğru değildir. Öğretmenin rolü burada belirleyicidir: etkinliği yalnızca çalışan bir kodla bitirmek yerine öğrencinin nasıl düşündüğünü görünür kılmak gerekir.

## BÖTE ile ilişkisi

Bilgi işlemsel düşünme, BÖTE programlarının hem alan hem de öğretim boyutunu birleştiren konulardan biridir. BÖTE mezunu bir öğretmenden yalnızca programlama bilmesi değil, bu beceriyi farklı yaş gruplarına uygun etkinliklerle öğretebilmesi beklenir. Bölümün bu yönünü [BÖTE nedir?](/blog/bote-nedir) yazımızda ayrıntılı ele aldık.

## Sonuç

Bilgi işlemsel düşünme, kodlamadan daha geniş bir düşünme alışkanlığıdır. Problemi parçalara ayırmak, özü bulmak ve çözümü adım adım test etmek, bilgisayar başında olsun ya da olmasın her öğrencinin işine yarar.
