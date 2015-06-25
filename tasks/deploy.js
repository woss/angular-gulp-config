/* global process */

var gulp = require('gulp');
var zip = require('gulp-zip');
var aws = require('gulp-aws');
var paths = require('./paths');
var zipFile = 'client-latest.zip';

gulp.task('zip', function() {
  return gulp.src(paths.public + '/**/*')
    .pipe(zip(zipFile))
    .pipe(gulp.dest(paths.releases));
});

gulp.task('upload', function() {
  return gulp.src(paths.releases + '/' + zipFile, {buffer: false})
    .pipe(aws.s3(process.env.S3_BUCKET, {
      aws_key: process.env.S3_ACCESS_KEY,
      aws_secret: process.env.S3_SECRET,
      aws_region: process.env.S3_REGION
    }));
});
