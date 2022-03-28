const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require('sass'));


// Обработка SCSS
const theme = () => {
  return src(path.theme.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'SCSS',
        message: error.message
      }))
    }))
    .pipe(sass(app.scss))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(path.theme.dest, { sourcemaps: app.isDev }));
}

module.exports = theme;