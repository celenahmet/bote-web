import path from 'node:path';
import fs from 'node:fs';
import { Marked } from 'marked';
import { slugify, esc, imageSize } from './util.mjs';

// Markdown -> HTML. Ek soz dizimi:
//   [@kaynak-id]  veya  [@a; @b]  -> numarali kaynak atfi (Kaynaklar bolumune baglanir)
// Donus: { html, headings, citeOrder }
export function renderMarkdown(src, { sources, root, file }) {
  const ids = new Map(sources.map((s) => [s.id, s]));
  const citeOrder = [];
  const headings = [];
  const usedIds = new Set();
  const errors = [];

  const numberOf = (id) => {
    if (!ids.has(id)) {
      errors.push(`tanimsiz kaynak atfi [@${id}]`);
      return '?';
    }
    if (!citeOrder.includes(id)) citeOrder.push(id);
    return citeOrder.indexOf(id) + 1;
  };

  const marked = new Marked({ gfm: true });
  marked.use({
    extensions: [
      {
        name: 'cite',
        level: 'inline',
        start: (s) => s.indexOf('[@'),
        tokenizer(s) {
          const m = /^\[@([\w-]+(?:\s*;\s*@[\w-]+)*)\]/.exec(s);
          if (m) return { type: 'cite', raw: m[0], keys: m[1].split(/\s*;\s*@?/).map((k) => k.replace(/^@/, '')) };
        },
        renderer(t) {
          const notes = [];
          const links = t.keys.map((k) => {
            const first = ids.has(k) && !citeOrder.includes(k);
            const n = numberOf(k);
            // Kenar notu: kaynagin ilk atfinda bir kez; genis ekranda metnin yaninda gorunur.
            if (first) notes.push(sidenote(n, ids.get(k)));
            return `<a class="cite-link" href="#kaynak-${n}" aria-label="Kaynak ${n}">${n}</a>`;
          });
          return `<sup class="cite">[${links.join(', ')}]</sup>${notes.join('')}`;
        },
      },
    ],
    renderer: {
      heading(t) {
        const inner = this.parser.parseInline(t.tokens);
        if (t.depth === 1) {
          errors.push('yazi govdesinde # (h1) kullanilmaz; baslik front matter title alanindan gelir');
        }
        let id = slugify(t.text.replace(/\[@[^\]]+\]/g, '')) || 'bolum';
        while (usedIds.has(id)) id += '-2';
        usedIds.add(id);
        if (t.depth === 2 || t.depth === 3) headings.push({ depth: t.depth, id, text: t.text.replace(/\[@[^\]]+\]/g, '').trim() });
        return `<h${t.depth} id="${id}">${inner}</h${t.depth}>\n`;
      },
      link(t) {
        const inner = this.parser.parseInline(t.tokens);
        const title = t.title ? ` title="${esc(t.title)}"` : '';
        if (/^https?:\/\//.test(t.href) && !/^https?:\/\/(www\.)?bote\.web\.tr/.test(t.href)) {
          return `<a href="${esc(t.href)}"${title} rel="noopener" target="_blank">${inner}</a>`;
        }
        return `<a href="${esc(t.href)}"${title}>${inner}</a>`;
      },
      image(t) {
        let dims = '';
        if (t.href.startsWith('/')) {
          const f = path.join(root, t.href);
          if (!fs.existsSync(f)) errors.push(`gorsel yok: ${t.href}`);
          else {
            const { width, height } = imageSize(f);
            dims = ` width="${width}" height="${height}"`;
          }
        }
        if (!t.text) errors.push(`gorselde alt metin yok: ${t.href}`);
        const cap = t.title ? `<figcaption>${esc(t.title)}</figcaption>` : '';
        return `<figure><img src="${esc(t.href)}" alt="${esc(t.text)}"${dims} loading="lazy" decoding="async">${cap}</figure>`;
      },
      table(t) {
        const head = t.header.map((c) => `<th scope="col">${this.parser.parseInline(c.tokens)}</th>`).join('');
        const rows = t.rows
          .map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`)
          .join('\n');
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
      },
    },
  });

  const html = marked.parse(src);
  if (errors.length) throw new Error(`${file}:\n  - ${[...new Set(errors)].join('\n  - ')}`);
  return { html, headings, citeOrder };
}

function sidenote(n, s) {
  const who = s.author || s.publisher;
  const lang = String(s.lang || '').toUpperCase();
  return `<span class="sidenote" role="note"><span class="sn-n">${n}</span> ${esc(who)} (${esc(s.year)}). <em>${esc(s.title)}</em>. <span class="sn-lang ${lang === 'TR' ? 'tr' : 'en'}" title="Kaynak dili">${esc(lang)}</span></span>`;
}

// Satir ici markdown (ozet maddeleri, SSS cevaplari icin).
export function renderInline(src) {
  return new Marked({ gfm: true }).parseInline(String(src));
}
