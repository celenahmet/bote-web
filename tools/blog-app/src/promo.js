// Tanitim logolari, dugmeler ve magaza rozetlerinde ortak kaynak bilgisi.
export function promoUrl(value, fallback = 'https://uniconnectly.com/') {
  const url = new URL(value || fallback);
  url.searchParams.set('ref', 'bote.web.tr');
  if (!url.searchParams.has('utm_source')) url.searchParams.set('utm_source', 'bote.web.tr');
  if (!url.searchParams.has('utm_medium')) url.searchParams.set('utm_medium', 'banner');
  if (!url.searchParams.has('utm_campaign')) url.searchParams.set('utm_campaign', 'blog');
  return url.href;
}
