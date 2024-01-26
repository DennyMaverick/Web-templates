const menuBurger = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const bodyElement = document.querySelector('body');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

const closeModalWindow = function () {
  mobileMenu.classList.remove('mobile-menu--active');
  bodyElement.classList.remove('no-scroll');
};

const activeMobileMenu = function () {
  mobileMenu.classList.toggle('mobile-menu--active');
  bodyElement.classList.toggle('no-scroll');
};

menuBurger.addEventListener('click', activeMobileMenu);

mobileMenuLinks.forEach(item => {
  item.addEventListener('click', closeModalWindow);
});
