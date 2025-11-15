/* eslint-env node */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(path.join(__dirname, '..'));
const publicDir = path.join(rootDir, 'public');
const inputJfif = path.join(publicDir, 'profile.jpg.jfif');

const targets = [
  {
    out: path.join(publicDir, 'profile.jpg'),
    format: 'jpeg',
    options: { quality: 82, mozjpeg: true },
  },
  {
    out: path.join(publicDir, 'profile.webp'),
    format: 'webp',
    options: { quality: 78, effort: 4 },
  },
  {
    out: path.join(publicDir, 'profile.avif'),
    format: 'avif',
    options: { quality: 62, effort: 4 },
  },
];

async function ensureVariants() {
  if (!fs.existsSync(inputJfif)) {
    console.error('No se encontró public/profile.jpg.jfif; no se pueden generar variantes.');
    process.exit(1);
  }
  const src = sharp(inputJfif, { failOn: 'none' });

  // Redimensionamos a 208x208 (tamaño del círculo en el Hero) con recorte centrado
  const base = src.resize(208, 208, { fit: 'cover', position: 'attention' });

  for (const t of targets) {
    if (fs.existsSync(t.out)) {
      console.log(`Saltando (ya existe): ${path.relative(rootDir, t.out)}`);
      continue;
    }
    const pipeline = base.clone();
    let buf;
    if (t.format === 'jpeg') buf = await pipeline.jpeg(t.options).toBuffer();
    else if (t.format === 'webp') buf = await pipeline.webp(t.options).toBuffer();
    else if (t.format === 'avif') buf = await pipeline.avif(t.options).toBuffer();
    fs.writeFileSync(t.out, buf);
    console.log(
      `✔ Generado ${path.relative(rootDir, t.out)} (${(buf.length / 1024).toFixed(1)} KB)`,
    );
  }

  console.log('Variantes de perfil listas.');
}

ensureVariants().catch((e) => {
  console.error(e);
  process.exit(1);
});
