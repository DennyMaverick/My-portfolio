const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
// const babel = require("gulp-babel");
const gulpConcat = require('gulp-concat');
const uglify = require('gulp-uglify');


// Обработка JavaScript
const libs = () => {
  return src(['./node_modules/aos/dist/aos.js', './node_modules/slick-carousel/slick/slick.js'])
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'JavaScript',
        message: error.message
      }))
    }))
    // .pipe(babel())
    .pipe(uglify())
    .pipe(gulpConcat('libs.min.js'))
    .pipe(dest(path.libs.dest));
}

module.exports = libs;