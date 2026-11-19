import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'public', 'assets', 'projects');

const projects = [
  {
    folder: 'stockit',
    files: [
      ['portada.png', 'portada.webp'],
      ['landing.png', 'landing.webp'],
      ['login.png', 'login.webp'],
      ['logo.png', 'logo.webp'],
      ['gestion.png', 'gestion.webp'],
    ],
    thumbnails: ['landing.webp', 'login.webp', 'logo.webp', 'gestion.webp'],
  },
  {
    folder: 'intercala-pdf',
    files: [['portada.png', 'portada.webp']],
    thumbnails: ['orden-normal.webp', 'orden-inverso.webp'],
  },
];

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function optimizeProject(project) {
  const directory = path.join(ROOT, project.folder);
  const thumbsDirectory = path.join(directory, 'thumbs');

  await fs.mkdir(thumbsDirectory, {
    recursive: true,
  });

  console.log(`\n📁 Procesando ${project.folder}`);

  // Convertir PNG originales a WebP
  for (const [source, destination] of project.files) {
    const sourcePath = path.join(directory, source);
    const destinationPath = path.join(directory, destination);

    if (!(await fileExists(sourcePath))) {
      console.warn(`⚠ No existe: ${source}`);
      continue;
    }

    await sharp(sourcePath)
      .resize({
        width: 1800,
        withoutEnlargement: true,
      })
      .webp({
        quality: 85,
        effort: 6,
      })
      .toFile(destinationPath);

    console.log(`✅ ${destination}`);
  }

  // Generar miniaturas desde los WebP
  for (const filename of project.thumbnails) {
    const sourcePath = path.join(directory, filename);
    const destinationPath = path.join(thumbsDirectory, filename);

    if (!(await fileExists(sourcePath))) {
      console.warn(`⚠ No existe: ${filename}`);
      continue;
    }

    await sharp(sourcePath)
      .resize({
        width: 800,
        withoutEnlargement: true,
      })
      .webp({
        quality: 75,
        effort: 6,
      })
      .toFile(destinationPath);

    console.log(`✅ thumbs/${filename}`);
  }
}

for (const project of projects) {
  await optimizeProject(project);
}

console.log('\n🎉 Optimización completada.');
