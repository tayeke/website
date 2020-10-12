const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const webserver = require('gulp-webserver');

function transpileSass() {
  return src('stylesheets/*.scss')
    .pipe(sass())
    .pipe(dest('stylesheets/bin'))
}

function transpileJs() {
  return src('javascripts/*.js')
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(dest('javascripts/bin'))
}

function watchFiles() {
  return watch(['stylesheets/*.scss', 'javascripts/*.js'], exports.build);
}

function startServer() {
  return src('.')
    .pipe(webserver({
      port: 8181
    }));
}

exports.build = series(transpileSass, transpileJs);

exports.watch = watchFiles;

exports.server = startServer;

exports.default = parallel(startServer, series(exports.build, watchFiles));