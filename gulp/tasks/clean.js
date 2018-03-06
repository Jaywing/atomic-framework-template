var gulp = require('gulp');
var gulpif = require('gulp-if')
var clean = require('del').sync;

gulp.task('clean:build', function () {
  clean('./_build');
});

gulp.task('clean:dist', function () {
  clean('./dist');
});