var gulp = require('gulp');
var ngTemplates = require('gulp-ng-templates');
var paths = require('./paths');
var utils = require('../libs/utils');
var appName = utils.getConfig('app');

gulp.task('templates', function() {
  return gulp.src(paths.templates)
    .pipe(ngTemplates({
      filename: 'templates.js',
      module: appName + '.templates'
    }))
    .pipe(gulp.dest(paths.public + '/js/'));
});
