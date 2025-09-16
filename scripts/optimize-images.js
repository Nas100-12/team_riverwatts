const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Optimize the hero image
async function optimizeHeroImage() {
  const inputPath = path.join(__dirname, '..', 'riverwatts-dashboard', 'public', 'hero_section_image.jpg');
  const outputPath = path.join(__dirname, '..', 'riverwatts-dashboard', 'public', 'hero_section_image_optimized.jpg');
  
  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error('Input image not found:', inputPath);
      return;
    }
    
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    console.log(`Original image size: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
    
    // Optimize the image
    await sharp(inputPath)
      .resize(1200, 800) // Resize to a more web-friendly size
      .jpeg({ quality: 80, progressive: true }) // Optimize JPEG quality
      .toFile(outputPath);
    
    // Get optimized file size
    const optimizedStats = fs.statSync(outputPath);
    console.log(`Optimized image size: ${(optimizedStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Size reduction: ${((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(2)}%`);
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

// Run the optimization
optimizeHeroImage();