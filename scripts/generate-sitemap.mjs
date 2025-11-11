import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'node:stream';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';

const HOST = 'https://portfoliov3-omega-nine.vercel.app';

// RUTAS QUE QUIERES INDEXAR (añade/borra según tu web)
const routes = [
  '/',
  '/projects/stockit',
  '/projects/newsreader',
  '/projects/landingpageresponsive',
  '/projects/oromanager',
];

const links = routes.map((url) => ({
  url,
  changefreq: 'monthly',
  priority: url === '/' ? 1.0 : 0.7,
  lastmod: new Date().toISOString(),
}));

const sitemapStream = new SitemapStream({ hostname: HOST });
const xml = await streamToPromise(
  Readable.from(links).pipe(sitemapStream)
).then((d) => d.toString());

await fs.mkdir(resolve('dist'), { recursive: true });
await fs.writeFile(resolve('dist', 'sitemap.xml'), xml, 'utf8');
console.log('✅ sitemap.xml generado');
