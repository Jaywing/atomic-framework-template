var gulp = require('gulp');

var CONFIG = require('../config.js');

gulp.task('images', ['images:atomic']);

gulp.task('images:atomic', function() {
  return gulp.src('./images/**/*{jpg,png,svg}')
  .pipe(gulp.dest('./_build/assets/images'));
});