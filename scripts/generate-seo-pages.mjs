import fs from 'node:fs/promises';
import path from 'node:path';

import { SITE_URL, seoPages } from '../src/data/seo-pages.js';

const DIST = path.resolve('dist');
const TEMPLATE = path.join(DIST, 'index.html');
const OUTPUT = path.join(DIST, 'seo-pages');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceMeta(html, attribute, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const pattern = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}=["']${escapedKey}["'])[^>]*>`,
    'i',
  );

  const replacement =
    `<meta ${attribute}="${key}" ` + `content="${escapeHtml(content)}" />`;

  if (!pattern.test(html)) {
    throw new Error(`No se encontró la etiqueta ${key}`);
  }

  return html.replace(pattern, replacement);
}

function replaceCanonical(html, url) {
  const pattern = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i;

  if (!pattern.test(html)) {
    throw new Error('No se encontró el canonical');
  }

  return html.replace(
    pattern,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
  );
}

function createPage(template, route, page) {
  const url = `${SITE_URL}${route}`;
  const image = new URL(page.image, SITE_URL).href;

  let html = template.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(page.title)}</title>`,
  );

  html = replaceCanonical(html, url);

  const metas = [
    ['name', 'description', page.description],
    ['property', 'og:url', url],
    ['property', 'og:title', page.title],
    ['property', 'og:description', page.description],
    ['property', 'og:image', image],
    ['property', 'og:image:alt', page.title],
    ['name', 'twitter:title', page.title],
    ['name', 'twitter:description', page.description],
    ['name', 'twitter:image', image],
  ];

  for (const [attribute, key, value] of metas) {
    html = replaceMeta(html, attribute, key, value);
  }

  return html;
}

const template = await fs.readFile(TEMPLATE, 'utf8');

await fs.mkdir(OUTPUT, { recursive: true });

for (const [route, page] of Object.entries(seoPages)) {
  if (route === '/') continue;

  const filename = `${route.split('/').pop()}.html`;
  const destination = path.join(OUTPUT, filename);

  const html = createPage(template, route, page);

  await fs.writeFile(destination, html, 'utf8');

  console.log(`SEO HTML generado: ${route}`);
}

console.log('Generación de HTML SEO completada.');
