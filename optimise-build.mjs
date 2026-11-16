import fs from 'fs';
import os from 'os';
import path from 'path';
import sharp from 'sharp';

const BUILD_DIR = './build';
const BACKGROUND_SRC_DIR = './src/assets/images/background_images';
// Build filenames include a content hash, so a cached encode stays valid until the source changes
const CACHE_DIR = './node_modules/.cache/background-avif';

const MAX_WIDTH = 1800; // Matches the maximum page width in App.js
const THUMBNAIL_MAX_WIDTH = 600;
const QUALITY = 75;

// Backgrounds are converted to AVIF, which smooths sensor noise rather than turning it into
// blocky grain like low-quality JPEG does. 65 is ~775 KB per image, 75 is ~1.1 MB, 55 is ~550 KB.
const BACKGROUND_AVIF_QUALITY = 65;
const BACKGROUND_AVIF_EFFORT = 4; // Effort 6 gave the same size at 2.5x the encode time
const BACKGROUND_CONCURRENCY = Math.max(1, Math.floor(os.cpus().length / 2));

const THUMBNAIL_PATTERN = /^(profile_image_4_website|multi_agents_perhaps|wind_chime_length)\./;
const TEXT_FILE_PATTERN = /\.(js|css|html|json|map)$/i;

// Build files are named NAME.HASH.ext, so strip the hash to match against the source folder
const backgroundNames = new Set(
  fs.readdirSync(BACKGROUND_SRC_DIR).map((f) => path.parse(f).name)
);
function isBackground(buildName) {
  const parts = buildName.split('.');
  return parts.length >= 3 && backgroundNames.has(parts.slice(0, -2).join('.'));
}

// Run async tasks with a fixed number in flight at once
async function runPool(items, limit, worker) {
  let next = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      await worker(items[next++]);
    }
  });
  await Promise.all(runners);
}

// Convert a background to AVIF and return [oldName, newName] so references can be rewritten
async function convertBackground(file) {
  const name = path.basename(file);
  const avifName = name.replace(/\.[^.]+$/, '.avif');
  const avifPath = path.join(path.dirname(file), avifName);
  const cachePath = path.join(CACHE_DIR, `q${BACKGROUND_AVIF_QUALITY}-${avifName}`);
  const originalSize = fs.statSync(file).size;

  let buffer;
  let cached = false;
  if (fs.existsSync(cachePath)) {
    buffer = fs.readFileSync(cachePath);
    cached = true;
  } else {
    buffer = await sharp(file)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .avif({ quality: BACKGROUND_AVIF_QUALITY, effort: BACKGROUND_AVIF_EFFORT })
      .toBuffer();
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(cachePath, buffer);
  }

  fs.writeFileSync(avifPath, buffer);
  fs.unlinkSync(file);

  const origKB = (originalSize / 1024).toFixed(1);
  const newKB = (buffer.length / 1024).toFixed(1);
  console.log(`✓ ${path.relative(BUILD_DIR, avifPath)}: ${origKB} KB -> ${newKB} KB (AVIF${cached ? ', cached' : ''})`);
  return [name, avifName];
}

// Point the built JS, CSS, HTML and manifest at the new .avif files
function rewriteReferences(allFiles, renames) {
  const textFiles = allFiles.filter((f) => TEXT_FILE_PATTERN.test(f) && fs.existsSync(f));
  for (const file of textFiles) {
    const original = fs.readFileSync(file, 'utf8');
    let updated = original;
    for (const [oldName, newName] of renames) {
      updated = updated.split(oldName).join(newName);
    }
    if (updated !== original) fs.writeFileSync(file, updated);
  }
}

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
  const backgroundFiles = imageFiles.filter((file) => isBackground(path.basename(file)));
  const otherFiles = imageFiles.filter((file) => !isBackground(path.basename(file)));

  console.log(`\nConverting ${backgroundFiles.length} backgrounds to AVIF (quality ${BACKGROUND_AVIF_QUALITY})...\n`);

  const renames = [];
  await runPool(backgroundFiles, BACKGROUND_CONCURRENCY, async (file) => {
    try {
      renames.push(await convertBackground(file));
    } catch (err) {
      console.warn(`! Skipping ${file}: ${err.message}`);
    }
  });
  rewriteReferences(allFiles, renames);

  console.log(`\nOptimising ${otherFiles.length} other images in '${BUILD_DIR}'...\n`);

  for (const file of otherFiles) {
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
      const quality = QUALITY;

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