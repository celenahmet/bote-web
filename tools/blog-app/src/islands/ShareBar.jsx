import { useEffect, useState } from 'react';
import { MARKA_SIMGELERI } from '../markaSimgeleri.js';

// Paylaşım: sunucuda düz bağlantılar; JS ile "Bağlantıyı kopyala" ve cihazın paylaşım menüsü eklenir.
// 29.10.2026 (Ahmet: "tüm bloglarımızda bu standartları sağlayacağız"): Veterito, UniConnectly
// ve OtoSenior'daki gibi markaların düz renginde simge daireleri; Telegram ve Facebook eklendi.
// Simge yanında görünür metin yok, erişilebilir ad `aria-label`da.
const AGLAR = [
  ['whatsapp', 'WhatsApp', (u, t) => `https://wa.me/?text=${t}%20${u}`],
  ['telegram', 'Telegram', (u, t) => `https://t.me/share/url?url=${u}&text=${t}`],
  ['x', 'X', (u, t) => `https://x.com/intent/tweet?url=${u}&text=${t}`],
  ['facebook', 'Facebook', (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`],
  ['linkedin', 'LinkedIn', (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
];

const Simge = ({ ad }) => <span className="share-simge" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MARKA_SIMGELERI[ad] }} />;

export default function ShareBar({ url, title }) {
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  useEffect(() => { setReady(true); setCanShare(typeof navigator.share === 'function'); }, []);
  const e = encodeURIComponent;
  const copy = () => navigator.clipboard?.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }).catch(() => {});
  return (
    <div className="share">
      <span className="share-label">Paylaş</span>
      {AGLAR.map(([ad, etiket, adres]) => (
        <a key={ad} className={`share-daire share-${ad}`} href={adres(e(url), e(title))} rel="noopener nofollow" target="_blank" aria-label={`${etiket} ile paylaş`} title={etiket}>
          <Simge ad={ad} />
        </a>
      ))}
      {ready && (
        <button type="button" className="share-daire share-kopya" onClick={copy} aria-label={copied ? 'Bağlantı kopyalandı' : 'Bağlantıyı kopyala'} title="Bağlantıyı kopyala">
          <Simge ad={copied ? 'tamam' : 'baglanti'} />
        </button>
      )}
      {ready && canShare && (
        <button type="button" className="share-daire share-cihaz" onClick={() => navigator.share({ url, title }).catch(() => {})} aria-label="Cihazın paylaşım menüsü" title="Paylaş…">
          <Simge ad="paylas" />
        </button>
      )}
      <span className="share-durum" role="status">{copied ? 'Kopyalandı' : ''}</span>
    </div>
  );
}
