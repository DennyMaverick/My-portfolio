const isProd = process.argv.includes('--production');
const isDev = !isProd;


module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

  // pug: {
  //   data: {
  //     social: require("../data/social.json"),
  //   },
  //   pretty: isDev,
  // },

  webpack: {
    mode: isProd ? "production" : "development",
  },

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"],
  },

  scss: {
    importer: require("node-sass-tilde-importer"),
    outputStyle: "compressed",
  },
  favicons: {
    appName: "Portfolio",
    appShortName: "Denny Maverick - portfolio",
    appDescription: "Denny Maverick - weblandigsforyou",
    developerName: "Denny Maverick",
    background: "#fff",
    path: "img/favicon/",
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleStartup: false,
    },
  },
}