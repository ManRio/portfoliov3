import fs from 'node:fs/promises';
import { resolve } from 'node:path';

const SITE_URL = 'https://manrio.dev';

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await fs.mkdir(resolve('dist'), {
  recursive: true,
});

await fs.writeFile(resolve('dist', 'robots.txt'), robots, 'utf8');

console.log('✅ robots.txt generado para manrio.dev');
