const fs = require('fs');
const path = require('path');
const tinify = require('tinify');


tinify.key = 'khGl5SMTsKvvrgNQycS76pVLJVwJZ23K';

// Function to compress images in the public folder
async function compressImagesInPublicFolder() {
    const publicFolder = path.join(__dirname, '..', 'public', 'pics');
    
    // Read all files in the public folder
    fs.readdir(publicFolder, async (err, files) => {
        if (err) {
            console.error('Error reading public folder:', err);
            return;
        }

        // Filter out only image files (PNG, JPEG, JPG)
        const imageFiles = files.filter(file => /\.(png|jpe?g)$/i.test(file));

        // Compress each image file
        for (const file of imageFiles) {
            const inputPath = path.join(publicFolder, file);
            const outputPath = path.join(publicFolder, 'compressed', file); // Output path for compressed image

            try {
                // Compress image
                await compressImage(inputPath, outputPath);
                console.log(`Image compressed: ${file}`);
            } catch (error) {
                console.error(`Error compressing image ${file}:`, error.message);
            }
        }
    });
}

// Function to compress a single image
async function compressImage(inputPath, outputPath) {
    const source = tinify.fromFile(inputPath);
    await source.toFile(outputPath);
}

// Call the function to compress images in the public folder
compressImagesInPublicFolder();
