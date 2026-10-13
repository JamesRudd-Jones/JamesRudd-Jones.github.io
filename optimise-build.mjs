import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const BUILD_DIR = './build';

// Recursively find all files in the build output
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function optimiseImages() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`Build directory '${BUILD_DIR}' not found. Run 'react-scripts build' first.`);
    return;
  }

  const allFiles = getAllFiles(BUILD_DIR);
  const imageFiles = allFiles.filter((file) =>
    /\.(jpe?g|png|webp)$/i.test(path.extname(file))
  );

  console.log(`\nOptimising ${imageFiles.length} images in '${BUILD_DIR}'...\n`);

  for (const file of imageFiles) {
    const originalSize = fs.statSync(file).size;
    const ext = path.extname(file).toLowerCase();

    try {
      let pipeline = sharp(file);

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: 75, compressionLevel: 8 });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: 75 });
      }

      // Read to buffer first so we can safely overwrite the source file
      const compressedBuffer = await pipeline.toBuffer();

      // Only overwrite if the compressed version is actually smaller
      if (compressedBuffer.length < originalSize) {
        fs.writeFileSync(file, compressedBuffer);
        const savedPercent = (((originalSize - compressedBuffer.length) / originalSize) * 100).toFixed(1);
        const origKB = (originalSize / 1024).toFixed(1);
        const newKB = (compressedBuffer.length / 1024).toFixed(1);

        console.log(`✓ ${path.relative(BUILD_DIR, file)}: ${origKB} KB -> ${newKB} KB (-${savedPercent}%)`);
      } else {
        console.log(`- ${path.relative(BUILD_DIR, file)}: Already optimal`);
      }
    } catch (err) {
      console.warn(`! Skipping ${file}: ${err.message}`);
    }
  }

  console.log('\nImage optimisation complete!\n');
}

optimiseImages();