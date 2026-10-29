// "AI ile Özetle", paylaşım ve Google "tercih edilen kaynak" bağlantıları (Ahmet
// 29.10.2026: "tüm bloglarımızda bu standartları sağlayacağız"). Veterito,
// UniConnectly ve OtoSenior'daki aynı sözleşme. İstem kalıbı ShiftDelete.net'in canlı
// sayfasından; başka bir şey eklenmiyor (Ahmet 29.10: "en sona ... yaz demesi saçma,
// platformu kendisi tanıtsa güzel olur").
// Düz bağlantılar: tıklanana kadar hiçbir servise istek yok, kişisel veri yok.

const SITE_ADI = 'bote.web.tr';
const SITE = 'https://bote.web.tr';

export const ozetIstemi = (url, baslik) =>
  `Yalnızca ${SITE_ADI} sitesinin ${url} adresindeki içeriği referans alarak "${baslik}" başlıklı yazı için özet oluştur.`;

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
  ];
}

export const GOOGLE_TERCIH_ADRESI = `https://www.google.com/preferences/source?q=${SITE}/`;
