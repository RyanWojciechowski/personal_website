// Simple build script for development
const fs = require('fs');
const path = require('path');

// Function to copy files
function copyFile(src, dest) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
}

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            copyFile(srcPath, destPath);
        }
    }
}

// Build function
function build() {
    console.log('Building website...');
    
    // Create dist directory
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }
    
    // Copy main files
    copyFile('index.html', 'dist/index.html');
    copyFile('package.json', 'dist/package.json');
    copyFile('README.md', 'dist/README.md');
    
    // Copy src directory
    copyDir('src', 'dist/src');
    
    // Copy other config files
    const configFiles = ['tailwind.config.js', 'postcss.config.js', 'vite.config.js'];
    configFiles.forEach(file => {
        if (fs.existsSync(file)) {
            copyFile(file, `dist/${file}`);
        }
    });
    
    console.log('Build complete! Files copied to dist/ directory.');
}

// Run build if this script is executed directly
if (require.main === module) {
    build();
}

module.exports = { build, copyFile, copyDir };
