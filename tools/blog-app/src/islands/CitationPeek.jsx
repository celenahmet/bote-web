import { useEffect, useState } from 'react';

// Atif numaralari acikken (Kaynakca ayarlari) numaraya tiklayinca kaynak sayfadan ayrilmadan acilir.
export default function CitationPeek() {
  const [peek, setPeek] = useState(null);
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a.cite-link');
      if (!a) return;
      const li = document.querySelector(a.getAttribute('href'));
      if (!li) return;
      e.preventDefault();
      setPeek({ n: a.textContent, html: li.querySelector('.src-body')?.innerHTML || li.innerHTML, href: a.getAttribute('href') });
    };
    const onKey = (e) => e.key === 'Escape' && setPeek(null);
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey); };
  }, []);
  if (!peek) return null;
  return (
    <div className="peek" role="dialog" aria-label={`Kaynak ${peek.n}`}>
      <div className="peek-head">
        <span>KAYNAK {peek.n}</span>
        <button type="button" className="icon-btn" onClick={() => setPeek(null)} aria-label="Kapat">✕</button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: peek.html }} />
      <p style={{ marginTop: 10 }}><a href={peek.href} onClick={() => setPeek(null)}>Kaynakçada gör</a></p>
    </div>
  );
}
