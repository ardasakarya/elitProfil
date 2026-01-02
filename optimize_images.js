// optimize_images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// İşlenecek klasörler ve boyutlandırma kuralları
const processConfig = {
  '`frontend/img`': { // Hero ve diğer genel görseller için
    sizes: [640, 768, 1024, 1280, 1536, 1920],
    quality: 80,
  },
  '`frontend/product_img`': { // Ürün ve katalog görselleri için
    sizes: [400, 600, 800],
    quality: 75,
  },
   '`frontend/img/logo.png`': { // Logo için (eğer SVG değilse)
    sizes: [150, 300], // Normal ve 2x (retina) için
    quality: 90,
  }
};

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    })
  );
  return files.flat().filter(file => /\.(jpe?g|png|webp)$/i.test(file));
}

async function optimizeImages() {
  console.log('Görsel optimizasyonu başlıyor...');

  for (const [inputDir, config] of Object.entries(processConfig)) {
      if (fs.lstatSync(inputDir).isFile()) { // Tek dosya ise (logo gibi)
        await processFile(inputDir, path.dirname(inputDir), config);
        continue;
      }

      const files = await getFiles(inputDir);

      for (const file of files) {
        if (file.includes(path.sep + 'optimized' + path.sep)) continue; // Zaten optimize edilmişleri atla
        await processFile(file, inputDir, config);
      }
  }

  console.log('Görsel optimizasyonu tamamlandı!');
}

async function processFile(file, baseInputDir, config) {
    const { name, ext, dir } = path.parse(file);
    const relativeDir = path.relative(baseInputDir, dir);
    const outputDir = path.join(baseInputDir, 'optimized', relativeDir);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`-> İşleniyor: ${file}`);

    for (const width of config.sizes) {
      const outputFilename = `${name}-${width}w.webp`;
      const outputPath = path.join(outputDir, outputFilename);

      try {
        await sharp(file)
          .resize({ width })
          .webp({ quality: config.quality })
          .toFile(outputPath);
        console.log(`   - Oluşturuldu: ${outputPath} (${width}px)`);
      } catch (err) {
        console.error(`Hata (${file}):`, err);
      }
    }
}

optimizeImages();
