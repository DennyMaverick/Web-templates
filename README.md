# 💻 Web‑templates — Портфолио пет-проектов

---

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/slide-1.png)

**Web‑templates** — это портфолио моих пет-проектов по веб-разработке.  
Здесь собраны проекты, созданные для практики **HTML, CSS и JavaScript**, демонстрации навыков и креативности.

---


## 🛠 Использованные технологии

- 🌐 **HTML5** — структура и семантика веб-страниц  
- 🎨 **CSS3 / LESS** — стиль, анимации и эффектный визуал
- ⚡ **JavaScript / jQuery** — логика, динамика и интерактив  
- 📱 **Адаптивная верстка (Flexbox / Grid)** — сайты, которые идеально смотрятся на любых устройствах  
- 🔧 **Gulp** — автоматизация сборки, минификация и оптимизация  
- 🎞️ **Slick-slider** — стильные и плавные слайдеры  

---

## 🌐 Просмотр проектов

Все проекты доступны для просмотра в браузере: [Web‑templates](https://dennymaverick.github.io/Web-templates/#ru)

---

## ✨ Цель проекта

- Продемонстрировать навыки Frontend-разработки  
- Собрать все пет-проекты в одном портфолио  
- Сделать наглядный пример для будущих работодателей и заказчиков

  ***

  Этот проект создан как демонстрация моих навыков в веб-разработке. Это мини-портфолио, в котором я буду собирать свои pet-проекты и другие интересные работы. При создании проекта были использованы следующие технологии:
  
![css/html/javascript](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/1.svg)
![jquery / sclick](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/4.svg) 
![flexbox](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/2.svg)
![gulp](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/3.svg)
![webpack](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/5.svg)
![scss](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/6.svg)


  
  ***
  
  В портфолио реализован переключатель тем с плавной сменой цветов. Для его работы я создал объект, в котором в качестве ключей указаны селекторы элементов, участвующих в смене темы. Когда пользователь выбирает режим, всем элементам с этими селекторами автоматически добавляются модификаторы --dark или --light, обеспечивая корректное и плавное переключение оформления.
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

  
  ***
  Далее необходимо выбрать все элементы, участвующие в смене цветовой темы. Для этого выполняется обход объекта themes, где ключи совпадают с классами (или тегами) нужных элементов. Затем по каждой коллекции проходит forEach, добавляя каждому элементу соответствующий класс темы.
  
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
  
  При закрытии браузера выбранная пользователем тема сохраняется благодаря localStorage. В момент переключения режима значение theme записывается в localStorage как light или dark, чтобы при следующем визите сайт открылся с нужной темой.
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

При первом запуске сайта автоматически устанавливается тема по умолчанию — «Dark». Если же тема уже была выбрана ранее, запускается функция, которая активирует нужную сохранённую тему.

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


  
  
<p align="center">
  
![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/main.png)
  
</p>


![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/modal-dark.png)

  
  ***
  
 Также было реализовано: при открытии модального окна с проектом «Переключатель тем в модальных окнах» вы можете заметить, что цвета внутри модального окна меняются при нажатии на кнопки «Вперед» и «Назад». Переходы между темами выполняются плавно и аккуратно.
</p>

<p align="center">
  
![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/modal-switcher.gif)
  

<p>

  
  ***
  
  Работая над проектом я столкнулся с некоторыми сложностями, когда переносил проект в сборку gulp. Сначала, компиляция scss происходила через программу Koala, позже я использовал webpack и разбил все javascript файлы на отдельные модули. И когда я делал это, я обнаружил ошибку в slick слайдере, что слайдер не может быть запущен. И дальше я нашел, что я подключил jQuery библиотеку позже js-файла slick. Но я решил это, подключив отдельную задачу в gulp для jQuery.
</p>

  
  Если у вас есть идеи, как улучшить данный проект напишите мне пожалуйста на почту: den_maverick177@mail.ru. 
</p>


