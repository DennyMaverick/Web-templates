const switchers = document.querySelectorAll(".switcher")
const darkBtn = document.querySelector("[data-theme]")
const darkBtns = document.querySelectorAll("[data-theme='dark']")
const lightBtns = document.querySelectorAll("[data-theme='light']")
const themePopup = document.querySelector(".theme__popup")

const themes = {
  header: {
    theme: {
      light: "header--light",
      dark: "header--dark",
    },
  },
  ".works__item": {
    theme: {
      light: "works__item--light",
      dark: "works__item--dark",
    },
  },
  body: {
    theme: {
      light: "body--light",
      dark: "body--dark",
    },
  },
  ".theme__popup": {
    theme: {
      light: "theme__popup--light",
      dark: "theme__popup--dark",
    },
  },
}
function themeSwitch(theme) {
  const switcherLight = document.querySelector(".theme__light")
  const switcherDark = document.querySelector(".theme__dark")
  for (key in themes) {
    const elems = document.querySelectorAll(key)
    elems.forEach((elem) => {
      if ((elem && themes[key].theme.light) || themes[key].theme.dark) {
        elem.classList.remove(`${themes[key].theme.dark}`, `${themes[key].theme.light}`)

        if (theme === "light") {
          elem.classList.add(`${themes[key].theme.light}`)
          switcherLight.classList.add("hide")
          switcherDark.classList.remove("hide")
        } else {
          elem.classList.add(`${themes[key].theme.dark}`)
          switcherDark.classList.add("hide")
          switcherLight.classList.remove("hide")
        }
      }
    })
  }
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function (e) {
    if (e.target.closest(".switcher").dataset.theme === "light") {
      themeSwitch("light")
    } else {
      themeSwitch("dark")
    }
    localStorage.setItem("theme", this.dataset.theme)
  })
})

const activeTheme = localStorage.getItem("theme")

if (activeTheme === null) {
  themeSwitch("dark")
} else {
  themeSwitch(activeTheme)
}

switchers.forEach((switcher) => {
  function mouseEnter(event) {
    if (event.target.closest(".switcher").dataset.theme === "light") {
      themePopup.innerHTML = "switch to light theme"
    } else {
      themePopup.innerHTML = "switch to dark theme"
    }
    if (document.documentElement.clientWidth > 991) {
      themePopup.classList.add("show")
      themePopup.classList.remove("hide")
    } else {
      themePopup.classList.add("hide")
      themePopup.classList.remove("show")
    }
  }
  switcher.addEventListener("mouseenter", mouseEnter)
})

switchers.forEach((switcher) => {
  switcher.addEventListener("mouseleave", function () {
    themePopup.classList.remove("show")
  })
})
