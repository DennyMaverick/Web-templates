//* ========== lazyload ==========

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy",
})

// * light-theme object

const lightTheme = {
  "footer-slider__btn": {
    light: "footer-slider__btn--light",
  },
  modal__title: {
    light: "modal__title--light",
  },
  "modal__close-line": {
    light: "modal__close-line--light",
  },
  slide__text: {
    light: "slide__text--light",
  },
  modal__inner: {
    light: "modal__inner--light",
  },
}

// * =========== Modal Open ============

const dataModals = document.querySelectorAll("[data-modal]")
modals = document.querySelectorAll(".modal")
const bodyEl = document.querySelector("body")
const modalCloseBtns = document.querySelectorAll(".modal__close")

dataModals.forEach(function (modal) {
  modal.addEventListener("click", function (event) {
    // * ================= Slick ===============

    const $this = $(this)
    const modalId = $this.data("modal")
    const currentModalId = event.target.closest(".work__image").dataset.modal

    const currentModal = document.querySelector(currentModalId)
    const modalInner = currentModal.querySelector(".modal__inner")

    const currentSlider = $(modalId).find('[data-slider="slick"]')
    const currentSecondSlider = $(modalId).find('[data-slider="slick-second"]')

    currentSlider.slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true,
      asNavFor: currentSecondSlider,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            autoplay: true,
            autoplaySpeed: 17000,
          },
        },
      ],
    })

    currentSecondSlider.slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true,
      asNavFor: currentSlider,
      focusOnSelect: true,
    })

    //* background and color change when slide--light is active

    currentSlider.on("afterChange", function (event) {
      let currentSlide = event.target.querySelector(".slick-active")
      let currentSlideItem = currentSlide.querySelector(".slider__item")

      if (currentSlideItem.classList.contains("slide--light")) {
        for (key in lightTheme) {
          const elems = currentModal.querySelectorAll("." + key)
          elems.forEach((elem) => {
            if (lightTheme[key].light) {
              elem.classList.add(`${lightTheme[key].light}`)
            }
          })
        }
      } else {
        for (key in lightTheme) {
          const elems = currentModal.querySelectorAll("." + key)
          elems.forEach((elem) => {
            if (lightTheme[key].light) {
              elem.classList.remove(`${lightTheme[key].light}`)
            }
          })
        }
      }
    })

    $(".slickPrev").on("click", function (event) {
      event.preventDefault()

      currentSlider.slick("slickPrev")
    })
    $(".slickNext").on("click", function (event) {
      event.preventDefault()

      currentSlider.slick("slickNext")
    })

    // * ========================================

    bodyEl.classList.add("no-scroll")
    currentModal.classList.add("show")

    setTimeout(() => {
      modalInner.style.transform = "rotateX(0deg)"
    }, 500)
  })
})

// * ======= CLOSE MODAL =======

modalCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", function (event) {
    const currentModal = event.target.closest(".modal")
    const modalInner = currentModal.querySelector(".modal__inner")

    modalInner.style.transform = "rotateX(90deg)"

    // сброс стилей при закрытии модального окна

    for (key in lightTheme) {
      // поменять document на currentModal
      const elems = currentModal.querySelectorAll("." + key)
      elems.forEach((elem) => {
        if (lightTheme[key].light) {
          elem.classList.remove(`${lightTheme[key].light}`)
        }
      })
    }

    setTimeout(() => {
      currentModal.classList.remove("show")
      bodyEl.classList.remove("no-scroll")
    }, 500)

    //* ===== Deinicialization Slick =====

    let $this = $(this)
    let modal = $this.closest(".modal")
    let currentSlider = $(modal).find('[data-slider="slick"]')
    let currentSecondSlider = $(modal).find('[data-slider="slick-second"]')
    setTimeout(() => {
      currentSlider.slick("unslick")
      currentSecondSlider.slick("unslick")
    }, 500)
  })
})

modals.forEach((modal) => {
  modal.addEventListener("click", function (event) {
    const currentModalInner = this.querySelector(".modal__inner")
    if (!event.target.closest(".modal__inner")) {
      currentModalInner.style.transform = "rotateX(90deg)"
      // сброс стилей при закрытии модального окна

      for (key in lightTheme) {
        // поменять document на currentModal
        const elems = this.querySelectorAll("." + key)
        elems.forEach((elem) => {
          if (lightTheme[key].light) {
            elem.classList.remove(`${lightTheme[key].light}`)
          }
        })
      }

      setTimeout(() => {
        this.classList.remove("show")
        bodyEl.classList.remove("no-scroll")
      }, 500)

      //* ===== Deinicialization Slick =====

      let $this = $(this)
      let modal = $this.closest(".modal")
      let currentSlider = $(modal).find('[data-slider="slick"]')
      let currentSecondSlider = $(modal).find('[data-slider="slick-second"]')
      setTimeout(() => {
        currentSlider.slick("unslick")
        currentSecondSlider.slick("unslick")
      }, 500)
    }
  })
})
