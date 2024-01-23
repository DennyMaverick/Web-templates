const isProd = process.argv.includes("--production")
const isDev = !isProd

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd,
  },

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
    appName: "Web Templates",
    appShortName: "Web-templates",
    appDescription: "This is my portfolio for web solutions",
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
