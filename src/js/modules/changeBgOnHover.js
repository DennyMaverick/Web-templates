const langItems = document.querySelectorAll('.lang__item');
const popupElem = document.querySelector('.settings__popup');
const themeIcons = document.querySelectorAll('.theme__link');

const changeBgOnHoverLangElems = function () {
  langItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      if (item.dataset.lang === 'ru') {
        popupElem.classList.add('settings__popup--active-ru');
      } else if (item.dataset.lang === 'en') {
        popupElem.classList.add('settings__popup--active-en');
      }
    });
  });

  langItems.forEach(item => {
    item.addEventListener('mouseout', function () {
      popupElem.classList.remove('settings__popup--active-ru');
      popupElem.classList.remove('settings__popup--active-en');
    });
  });
};

changeBgOnHoverLangElems();

const changeBgOnHoverThemeElems = function () {
  themeIcons.forEach(item => {
    item.addEventListener('mouseenter', function () {
      if (item.dataset.theme === 'dark') {
        popupElem.classList.add('settings__popup--active-dark');
      } else if (item.dataset.theme === 'light') {
        popupElem.classList.add('settings__popup--active-light');
      }
    });
  });

  themeIcons.forEach(item => {
    item.addEventListener('mouseout', function () {
      popupElem.classList.remove('settings__popup--active-dark');
      popupElem.classList.remove('settings__popup--active-light');
    });
  });
};

changeBgOnHoverThemeElems();
