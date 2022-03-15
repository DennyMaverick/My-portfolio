const pathSrc = './src';
const pathDest = './public';


module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + '/html/*.html',
    watch: pathSrc + '/html/**/*.html',
    dest: pathDest
  },

  pug: {
    src: pathSrc + '/pug/*.pug',
    watch: pathSrc + '/pug/**/*.pug',
    dest: pathDest
  },

  css: {
    src: pathSrc + '/css/*.css',
    watch: pathSrc + '/css/**/*.css',
    dest: pathDest + '/css/'
  },

  scss: {
    src: pathSrc + '/sass/*.{sass,scss}',
    watch: pathSrc + '/sass/**/*.{sass,scss}',
    dest: pathDest + '/css/'
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js/'
  },

  libs: {
    src: pathSrc + '/js/libs/**/*.js',
    watch: pathSrc + '/js/libs/**/*.js',
    dest: pathDest + '/js/libs/vendors/'
  },

  jquery: {
    watch: pathSrc + '/js/libs/**/*.js',
    dest: pathDest + '/js/libs/jquery'
  },

  svgsprite: {
    src: pathSrc + '/img/sprite/**/*.svg',
    watch: pathSrc + '/img/sprite/**/*.svg',
    dest: pathDest + '/img/sprite/'
  },

  php: {
    src: pathSrc + '/php/**/*.*',
    watch: pathSrc + '/php/**/*.*',
    dest: pathDest + '/php/'
  },

  img: {
    src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
    watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
    dest: pathDest + '/img/'
  },

  font: {
    src: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}',
    watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}',
    dest: pathDest + '/font/'
  },

  favicon: {
    src: pathSrc + '/img/favicon/favicon.svg',
    watch: pathSrc + '/img/favicon/favicon.svg',
    dest: pathDest + '/img/favicon/'
  },
}