import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, 'src', 'assets');
const BACKUP_DIR = join(__dirname, 'src', 'assets', 'original');

// Configuración de optimización
const CONFIG = {
  jpg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  png: {
    quality: 90,
    compressionLevel: 9,
    palette: true
  },
  webp: {
    quality: 85,
    effort: 6
  }
};

async function ensureBackupDir() {
  try {
    await mkdir(BACKUP_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
}

async function getImageFiles(dir) {
  const files = await readdir(dir);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  const imageFiles = [];
  for (const file of files) {
    const filePath = join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isFile() && imageExtensions.includes(extname(file).toLowerCase())) {
      // Ignorar archivos en la carpeta original
      if (!filePath.includes('original')) {
        imageFiles.push(filePath);
      }
    }
  }
  
  return imageFiles;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(filePath) {
  try {
    const ext = extname(filePath).toLowerCase();
    const stats = await stat(filePath);
    const originalSize = stats.size;
    
    console.log(`\n📸 Procesando: ${filePath.split('\\').pop()}`);
    console.log(`   Tamaño original: ${formatBytes(originalSize)}`);
    
    const image = sharp(filePath);
    
    let optimized;
    
    switch (ext) {
      case '.jpg':
      case '.jpeg':
        optimized = image.jpeg(CONFIG.jpg);
        break;
      case '.png':
        optimized = image.png(CONFIG.png);
        break;
      case '.webp':
        optimized = image.webp(CONFIG.webp);
        break;
      default:
        console.log(`   ⚠️  Formato no soportado: ${ext}`);
        return;
    }
    
    // Crear archivo temporal
    const tempPath = filePath.replace(ext, `.optimized${ext}`);
    await optimized.toFile(tempPath);
    
    const tempStats = await stat(tempPath);
    const optimizedSize = tempStats.size;
    const savedBytes = originalSize - optimizedSize;
    const savedPercent = ((savedBytes / originalSize) * 100).toFixed(2);
    
    if (savedBytes > 0) {
      // Guardar backup del original
      const backupPath = join(BACKUP_DIR, filePath.split('\\').pop());
      await sharp(filePath).toFile(backupPath);
      
      // Reemplazar original con optimizado
      const { rename, unlink } = await import('fs/promises');
      await unlink(filePath);
      await rename(tempPath, filePath);
      
      console.log(`   ✅ Optimizado: ${formatBytes(optimizedSize)}`);
      console.log(`   💾 Ahorro: ${formatBytes(savedBytes)} (${savedPercent}%)`);
    } else {
      console.log(`   ℹ️  No se requiere optimización`);
      const { unlink } = await import('fs/promises');
      await unlink(tempPath);
    }
    
    return {
      file: filePath.split('\\').pop(),
      originalSize,
      optimizedSize: savedBytes > 0 ? optimizedSize : originalSize,
      savedBytes: savedBytes > 0 ? savedBytes : 0,
      savedPercent: savedBytes > 0 ? savedPercent : 0
    };
    
  } catch (error) {
    console.error(`   ❌ Error procesando ${filePath}: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  console.log('📁 Directorio:', ASSETS_DIR);
  
  await ensureBackupDir();
  console.log('💾 Backup guardado en:', BACKUP_DIR);
  
  const imageFiles = await getImageFiles(ASSETS_DIR);
  
  if (imageFiles.length === 0) {
    console.log('\n⚠️  No se encontraron imágenes para optimizar');
    return;
  }
  
  console.log(`\n📋 Encontradas ${imageFiles.length} imágenes\n`);
  console.log('─'.repeat(60));
  
  const results = [];
  for (const file of imageFiles) {
    const result = await optimizeImage(file);
    if (result) {
      results.push(result);
    }
  }
  
  console.log('\n' + '─'.repeat(60));
  console.log('\n📊 RESUMEN DE OPTIMIZACIÓN\n');
  
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0);
  const totalSaved = results.reduce((sum, r) => sum + r.savedBytes, 0);
  const totalPercent = ((totalSaved / totalOriginal) * 100).toFixed(2);
  
  console.log(`   Imágenes procesadas: ${results.length}`);
  console.log(`   Tamaño original total: ${formatBytes(totalOriginal)}`);
  console.log(`   Tamaño optimizado total: ${formatBytes(totalOptimized)}`);
  console.log(`   Ahorro total: ${formatBytes(totalSaved)} (${totalPercent}%)`);
  console.log('\n✨ ¡Optimización completada!\n');
}

main().catch(console.error);
