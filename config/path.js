const pathSrc = "./src"
const pathDest = "./public"

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
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

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js/",
  },

  jslibs: {
    src: ["./node_modules/slick-carousel/slick/slick.js", "./src/js/libs/lazyload.min.js"],
    dest: pathDest + "/js/libs/vendors/",
  },

  libsCssAndScss: {
    src: pathSrc + "/sass/_libs/*.{sass,scss,css}",
    watch: pathSrc + "/sass/_libs/*.{sass,scss,css}",
    dest: pathDest + "/css/libs/",
  },

  jquerylib: {
    src: "./node_modules/jquery/dist/jquery.js",
    dest: pathDest + "/js/libs/jquery",
  },

  img: {
    src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img/",
  },

  font: {
    src: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}",
    watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}",
    dest: pathDest + "/fonts/",
  },

  favicon: {
    src: pathSrc + "/img/favicon/favicon.svg",
    watch: pathSrc + "/img/favicon/favicon.svg",
    dest: pathDest + "/img/favicon/",
  },

  svgsprite: {
    src: pathSrc + "/img/sprite/**/*.svg",
    watch: pathSrc + "/img/sprite/**/*.svg",
    dest: pathDest + "/img/sprite/",
  },
}
