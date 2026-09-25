import path from 'node:path';
import fs from 'node:fs';
import { Marked } from 'marked';
import { slugify, esc, imageSize } from './util.mjs';

// Markdown -> HTML. Ek soz dizimi:
//   [@kaynak-id]  veya  [@a; @b]  -> numarali kaynak atfi (Kaynaklar bolumune baglanir)
// Atfin destekledigi cumle <span class="cited" id="atif-N"> ile sarilir; kaynakcadaki
// "metinde" baglantilari bu kimliklere gider ve cumleyi isaretler (:target).
// Donus: { html, headings, citeOrder, refs }  (refs: kaynak id -> ['atif-1', ...])
export function renderMarkdown(src, { sources, root, file }) {
  const ids = new Map(sources.map((s) => [s.id, s]));
  const citeOrder = [];
  const headings = [];
  const usedIds = new Set();
  const errors = [];
  const refs = new Map();
  let occ = 0;

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
          t.occ = `atif-${++occ}`;
          const links = t.keys.map((k) => {
            const n = numberOf(k);
            if (!refs.has(k)) refs.set(k, []);
            refs.get(k).push(t.occ);
            return `<a class="cite-link" href="#kaynak-${n}" aria-label="Kaynak ${n}">${n}</a>`;
          });
          return `<sup class="cite">[${links.join(', ')}]</sup>`;
        },
      },
    ],
    renderer: {
      paragraph(t) {
        return `<p>${cited(this.parser, t.tokens)}</p>\n`;
      },
      text(t) {
        // Siki listelerdeki madde metni (ic belirtecli blok metin); digerleri varsayilan
        return t.tokens ? cited(this.parser, t.tokens) : false;
      },
      heading(t) {
        const inner = this.parser.parseInline(t.tokens);
        if (t.tokens.some((x) => x.type === 'cite')) errors.push('baslikta kaynak atfi kullanilmaz; atfi cumleye koyun');
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
          .map((r) => `<tr>${r.map((c) => `<td>${cited(this.parser, c.tokens)}</td>`).join('')}</tr>`)
          .join('\n');
        return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
      },
    },
  });

  const html = marked.parse(src);
  if (errors.length) throw new Error(`${file}:\n  - ${[...new Set(errors)].join('\n  - ')}`);
  return { html, headings, citeOrder, refs };
}

// Satir ici belirtecleri isler; her atiftan onceki cumleyi (son cumle sonundan atfa kadar)
// <span class="cited" id="atif-N"> ile sarar. Bitisik atiflar ([@a][@b]) ayni cumleyi
// ic ice sarar. Cumle sonu yalnizca duz metinde aranir; kalin/baglanti gibi ic belirtecler
// bolunmez, boylece HTML her zaman dengeli kalir.
const BOUNDARY = /[.!?…]["”’)]?\s+(?=[A-ZÇĞİÖŞÜ0-9"“])/g;
function cited(parser, tokens) {
  let out = '';
  let pend = '';
  let last = -1; // son sarmalayicinin out icindeki baslangici (bitisik atif icin)
  for (const tok of tokens) {
    if (tok.type === 'cite') {
      const mark = parser.parseInline([tok]);
      if (!pend.trim() && last >= 0) {
        out = `${out.slice(0, last)}<span class="cited" id="${tok.occ}">${out.slice(last)}${mark}</span>`;
      } else {
        const lead = pend.match(/^\s*/)[0];
        out += lead;
        last = out.length;
        out += `<span class="cited" id="${tok.occ}">${pend.slice(lead.length)}${mark}</span>`;
      }
      pend = '';
      continue;
    }
    const html = parser.parseInline([tok]);
    if (tok.type === 'text' || tok.type === 'escape') {
      let cut = 0;
      for (const m of html.matchAll(BOUNDARY)) cut = m.index + m[0].length;
      if (cut) {
        out += pend + html.slice(0, cut);
        pend = html.slice(cut);
        last = -1;
        continue;
      }
    }
    pend += html;
    if (pend.trim()) last = -1;
  }
  return out + pend;
}

// Satir ici markdown (ozet maddeleri, SSS cevaplari icin).
export function renderInline(src) {
  return new Marked({ gfm: true }).parseInline(String(src));
}
