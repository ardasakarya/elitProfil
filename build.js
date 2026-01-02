const fs = require('fs');
const path = require('path');
const md5File = require('md5-file');
const glob = require('glob');

const publicDir = 'frontend'; // Varlıklarınızın olduğu ana klasör
const buildDir = 'dist'; // Build sonrası dosyaların konulacağı klasör

// Build klasörünü temizle ve yeniden oluştur
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
}
fs.mkdirSync(buildDir, { recursive: true });

// Hash'lenecek dosya türleri
const assetPatterns = [
  'script/**/*.js',
  'style/**/*.css',
  'img/**/*.*',
  'product_img/**/*.*',
  'fonts/**/*.*'
];

const manifest = {};

// 1. Varlıkları hash'le ve kopyala
assetPatterns.forEach(pattern => {
  const files = glob.sync(path.join(publicDir, pattern));
  files.forEach(file => {
    if (fs.lstatSync(file).isDirectory()) return;

    const hash = md5File.sync(file).slice(0, 8); // 8 karakterlik kısa hash
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const newFilename = `${basename}.${hash}${ext}`;
    
    const relativePath = path.relative(publicDir, file);
    const newPath = path.join(buildDir, path.dirname(relativePath), newFilename);

    fs.mkdirSync(path.dirname(newPath), { recursive: true });
    fs.copyFileSync(file, newPath);

    // Orijinal yolu yeni yola eşle
    const originalAssetPath = relativePath.replace(/\\/g, '/');
    const hashedAssetPath = path.join(path.dirname(relativePath), newFilename).replace(/\\/g, '/');
    manifest[originalAssetPath] = hashedAssetPath;
  });
});

// 2. HTML dosyalarını kopyala ve içindeki referansları güncelle
const htmlFiles = glob.sync(path.join(publicDir, '*.html'));
htmlFiles.forEach(htmlFile => {
  let content = fs.readFileSync(htmlFile, 'utf8');

  Object.keys(manifest).forEach(originalPath => {
    const hashedPath = manifest[originalPath];
    // HTML içinde doğru referansı bulmak için (../, ./) gibi önekleri de hesaba kat
    const regex = new RegExp(`(src|href)=["'](.*?)${originalPath}["']`, 'g');
    content = content.replace(regex, `$1="${path.dirname(originalPath)}/${path.basename(hashedPath)}"`);
  });

  const destHtmlPath = path.join(buildDir, path.basename(htmlFile));
  fs.writeFileSync(destHtmlPath, content);
});

console.log('Build complete! Files are in the /dist folder.');
console.log('Generated manifest:', manifest);

// Diğer statik dosyaları (PDF vb.) kopyala
const otherFiles = glob.sync(path.join(publicDir, 'certs/**/*.*'));
otherFiles.forEach(file => {
    const relativePath = path.relative(publicDir, file);
    const newPath = path.join(buildDir, relativePath);
    fs.mkdirSync(path.dirname(newPath), { recursive: true });
    fs.copyFileSync(file, newPath);
});

console.log('Other static files copied.');
