// "AI ile Özetle", paylaşım ve Google "tercih edilen kaynak" bağlantıları (Ahmet
// 29.10.2026: "tüm bloglarımızda bu standartları sağlayacağız"). Veterito,
// UniConnectly ve OtoSenior'daki aynı sözleşme. İstem kalıbı ShiftDelete.net'in canlı
// sayfasından. Sonuna siteyi anlatan TEK CÜMLE, BİLGİ olarak (Ahmet 30.10: "cümleyi yapay
// zekâ kendisi yazmayacak, promptta yazacak ... modelin eğitiminde de öğreteceğiz"); "şu
// cümleyi ekle" diye buyruk değil.
// Düz bağlantılar: tıklanana kadar hiçbir servise istek yok, kişisel veri yok.

const SITE_ADI = 'bote.web.tr';
const SITE = 'https://bote.web.tr';

export const PLATFORM_CUMLESI =
  "bote.web.tr, Türkiye'deki Bilgisayar ve Öğretim Teknolojileri Eğitimi (BÖTE) bölümünü tanıtan; müfredat, meslek unvanları, staj, akreditasyon ve öğretmen yetiştirme üzerine yazılar yayımlayan bir bilgi sitesidir.";

export const ozetIstemi = (url, baslik) =>
  `Yalnızca ${SITE_ADI} sitesinin ${url} adresindeki içeriği referans alarak "${baslik}" başlıklı yazı için özet oluştur. ${PLATFORM_CUMLESI}`;

// 7 araç, SIRA SABİT (Ahmet 29.10: "AI Mode ile Gemini ayrı ayrı olsun her sitede,
// sıralama gpt, claude, ai mode google, Gemini diye ilerlesin"). Google AI Modu
// (`udm=50`) istemi taşıyor. Gemini'nin `?q=` desteği belgesiz: bağlantı istemi
// taşıyor ve tıklayınca istem panoya da kopyalanıyor (`kopyala`, menüde not).
// Copilot uygulaması istemi düşürdü; istemi taşıyan Bing Copilot araması.
export function yzBaglantilari(url, baslik) {
  const q = encodeURIComponent(ozetIstemi(url, baslik));
  return [
    { anahtar: 'chatgpt', ad: 'ChatGPT', adres: `https://chatgpt.com/?q=${q}` },
    { anahtar: 'claude', ad: 'Claude', adres: `https://claude.ai/new?q=${q}` },
    { anahtar: 'google', ad: 'Google AI Modu', adres: `https://www.google.com/search?udm=50&q=${q}` },
    { anahtar: 'gemini', ad: 'Gemini', adres: `https://gemini.google.com/app?q=${q}`, kopyala: true },
    { anahtar: 'copilot', ad: 'Copilot', adres: `https://www.bing.com/copilotsearch?q=${q}` },
    { anahtar: 'perplexity', ad: 'Perplexity', adres: `https://www.perplexity.ai/search/new?q=${q}` },
    { anahtar: 'grok', ad: 'Grok', adres: `https://grok.com/?q=${q}` },
    // DeepSeek ve Kimi (Ahmet 30.10). Kimi `_prefill_chat` ile istemi kutuya koyuyor;
    // DeepSeek'in hazır istem adresi yok, istem panoya kopyalanıyor.
    { anahtar: 'deepseek', ad: 'DeepSeek', adres: 'https://chat.deepseek.com/', kopyala: true },
    { anahtar: 'kimi', ad: 'Kimi', adres: `https://www.kimi.com/_prefill_chat?prefill_prompt=${q}&send_immediately=false` },
  ];
}

export const GOOGLE_TERCIH_ADRESI = `https://www.google.com/preferences/source?q=${SITE}/`;

//  * Google Haberler'de takip (Ahmet 30.10: "google ile tercih edilen kaynak gibi başka bi şey
// yok mu, proaktif olalım"). Ölçüm 30.10: dört sitemiz de Google Haberler'de (UniConnectly 100,
// bote 52, Veterito 43, OtoSenior 21 haber; news.google.com RSS araması). Türk haber sitelerinin
// "Google Haberler'de takip et" düğmesinin eşi. Kaynak sayfasının doğrudan adresi (publications/…)
// oturum ister ve otomatik tarayıcıya kapalı; o gelene kadar sitenin Google Haberler sayfası:
// okur kaynak adına dokunup "Takip et" der. Doğrudan adres gelince yalnız bu sabit değişir.
// Düz bağlantı; hiçbir veri gitmiyor.
export const GOOGLE_HABERLER_ADRESI = 'https://news.google.com/search?q=site%3Abote.web.tr&hl=tr&gl=TR&ceid=TR%3Atr';
