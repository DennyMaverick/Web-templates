const {watch, series, parallel} = require("gulp")
const browserSync = require("browser-sync").create()

// Конфигурация
const path = require("./config/path.js")
const app = require("./config/app.js")

// Задачи
const clear = require("./task/clear.js")
const html = require("./task/html.js")
const scss = require("./task/scss.js")
const js = require("./task/js.js")
const img = require("./task/img.js")
const font = require("./task/font.js")
const favicon = require("./task/favicon.js")
const svgsprite = require("./task/svgsprite.js")
const libsCssAndScss = require("./task/libsCssScss")
const jslibs = require("./task/jslibs.js")
const jquerylib = require("./task/jquerylib.js")

// Статический сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
    browser: "Google Chrome",
  });
}

// Отслеживание изменений
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload)
  watch(path.scss.watch, scss).on("all", browserSync.reload)
  watch(path.js.watch, js).on("all", browserSync.reload)
  watch(path.img.watch, img).on("all", browserSync.reload)
  watch(path.font.watch, font).on("all", browserSync.reload)
  watch(path.favicon.watch, favicon).on("all", browserSync.reload)
  watch(path.svgsprite.watch, svgsprite).on("all", browserSync.reload)
  watch(path.libsCssAndScss.watch, libsCssAndScss).on("all", browserSync.reload)
}

const build = series(clear, parallel(html, scss, js, font, img, svgsprite, libsCssAndScss, jslibs, jquerylib, favicon))

const dev = series(build, parallel(server, watcher))

// Публичные задачи
exports.html = html
exports.scss = scss
exports.js = js
exports.img = img
exports.font = font
exports.favicon = favicon
exports.svgsprite = svgsprite
exports.libsCssAndScss = libsCssAndScss
exports.jslibs = jslibs
exports.jquerylib = jquerylib

// Сборка
exports.default = app.isProd ? build : dev