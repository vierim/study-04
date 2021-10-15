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

function addInputHighlighting () {
  if(!formInputElement.classList.contains('order-form__email_status_empty')) {
    formInputElement.classList.add('order-form__email_status_empty');
  }
}

function removeInputHighlighting () {
  if(formInputElement.classList.contains('order-form__email_status_empty')) {
    formInputElement.classList.remove('order-form__email_status_empty');
  }
}

function returnButtonTitle () {
  formButtonElement.innerText = 'Записаться!';
}

headerMenuButton.addEventListener('click', () => {
  if(headerMenuButton.classList.contains('header__menu-button_action_open')) {
    headerMenuButton.classList.add('header__menu-button_action_close');
    headerMenuButton.classList.remove('header__menu-button_action_open');
    headerMenu.classList.toggle('header__menu_opened');
  } else {
    headerMenu.classList.toggle('header__menu_opened');
    headerMenuButton.classList.remove('header__menu-button_action_close');
    headerMenuButton.classList.add('header__menu-button_action_open');
  }
});

formInputElement.addEventListener('focus', () => {
  activeFormButtonHover();
  removeInputHighlighting();
});

formInputElement.addEventListener('blur', () => {
  hideFormButtomHover();
});

formInputElement.addEventListener('input', () => {
  if(formInputElement.value.length === 0) {
    returnButtonTitle();
  }
});

formButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  if(formInputElement.value.length > 0) {
    formButtonElement.innerText = 'Спасибо!';
    formInputElement.value = '';
  } else {
    addInputHighlighting();
  }
});
