import fs from 'node:fs/promises';
import { resolve } from 'node:path';

const HOST = 'https://portfoliov3-omega-nine.vercel.app';
const robots = `User-agent: *
Allow: /
Sitemap: ${HOST}/sitemap.xml
`;

await fs.mkdir(resolve('dist'), { recursive: true });
await fs.writeFile(resolve('dist', 'robots.txt'), robots, 'utf8');
console.log('✅ robots.txt generado');