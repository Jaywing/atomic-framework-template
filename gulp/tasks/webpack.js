var gulp      = require('gulp');
var gulpif    = require('gulp-if')
var webpack   = require('webpack-stream');
var webpack2  = require('webpack');
var path      = require('path');

var webpackConfig = {
  context: path.resolve('js/'),
  entry: {
    app: ['babel-polyfill', 'app.js']
  },
  output: {
    path: path.resolve('_build/assets/js/'),
    filename: 'app.js',
    publicPath: '/assets/js/'
  },
  plugins: [],
  resolve: {
    modules: [path.resolve('js/'), path.resolve('node_modules')]
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: path.resolve('node_modules')
      }
    ]
  }
}

gulp.task('webpack', function() {
  return gulp.src('./js/app.js')
    .pipe(webpack(webpackConfig, webpack2))
    .pipe(gulpif(!global.production, gulp.dest('./_build/assets/js')))
    .pipe(gulpif(global.production, gulp.dest('./dist/assets/js')))
});