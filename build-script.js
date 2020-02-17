const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/elementsApp/main-es2015.js',
    './dist/elementsApp/main-es5.js',
    './dist/elementsApp/polyfills-es2015.js',
    './dist/elementsApp/polyfills-es5.js',
    './dist/elementsApp/runtime-es2015.js',
    './dist/elementsApp/runtime-es5.js'
  ]

  await fs.ensureDir('elements')

  await concat(files, 'elements/user-poll.js')
  console.log('Elements got created');
})()
