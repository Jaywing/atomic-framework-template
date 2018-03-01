var gulp      = require('gulp');
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
    // extensions: extensions,
    // alias: TASK_CONFIG.javascripts.alias,
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
    .pipe(gulp.dest('./_build/assets/js/'));
});