// получаем ссылки на элементы меню в шапке (кнопка и само меню)
const headerMenuButton = document.querySelector('.header__menu-button');
const headerMenu = document.querySelector('.header__menu');

// получаем ссылки на элементы формы
const formElement = document.querySelector('.order-form');
const formInputElement = formElement.querySelector('.order-form__email');
const formButtonElement = formElement.querySelector('.order-form__submit');

// Работа с hover эффектом на кнопке "Записаться!" при focus/blur на поле ввода
function activeFormButtonHover () {
  formButtonElement.classList.add('button_hover');
}

function hideFormButtomHover () {
  formButtonElement.classList.remove('button_hover');
}

// Активация и дезактивация подсветки пустого поля ввода (при клике на кнопку "Записаться!")
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

// Функция возвращаем кнопке "значение по умолчанию"
function returnButtonTitle () {
  formButtonElement.innerText = 'Записаться!';
}

// Навешиваем события и обработчики
headerMenuButton.addEventListener('click', () => { // нажатие на мобильную кнопку меню

  if(headerMenuButton.classList.contains('header__menu-button_action_open')) { // нажата кнопка "открыть меню"
    headerMenuButton.classList.add('header__menu-button_action_close');
    headerMenuButton.classList.remove('header__menu-button_action_open');
    headerMenu.classList.toggle('header__menu_opened');
  } else {  // нажата кнопка "закрыть меню"
    headerMenu.classList.toggle('header__menu_opened');
    headerMenuButton.classList.remove('header__menu-button_action_close');
    headerMenuButton.classList.add('header__menu-button_action_open');
  }

  // такая массивная конструкция нужна для отображения анимации кнопки на открытии и закрытии меню
});

formInputElement.addEventListener('focus', () => { // focus на поле ввода email
  activeFormButtonHover();
  removeInputHighlighting(); // если ранее была попытка отправить запись с пустой почтой
});

formInputElement.addEventListener('blur', () => { // снятие focus'а с поля ввода email
  hideFormButtomHover();
});

formInputElement.addEventListener('input', () => { // возвращаем кнопке значение "Записаться!" (если уже была отправлена запись ранее)
  if(formInputElement.value.length === 0) {
    returnButtonTitle();
  }
});

formButtonElement.addEventListener('click', (evt) => { // клик на кнопку "Записаться!"
  evt.preventDefault();

  if(formInputElement.value.length > 0) {
    formButtonElement.innerText = 'Спасибо!';
    formElement.reset(); // Очищаем поля формы
  } else {
    addInputHighlighting(); // Подсвечиваем поле ввода, при попытке отправить запись с пустым полем
  }
});
