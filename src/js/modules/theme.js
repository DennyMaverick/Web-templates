const switchers = document.querySelectorAll('.switcher');
const darkBtns = document.querySelectorAll("[data-theme='dark']");
const lightBtns = document.querySelectorAll("[data-theme='light']");

const themes = {
  header: {
    theme: {
      light: 'header--light',
      dark: 'header--dark',
    },
  },
  '.works__item': {
    theme: {
      light: 'works__item--light',
      dark: 'works__item--dark',
    },
  },
  body: {
    theme: {
      light: 'body--light',
      dark: 'body--dark',
    },
  },
  '.theme__popup': {
    theme: {
      light: 'theme__popup--light',
      dark: 'theme__popup--dark',
    },
  },
  '.mobile-menu': {
    theme: {
      light: 'mobile-menu--light',
      dark: 'mobile-menu--dark',
    },
  },
  '.mobile-menu__link': {
    theme: {
      light: 'mobile-menu__link--light',
      dark: 'mobile-menu__link--dark',
    },
  },
  '.socials--vk-icon': {
    theme: {
      light: 'socials--vk-icon--light',
      dark: 'socials--vk-icon--dark',
    },
  },
  '.socials--telegram-icon': {
    theme: {
      light: 'socials--telegram-icon--light',
      dark: 'socials--telegram-icon--dark',
    },
  },
  '.socials--git-hub-icon': {
    theme: {
      light: 'socials--git-hub-icon--light',
      dark: 'socials--git-hub-icon--dark',
    },
  },
};
function themeSwitch(theme) {
  const switcherLight = document.querySelector('.theme__light');
  const switcherDark = document.querySelector('.theme__dark');
  for (key in themes) {
    const elems = document.querySelectorAll(key);
    elems.forEach(elem => {
      if ((elem && themes[key].theme.light) || themes[key].theme.dark) {
        elem.classList.remove(
          `${themes[key].theme.dark}`,
          `${themes[key].theme.light}`
        );

        if (theme === 'light') {
          elem.classList.add(`${themes[key].theme.light}`);
          switcherLight.classList.add('hide');
          switcherDark.classList.remove('hide');
        } else {
          elem.classList.add(`${themes[key].theme.dark}`);
          switcherDark.classList.add('hide');
          switcherLight.classList.remove('hide');
        }
      }
    });
  }
}

switchers.forEach(switcher => {
  switcher.addEventListener('click', function (e) {
    if (e.target.closest('.switcher').dataset.theme === 'light') {
      themeSwitch('light');
    } else {
      themeSwitch('dark');
    }
    localStorage.setItem('theme', this.dataset.theme);
  });
});

const activeTheme = localStorage.getItem('theme');

if (activeTheme === null) {
  themeSwitch('dark');
} else {
  themeSwitch(activeTheme);
}
