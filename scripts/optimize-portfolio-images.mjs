import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ASSETS = path.join(process.cwd(), 'public', 'assets');

const images = [
  {
    input: 'bg-tech.png',
    output: 'bg-tech.webp',
    width: 1920,
    quality: 78,
  },
  {
    input: 'foto2.png',
    output: 'foto2.webp',
    width: 900,
    quality: 82,
  },
];

async function optimizeImage(image) {
  const source = path.join(ASSETS, image.input);
  const destination = path.join(ASSETS, image.output);

  const originalStats = await fs.stat(source);
  const metadata = await sharp(source).metadata();

  await sharp(source)
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
      effort: 6,
    })
    .toFile(destination);

  const optimizedStats = await fs.stat(destination);

  const originalKB = originalStats.size / 1024;
  const optimizedKB = optimizedStats.size / 1024;
  const saving = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(
    1,
  );

  console.log(`\n${image.input}`);
  console.log(`Dimensiones originales: ${metadata.width}x${metadata.height}`);
  console.log(`Original: ${originalKB.toFixed(1)} KB`);
  console.log(`WebP: ${optimizedKB.toFixed(1)} KB`);
  console.log(`Reducción: ${saving}%`);
}

for (const image of images) {
  await optimizeImage(image);
}

console.log('\nOptimización completada.');
