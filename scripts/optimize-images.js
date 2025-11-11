import fs from 'fs';
import path from 'path';
import process from 'process';
import sharp from 'sharp';

const rootDir = path.resolve(path.join(path.dirname(new URL(import.meta.url).pathname), '..'));
const targets = [path.join(rootDir, 'public'), path.join(rootDir, 'src', 'assets')];
const supportedExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);

function* walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(fullPath);
    } else {
      yield fullPath;
    }
  }
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!supportedExtensions.has(ext)) return null;

  const buffer = fs.readFileSync(filePath);
  const pipeline = sharp(buffer, { failOn: 'none', animated: true });

  let optimizedBuffer;

  try {
    switch (ext) {
      case '.png':
        optimizedBuffer = await pipeline
          .png({ quality: 80, compressionLevel: 9, adaptiveFiltering: true })
          .toBuffer();
        break;
      case '.jpg':
      case '.jpeg':
        optimizedBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
        break;
      case '.webp':
        optimizedBuffer = await pipeline.webp({ quality: 75 }).toBuffer();
        break;
      case '.avif':
        optimizedBuffer = await pipeline.avif({ quality: 60 }).toBuffer();
        break;
      default:
        return null;
    }
  } catch (error) {
    console.warn(`No se pudo optimizar ${filePath}:`, error.message);
    return null;
  }

  if (!optimizedBuffer || optimizedBuffer.length >= buffer.length) {
    return null;
  }

  fs.writeFileSync(filePath, optimizedBuffer);
  const savedKb = ((buffer.length - optimizedBuffer.length) / 1024).toFixed(1);
  return { filePath, savedKb };
}

async function main() {
  console.log('Optimizando imágenes…');
  const optimized = [];

  for (const baseDir of targets) {
    if (!fs.existsSync(baseDir)) continue;
    for (const filePath of walkDir(baseDir)) {
      const result = await optimizeImage(filePath);
      if (result) optimized.push(result);
    }
  }

  if (optimized.length === 0) {
    console.log('No se optimizaron imágenes (posiblemente ya están comprimidas).');
    return;
  }

  optimized.forEach(({ filePath, savedKb }) => {
    console.log(`✔ ${path.relative(rootDir, filePath)} (-${savedKb} KB)`);
  });
}

main().catch((error) => {
  console.error('Error durante la optimización de imágenes:', error);
  process.exitCode = 1;
});
