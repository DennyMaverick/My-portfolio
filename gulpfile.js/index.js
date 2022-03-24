const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");
const app = require('./config/app.js');

// Задачи
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");
const font = require("./task/font.js");
const favicon = require("./task/favicon.js");
const php = require("./task/php.js");
// const css = require("./task/css.js");
const libs = require("./task/libs.js");
const jquerylib = require("./task/jquerylib.js");
const svgsprite = require("./task/svgsprite.js");
const theme = require("./task/theme.js");


// Статический сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    },
    browser: 'chrome'
  });
}

// Отслеживание изменений
const watcher = () => {
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.img.watch, img).on('all', browserSync.reload);
  watch(path.font.watch, font).on('all', browserSync.reload);
  watch(path.favicon.watch, favicon).on('all', browserSync.reload);
  watch(path.php.watch, php).on('all', browserSync.reload);
  // watch(path.css.watch, css).on('all', browserSync.reload);
  watch(path.libs.watch, libs).on('all', browserSync.reload);
  watch(path.jquery.watch, jquerylib).on('all', browserSync.reload);
  watch(path.svgsprite.watch, svgsprite).on('all', browserSync.reload);
  watch(path.theme.watch, theme).on('all', browserSync.reload);
}


const build = series(
  clear,
  parallel(html, scss, libs, svgsprite, jquerylib, js, php, font, img, favicon, theme)
);

const dev = series(
  build,
  parallel(server, watcher)
);

// Публичные задачи
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.favicon = favicon;
exports.php = php;
// exports.php = css;
exports.libs = libs;
exports.jquerylib = jquerylib;
exports.svgsprite = svgsprite;
exports.theme = theme;

// Сборка
exports.default = app.isProd
  ? build
  : dev;
