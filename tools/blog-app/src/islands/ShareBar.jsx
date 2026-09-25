import { useEffect, useState } from 'react';

// Paylasim: sunucuda duz baglantilar; JS ile "Baglantiyi kopyala" ve cihazin paylasim menusu eklenir.
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
      <a href={`https://twitter.com/intent/tweet?url=${e(url)}&text=${e(title)}`} rel="noopener nofollow" target="_blank">X</a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}`} rel="noopener nofollow" target="_blank">LinkedIn</a>
      <a href={`https://wa.me/?text=${e(`${title} ${url}`)}`} rel="noopener nofollow" target="_blank">WhatsApp</a>
      {ready && <button type="button" onClick={copy}>{copied ? 'Kopyalandı' : 'Bağlantıyı kopyala'}</button>}
      {ready && canShare && <button type="button" onClick={() => navigator.share({ url, title }).catch(() => {})}>Paylaş…</button>}
    </div>
  );
}
