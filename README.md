# Web-templates

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/slide-1.png)


  
  Ru:
  
  ***

  Данный проект был создан чтобы продемонстрировать навыки в веб-разработке. Это мини-портфолио, куда я буду сохранять pet-проекты и не только. При работе над проектом были использованы следующие технологии:
  
![css/html/javascript](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/1.svg)
![jquery / sclick](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/4.svg) 
![flexbox](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/2.svg)
![gulp](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/3.svg)
![webpack](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/5.svg)
![scss](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/6.svg)

<p>
  En:
  
  ***
  
  This project was created to perfomance my skills in web-developing. This is the mini-portfolio where I will save my pet projects and not only.  
For making the project I used these web-technologies: 
</p>

![css/html/javascript](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/1.svg)
![jquery / sclick](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/4.svg) 
![flexbox](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/2.svg)
![gulp](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/3.svg)
![webpack](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/5.svg)
![scss](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/6.svg)


<p>
  Ru:
  
  ***
  
  Портфолио содержит переключатель тем. Цвета меняются плавно, для использования данного переключателя был создан объект, куда я положил названия селекторов в качестве ключей. Когда тема выбрана, я добавляю ко всем элементам, которые имеют данные селекторы, модификаторы --dark или --light:
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
  
  En:
  
  ***
  
  This portfolio has theme's switcher. Colors change smoothly, for this I used the object there I put all selectors and when the theme is checked I adding to all these selectors the class with a modificator --light or --dark: 
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
  Ru:
  
  ***
  Далее нужно выбрать все элементы, которые меняют цвет. Для этого нужно пройтись по объекту 'themes', ключи которого совпадают с классами(тегами) нужных элементов, и пройтись по коллекции методом forEach, добавив каждому элементу соответствующий класс:
  
  ```
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
  ```
  
  Когда пользователь выключает свой браузер, тема сохраняется. Это достигнуто благодаря local storage. В момент клика значение 'theme' устанавливается в local storage на light или dark:
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

Когда сайт впервые запускается, выбирается тема по умочанию — 'Dark', иначе запускается функция, что активирует нужную тему:

```
const activeTheme = localStorage.getItem("theme")

if (activeTheme === null) {
  themeSwitch("dark")
} else {
  themeSwitch(activeTheme)
}
```

Полная версия функции включения темы:
```
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
```

  <p>
  En:
  
  ***
 Next it needs to choose all elements, which change the color. For it needs to go througth the object 'themes', that has the keys according with classes(tegs) of needed elements, and go throught the collection using the methed forEach, adding to each element an according class:
  
  ```
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
  ``` 
  
  When user will switch off his browser the theme will be saved. It was made using local storage. The value 'theme' in local storage changes on dark or light in the moment when user had clicked on the sun or the moon icons:
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

When the project starts in first, the theme is choosen default — 'Dark', else the function starts that activate the needed theme:

```
const activeTheme = localStorage.getItem("theme")

if (activeTheme === null) {
  themeSwitch("dark")
} else {
  themeSwitch(activeTheme)
}
```

The full version of the theme switching:
```
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
```
  
  
<p align="center">
  
![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/main.png)
  
</p>

<p>
  Ru:
  
  ***
  
  Проекты в портфолио будут добавляться регулярно. Сейчас там доступен один проект, еще один анонсирован. Первым проектом является 'Переключатель тем в модальных окнах': 
</p>

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/modal-dark.png)

<p>
  En:
  
  ***
  
  The projects in portfolio will be added regularly. Now there is one available project and one announced project. First is the theme's switcher in modal windows: 
</p>

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/modal-dark.png)

<p>
  Ru:
  
  ***
  
  Также было сделано: когда вы открываете модальное окно с проектом 'Переключатель тем в модальных окнах' вы можете увидеть, что цвета меняются в модальном окне после клика на кнопки 'Вперед' и 'Назад'. Изменения происходят плавно:
</p>

<p align="center">
  
![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/modal-switcher.gif)
  
</p> 

<p>
  En:
  
  ***
  
  Also it was made: when you open the modal window with the Theme's Switcher In Modal Windows project, you can see that the colors change in modal window after click on next button or prev button. Changes are smooth:
</p>


<p align="center">
  
![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/modal-switcher.gif)
  
</p>  
  
  
<p>
  Ru:
  
  ***
  
  Это было создано с помощью данного кода:
</p>

<p>
  En:
  
  ***
  
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


<p>
  Ru:
  
  ***
  
 Здесь используется slick слайдер. Это jQuery библиотека, которая помогает устанавливать на сайты кастомизированные слайдеры.
</p>

<p>
  En:
  
  ***
  
  Here is slick slider used. It is jQuery library that helps to set custom sliders on sites.
</p>

<p>
  Ru:
  
  ***
  
  Работая над проектом я столкнулся с некоторыми сложностями, когда переносил проект в сборку gulp. Сначала, компиляция scss происходила через программу Koala, позже я использовал webpack и разбил все javascript файлы на отдельные модули. И когда я делал это, я обнаружил ошибку в slick слайдере, что слайдер не может быть запущен. И дальше я нашел, что я подключил jQuery библиотеку позже js-файла slick. Но я решил это, подключив отдельную задачу в gulp для jQuery:
</p>

<p>
  En:
  
  ***
  
  Making this project I found some dificulties when I replaced it using gulp. Firstly, it was made with scss compiler Koala, then I used webpack and break all javascript files on modules. And when I was doing it, I got some error that slick slider can not be switched. And next I found that I involved jQuery using gulp - after the file slick.js. But I completed this task using separate task in gulp:
</p>

```
// path.js

jquerylib: {
    src: "./node_modules/jquery/dist/jquery.js",
    dest: pathDest + "/js/libs/jquery",
  },
``` 

```
const {src, dest} = require("gulp")

// Configuration

const path = require("../config/path.js")
const app = require("../config/app.js")

// Plugins

const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const strips = require("gulp-strip-comments")

// jQuery task

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
      .pipe(dest(path.jquerylib.dest))
  )
}

module.exports = jquerylib

```

<p>
  Ru:
  
  ***
  Чтобы протестировать проект, вы можете перейти по ссылке: https://dennymaverick.github.io/Web-templates/
  
  Если у вас есть идеи, как улучшить данный проект напишите мне пожалуйста на почту: den_maverick177@mail.ru. Это только начало. Впереди ждет невероятное! Увидимся! 😉
</p>

<p>
  En:
  
  ***
  To launch the project you can click on this link: https://dennymaverick.github.io/Web-templates/
  
  If you have some ideas how can I improve the project write please to my e-mail: den_maverick177@mail.ru. This is only the start. It will be amazing! See you later! 😉
</p>
