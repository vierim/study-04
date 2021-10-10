const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');

const formElement = document.querySelector('.order-form');
const formInputElement = formElement.querySelector('.order-form__email');
const formButtonElement = formElement.querySelector('.order-form__submit');

function activeFormButtonHover () {
  formButtonElement.classList.add('button_hover');
}

function hideFormButtomHover () {
  formButtonElement.classList.remove('button_hover');
}

headerMenuButton.addEventListener('click', () => {
  headerMenu.classList.toggle('header__menu_opened');
  headerMenuButton.classList.toggle('header__menu-button_close-icon');
});

formInputElement.addEventListener('focus', () => {
  activeFormButtonHover ();
});

formInputElement.addEventListener('blur', () => {
  hideFormButtomHover ();
});

formButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  formButtonElement.innerText = 'Спасибо!';
});
