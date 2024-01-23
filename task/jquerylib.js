const {src, dest} = require("gulp")

// Конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")

// Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const strips = require("gulp-strip-comments")

// Обработка JavaScript
const jquerylib = () => {
  return (
    src(path.jquerylib.src)
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "JavaScript",
            message: error.message,
          })),
        })
      )
      .pipe(strips())
      .pipe(uglify())
      // .pipe(babel())
      .pipe(dest(path.jquerylib.dest))
  )
}

module.exports = jquerylib
