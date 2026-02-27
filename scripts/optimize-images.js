#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sourceDir = "public/assets/img/previous-events/2025/raw-images";
const outputDir = "public/assets/img/previous-events/2025/optimized";
const thumbnailDir = path.join(outputDir, "thumbnails");

// Create output directories if they don't exist
[outputDir, thumbnailDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Get all image files
const files = fs
  .readdirSync(sourceDir)
  .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

console.log(`Found ${files.length} images to optimize...`);

// Process each image
let completed = 0;
files.forEach((file, index) => {
  const inputPath = path.join(sourceDir, file);
  const baseName = path.parse(file).name;

  // Create full-size optimized image (WebP)
  sharp(inputPath)
    .resize(1200, 800, { fit: "cover", withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, `${baseName}.webp`))
    .then(() => {
      console.log(`✓ Created WebP: ${baseName}.webp`);
      completed++;
    })
    .catch((err) => console.error(`Error processing ${file}:`, err));

  // Create JPEG fallback (full-size)
  sharp(inputPath)
    .resize(1200, 800, { fit: "cover", withoutEnlargement: true })
    .jpeg({ quality: 85 })
    .toFile(path.join(outputDir, `${baseName}.jpg`))
    .then(() => {
      console.log(`✓ Created JPEG: ${baseName}.jpg`);
      completed++;
    })
    .catch((err) => console.error(`Error processing ${file}:`, err));

  // Create thumbnail (WebP)
  sharp(inputPath)
    .resize(400, 300, { fit: "cover", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(thumbnailDir, `${baseName}-thumb.webp`))
    .then(() => {
      console.log(`✓ Created Thumbnail WebP: ${baseName}-thumb.webp`);
      completed++;
    })
    .catch((err) => console.error(`Error processing ${file}:`, err));

  // Create small placeholder (for LQIP)
  sharp(inputPath)
    .resize(100, 75, { fit: "cover" })
    .webp({ quality: 50 })
    .toFile(path.join(thumbnailDir, `${baseName}-placeholder.webp`))
    .then(() => {
      console.log(`✓ Created Placeholder: ${baseName}-placeholder.webp`);
      completed++;
    })
    .catch((err) => console.error(`Error processing ${file}:`, err));
});

console.log(`\nOptimization started for ${files.length} images...`);
console.log(`Check ${outputDir} and ${thumbnailDir} for optimized images.`);
