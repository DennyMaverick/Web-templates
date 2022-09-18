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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/theme */ \"./src/js/modules/theme.js\");\n/* harmony import */ var _modules_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_theme__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_main_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main-script */ \"./src/js/modules/main-script.js\");\n/* harmony import */ var _modules_main_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_main_script__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/main-script.js":
/*!***************************************!*\
  !*** ./src/js/modules/main-script.js ***!
  \***************************************/
/***/ (function() {

eval("//* ========== lazyload ==========\r\n\r\nvar lazyLoadInstance = new LazyLoad({\r\n  elements_selector: \".lazy\",\r\n})\r\n\r\n// * light-theme object\r\n\r\nconst lightTheme = {\r\n  \"footer-slider__btn\": {\r\n    light: \"footer-slider__btn--light\",\r\n  },\r\n  modal__title: {\r\n    light: \"modal__title--light\",\r\n  },\r\n  \"modal__close-line\": {\r\n    light: \"modal__close-line--light\",\r\n  },\r\n  slide__text: {\r\n    light: \"slide__text--light\",\r\n  },\r\n  modal__inner: {\r\n    light: \"modal__inner--light\",\r\n  },\r\n}\r\n\r\n// * =========== Modal Open ============\r\n\r\nconst dataModals = document.querySelectorAll(\"[data-modal]\")\r\nmodals = document.querySelectorAll(\".modal\")\r\nconst bodyEl = document.querySelector(\"body\")\r\nconst modalCloseBtns = document.querySelectorAll(\".modal__close\")\r\n\r\ndataModals.forEach(function (modal) {\r\n  modal.addEventListener(\"click\", function (event) {\r\n    // * ================= Slick ===============\r\n\r\n    const $this = $(this);\r\n    const modalId = $this.data(\"modal\");\r\n    const currentModalId = event.target.closest(\".work__image\").dataset.modal;\r\n\r\n    const currentModal = document.querySelector(currentModalId);\r\n    const modalInner = currentModal.querySelector(\".modal__inner\");\r\n\r\n    const currentSlider = $(modalId).find('[data-slider=\"slick\"]');\r\n\r\n    const currentSliderUsual = $(modalId).find('[data-slider=\"slick-usual\"]');\r\n\r\n    const currentSecondSlider = $(modalId).find('[data-slider=\"slick-second\"]');\r\n\r\n    currentSliderUsual.slick({\r\n      arrows: false,\r\n      dots: false,\r\n      slidesToShow: 1,\r\n      slidesToScroll: 1,\r\n      fade: true,\r\n      adaptiveHeight: true,\r\n      responsive: [\r\n        {\r\n          breakpoint: 768,\r\n          settings: {\r\n            autoplay: true,\r\n            autoplaySpeed: 17000,\r\n            dots: true\r\n          },\r\n        },\r\n      ],\r\n    });\r\n\r\n    currentSlider.slick({\r\n      arrows: false,\r\n      dots: false,\r\n      slidesToShow: 1,\r\n      slidesToScroll: 1,\r\n      fade: true,\r\n      adaptiveHeight: true,\r\n      asNavFor: currentSecondSlider,\r\n      responsive: [\r\n        {\r\n          breakpoint: 768,\r\n          settings: {\r\n            autoplay: true,\r\n            autoplaySpeed: 17000,\r\n          },\r\n        },\r\n      ],\r\n    });\r\n\r\n    currentSecondSlider.slick({\r\n      arrows: false,\r\n      dots: false,\r\n      slidesToShow: 1,\r\n      slidesToScroll: 1,\r\n      fade: true,\r\n      adaptiveHeight: true,\r\n      asNavFor: currentSlider,\r\n      focusOnSelect: true,\r\n    });\r\n\r\n    //* background and color change when slide--light is active\r\n\r\n    currentSlider.on(\"afterChange\", function (event) {\r\n      let currentSlide = event.target.querySelector(\".slick-active\");\r\n      let currentSlideItem = currentSlide.querySelector(\".slider__item\");\r\n\r\n      if (currentSlideItem.classList.contains(\"slide--light\")) {\r\n        for (key in lightTheme) {\r\n          const elems = currentModal.querySelectorAll(\".\" + key);\r\n          elems.forEach((elem) => {\r\n            if (lightTheme[key].light) {\r\n              elem.classList.add(`${lightTheme[key].light}`);\r\n            }\r\n          });\r\n        }\r\n      } else {\r\n        for (key in lightTheme) {\r\n          const elems = currentModal.querySelectorAll(\".\" + key);\r\n          elems.forEach((elem) => {\r\n            if (lightTheme[key].light) {\r\n              elem.classList.remove(`${lightTheme[key].light}`);\r\n            }\r\n          });\r\n        }\r\n      }\r\n    });\r\n\r\n    // Слайдер переключателя тем,  кнопки переключения, он необычный, выделяется среди других\r\n\r\n    $(\".slickPrev\").on(\"click\", function (event) {\r\n      event.preventDefault();\r\n      currentSlider.slick(\"slickPrev\");\r\n    });\r\n    $(\".slickNext\").on(\"click\", function (event) {\r\n      event.preventDefault();\r\n      currentSlider.slick(\"slickNext\");\r\n    });\r\n\r\n    // Обычный слайдер, кнопки переключения\r\n\r\n    $(\".slickPrevUsual\").on(\"click\", function (event) {\r\n      event.preventDefault();\r\n      currentSliderUsual.slick(\"slickPrev\");\r\n    });\r\n    $(\".slickNextUsual\").on(\"click\", function (event) {\r\n      event.preventDefault();\r\n      currentSliderUsual.slick(\"slickNext\");\r\n    });\r\n\r\n    // * ========================================\r\n\r\n    bodyEl.classList.add(\"no-scroll\");\r\n    currentModal.classList.add(\"show\");\r\n\r\n    setTimeout(() => {\r\n      modalInner.style.transform = \"rotateX(0deg)\";\r\n    }, 500);\r\n  });\r\n});\r\n\r\n// * ======= CLOSE MODAL =======\r\n\r\nmodalCloseBtns.forEach((closeBtn) => {\r\n  closeBtn.addEventListener(\"click\", function (event) {\r\n    const currentModal = event.target.closest(\".modal\");\r\n    const modalInner = currentModal.querySelector(\".modal__inner\");\r\n\r\n    modalInner.style.transform = \"rotateX(90deg)\";\r\n\r\n    // сброс стилей при закрытии модального окна\r\n\r\n    for (key in lightTheme) {\r\n      // поменять document на currentModal\r\n      const elems = currentModal.querySelectorAll(\".\" + key);\r\n      elems.forEach((elem) => {\r\n        if (lightTheme[key].light) {\r\n          elem.classList.remove(`${lightTheme[key].light}`);\r\n        }\r\n      });\r\n    }\r\n\r\n    setTimeout(() => {\r\n      currentModal.classList.remove(\"show\");\r\n      bodyEl.classList.remove(\"no-scroll\");\r\n    }, 500);\r\n\r\n    //* ===== Deinicialization Slick =====\r\n\r\n    let $this = $(this);\r\n    let modal = $this.closest(\".modal\");\r\n    let currentSlider = $(modal).find('[data-slider=\"slick\"]');\r\n    let currentSliderUsual = $(modal).find('[data-slider=\"slick-usual\"]');\r\n    let currentSecondSlider = $(modal).find('[data-slider=\"slick-second\"]');\r\n    setTimeout(() => {\r\n      currentSlider.slick(\"unslick\");\r\n      currentSliderUsual.slick(\"unslick\");\r\n      currentSecondSlider.slick(\"unslick\");\r\n    }, 500);\r\n  });\r\n});\r\n\r\nmodals.forEach((modal) => {\r\n  modal.addEventListener(\"click\", function (event) {\r\n    const currentModalInner = this.querySelector(\".modal__inner\");\r\n    if (!event.target.closest(\".modal__inner\")) {\r\n      currentModalInner.style.transform = \"rotateX(90deg)\";\r\n      // сброс стилей при закрытии модального окна\r\n\r\n      for (key in lightTheme) {\r\n        // поменять document на currentModal\r\n        const elems = this.querySelectorAll(\".\" + key);\r\n        elems.forEach((elem) => {\r\n          if (lightTheme[key].light) {\r\n            elem.classList.remove(`${lightTheme[key].light}`);\r\n          }\r\n        });\r\n      }\r\n\r\n      setTimeout(() => {\r\n        this.classList.remove(\"show\");\r\n        bodyEl.classList.remove(\"no-scroll\");\r\n      }, 500);\r\n\r\n      //* ===== Deinicialization Slick =====\r\n\r\n      let $this = $(this);\r\n      let modal = $this.closest(\".modal\");\r\n      let currentSlider = $(modal).find('[data-slider=\"slick\"]');\r\n      let currentSliderUsual = $(modal).find('[data-slider=\"slick-usual\"]');\r\n      let currentSecondSlider = $(modal).find('[data-slider=\"slick-second\"]');\r\n      setTimeout(() => {\r\n        currentSlider.slick(\"unslick\");\r\n        currentSliderUsual.slick(\"unslick\");\r\n        currentSecondSlider.slick(\"unslick\");\r\n      }, 500);\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/main-script.js?");

/***/ }),

/***/ "./src/js/modules/theme.js":
/*!*********************************!*\
  !*** ./src/js/modules/theme.js ***!
  \*********************************/
/***/ (function() {

eval("const switchers = document.querySelectorAll(\".switcher\")\r\nconst darkBtn = document.querySelector(\"[data-theme]\")\r\nconst darkBtns = document.querySelectorAll(\"[data-theme='dark']\")\r\nconst lightBtns = document.querySelectorAll(\"[data-theme='light']\")\r\nconst themePopup = document.querySelector(\".theme__popup\")\r\n\r\nconst themes = {\r\n  header: {\r\n    theme: {\r\n      light: \"header--light\",\r\n      dark: \"header--dark\",\r\n    },\r\n  },\r\n  \".works__item\": {\r\n    theme: {\r\n      light: \"works__item--light\",\r\n      dark: \"works__item--dark\",\r\n    },\r\n  },\r\n  body: {\r\n    theme: {\r\n      light: \"body--light\",\r\n      dark: \"body--dark\",\r\n    },\r\n  },\r\n  \".theme__popup\": {\r\n    theme: {\r\n      light: \"theme__popup--light\",\r\n      dark: \"theme__popup--dark\",\r\n    },\r\n  },\r\n}\r\nfunction themeSwitch(theme) {\r\n  const switcherLight = document.querySelector(\".theme__light\")\r\n  const switcherDark = document.querySelector(\".theme__dark\")\r\n  for (key in themes) {\r\n    const elems = document.querySelectorAll(key)\r\n    elems.forEach((elem) => {\r\n      if ((elem && themes[key].theme.light) || themes[key].theme.dark) {\r\n        elem.classList.remove(`${themes[key].theme.dark}`, `${themes[key].theme.light}`)\r\n\r\n        if (theme === \"light\") {\r\n          elem.classList.add(`${themes[key].theme.light}`)\r\n          switcherLight.classList.add(\"hide\")\r\n          switcherDark.classList.remove(\"hide\")\r\n        } else {\r\n          elem.classList.add(`${themes[key].theme.dark}`)\r\n          switcherDark.classList.add(\"hide\")\r\n          switcherLight.classList.remove(\"hide\")\r\n        }\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\nswitchers.forEach((switcher) => {\r\n  switcher.addEventListener(\"click\", function (e) {\r\n    if (e.target.closest(\".switcher\").dataset.theme === \"light\") {\r\n      themeSwitch(\"light\")\r\n    } else {\r\n      themeSwitch(\"dark\")\r\n    }\r\n    localStorage.setItem(\"theme\", this.dataset.theme)\r\n  })\r\n})\r\n\r\nconst activeTheme = localStorage.getItem(\"theme\")\r\n\r\nif (activeTheme === null) {\r\n  themeSwitch(\"dark\")\r\n} else {\r\n  themeSwitch(activeTheme)\r\n}\r\n\r\nswitchers.forEach((switcher) => {\r\n  function mouseEnter(event) {\r\n    if (event.target.closest(\".switcher\").dataset.theme === \"light\") {\r\n      themePopup.innerHTML = \"switch to light theme\"\r\n    } else {\r\n      themePopup.innerHTML = \"switch to dark theme\"\r\n    }\r\n    if (document.documentElement.clientWidth > 991) {\r\n      themePopup.classList.add(\"show\")\r\n      themePopup.classList.remove(\"hide\")\r\n    } else {\r\n      themePopup.classList.add(\"hide\")\r\n      themePopup.classList.remove(\"show\")\r\n    }\r\n  }\r\n  switcher.addEventListener(\"mouseenter\", mouseEnter)\r\n})\r\n\r\nswitchers.forEach((switcher) => {\r\n  switcher.addEventListener(\"mouseleave\", function () {\r\n    themePopup.classList.remove(\"show\")\r\n  })\r\n})\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/modules/theme.js?");

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