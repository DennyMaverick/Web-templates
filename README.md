# Web-templates

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/dark.png)

***

<p>This project was created to perfomance my skills in web-developing. This is my mini-portfolio where I will save my pet projects and not only.  
For making the project I used these web-technologies: 
</p>

![css/html/javascript](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/bages/1.svg)
![jquery / sclick](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/bages/4.svg) 
![flexbox](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/bages/2.svg)
![gulp](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/bages/3.svg)

<p>
  This portfolio has theme's switcher. Colors change smoothly, for this I used the object there I put all selectors and when theme is checked I added to all these selectors the class with modificator --light or --dark: 
</p>

  
```
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
  ".work--announced": {
    theme: {
      light: "work--announced-light",
      dark: "work--announced-dark",
    },
  },
  ".theme__popup": {
    theme: {
      light: "theme__popup--light",
      dark: "theme__popup--dark",
    },
  },
}
```
  <p>
  When user switched off his browser the theme is saved. It was made using local storage. The value 'theme' in local storage changes on dark or light in moment when user clicked on the sun or moon icons:
  </p>
  
  ```
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
  ```
  
  ***

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/light.png)

<p>
  The projects in portfolio will be added regularly. Now there is one available project and one announced project. First is the theme's switcher in modals: 
</p>

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/modal-dark.png)

<p>
  Also was made: when you open the modal window with the Theme's Switcher In MOdal Windows project, you can see that the colors change in modal window after click on next button or prev button. Changes are smooth:
</p>

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/modal-light.png)

<p>
  It was made by this code: 
</p>

```
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
```
