# 💻 Web‑templates — Портфолио пет-проектов

---

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/slide-1.png)

**Web‑templates** — это портфолио моих пет-проектов по веб-разработке.  
Здесь собраны проекты, созданные для практики **HTML, CSS и JavaScript**, демонстрации навыков и креативности.

---


## 🛠 Использованные технологии

- HTML5  
- CSS3 / LESS  
- JavaScript / jQuery  
- Адаптивная верстка (Flexbox / Grid)  
- Gulp (для автоматизации сборки проектов)
- Slick-slider

---

## 🌐 Просмотр проектов

Все проекты доступны для просмотра в браузере: [Web‑templates](https://dennymaverick.github.io/Web-templates/#ru)

---

## ✨ Цель проекта

- Продемонстрировать навыки Frontend-разработки  
- Собрать все пет-проекты в одном портфолио  
- Сделать наглядный пример для будущих работодателей и заказчиков

  ***

  Данный проект был создан чтобы продемонстрировать навыки в веб-разработке. Это мини-портфолио, куда я буду сохранять pet-проекты и не только. При работе над проектом были использованы следующие технологии:
  
![css/html/javascript](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/1.svg)
![jquery / sclick](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/4.svg) 
![flexbox](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/2.svg)
![gulp](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/3.svg)
![webpack](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/5.svg)
![scss](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/bages/6.svg)


  
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


  
  
<p align="center">
  
![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/main.png)
  
</p>

<p>

  
  ***
  
  Проекты в портфолио будут добавляться регулярно. Сейчас там доступен один проект, еще один анонсирован. Первым проектом является 'Переключатель тем в модальных окнах': 
</p>

![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/modal-dark.png)

  
  ***
  
  Также было сделано: когда вы открываете модальное окно с проектом 'Переключатель тем в модальных окнах' вы можете увидеть, что цвета меняются в модальном окне после клика на кнопки 'Вперед' и 'Назад'. Изменения происходят плавно:
</p>

<p align="center">
  
![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/src/img/for-readme/modal-switcher.gif)
  
</p> 

  
  ***
  
 Здесь используется slick слайдер. Это jQuery библиотека, которая помогает устанавливать на сайты кастомизированные слайдеры.
</p>



<p>

  
  ***
  
  Работая над проектом я столкнулся с некоторыми сложностями, когда переносил проект в сборку gulp. Сначала, компиляция scss происходила через программу Koala, позже я использовал webpack и разбил все javascript файлы на отдельные модули. И когда я делал это, я обнаружил ошибку в slick слайдере, что слайдер не может быть запущен. И дальше я нашел, что я подключил jQuery библиотеку позже js-файла slick. Но я решил это, подключив отдельную задачу в gulp для jQuery:
</p>


  Ru:
  
  ***
  Чтобы протестировать проект, вы можете перейти по ссылке: https://dennymaverick.github.io/Web-templates/
  
  Если у вас есть идеи, как улучшить данный проект напишите мне пожалуйста на почту: den_maverick177@mail.ru. 
</p>


