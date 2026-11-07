---
title: "EVREN Nedir? Yerli Yapay Zeka Platformu"
url: https://bote.web.tr/blog/evren-nedir
author: BÖTE Editör Ekibi
published: 2026-11-07
updated: 2026-11-07
category: Eğitim Teknolojileri
description: "EVREN nedir? SSB'nin e-Devlet ile girilen yerli yapay zekâ platformu: veri etiketleme, H200 kümesinde model eğitimi, dil modeli API'si, kredi sistemi, veri etiği."
---

# EVREN Nedir? Yerli Yapay Zeka Platformu

> EVREN nedir? SSB'nin e-Devlet ile girilen yerli yapay zekâ platformu: veri etiketleme, H200 kümesinde model eğitimi, dil modeli API'si, kredi sistemi, veri etiği.

Yazan: BÖTE Editör Ekibi · Yayın: 2026-11-07 · Güncelleme: 2026-11-07 · 7 dk okuma · https://bote.web.tr/blog/evren-nedir

## Özet

- EVREN, Cumhurbaşkanlığı Savunma Sanayii Başkanlığı (SSB) bünyesinde geliştirilen **uçtan uca yerli yapay zekâ (MLOps) platformudur**. Amacı yapay zekâ geliştirme süreçlerini teknik düzeyde desteklemek ve bu alanda **nitelikli insan kaynağını** artırmaktır.
- Platforma **evren.ssyz.org.tr** adresinden, **e-Devlet kimlik doğrulamasıyla** giriliyor.
- Veri etiketleme, SAM 3 ve YOLO ile ön etiketleme, **64 NVIDIA H200 GPU**'lu kümede model eğitimi, açık ağırlıklı dil modelleri için **OpenAI uyumlu API** ve model paylaşımı tek çatı altında.
- İşler platformun kredisi **CR** ile yürüyor: eğitim ve çıkarım harcatıyor, etiketleme, doğrulama ve paylaşım kazandırıyor. Yarıda kalan işin kredisi iade ediliyor.
- Eğitim araştırmacısı için asıl konu veri: sınıf görüntüsü, ses ve öğrenci metni **kişisel veridir**; yüklemeden önce etik kurul, izin ve anonimleştirme planı gerekir.

Eğitim teknolojileri alanında yapay zekâ çalışmak isteyen bir lisansüstü öğrencinin önündeki iki engel çoğunlukla aynıdır: etiketli veri ve güçlü bir grafik işlemci. Cumhurbaşkanlığı Savunma Sanayii Başkanlığı'nın (SSB) EVREN platformu, bu iki engeli e-Devlet ile girilen tek bir yerde ele alıyor. Bu yazı EVREN'in ne olduğunu, nasıl giriş yapıldığını, platformun bileşenlerini, kredi sistemini ve bir eğitim araştırmacısının platformu kullanmadan önce düşünmesi gereken veri ve etik sorularını resmî kaynaklara dayanarak anlatıyor.

## EVREN nedir?

EVREN, SSB bünyesinde geliştirilen uçtan uca yerli bir yapay zekâ platformudur. Platformun kendi tanımına göre veri etiketleme, ön etiketleme, 64 NVIDIA H200 grafik işlemcisi (GPU) üzerinde dağıtık model eğitimi, çıkarım ve model paylaşımı tek çatı altında toplanıyor; bütün akış Türkçe arayüzle ve "egemen altyapı" ile sunuluyor.[1] Egemen altyapı, verinin ve hesaplamanın yurt dışındaki bir bulut sağlayıcısına gitmeden ülke içindeki donanımda işlenmesi anlamına geliyor.

Platformun amacı Necmettin Erbakan Üniversitesi'nin 24 Haziran 2026'da yayımladığı duyuruda açıkça yazıyor: EVREN, yapay zekâ geliştirme süreçlerinin teknik düzeyde desteklenmesi ve bu alanda **nitelikli insan kaynağı kapasitesinin artırılması** amacıyla geliştirilmiş uçtan uca bir MLOps platformudur.[2] Bu ikinci amaç, platformu yalnız savunma sanayii için değil, yapay zekâ öğrenen ve araştıran herkes için ilgili kılıyor. Duyurunun bir üniversitenin enstitü sayfasında yayımlanması da hedef kitlenin lisansüstü öğrencileri ve araştırmacıları kapsadığını gösteriyor.

## MLOps ne demek, EVREN bu döngünün neresinde?

MLOps (machine learning operations), makine öğrenmesi modellerinin geliştirilmesini ve kullanıma alınmasını bir döngü olarak ele alan çalışma düzenidir. Kreuzberger, Kühl ve Hirschl alanyazın taraması, araç incelemesi ve uzman görüşmelerine dayanarak MLOps'u veri, model ve kodun birlikte yönetildiği; otomasyon, sürümleme, izlenebilirlik ve sürekli eğitim ilkelerine dayanan bir yaklaşım olarak tanımlıyor.[3] Bu tanımda bir modelin yaşamı veriyle başlıyor: veri toplanıyor ve etiketleniyor, model eğitiliyor, sonuçlar ölçülüyor, model kullanıma açılıyor ve yeni veriyle yeniden eğitiliyor.

Araştırmacının gündelik deneyiminde bu adımlar genellikle dağınıktır: etiketleme bir araçta, eğitim bir sunucuda ya da kişisel bilgisayarda, deney kayıtları bir tabloda tutulur. EVREN'in "uçtan uca" iddiası bu dağınıklığı tek bir arayüzde toplamak: veri setleri, modeller, eğitim süreçleri ve projeler aynı hesabın altında duruyor, eğitim metrikleri canlı izlenebiliyor.[1][4] Böylece bir çalışmanın hangi veriyle, hangi ayarlarla ve hangi modelle yapıldığı izlenebilir kalıyor; bu, Kreuzberger ve arkadaşlarının MLOps ilkeleri arasında saydığı izlenebilirlik ve sürümleme gereksinimine karşılık geliyor.[3]

## EVREN'e kimler, nasıl giriş yapabilir?

Duyuruya göre platforma evren.ssyz.org.tr adresinden erişiliyor ve sisteme **e-Devlet kapısı üzerinden kimlik doğrulamasıyla** giriliyor.[2] Duyurunun ekindeki bilgilendirme belgesi giriş adımlarını şöyle veriyor:[4]

1. evren.ssyz.org.tr adresine gidilir.
2. Ana sayfadaki "e-Devlet ile Giriş Yap" düğmesine tıklanır.
3. e-Devlet kapısında kimlik doğrulanır; ardından platformun genel istatistiklerini gösteren gösterge paneli açılır.

Herkese açık sayfalarda ayrıca bir kurum ya da öğrencilik şartı belirtilmiyor. Ancak giriş e-Devlet kimliğiyle yapıldığı için platformdaki hesap, yüklenen veri ve yapılan paylaşımlar kişinin kimliğine bağlı kalıyor. Bu, aşağıda ele alınan veri sorumluluğu açısından önemli.

## Platformun bileşenleri: etiketleme, ön etiketleme, eğitim

Bilgilendirme belgesi platformu beş bölümle tanıtıyor: gösterge paneli, veri setleri, modeller, eğitim süreçleri ve projeler.[4] Araştırmacı açısından üç bileşen öne çıkıyor.

**Veri etiketleme.** Gözetimli öğrenmede modelin öğrenebilmesi için verinin insanlar tarafından işaretlenmesi gerekir. EVREN'de görüntü için sınırlayıcı kutu, poligon, yönlü kutu ve anahtar nokta; metin için varlık adı (NER); ses için zaman aralığı (ses bölgesi) etiketi bulunuyor.[1] Eğitim araştırması açısından bu liste, sınıf içi video analizinden öğrenci yazılarının işlenmesine ve ders kayıtlarındaki konuşma sürelerinin ölçülmesine kadar yaygın veri türlerini kapsıyor.

**Ön etiketleme.** Etiketlemenin maliyetini azaltmak için platform SAM 3 ve YOLO modelleriyle ön etiketleme sunuyor: model görüntüyü önce kendisi işaretliyor, insan düzeltiyor.[1] YOLO, nesne tespitini görüntü üzerinde tek geçişte sınırlayıcı kutu ve sınıf olasılığı tahmini olarak kuran ve gerçek zamanlı hız sağlayan bir yaklaşım olarak tanıtılmıştı.[5] SAM ailesi ise görüntüdeki nesneleri piksel düzeyinde ayrıştıran bölütleme modelleridir. Ön etiketleme, insan etiketleyicinin yükünü azaltsa da modelin hatalarını etikete taşıma riski taşır; araştırmada etiketlerin bir kısmının bağımsız olarak kontrol edilmesi ve etiketleyiciler arası uyumun raporlanması bu yüzden önemini koruyor.

**Model eğitimi.** Eğitim kümesi 8 düğümde 8'er adet olmak üzere 64 NVIDIA H200 GPU'dan oluşuyor; düğümler saniyede 400 gigabite kadar veri aktaran InfiniBand NDR 400G ağıyla bağlı. İşler Slurm üzerinden Apptainer konteynerleriyle, araya sanallaştırma katmanı girmeden doğrudan donanımda (bare-metal) çalışıyor.[1] Slurm, Linux kümelerinde kaynak ayıran, işleri başlatan ve kuyruğu yöneten açık kaynak bir iş yöneticisidir.[6] Apptainer, bilimsel hesaplama kümeleri için geliştirilen Singularity konteynerlerinin bugünkü adıdır; yazılım ortamını tek bir dosyada taşıyarak bir deneyin başka bir makinede aynı koşullarla tekrarlanmasını kolaylaştırır.[7] Bu ikili, üniversitelerin yüksek başarımlı hesaplama merkezlerinde de yaygın kullanılan bir düzendir; dolayısıyla EVREN'de edinilen deneyim başka akademik kümelere de aktarılabilir.

## Büyük dil modelleri ve OpenAI uyumlu API

EVREN'in ikinci parçası büyük dil modeli (LLM) çıkarımı. Platform, açık ağırlıklı dil modellerini sohbet, kodlama, akıl yürütme ve görsel anlama için kendi H200 altyapısında çalıştırıyor ve bunları **OpenAI uyumlu** bir API ile sunuyor. Sohbet tamamlama ve akış (SSE) destekleniyor; istek model adıyla ya da otomatik yönlendirmeyle gönderilebiliyor; Python için hazır kütüphane bulunuyor. İstekler kota ve kredi kontrolünden geçiyor, API anahtarları kapsam ve hesap düzeyinde sınırlanıyor ve trafik yurt içindeki altyapıda işleniyor.[8]

OpenAI uyumluluğu, araştırmacının mevcut kodunu çoğu durumda yalnız adres ve anahtar değiştirerek EVREN'e bağlayabilmesi demek. Bu, örneğin açık uçlu anket yanıtlarının kodlanması ya da öğrenci yazılarına geri bildirim üretilmesi gibi dil modeli destekli çalışmaların yurt içindeki altyapıda yürütülebilmesine imkân veriyor. Ancak sunulan modellerin listesi herkese açık sayfalarda yayımlanmıyor ve model listesi uç noktası anahtarsız isteklere kapalı.[8] Yöntem bölümünde hangi modelin, hangi sürümüyle kullanıldığının yazılması bu yüzden araştırmacının sorumluluğunda kalıyor; aksi hâlde çalışmanın tekrarlanabilirliği zayıflar. Eğitimde dil modeli kullanımının öğretmen açısından ilkelerini [eğitimde yapay zekâ: öğretmenler için](https://bote.web.tr/blog/egitimde-yapay-zeka-ogretmenler-icin) yazısında ele aldık.

## Kredi (CR) sistemi nasıl işliyor?

Platformdaki işler EVREN'in kendi kredisi CR ile yürüyor. GPU ile eğitim, dil modeli çıkarımı ve dışa aktarım kredi harcıyor; veri etiketleme, etiket doğrulama (review), açık veri seti ve model paylaşımı kredi kazandırıyor. Katkılar ayrıca katkı puanı kazandırıyor ve katkı puanı yükseldikçe kullanıcı seviyesi artıyor.[1][9]

| İşlem | Kredi |
|---|---|
| GPU ile model eğitimi | Harcar |
| Dil modeli çıkarımı | Harcar |
| Dışa aktarım | Harcar |
| Veri etiketleme | Kazandırır |
| Etiket doğrulama | Kazandırır |
| Veri seti ve model paylaşımı | Kazandırır |

Kredi bir eğitim işi başlarken tahmini maliyet kadar bloke ediliyor (HOLD), iş tamamlanınca harcama kesinleşiyor (SETTLE), iş başarısız olursa bloke edilen kredi iade ediliyor (RELEASE). Maliyet, seçilen model mimarisinin saatlik kredi katsayısı ile tahmini eğitim süresinin çarpımı olarak hesaplanıyor; GPU sayısı, düğüm sayısı ve veri setinin büyüklüğü süreyi etkiliyor. Bakiye yetmiyorsa iş başlatılmıyor.[1] Bilgilendirme belgesinde QR kod okutularak 1000 kredi kazanılabileceği duyuruluyor; belgede kampanyanın koşulları ve süresi yazmıyor.[4] 7 Kasım 2026 itibarıyla herkese açık sayfalarda kredinin Türk lirası karşılığı yer almıyor.[9]

Bu düzen, emek ile hesaplamayı birbirine bağlayan bir ekonomi kuruyor: kendi GPU bütçesi olmayan bir öğrenci, başka veri setlerini etiketleyerek ya da doğrulayarak kendi deneyleri için kredi biriktirebiliyor.

## Eğitim araştırmacısı için veri ve etik

EVREN'in eğitim araştırmasına en çok dokunduğu yer, aynı zamanda en dikkatli olunması gereken yer: veri. Sınıf içi video, ders kaydı, öğrenci yazısı ya da sesli görüşme 6698 sayılı Kişisel Verilerin Korunması Kanunu'na göre kişisel veridir. Yüz ve ses, kimlik belirlemeye yönelik teknik yollarla işlendiğinde biyometrik veri olarak Kanun'un 6. maddesindeki özel nitelikli kişisel veri kapsamına girer ve daha sıkı işleme şartlarına bağlanır. Kanun, anonim hâle getirilerek araştırma amacıyla işlenen veriyi ise kapsam dışında tutar (madde 28/1-c).[10]

Bu çerçevede EVREN'e veri yüklemeden önce şu sorular netleşmelidir:

- **Etik kurul ve izinler.** Çalışmanın etik kurul onayında verinin hangi platformda, kimler tarafından işleneceği yazıyor mu? Okulda toplanan verilerde kurumun araştırma izni ve reşit olmayan katılımcılar için veli izni alındı mı?
- **Anonimleştirme.** Yüzler bulanıklaştırılabilir mi, isimler metinden çıkarılabilir mi? Kanun'un araştırma için tanıdığı kapsam dışılık yalnız anonim veri için geçerli.[10]
- **Paylaşım.** Platformda kredi kazandıran açık veri seti paylaşımı, katılımcılara verilen gizlilik taahhüdüyle çelişebilir. Kişisel veri içeren bir veri seti açık paylaşıma konmamalı.
- **Lisans.** Başkasının hazırladığı bir veri seti, her amaçla kullanılmaya ve yeniden paylaşılmaya izin vermeyebilir.
- **Raporlama.** Yöntem bölümünde platform, model, sürüm, eğitim ayarları ve etiketleme süreci açıkça yazılmalı; MLOps'un izlenebilirlik ilkesi burada araştırmanın tekrarlanabilirliğine dönüşüyor.[3]

## Sonuç

EVREN, Türkiye'de yapay zekâ çalışan öğrenci ve araştırmacılar için iki önemli kapıyı birlikte açıyor: üst düzey GPU'lara erişim ve etiketleme ile model eğitimini tek yerde toplayan bir çalışma ortamı. Kredi sistemi, kendi bütçesi olmayan kullanıcıya emeğiyle hesaplama gücü kazanma yolu sunuyor; OpenAI uyumlu API, dil modeli destekli çalışmaların yurt içindeki altyapıda yürütülmesini kolaylaştırıyor.[1][8] Eğitim araştırması açısından belirleyici olan ise platformun kendisinden çok verinin nasıl hazırlandığı: etik kurul, izin, anonimleştirme ve şeffaf raporlama sağlanmadan yüklenen bir sınıf kaydı, ne kadar güçlü bir kümede işlenirse işlensin araştırmayı savunulamaz kılar.[10] Eğitim teknolojilerinde yapay zekânın hangi konularda çalışıldığını merak edenler [BTY'de yapay zekâ konuları](https://bote.web.tr/blog/bty-yapay-zeka-konulari) yazısına göz atabilir.

## Sık Sorulan Sorular

### EVREN nedir?

EVREN, Cumhurbaşkanlığı Savunma Sanayii Başkanlığı bünyesinde geliştirilen uçtan uca yerli yapay zekâ platformudur. Veri etiketleme, ön etiketleme, GPU kümesinde model eğitimi, büyük dil modeli çıkarımı ve model paylaşımını tek yerde toplar. Arayüzü Türkçedir; hesaplama ve dil modeli trafiği Türkiye'deki altyapıda işlenir.

### EVREN'e nasıl giriş yapılır?

evren.ssyz.org.tr adresindeki "e-Devlet ile Giriş Yap" düğmesiyle, e-Devlet kapısında kimlik doğrulaması yapılarak giriliyor. Giriş sonrasında platformun genel istatistiklerini gösteren gösterge paneli açılıyor.

### EVREN ücretli mi?

Platform kendi kredisi (CR) ile çalışıyor. Model eğitimi, dil modeli çıkarımı ve dışa aktarım kredi harcıyor; veri etiketleme, etiket doğrulama ve açık veri seti ya da model paylaşımı kredi kazandırıyor. 7 Kasım 2026 itibarıyla herkese açık sayfalarda kredinin Türk lirası karşılığı yer almıyor.

### EVREN'de hangi donanım var?

Platforma göre eğitim kümesi 8 düğümde 8'er adet olmak üzere 64 NVIDIA H200 GPU'dan oluşuyor; düğümler InfiniBand NDR 400G ağıyla bağlı. Eğitim işleri Slurm üzerinden Apptainer konteynerleriyle, sanallaştırma katmanı olmadan doğrudan donanımda çalışıyor.

### EVREN'deki dil modelleri mevcut koda bağlanabilir mi?

EVREN'in büyük dil modeli API'si OpenAI uyumludur; sohbet tamamlama ve akış (SSE) destekleniyor, model adıyla ya da otomatik yönlendirmeyle istek atılabiliyor ve Python için hazır kütüphane sunuluyor. Sunulan modellerin listesi herkese açık sayfalarda yayımlanmıyor.

### Öğrenci verisiyle EVREN'de model eğitilebilir mi?

Sınıf görüntüsü, ses kaydı ve öğrenci metinleri 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel veridir. Böyle bir veriyi herhangi bir platforma yüklemeden önce etik kurul onayı, gerekli izinler ve mümkünse anonimleştirme planlanmalıdır.

## Kaynaklar

1. Savunma Sanayii Başkanlığı (2026). EVREN: uçtan uca yerli yapay zekâ platformu (ana sayfa ve sıkça sorulan sorular). evren.ssyz.org.tr. https://evren.ssyz.org.tr/ (TR, erişim: 2026-11-07)
2. Necmettin Erbakan Üniversitesi Sosyal Bilimler Enstitüsü (2026). EVREN Platformu Hakkında. erbakan.edu.tr (24.06.2026). https://erbakan.edu.tr/tr/birim/sosyal-bilimler-enstitusu/duyuru/evren-platformu-hakkinda-27293 (TR, erişim: 2026-11-07)
3. Kreuzberger, D., Kühl, N. ve Hirschl, S. (2023). Machine Learning Operations (MLOps): Overview, definition, and architecture. IEEE Access, 11, 31866-31879. https://doi.org/10.1109/ACCESS.2023.3262138 (EN, erişim: 2026-11-07)
4. Savunma Sanayii Başkanlığı (2026). EVREN bilgilendirme belgesi (Necmettin Erbakan Üniversitesi duyurusunun eki). erbakan.edu.tr. https://erbakan.edu.tr/storage/departments/files/213359/2026/Duyurular/Evren%20Platformu(1).pdf (TR, erişim: 2026-11-07)
5. Redmon, J., Divvala, S., Girshick, R. ve Farhadi, A. (2016). You only look once: Unified, real-time object detection. 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 779-788. https://doi.org/10.1109/CVPR.2016.91 (EN, erişim: 2026-11-07)
6. Yoo, A. B., Jette, M. A. ve Grondona, M. (2003). SLURM: Simple Linux Utility for Resource Management. Job Scheduling Strategies for Parallel Processing, Lecture Notes in Computer Science 2862, 44-60. https://doi.org/10.1007/10968987_3 (EN, erişim: 2026-11-07)
7. Kurtzer, G. M., Sochat, V. ve Bauer, M. W. (2017). Singularity: Scientific containers for mobility of compute. PLOS ONE, 12(5), e0177459. https://doi.org/10.1371/journal.pone.0177459 (EN, erişim: 2026-11-07)
8. Savunma Sanayii Başkanlığı (2026). EVREN LLM çıkarımı. evren.ssyz.org.tr. https://evren.ssyz.org.tr/llm-inference (TR, erişim: 2026-11-07)
9. Savunma Sanayii Başkanlığı (2026). EVREN fiyatlandırma ve kredi. evren.ssyz.org.tr. https://evren.ssyz.org.tr/pricing (TR, erişim: 2026-11-07)
10. Türkiye Büyük Millet Meclisi (2016). 6698 sayılı Kişisel Verilerin Korunması Kanunu. Resmî Gazete, 7 Nisan 2016, sayı 29677. https://www.mevzuat.gov.tr/mevzuatmetin/1.5.6698.pdf (TR, erişim: 2026-11-07)
