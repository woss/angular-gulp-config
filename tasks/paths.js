var path = require('path');
var mainBowerFiles = require('main-bower-files');
var rootPath = path.resolve(__dirname) + '/../../../';

/**
 * Returns a relative path.
 * @param {string} path
 */
function includePath(path) {
  return rootPath + path;
}

/**
 * Returns a relative ignore path.
 * @param {string}
 */
function ignorePath(path) {
  return '!' + rootPath + path;
}

module.exports = {
  root: rootPath,
  src: includePath('src'),
  app: [
    includePath('src/app/app.js'),
    includePath('src/app/**/*.js'),
    ignorePath('src/app/common/spec/**/*'), // ignore test helper files
    ignorePath('**/*-spec.js') // ignore test files
  ],
  fonts: [
    includePath('src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2,otf}')
  ],
  html: [
    includePath('src/app/index.html')
  ],
  templates: [
    ignorePath('src/app/index.html'),
    includePath('src/app/**/*.html')
  ],
  images: [
    includePath('src/assets/images/**/*.{gif,jpg,png}')
  ],
  sass: [
    includePath('src/**/*.scss')
  ],
  vendor: mainBowerFiles({filter: /.*\.js/}),
  releases: includePath('releases'),
  public: includePath('public')
};
