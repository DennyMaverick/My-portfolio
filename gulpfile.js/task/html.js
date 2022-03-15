const { src, dest } = require("gulp");

// Конфигурация
const path = require('../config/path.js');
const app = require("../config/app.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require("gulp-file-include");
// const webpHtml = require('gulp-webp-html');
const prettyHtml = require('gulp-pretty-html');
const webpHtmlNoSvg = require('gulp-webp-html-nosvg');

// Обработка HTML
const html = () => {
  return src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'HTML',
        message: error.message
      }))
    }))
    .pipe(fileInclude())
    .pipe(prettyHtml())
    .pipe(webpHtmlNoSvg())
    .pipe(dest(path.html.dest));
}

module.exports = html;