import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const sourceDir = path.resolve('public/assets/projects/pn-impresion-3d');

const outputDir = path.join(sourceDir, 'thumbs');

const images = [
  'catalogo.png',
  'ficha-producto.png',
  'carrito.png',
  'panel-admin.png',
];

await fs.mkdir(outputDir, { recursive: true });

for (const filename of images) {
  const input = path.join(sourceDir, filename);

  const output = path.join(outputDir, filename.replace('.png', '.webp'));

  await sharp(input)
    .resize({
      width: 720,
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
      effort: 5,
    })
    .toFile(output);

  const original = await fs.stat(input);
  const optimized = await fs.stat(output);

  const reduction = (1 - optimized.size / original.size) * 100;

  console.log(
    `${filename}: ` +
      `${(original.size / 1024).toFixed(1)} KB → ` +
      `${(optimized.size / 1024).toFixed(1)} KB ` +
      `(${reduction.toFixed(1)} % menos)`,
  );
}

console.log('Miniaturas generadas correctamente.');
