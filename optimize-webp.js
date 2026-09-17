import sharp from 'sharp';
import { stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, 'src', 'assets');
const PUBLIC_DIR = join(__dirname, 'public');

const jobs = [
  { file: 'fondohero.jpg', width: 1920, quality: 82 },
  { file: 'fondoheroalt.jpg', width: 1080, quality: 80 },
  { file: 'ImagenNosotros(1).jpeg', width: 1200, quality: 80 },
  { file: 'ImagenNosotros(2).jpeg', width: 1200, quality: 80 },
  { file: 'edenor.jpg', width: 1400, quality: 80 },
  { file: 'edesur.jpg', width: 1400, quality: 80 },
  { file: 'ImagenHowWork.jpeg', width: 1200, quality: 80 },

  { file: 'logoterranova.png', width: 512, quality: 88 },
  { file: 'logodilegno.png', width: 512, quality: 88 },
  { file: 'logoquest.png', width: 512, quality: 88 },
  { file: 'logonovapaking.png', width: 512, quality: 88 },
  { file: 'logopraga.png', width: 512, quality: 88 },
  { file: 'logowoodbridge.png', width: 512, quality: 88 },
  { file: 'CAMPAGNONI.png', width: 512, quality: 88 },
  { file: 'logoGrundfos.png', width: 512, quality: 88 },
  { file: 'logo.png', width: 512, quality: 88 },
  { file: 'logoedenor.png', width: 512, quality: 88 },
  { file: 'logoedesur.png', width: 512, quality: 88 },
  { file: 'logoypg.png', width: 512, quality: 88 },
  { file: 'logoelena.jpg', width: 512, quality: 88 },
  { file: 'grupogalan.png', width: 512, quality: 88 },
  { file: 'logosmata.png', width: 512, quality: 88 },
  { file: 'logoakapol.png', width: 512, quality: 88 },
  { file: 'rayito.png', width: 128, quality: 90 },

  { file: 'imagenGaleria(1).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(2).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(3).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(4).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(5).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(6).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(7).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(8).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(9).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(10).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(11).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(12).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(13).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(14).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(15).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(16).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(17).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(18).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(19).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(20).jpg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(22).jpeg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(23).jpeg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(24).jpeg', width: 1400, quality: 78 },
  { file: 'imagenGaleria(25).jpeg', width: 1400, quality: 78 },
];

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function convert({ file, width, quality }) {
  const input = join(ASSETS_DIR, file);
  const output = input.replace(/\.(jpe?g|png)$/i, '.webp');

  try {
    const original = (await stat(input)).size;
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(output);
    const optimized = (await stat(output)).size;
    const saved = ((original - optimized) / original * 100).toFixed(1);
    console.log(`OK  ${file}: ${formatBytes(original)} -> ${formatBytes(optimized)} (-${saved}%)`);
    return optimized;
  } catch (error) {
    console.error(`ERR ${file}: ${error.message}`);
    return 0;
  }
}

async function ogImage() {
  const input = join(ASSETS_DIR, 'fondohero.jpg');
  const output = join(PUBLIC_DIR, 'og-image.jpg');
  await sharp(input)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 82 })
    .toFile(output);
  console.log(`OK  og-image.jpg (1200x630) -> public/`);
}

let total = 0;
for (const job of jobs) {
  total += await convert(job);
}
await ogImage();
console.log(`\nTotal WebP: ${formatBytes(total)}`);
