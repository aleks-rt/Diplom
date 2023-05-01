

$come_in = document.querySelector('.come_in')
form = document.querySelector('#blablabla')
popup = document.querySelector('.popup')
$buttonClosePopup = document.querySelector('.button-close-popup')

//открытие кнопки войти

$come_in.addEventListener('click', function() {
  form.classList.add('open');
  popup.classList.add('popup_open');
  
});

$buttonClosePopup.addEventListener('click', function() {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});

//открытие кнопки зарегистрироваться

$register = document.querySelector('.register')
form2 = document.querySelector('#blablabla2')
popup2 = document.querySelector('.popup2')
$buttonClosePopup2 = document.querySelector('.button-close-popup2')

$register.addEventListener('click', function() {
  form2.classList.add('open2');
  popup2.classList.add('popup_open2');
  
});

$buttonClosePopup2.addEventListener('click', function() {
    form2.classList.remove('open2');
    popup2.classList.remove('popup_open2');
});