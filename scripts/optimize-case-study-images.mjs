
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.join(
  process.cwd(),
  'public',
  'assets',
  'projects',
);

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
    thumbnails: [
      'landing.webp',
      'login.webp',
      'logo.webp',
      'gestion.webp',
    ],
  },
  {
    folder: 'intercala-pdf',
    files: [],
    thumbnails: [
      'orden-normal.webp',
      'orden-inverso.webp',
    ],
  },
  {
    folder: 'oro-manager',
    files: [
      ['OroManager.png', 'panel.webp'],
      ['OroManager1.png', 'acceso.webp'],
      ['OroManager2.png', 'movil.webp'],
    ],
    cover: 'panel.webp',
    thumbnails: [
      'panel.webp',
      'acceso.webp',
      'movil.webp',
    ],
  },
  {
    folder: 'task-gamification',
    files: [
      ['landing_task_gamification.png', 'landing.webp'],
      ['dashboard_profesor_task_gamiffication.png', 'profesor.webp'],
      ['dashboard_alumno.png', 'alumno.webp'],
      ['tareas_task_gamification.png', 'tareas.webp'],
    ],
    cover: 'landing.webp',
    thumbnails: [
      'landing.webp',
      'profesor.webp',
      'alumno.webp',
      'tareas.webp',
    ],
  },
];

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function optimize(project) {
  const directory = path.join(ROOT, project.folder);
  const thumbs = path.join(directory, 'thumbs');

  await fs.mkdir(thumbs, { recursive: true });

  console.log(`\nProcesando ${project.folder}`);

  for (const [source, output] of project.files) {
    const inputPath = path.join(directory, source);
    const outputPath = path.join(directory, output);

    if (!(await exists(inputPath))) {
      console.warn(`Falta el original: ${source}`);
      continue;
    }

    if (await exists(outputPath)) {
      console.log(`Ya existe: ${output}`);
      continue;
    }

    await sharp(inputPath)
      .resize({
        width: 1800,
        withoutEnlargement: true,
      })
      .webp({ quality: 84, effort: 6 })
      .toFile(outputPath);

    console.log(`Creado: ${output}`);
  }

  if (project.cover) {
    const coverPath = path.join(directory, 'portada.webp');
    const sourcePath = path.join(directory, project.cover);

    if (!(await exists(coverPath)) && await exists(sourcePath)) {
      await fs.copyFile(sourcePath, coverPath);
      console.log('Creado: portada.webp');
    }
  }

  for (const filename of project.thumbnails) {
    const inputPath = path.join(directory, filename);
    const outputPath = path.join(thumbs, filename);

    if (!(await exists(inputPath))) {
      console.warn(`Falta imagen: ${filename}`);
      continue;
    }

    if (await exists(outputPath)) {
      console.log(`Ya existe: thumbs/${filename}`);
      continue;
    }

    await sharp(inputPath)
      .resize({
        width: 800,
        withoutEnlargement: true,
      })
      .webp({ quality: 75, effort: 6 })
      .toFile(outputPath);

    console.log(`Creado: thumbs/${filename}`);
  }
}

for (const project of projects) {
  await optimize(project);
}

console.log('\nOptimización finalizada.');
