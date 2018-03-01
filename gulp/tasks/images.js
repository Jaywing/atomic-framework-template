var gulp    = require('gulp');
var gulpif  = require('gulp-if')

var CONFIG = require('../config.js');

gulp.task('images', ['images:atomic']);

gulp.task('images:atomic', function() {
  return gulp.src('./images/**/*{jpg,png,svg}')
  .pipe(gulpif(!global.production, gulp.dest('./_build/assets/images')))
  .pipe(gulpif(global.production, gulp.dest('./dist/assets/images')))
});