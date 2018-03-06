var gulp = require('gulp');
var gulpif = require('gulp-if')

var CONFIG = require('../config.js');

gulp.task('fonts', ['fonts:atomic']);

gulp.task('fonts:atomic', function () {
  return gulp.src('./fonts/**/*')
    .pipe(gulpif(!global.production, gulp.dest('./_build/assets/fonts')))
    .pipe(gulpif(global.production, gulp.dest('./dist/assets/fonts')))
});