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
<p>
  ![Picture to the project](https://github.com/DennyMaverick/Web-templates/raw/main/img/for-readme/light.png)
</p>

