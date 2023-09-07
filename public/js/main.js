/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/theme */ \"./src/js/modules/theme.js\");\n/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_theme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_main_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main-script */ \"./src/js/modules/main-script.js\");\n/* harmony import */ var _modules_main_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_main_script__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/main-script.js":
/*!***************************************!*\
  !*** ./src/js/modules/main-script.js ***!
  \***************************************/
/***/ (function() {

eval("//* ========== lazyload ==========\n\nvar lazyLoadInstance = new LazyLoad({\n  elements_selector: \".lazy\",\n})\n\n// * light-theme object\n\nconst lightTheme = {\n  \"footer-slider__btn\": {\n    light: \"footer-slider__btn--light\",\n  },\n  modal__title: {\n    light: \"modal__title--light\",\n  },\n  \"modal__close-line\": {\n    light: \"modal__close-line--light\",\n  },\n  slide__text: {\n    light: \"slide__text--light\",\n  },\n  modal__inner: {\n    light: \"modal__inner--light\",\n  },\n}\n\n// * =========== Modal Open ============\n\nconst dataModals = document.querySelectorAll(\"[data-modal]\")\nmodals = document.querySelectorAll(\".modal\")\nconst bodyEl = document.querySelector(\"body\")\nconst modalCloseBtns = document.querySelectorAll(\".modal__close\")\n\ndataModals.forEach(function (modal) {\n  modal.addEventListener(\"click\", function (event) {\n    // * ================= Slick ===============\n\n    const $this = $(this);\n    const modalId = $this.data(\"modal\");\n    const currentModalId = event.target.closest(\".work__image\").dataset.modal;\n\n    const currentModal = document.querySelector(currentModalId);\n    const modalInner = currentModal.querySelector(\".modal__inner\");\n\n    const currentSlider = $(modalId).find('[data-slider=\"slick\"]');\n\n    const currentSliderUsual = $(modalId).find('[data-slider=\"slick-usual\"]');\n\n    const currentSecondSlider = $(modalId).find('[data-slider=\"slick-second\"]');\n\n    currentSliderUsual.slick({\n      arrows: false,\n      dots: false,\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      fade: true,\n      adaptiveHeight: true,\n      responsive: [\n        {\n          breakpoint: 768,\n          settings: {\n            autoplay: true,\n            autoplaySpeed: 17000,\n            dots: true\n          },\n        },\n      ],\n    });\n\n    currentSlider.slick({\n      arrows: false,\n      dots: false,\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      fade: true,\n      adaptiveHeight: true,\n      asNavFor: currentSecondSlider,\n      responsive: [\n        {\n          breakpoint: 768,\n          settings: {\n            autoplay: true,\n            autoplaySpeed: 17000,\n          },\n        },\n      ],\n    });\n\n    currentSecondSlider.slick({\n      arrows: false,\n      dots: false,\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      fade: true,\n      adaptiveHeight: true,\n      asNavFor: currentSlider,\n      focusOnSelect: true,\n    });\n\n    //* background and color change when slide--light is active\n\n    currentSlider.on(\"afterChange\", function (event) {\n      let currentSlide = event.target.querySelector(\".slick-active\");\n      let currentSlideItem = currentSlide.querySelector(\".slider__item\");\n\n      if (currentSlideItem.classList.contains(\"slide--light\")) {\n        for (key in lightTheme) {\n          const elems = currentModal.querySelectorAll(\".\" + key);\n          elems.forEach((elem) => {\n            if (lightTheme[key].light) {\n              elem.classList.add(`${lightTheme[key].light}`);\n            }\n          });\n        }\n      } else {\n        for (key in lightTheme) {\n          const elems = currentModal.querySelectorAll(\".\" + key);\n          elems.forEach((elem) => {\n            if (lightTheme[key].light) {\n              elem.classList.remove(`${lightTheme[key].light}`);\n            }\n          });\n        }\n      }\n    });\n\n    // Слайдер переключателя тем,  кнопки переключения, он необычный, выделяется среди других\n\n    $(\".slickPrev\").on(\"click\", function (event) {\n      event.preventDefault();\n      currentSlider.slick(\"slickPrev\");\n    });\n    $(\".slickNext\").on(\"click\", function (event) {\n      event.preventDefault();\n      currentSlider.slick(\"slickNext\");\n    });\n\n    // Обычный слайдер, кнопки переключения\n\n    $(\".slickPrevUsual\").on(\"click\", function (event) {\n      event.preventDefault();\n      currentSliderUsual.slick(\"slickPrev\");\n    });\n    $(\".slickNextUsual\").on(\"click\", function (event) {\n      event.preventDefault();\n      currentSliderUsual.slick(\"slickNext\");\n    });\n\n    // * ========================================\n\n    bodyEl.classList.add(\"no-scroll\");\n    currentModal.classList.add(\"show\");\n\n    setTimeout(() => {\n      modalInner.style.transform = \"rotateX(0deg)\";\n    }, 500);\n  });\n});\n\n// * ======= CLOSE MODAL =======\n\nmodalCloseBtns.forEach((closeBtn) => {\n  closeBtn.addEventListener(\"click\", function (event) {\n    const currentModal = event.target.closest(\".modal\");\n    const modalInner = currentModal.querySelector(\".modal__inner\");\n\n    modalInner.style.transform = \"rotateX(90deg)\";\n\n    // сброс стилей при закрытии модального окна\n\n    for (key in lightTheme) {\n      // поменять document на currentModal\n      const elems = currentModal.querySelectorAll(\".\" + key);\n      elems.forEach((elem) => {\n        if (lightTheme[key].light) {\n          elem.classList.remove(`${lightTheme[key].light}`);\n        }\n      });\n    }\n\n    setTimeout(() => {\n      currentModal.classList.remove(\"show\");\n      bodyEl.classList.remove(\"no-scroll\");\n    }, 500);\n\n    //* ===== Deinicialization Slick =====\n\n    let $this = $(this);\n    let modal = $this.closest(\".modal\");\n    let currentSlider = $(modal).find('[data-slider=\"slick\"]');\n    let currentSliderUsual = $(modal).find('[data-slider=\"slick-usual\"]');\n    let currentSecondSlider = $(modal).find('[data-slider=\"slick-second\"]');\n    setTimeout(() => {\n      currentSlider.slick(\"unslick\");\n      currentSliderUsual.slick(\"unslick\");\n      currentSecondSlider.slick(\"unslick\");\n    }, 500);\n  });\n});\n\nmodals.forEach((modal) => {\n  modal.addEventListener(\"click\", function (event) {\n    const currentModalInner = this.querySelector(\".modal__inner\");\n    if (!event.target.closest(\".modal__inner\")) {\n      currentModalInner.style.transform = \"rotateX(90deg)\";\n      // сброс стилей при закрытии модального окна\n\n      for (key in lightTheme) {\n        // поменять document на currentModal\n        const elems = this.querySelectorAll(\".\" + key);\n        elems.forEach((elem) => {\n          if (lightTheme[key].light) {\n            elem.classList.remove(`${lightTheme[key].light}`);\n          }\n        });\n      }\n\n      setTimeout(() => {\n        this.classList.remove(\"show\");\n        bodyEl.classList.remove(\"no-scroll\");\n      }, 500);\n\n      //* ===== Deinicialization Slick =====\n\n      let $this = $(this);\n      let modal = $this.closest(\".modal\");\n      let currentSlider = $(modal).find('[data-slider=\"slick\"]');\n      let currentSliderUsual = $(modal).find('[data-slider=\"slick-usual\"]');\n      let currentSecondSlider = $(modal).find('[data-slider=\"slick-second\"]');\n      setTimeout(() => {\n        currentSlider.slick(\"unslick\");\n        currentSliderUsual.slick(\"unslick\");\n        currentSecondSlider.slick(\"unslick\");\n      }, 500);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/main-script.js?");

/***/ }),

/***/ "./src/js/modules/theme.js":
/*!*********************************!*\
  !*** ./src/js/modules/theme.js ***!
  \*********************************/
/***/ (function() {

eval("const switchers = document.querySelectorAll(\".switcher\")\nconst darkBtn = document.querySelector(\"[data-theme]\")\nconst darkBtns = document.querySelectorAll(\"[data-theme='dark']\")\nconst lightBtns = document.querySelectorAll(\"[data-theme='light']\")\nconst themePopup = document.querySelector(\".theme__popup\")\n\nconst themes = {\n  header: {\n    theme: {\n      light: \"header--light\",\n      dark: \"header--dark\",\n    },\n  },\n  \".works__item\": {\n    theme: {\n      light: \"works__item--light\",\n      dark: \"works__item--dark\",\n    },\n  },\n  body: {\n    theme: {\n      light: \"body--light\",\n      dark: \"body--dark\",\n    },\n  },\n  \".theme__popup\": {\n    theme: {\n      light: \"theme__popup--light\",\n      dark: \"theme__popup--dark\",\n    },\n  },\n}\nfunction themeSwitch(theme) {\n  const switcherLight = document.querySelector(\".theme__light\")\n  const switcherDark = document.querySelector(\".theme__dark\")\n  for (key in themes) {\n    const elems = document.querySelectorAll(key)\n    elems.forEach((elem) => {\n      if ((elem && themes[key].theme.light) || themes[key].theme.dark) {\n        elem.classList.remove(`${themes[key].theme.dark}`, `${themes[key].theme.light}`)\n\n        if (theme === \"light\") {\n          elem.classList.add(`${themes[key].theme.light}`)\n          switcherLight.classList.add(\"hide\")\n          switcherDark.classList.remove(\"hide\")\n        } else {\n          elem.classList.add(`${themes[key].theme.dark}`)\n          switcherDark.classList.add(\"hide\")\n          switcherLight.classList.remove(\"hide\")\n        }\n      }\n    })\n  }\n}\n\nswitchers.forEach((switcher) => {\n  switcher.addEventListener(\"click\", function (e) {\n    if (e.target.closest(\".switcher\").dataset.theme === \"light\") {\n      themeSwitch(\"light\")\n    } else {\n      themeSwitch(\"dark\")\n    }\n    localStorage.setItem(\"theme\", this.dataset.theme)\n  })\n})\n\nconst activeTheme = localStorage.getItem(\"theme\")\n\nif (activeTheme === null) {\n  themeSwitch(\"dark\")\n} else {\n  themeSwitch(activeTheme)\n}\n\nswitchers.forEach((switcher) => {\n  function mouseEnter(event) {\n    if (event.target.closest(\".switcher\").dataset.theme === \"light\") {\n      themePopup.innerHTML = \"switch to light theme\"\n    } else {\n      themePopup.innerHTML = \"switch to dark theme\"\n    }\n    if (document.documentElement.clientWidth > 991) {\n      themePopup.classList.add(\"show\")\n      themePopup.classList.remove(\"hide\")\n    } else {\n      themePopup.classList.add(\"hide\")\n      themePopup.classList.remove(\"show\")\n    }\n  }\n  switcher.addEventListener(\"mouseenter\", mouseEnter)\n})\n\nswitchers.forEach((switcher) => {\n  switcher.addEventListener(\"mouseleave\", function () {\n    themePopup.classList.remove(\"show\")\n  })\n})\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/theme.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;