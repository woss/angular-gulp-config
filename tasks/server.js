var gulp = require('gulp');
var paths = require('./paths');
var browserSync = require('browser-sync').create();
var modRewrite = require('connect-modrewrite');
var utils = require('../lib/utils');

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: paths.public,
      middleware: [
        modRewrite([
          '!\\.\\w+$ /index.html [L]'
        ])
      ]
    },
    notify: false,
    port: utils.getConfig('browserSync.port'),
    open: false,
    reloadDelay: 500
  });

  gulp.watch(paths.app, ['app']).on('change', browserSync.reload);
  gulp.watch(paths.html, ['html']).on('change', browserSync.reload);
  gulp.watch(paths.templates, ['templates']).on('change', browserSync.reload);
  gulp.watch(paths.sass, ['sass']).on('change', browserSync.reload);
  gulp.watch(paths.vendor, ['vendor']).on('change', browserSync.reload);
  gulp.watch(paths.fonts, ['fonts']).on('change', browserSync.reload);
  gulp.watch(paths.images, ['images']).on('change', browserSync.reload);
});
