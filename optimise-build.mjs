import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const BUILD_DIR = './build';

const MAX_WIDTH = 1800; // Matches the maximum page width in App.js
const THUMBNAIL_MAX_WIDTH = 600;
const QUALITY = 75;
const BACKGROUND_QUALITY = 60; // Backgrounds sit mostly behind the translucent overlay

const BACKGROUND_PATTERN = /^(PXL|DSC)_/;
const THUMBNAIL_PATTERN = /^(profile_image_4_website|multi_agents_perhaps|wind_chime_length)\./;

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
      const name = path.basename(file);

      // Re-encoding without the animated option would flatten these to one frame
      const { pages } = await sharp(file).metadata();
      if (pages > 1) {
        console.log(`- ${path.relative(BUILD_DIR, file)}: Skipped, animated`);
        continue;
      }

      const maxWidth = THUMBNAIL_PATTERN.test(name) ? THUMBNAIL_MAX_WIDTH : MAX_WIDTH;
      const quality = BACKGROUND_PATTERN.test(name) ? BACKGROUND_QUALITY : QUALITY;

      // Old pipeline, swap with the lines below to compare
      // let pipeline = sharp(file);
      //
      // if (ext === '.jpg' || ext === '.jpeg') {
      //   pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true });
      // } else if (ext === '.png') {
      //   pipeline = pipeline.png({ quality: 75, compressionLevel: 8 });
      // } else if (ext === '.webp') {
      //   pipeline = pipeline.webp({ quality: 75 });
      // }

      // rotate() applies the EXIF orientation, which would otherwise be lost on re-encoding
      let pipeline = sharp(file).rotate().resize({ width: maxWidth, withoutEnlargement: true });

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality, compressionLevel: 8 });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality });
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