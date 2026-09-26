// "Bu yaziya atif": APA 7 (grup yazar, blog yazisi; tarih = son guncelleme), BibTeX ve
// "Sitene gom" kodlari. Yazi sayfasi, /blog/embed/<yazi> karti ve /blog/atif/<yazi>.json
// ayni veriyi kullanir.
import { esc } from './util.mjs';

const AY = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
// Sablon dizesi (backtick) icine guvenli gommek icin
const tpl = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

export function citation(post, blog) {
  const url = blog.abs(post.url);
  const embedUrl = `${blog.SITE}/blog/embed/${post.slug}`;
  const jsonUrl = `${blog.SITE}/blog/atif/${post.slug}.json`;
  const author = blog.author.name;
  const [y, m, d] = post.updated.split('-').map(Number);
  const date = `${y}, ${d} ${AY[m - 1]}`;
  const apa = `${author}. (${date}). ${post.citeTitle}. BÖTE Blog. ${url}`;
  const apaHtml = `${esc(author)}. (${date}). ${esc(post.citeTitle)}. <i>BÖTE Blog</i>. ${esc(url)}`;
  const key = `bote-${post.slug}`;
  const bibtex = `@online{${key},
  author       = {{${author}}},
  title        = {${post.title}},
  organization = {BÖTE Blog},
  year         = {${y}},
  date         = {${post.updated}},
  url          = {${url}},
  langid       = {turkish}
}`;
  const t = esc(post.title);

  // Gomme kodlari: hepsi APA 7 ve BibTeX'i birlikte tasir.
  const html = `<blockquote class="bote-atif" cite="${url}">
  <p><strong><a href="${url}">${t}</a></strong> · BÖTE Blog</p>
  <p>${apaHtml}</p>
  <details>
    <summary>BibTeX</summary>
    <pre>${esc(bibtex)}</pre>
  </details>
</blockquote>`;
  const iframe = `<iframe src="${embedUrl}"
  title="${t}: atıf kartı (BÖTE Blog)"
  width="100%" height="360" loading="lazy"
  style="border:0;max-width:680px"></iframe>`;
  const markdown = `> **[${post.title}](${url})** · BÖTE Blog
>
> ${author}. (${date}). ${post.citeTitle}. *BÖTE Blog*. ${url}

\`\`\`bibtex
${bibtex}
\`\`\``;
  const component = (open, close) => `${open}
    <p><a href="${url}"><strong>${t}</strong></a> · BÖTE Blog</p>
    <p>${apaHtml}</p>
    <details>
      <summary>BibTeX</summary>
      <pre>${close}</pre>
    </details>
  </blockquote>`;
  const react = `const bibtex = \`${tpl(bibtex)}\`;

export function BoteAtif() {
  return (
    <blockquote className="bote-atif" cite="${url}">
      <p><a href="${url}"><strong>${t}</strong></a> · BÖTE Blog</p>
      <p>${apaHtml}</p>
      <details>
        <summary>BibTeX</summary>
        <pre>{bibtex}</pre>
      </details>
    </blockquote>
  );
}`;
  const vue = `<script setup>
const bibtex = \`${tpl(bibtex)}\`;
</script>

<template>
  ${component(`<blockquote class="bote-atif" cite="${url}">`, '{{ bibtex }}')}
</template>`;
  const svelte = `<script>
  const bibtex = \`${tpl(bibtex)}\`;
</script>

${component(`<blockquote class="bote-atif" cite="${url}">`, '{bibtex}').replace(/^ {2}/gm, '')}`;
  const js = `// Sayfanızda <div id="bote-atif"></div> bulunmalı.
const yanit = await fetch("${jsonUrl}");
const atif = await yanit.json();

const kutu = document.getElementById("bote-atif");
const baslik = Object.assign(document.createElement("a"), { href: atif.url, textContent: atif.title });
const apa = Object.assign(document.createElement("p"), { textContent: atif.apa });
const bib = Object.assign(document.createElement("pre"), { textContent: atif.bibtex });
kutu.append(baslik, apa, bib);`;
  const python = `import requests

atif = requests.get("${jsonUrl}", timeout=10).json()

print(atif["apa"])  # APA 7
with open("kaynaklar.bib", "a", encoding="utf-8") as bib:
    bib.write(atif["bibtex"] + "\\n")  # BibTeX`;
  const latex = `% 1) BibTeX kaydını kaynaklar.bib dosyasına ekleyin:
${bibtex.replace(/^/gm, '%    ')}

% 2) Belgede APA 7 biçemiyle kullanın:
\\documentclass{article}
\\usepackage[style=apa]{biblatex}
\\addbibresource{kaynaklar.bib}
\\begin{document}
Ayrıntı için bkz. \\parencite{${key}}.
\\printbibliography
\\end{document}`;

  const snippets = [
    { id: 'html', label: 'HTML', lang: 'html', code: html, note: 'JavaScript gerektirmez; bağlantı arama motorlarınca da görülür.' },
    { id: 'iframe', label: 'iframe', lang: 'html', code: iframe, note: 'Hazır atıf kartı; içerik güncellendiğinde kart da güncellenir.' },
    { id: 'md', label: 'Markdown', lang: 'markdown', code: markdown, note: 'README, GitHub, Notion ve statik site üreticileri için.' },
    { id: 'react', label: 'React', lang: 'jsx', code: react, note: 'React ve Next.js bileşeni.' },
    { id: 'vue', label: 'Vue', lang: 'vue', code: vue, note: 'Vue 3 tek dosya bileşeni (Nuxt ile de çalışır).' },
    { id: 'svelte', label: 'Svelte', lang: 'svelte', code: svelte, note: 'Svelte ve SvelteKit bileşeni.' },
    { id: 'js', label: 'JavaScript', lang: 'javascript', code: js, note: 'Atıf verisini JSON olarak çekip sayfaya ekler.' },
    { id: 'py', label: 'Python', lang: 'python', code: python, note: 'APA 7 metnini yazdırır, BibTeX kaydını .bib dosyasına ekler.' },
    { id: 'latex', label: 'LaTeX', lang: 'latex', code: latex, note: 'biblatex ile APA 7 biçeminde kaynakça.' },
  ];

  return { url, embedUrl, jsonUrl, key, apa, apaHtml, bibtex, snippets,
    json: { title: post.title, url, author, datePublished: post.date, dateModified: post.updated, apa, apaHtml, bibtex, embed: embedUrl } };
}
