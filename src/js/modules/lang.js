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
    ru: 'Русская версия',
    en: 'Russian version',
  },
  'lang-switcher-title': {
    ru: 'Переключатель языков',
    en: 'Language`s switcher',
  },
  'lang-switcher-desc-1': {
    ru: 'Данный проект представляет собой сайт, подробно описывающий, как подключать функцию переключения языков на небольшие сайты, такие как лэндинги.',
    en: 'This project is the site where you can see the detailed information how to set the function of swithing the languages using on not big sites such as landings.',
  },
  'lang-switcher-desc-2': {
    ru: 'Технологии и инструменты, которые были использованы:',
    en: 'The technologies and instruments were used:',
  },
  'password-generator-title': {
    ru: 'Генератор паролей',
    en: 'Password generator',
  },
  'password-generator-desc-start': {
    ru: 'Данное web-приложение позволяет генерировать пароль различного уровня сложности. Сложность пароля увеличивается по мере роста символов в нем, а также при добавлении специальных символов',
    en: 'The web-application allows to generate the passwords of any level of dificulties. The dificult of the password does increase when the symbols stand a lot and also when the special symbols are added',
  },
  functional: {
    ru: 'Приложение поддерживает следующий функционал:',
    en: 'The application allows next functionality:',
  },
  'password-generator-desc-1': {
    ru: 'Чтобы начать пользоваться приложением, нужно ввести количество символов, если этого не сделать, - на экране появится всплывающее окно - подсказка',
    en: 'To start the app you need to enter the quontity of symbols. If you will not do this - the popup window will display',
  },
  'password-generator-desc-2': {
    ru: 'Есть опция выбора наличия специальных символов в пароле, если она выбрана - в пароль будут случайным образом добавлены специальные симвлолы: ! , @ , # , $ , % , ^ , & , *',
    en: 'The option to choose the special symbols does exist in the password. If it has choosen - the special symbols will be added to the password by random method: ! , @ , # , $ , % , ^ , & , *',
  },
  'password-generator-desc-3': {
    ru: 'После выбора всех опций, - в версии для компьютеров, ширина экрана которых больше 992px, слева плавно появится боковая панель с набором паролей, случайным образом сгенерированных. В версиях для мобильных устройств - пароли появятся в нижней части экрана',
    en: 'When all options will be choosen the sidebar with the set of the passwords (that do generate by random method) will be displayd from left side (it is available for PC and devices with the width more 992px). For mobile devices the passwords will appear in the bottom side of the display',
  },
  'password-generator-desc-4': {
    ru: 'Доступна функция копирования пароля, для этого нужно кликнуть по соответствующей иконке рядом с паролем',
    en: 'The function of copying of the password allows. For this you need to click to the according icons that are near with the password',
  },
  'password-generator-desc-5': {
    ru: 'Если ни один из паролей не понравился, можно снова нажать на кнопку "Сгенерировать" и пароли обновятся',
    en: 'If you do not like all of passwords you can press the button `Generate` again and the password will be updated',
  },
  'password-generator-desc-6': {
    ru: 'При клике на кнопку "Сбросить", боковая панель с набором паролей плавно закрывается, все опции сбрасываются',
    en: 'When you click by the button `Reset`, the sidebar with the set of passwords will smoothly close and all options will reset',
  },
  'contact-with-author': {
    ru: 'Связаться с автором сайта:',
    en: 'Contact to the author:',
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
    ru: 'Данный проект был разработан, чтобы пользователь имел возможность изменить цветовую схему сайта, находясь прямо в модальном окне. На результат реализации можно посмотреть на моем основном сайте-портфолио перейдя по',
    en: 'This project was developed for helping to change the color scheme on the site when you are right in the modal window. On the result you can see by clicking',
  },
  'theme-switcher-link': {
    ru: 'ссылке',
    en: 'the link',
  },
  'theme-switcher-slide-text-2': {
    ru: 'Смена темы происходит плавно и происходит даже когда модальных окон на сайте большое множество. Подробнее о том как реализуется переключение темы можно найти',
    en: 'The theme`s changing is going smoothly and works even the site has a lot of modal windows. More detailed information about it you can see by clicking this',
  },
  'theme-switcher-slide-2-link': {
    ru: 'здесь',
    en: 'link',
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
  'repository-git-link': {
    ru: 'Ссылка на репозиторий GitHub',
    en: 'Link to the repository GitHub',
  },
  'nav-portfolio': {
    ru: 'Портфолио',
    en: 'Portfolio',
  },
  'nav-contacts': {
    ru: 'Контакты',
    en: 'Contacts',
  },
  'technology-gulp': {
    ru: 'Менеджер проектов gulp',
    en: 'The project`s manager gulp',
  },
  'technology-aos': {
    ru: 'Библиотека AOS, которая создает эффекты анимации на странице',
    en: 'The library AOS that makes the effects of the animation on the page',
  },
  'lang-switching-function': {
    ru: 'Возможность изменить язык сайта на русский или английский',
    en: 'The function to change the language on Russian or English on the site',
  },
  'technology-bem': {
    ru: 'BEM-naming, методология, основная концепция которой, - использовать в наименовании классов блоки, элементы и модификаторы',
    en: 'BEM-naming,  the methodology that has the main conception to use the blocks, elements and modificators as the name of classes',
  },
  'switch-vendor-libraries': {
    ru: 'Подключение сторонних библиотек (в проекте используется только одна) осуществляется через npm, в менеджере проектов есть задача, которая подключает все нужные js-библиотеки, также есть задача для подключения css и scss библиотек',
    en: 'The switching the vendor libraries to the project (the project has only one library) does using npm, the task has in the manager of projects that switches all needed js-libraries. Also the task does exist to switch on the css ans scss libraries to the project',
  },
  'settings-in-the-project': {
    ru: 'Для удобства в проекте есть директория с настройками, в которой есть 2 файла конфигурации, в одном содержатся все пути, а в другом - все настройки для плагинов сборки gulp',
    en: 'The directory with settings does exist in the project. It is for comfort developing the project. Here are two files with configuration: the paths and the settings of plugins of gulp',
  },
  'technology-links': {
    ru: 'Технологии, инструменты и ссылки на проект:',
    en: 'The technologies, tools and links to the project:',
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
