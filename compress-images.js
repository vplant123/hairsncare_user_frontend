// compress-images.js
// Run: npm install imagemin imagemin-mozjpeg imagemin-pngquant
// Then: node compress-images.js

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const path = require('path');

(async () => {
  await imagemin(['public/**/*.{jpg,png}'], {
    destination: 'public/',
    plugins: [
      imageminMozjpeg({quality: 75}),
      imageminPngquant({quality: [0.6, 0.8]})
    ]
  });
  console.log('Images optimized!');
})();

"analyze": "react-scripts build && npx webpack-bundle-analyzer build/static/js/*.js"
