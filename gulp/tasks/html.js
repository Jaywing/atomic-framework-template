'use strict';

var browserSync = require('browser-sync')
var data = require('gulp-data')
var gulp = require('gulp')
var gulpif = require('gulp-if')
var nunjucksRender = require('gulp-nunjucks-render')
var fs = require('fs')
var path = require('path');
var mergeJson = require('merge-json');
var htmlmin = require('gulp-htmlmin')

var CONFIG = require('../config.js');

gulp.task('html', ['html:atomic']);

gulp.task('html:atomic', function () {
  const dataFunction = function (file) {
    var globalData = path.resolve('html/data/global.json');
    var pageData = JSON.parse(fs.readFileSync(globalData));
    var filename = file.path.split('.njk')[0];
    var splitOperator = '\\';
    if (filename.toString().indexOf(splitOperator) < 0) splitOperator = '/';
    filename = filename.toString().split(splitOperator);
    filename = filename[filename.length - 1] + '.json';
    var dataPath = path.resolve('html/data/' + filename);

    if (fs.existsSync(dataPath)) {
      pageData = mergeJson.merge(
        JSON.parse(fs.readFileSync(globalData, 'utf8')),
        JSON.parse(fs.readFileSync(dataPath, 'utf8'))
      );
    }
    return pageData;
  }

  return gulp.src(['./html/**/*.njk', '!./html/{components,layouts,shared,macros,data}/**'])
    .pipe(data(dataFunction))
    // .on('error', handleErrors)
    .pipe(nunjucksRender({ path: ['./html'] }))
    // .on('error', handleErrors)
    .pipe(gulpif(!global.production, gulp.dest('./_build')))
    .pipe(gulpif(global.production, htmlmin({ collapseWhitespace: true })))
    .pipe(gulpif(global.production, gulp.dest('./dist')))
});