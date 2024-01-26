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
  'theme-switcher-title': {
    ru: 'Переключатель темы в модальных окнах',
    en: 'Theme`s Switcher In Modal Windows',
  },
  'converter-title': {
    ru: 'Конвертер валют',
    en: 'Currency Converter',
  },
  'converter-desc': {
    ru: 'Перед вами проект, начало которого было положено на интенсиве веб-школы WebCademy. И в дальнейшем было усовершенствовано следующее:',
    en: 'You can see the project the start was on intensive of Web-school Web-cademy. And it was moderned next:',
  },
  'converter-desc-item-1': {
    ru: 'Есть возможность конвертации валют (четыре доступные валюты: рубль, доллар, евро и фунт стерлинга) взаимно между собой (возможна обратная конвертация)',
    en: 'The application can allow to convert currencies (4 of these are allowed: ruble, dollar, euro and pounds), it has also the reverse conversion',
  },
  'converter-desc-item-2': {
    ru: 'Был полностью изменен дизайн: добавлено 3 цветовых схемы, что позволяет переключаться на любую из трех тем: темную, светлую и лунную',
    en: 'It was changed the design of the site: added three color schemes, that allows to switch on any of three themes: dark, light and moon',
  },
  'converter-desc-item-3': {
    ru: 'Также добавлена функция переключения языков на английский и русский',
    en: 'The function to switch the languages on English and Russian was added',
  },
  'converter-desc-item-4': {
    ru: 'Добавлена функция увеличения / уменьшения значения в текстовом поле ввода данных с помощью колесика мыши, что позволяет быстрее вводить данные не используя клавиатуру',
    en: 'It was added the function to increase and decrease the values in the text field using the wheel of the mouse that allows to enter the data faster not using the keyboard',
  },
  'converter-desc-item-5': {
    ru: 'Добавлена фавиконка, что позволяет видеть во вкладке браузера мини-изображение а также, если пользователь захочет добавить приложение на рабочий стол компьютера или смартфона, ему также будет доступно видеть нестандартный ярлык операционной системы, а красочную иконку веб-приложения. (Это достигнуто благодаря gulp-задаче, которая генерирует фавиконки для различных устройств: Apple, Windows, Android и других)',
    en: 'It was added the favicon that allows to see the mini-picture in the browser tab and if the user wants to add the application on the desktop of PC or mobile phone he also will see not default label but the colorful icon of the web-application. (It was made using gulp-task that does generate the favicons for different devices: Apple, Windows, Android and others)',
  },
  'mobile-nav-light-theme': {
    ru: 'Светлая тема',
    en: 'Light theme',
  },
  'mobile-nav-dark-theme': {
    ru: 'Тёмная тема',
    en: 'Dark theme',
  },
  'english-version': {
    ru: 'Английская версия',
    en: 'English version',
  },
  'russian-version': {
    ru: 'Английская версия',
    en: 'Russian version',
  },
};

const titles = {
  // "telegram-intro": {
  //   ru: "Мой телеграм",
  //   en: "My telegram",
  // },
};

// const repeatTitles = {
// "telegram-intro": {
//   ru: "Мой телеграм",
//   en: "My telegram",
// },
// };

const repeatElems = {
  'theme-switcher-slide-text-1': {
    ru: 'Этот проект может помочь решить вашу задачу с подключением темы в модальных окнах. Просто кликните на иконку луны, и темная цветовая схема установится. Переключение темы происходит плавно, и тема сохраняется при выключении браузера. Когда у вас есть переключатель тем, сайт становится более привлекательным и красивым!',
    en: 'This project can help to decide your task with the fast theme`s switching on dark in modal windows. Just click on the moon`s icon and dark theme will be on. Theme switching is smooth and the theme is saved when the browser is turned off. When you have the theme`s switcher, your site is more attractive and beautiful!',
  },
  'theme-switcher-slide-text-2': {
    ru: 'Также вы можете установить светлую цветовую схему. Для этого вам нужно просто кликнуть на иконку солнца. И ваша цветовая схема будет применена. Приятные цвета и дизайн позволят вашему сайту стать идеальным! Это будет работать даже когда у вас много модальных окон. Вы можете использовать этот переключатель тем в различных местах вашего сайта.',
    en: 'Also you can set the light theme. For this you need just to click on the sun`s icon. And your theme will be on. Pleasant colors and design let your site be perfect! It will work even when you have a lot modal windows. You can use it in different places on your site.',
  },
  'btn-next': {
    ru: 'Вперед',
    en: 'Next',
  },
  'btn-prev': {
    ru: 'Назад',
    en: 'Prev',
  },
  'more-detailed-info': {
    ru: 'Наиболее детальная информация о проекте',
    en: 'More detailed information about the project',
  },
  'link-to-the-project': {
    ru: 'Ссылка на проект',
    en: 'Link to the project',
  },
  'nav-portfolio': {
    ru: 'Портфолио',
    en: 'Portfolio',
  },
  'nav-contacts': {
    ru: 'Контакты',
    en: 'Contacts',
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
