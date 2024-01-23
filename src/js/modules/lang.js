//* =========== Объект с переводом страницы ==============

const langs = {
  'header-title': {
    ru: '',
    en: '',
  },
  'settings-desc': {
    ru: 'Настройки сайта',
    en: 'Settings of the site',
  },
  'switcher-theme-work-title': {
    ru: 'Переключатель темы в модальных окнах',
    en: 'Theme`s switcher in modal windows',
  },
  'currency-converter-work-title': {
    ru: 'Конвертёр валют',
    en: 'Currency converter',
  },
  'language-switcher-work-title': {
    ru: 'Переключатель языков',
    en: 'Language`s switcher',
  },
  'password-generator-work-title': {
    ru: 'Генератор паролей',
    en: 'Random password generator',
  },
  'github-profile-work-title': {
    ru: 'Профиль пользователя Гит',
    en: 'Github user`s profile',
  },
  'qr-codes-generator-work-title': {
    ru: 'Генератор кодов быстрого отклика',
    en: 'Qr-codes generator',
  },
};

const titles = {
  // "telegram-intro": {
  //   ru: "Мой телеграм",
  //   en: "My telegram",
  // },
};

const repeatTitles = {
  // up: {
  //   ru: "Наверх",
  //   en: "Up",
  // },
};

const repeatElems = {
  'about-nav-title': {
    ru: 'О проекте',
    en: 'About',
  },
};

// ====== Секция Search / placeholders

const placeholders = {
  // name: {
  //   ru: "Напишите Ваше имя",
  //   en: "Write your name",
  // },
};

const toolbarItems = document.querySelectorAll('.lang__item');

// Массив всех доступных языков
const allLangs = ['ru', 'en'];

toolbarItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // получение hash из строки браузера - #ru или #en

    // получение значения атрибута data-lang (ru или en)
    let lang = this.dataset.lang;

    // добавление в строку браузера #ru или #en
    location.href = window.location.pathname + '#' + lang;

    // перезагрузка страницы
    location.reload();
  });
});
function changeLang() {
  // получение hash из строки браузера - #ru или #en
  let hash = window.location.hash;
  // начало hash массива строки начинается со второго символа - ru или en
  hash = hash.substring(1);

  const langToolRuEl = document.querySelector('[data-lang="ru"]');
  const langToolEnEl = document.querySelector('[data-lang="en"]');
  // получение hash из строки браузера - #ru или #en

  function toggleLangOnRU() {
    if (!langToolRuEl.classList.contains('lang--active')) {
      langToolRuEl.classList.add('lang--active');
    }
    langToolEnEl.classList.remove('lang--active');
  }

  function toggleLangOnEN() {
    if (!langToolEnEl.classList.contains('lang--active')) {
      langToolEnEl.classList.add('lang--active');
    }
    langToolRuEl.classList.remove('lang--active');
  }
  if (hash === 'ru') {
    toggleLangOnRU();
  } else if (hash === 'en') {
    toggleLangOnEN();
  }

  // проверка - если массив из всех доступных языков не содержит hash
  if (!allLangs.includes(hash)) {
    // принудительно записывать в строку браузера путь с языком
    location.href = window.location.pathname + '#ru';
    // перезагрузка страницы
    location.reload();
  }

  // перебор массива langs
  for (let key in langs) {
    // получение элементов в html, которые нужно перевести
    let elem = document.querySelector('.lang-' + key);
    // если элемент существует и язык для элемента прописан в объекте с переводом языков, то заменить содержание контента в элементе на тот контент, который взят из массива langs
    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash];
    }
  }

  //! перевод всплывающих текстовых подсказок при наводе на ссылки
  // for (let key in titles) {
  //   let elem = document.querySelector(".lang-" + key)
  //   if (elem && titles[key][hash]) {
  //     elem.title = titles[key][hash]
  //   }
  // }

  //! перевод всплывающих текстовых подсказок при наводе на ссылки / повторяющиеся элементы
  // for (let key in repeatTitles) {
  //   let elems = document.querySelectorAll(".lang-" + key)
  //   elems.forEach(function (elem) {
  //     if (elem && repeatTitles[key][hash]) {
  //       elem.title = repeatTitles[key][hash]
  //     }
  //   })
  // }
  //! Для плейсхолдеров
  // for (let key in placeholders) {
  //   let elemPlaceholder = document.querySelector(".lang-placeholder-" + key)
  //   if (elemPlaceholder && placeholders[key][hash]) {
  //     elemPlaceholder.placeholder = placeholders[key][hash]
  //   }
  // }
  //! Для повторяющихся элементов
  for (let key in repeatElems) {
    let elems = document.querySelectorAll('.lang-' + key);
    elems.forEach(function (elem) {
      if (elem && repeatElems[key][hash]) {
        elem.innerHTML = repeatElems[key][hash];
      }
    });
  }
}
// запуск функции changeLang()
changeLang();
