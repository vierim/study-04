const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');

headerMenuButton.addEventListener('click', () => {
  headerMenu.classList.toggle('header__menu_opened');
  headerMenuButton.classList.toggle('header__menu-button_close-icon');
});
