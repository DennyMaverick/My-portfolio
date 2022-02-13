const { src, dest } = require("gulp");

// Конфигурация
const path = require('../config/path.js');
// const app = require("../config/app.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');




// Обработка HTML
const php = () => {
  return src(path.php.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'HTML',
        message: error.message
      }))
    }))
    .pipe(dest(path.php.dest));
}

module.exports = php;