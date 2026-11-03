const {src, dest} = require("gulp")

// Конфигурация
const path = require("../config/path.js")

// Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const svgSprite = require("gulp-svg-sprite")
const cheerio = require("cheerio")
const {Transform} = require("node:stream")
const svgmin = require("gulp-svgmin")
const replace = require("gulp-replace")

// Обработка SVG
const svgsprite = () => {
  return src(path.svgsprite.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "SVG Sprite",
          message: error.message,
        })),
      }),
    )
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      }),
    )
    .pipe(
      new Transform({
        objectMode: true,

        transform(file, encoding, callback) {
          if (file.isNull()) {
            return callback(null, file)
          }

          if (file.isStream()) {
            return callback(new Error("Streaming is not supported"))
          }

          try {
            const $ = cheerio.load(file.contents.toString(), {
              xmlMode: true,
            })

            $("style").remove()
            $("[class]").removeAttr("class")
            $("[fill]").removeAttr("fill")
            $("[stroke]").removeAttr("stroke")
            $("[style]").removeAttr("style")

            $("path, circle, ellipse, rect, polygon, polyline").attr("fill", "currentColor")

            file.contents = Buffer.from($.xml())

            callback(null, file)
          } catch (error) {
            callback(error)
          }
        },
      }),
    )
    .pipe(replace("&gt;", ">"))
    .pipe(
      svgSprite({
        mode: {
          // Режим symbol: использование спрайта через svg > use
          symbol: {
            sprite: "sprite.svg",
          },
        },
      }),
    )
    .pipe(dest(path.svgsprite.dest))
}

module.exports = svgsprite

// const {src, dest} = require("gulp")

// // Конфигурация
// const path = require("../config/path.js")
// const app = require("../config/app.js")

// // Плагины
// const plumber = require("gulp-plumber")
// const notify = require("gulp-notify")
// const svgSprite = require("gulp-svg-sprite")
// const cheerio = require("cheerio")
// const through2 = require("through2")
// const svgmin = require("gulp-svgmin")
// const replace = require("gulp-replace")

// // Обработка JavaScript
// const svgsprite = () => {
//   return src(path.svgsprite.src)
//     .pipe(
//       plumber({
//         errorHandler: notify.onError((error) => ({
//           title: "JavaScript",
//           message: error.message,
//         })),
//       }),
//     )
//     .pipe(
//       svgmin({
//         js2svg: {
//           pretty: true,
//         },
//       }),
//     )
//     .pipe(
//       svgcheerio({
//         run: function ($) {
//           $("style").remove()
//           $("[class]").removeAttr("class")
//           $("[fill]").removeAttr("fill")
//           $("[stroke]").removeAttr("stroke")
//           $("[style]").removeAttr("style")

//           $("path, circle, ellipse, rect, polygon, polyline").attr("fill", "currentColor")
//         },
//         parserOptions: {
//           xmlMode: true,
//         },
//       }),
//     )
//     .pipe(replace("&gt;", ">"))
//     .pipe(
//       svgSprite({
//         mode: {
//           //? Если нужно использовать спрайт через тег img,
//           //? можно использовать спрайт для background
//           // stack: {
//           //   sprite: 'sprite.svg',
//           //   example: true
//           // },
//           //?? Если нужно использовать спрайт через тег svg > use
//           symbol: {
//             sprite: "sprite.svg",
//           },
//         },
//       }),
//     )
//     .pipe(dest(path.svgsprite.dest))
// }

// module.exports = svgsprite
