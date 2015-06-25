var gulp = require('gulp');
var protractor = require('gulp-protractor');
var paths = require('./paths');
var utils = require('../lib/utils');

gulp.task('webdriver:start', ['webdriver:update'], protractor.webdriver);
gulp.task('webdriver:update', protractor.webdriver_update);
gulp.task('webdriver:standalone', ['webdriver:update'], protractor.webdriver_standalone);

gulp.task('test', ['webdriver:start'], function() {
  var testFiles = utils.getConfig('tests');
  var files = [];

  testFiles.forEach(function(file) {
    files.push(paths.root + '/' + file);
  });

  return gulp.src(files)
    .pipe(protractor.protractor({
      configFile: 'protractor.conf.js'
    }))
    .on('error', function(err) {
      console.log(err);
    });
});
