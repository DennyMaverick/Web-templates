const {src, dest} = require("gulp")

// Конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")

// Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const csso = require("gulp-csso")
const concat = require("gulp-concat")
const sass = require("gulp-sass")(require("sass"))

// Обработка SCSS
const libsCssScss = () => {
  return src(path.libsCssAndScss.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "SCSS",
          message: error.message,
        })),
      })
    )
    .pipe(sass())
    .pipe(csso())
    .pipe(concat("libs.min.css"))
    .pipe(dest(path.libsCssAndScss.dest))
}

module.exports = libsCssScss
