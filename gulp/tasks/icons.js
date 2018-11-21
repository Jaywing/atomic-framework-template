var gulp = require("gulp");
var gulpif = require("gulp-if");
var svgstore = require("gulp-svgstore");

var CONFIG = require("../config.js");

gulp.task("icons", ["icons:atomic"]);

gulp.task("icons:atomic", function() {
  return gulp
    .src("./icons/*.svg")
    .pipe(svgstore())
    .pipe(gulpif(!global.production, gulp.dest("./_build/assets/images")))
    .pipe(gulpif(global.production, gulp.dest("./dist/assets/images")));
});
