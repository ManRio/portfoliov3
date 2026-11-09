
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'node:stream';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';

const SITE_URL = 'https://manrio.dev';

const routes = [
  '/',
  '/projects/stockit',
  '/projects/ProjectOroManager',
  '/projects/ProjectTaskGamification',
  '/projects/ProjectFitTrack',
  '/projects/ProjectNewsReader',
  '/projects/landingpageresponsive',
];

const links = routes.map((url) => ({
  url,
  changefreq: 'monthly',
  priority: url === '/' ? 1.0 : 0.7,
}));

const sitemapStream = new SitemapStream({
  hostname: SITE_URL,
});

const xml = await streamToPromise(
  Readable.from(links).pipe(sitemapStream)
).then((buffer) => buffer.toString());

await fs.mkdir(resolve('dist'), {
  recursive: true,
});

await fs.writeFile(
  resolve('dist', 'sitemap.xml'),
  xml,
  'utf8'
);

console.log('✅ sitemap.xml generado para manrio.dev');
