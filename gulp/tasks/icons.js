var gulp      = require('gulp');
var svgstore  = require('gulp-svgstore')

var CONFIG = require('../config.js');

gulp.task('icons', ['icons:atomic']);

gulp.task('icons:atomic', function() {
  return gulp.src('./icons/*.svg')
    .pipe(svgstore())
    .pipe(gulp.dest('./_build/assets/images/'));
});