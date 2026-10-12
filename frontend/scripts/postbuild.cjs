// Copies index.html to 404.html so static hosts (GitHub Pages) serve the SPA — and the custom 404 page — for unknown routes.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'));
console.log('postbuild: created dist/404.html');
