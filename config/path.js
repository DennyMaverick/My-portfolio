const pathSrc = './src';
const pathDest = './public';


module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },
  theme: {
    src: pathSrc + "/sass/theme/*.{sass,scss}",
    watch: pathSrc + "/sass/theme/*.{sass,scss}",
    dest: pathDest + "/css/theme/",
  },
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest,
  },

  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css/",
  },

  scss: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css/",
  },

  scss_and_css_libs: {
    src: pathSrc + "/sass/_libs/*.{sass,scss,css}",
    watch: pathSrc + "/sass/_libs/*.{sass,scss,css}",
    dest: pathDest + "/css/libs/",
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js/",
  },

  // JavaScript библиотеки
  libs: {
    src: ["./node_modules/aos/dist/aos.js", "./node_modules/slick-carousel/slick/slick.js"],
    dest: pathDest + "/js/libs/vendors/",
  },

  jquery: {
    watch: pathSrc + "/js/libs/**/*.js",
    dest: pathDest + "/js/libs/jquery",
  },

  svgsprite: {
    src: pathSrc + "/img/sprite/**/*.svg",
    watch: pathSrc + "/img/sprite/**/*.svg",
    dest: pathDest + "/img/sprite/",
  },

  php: {
    src: pathSrc + "/php/**/*.*",
    watch: pathSrc + "/php/**/*.*",
    dest: pathDest + "/php/",
  },

  img: {
    src: ["./src/img/**/*.{png,jpg,jpeg,gif,svg}", "!./src/img/sprite/**/*.svg"],
    watch: ["./src/img/**/*.{png,jpg,jpeg,gif,svg}", "!./src/img/sprite/**/*.svg"],
    dest: pathDest + "/img/",
  },

  font: {
    src: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}",
    watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}",
    dest: pathDest + "/font/",
  },

  favicon: {
    src: pathSrc + "/img/favicon/favicon.svg",
    watch: pathSrc + "/img/favicon/favicon.svg",
    dest: pathDest + "/img/favicon/",
  },
}