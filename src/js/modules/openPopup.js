const setteingsBtn = document.querySelector('.settings__icon');
const setteingsPopup = document.querySelector('.settings__popup');
const setteings = document.querySelector('.settings');

const openPopup = function () {
  setteingsPopup.classList.toggle('settings__popup--active');
  setteingsBtn.classList.toggle('settings__icon--active');
};

setteings.addEventListener('click', openPopup);