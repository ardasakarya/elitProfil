const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.join(__dirname, 'frontend');
const extensions = ['.png', '.jpg', '.jpeg'];

// Helper to crawl directories
function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      if (extensions.includes(path.extname(file).toLowerCase())) {
        results.push(file);
      }
    }
  });
  return results;
}

async function optimizeImages() {
  const files = getFiles(rootDir);
  console.log(`Found ${files.length} images to optimize...`);

  for (const file of files) {
    const ext = path.extname(file);
    const fileName = path.basename(file, ext);
    const dir = path.dirname(file);
    const output = path.join(dir, `${fileName}.webp`);

    // Skip if webp already exists and is newer? 
    // For now, we overwrite or create.
    
    try {
      console.log(`Processing: ${file}`);
      
      const image = sharp(file);
      const metadata = await image.metadata();

      let pipeline = image.webp({ quality: 80 }); // Good balance for WebP

      // Resize if too large (e.g., > 1920px width)
      if (metadata.width > 1920) {
        console.log(`  Resizing from ${metadata.width}px to 1920px width`);
        pipeline = pipeline.resize({ width: 1920 });
      }

      await pipeline.toFile(output);
      console.log(`  Saved to: ${output}`);
      
    } catch (err) {
      console.error(`  Error processing ${file}:`, err);
    }
  }
  
  console.log('Optimization complete!');
}

optimizeImages();
