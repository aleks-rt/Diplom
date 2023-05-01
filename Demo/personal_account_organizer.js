$make_app = document.querySelector('.make_app')
form = document.querySelector('#blablabla')
popup = document.querySelector('.popup')
burger_menu = document.querySelector('.submenu');

$searchHotels = document.querySelector('.search-hotels')
$buttonClosePopup = document.querySelector('.button-close-popup')
$button = document.getElementsByClassName('button-selected')

// закрыть или открыть окно создания мероприятия

$make_app.addEventListener('click', function() {
  form.classList.add('open');
  popup.classList.add('popup_open');
  
});


$buttonClosePopup.addEventListener('click', function() {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});

// скрыть или показать текст

var acc = document.querySelectorAll(".accordion");
var i;



for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$come_in = document.querySelector('.application_participation')
form = document.querySelector('#blablabla')
popup = document.querySelector('.popup')
$buttonClosePopup = document.querySelector('.button-close-popup')

//открытие окно заявки

$info_member = document.querySelector('.info_member')
form2 = document.querySelector('#blablabla2')
popup2 = document.querySelector('.popup2')
$buttonClosePopup2 = document.querySelector('.button-close-popup2')

$info_member.addEventListener('click', function() {
  form2.classList.add('open2');
  popup2.classList.add('popup_open2');
  
});

$buttonClosePopup2.addEventListener('click', function() {
    form2.classList.remove('open2');
    popup2.classList.remove('popup_open2');
});

//поменять цвет кнопки при нажатии

$yes_member = document.querySelector('.yes_member')

$yes_member.addEventListener('click', function() {
    $yes_member.classList.add('green');
    $no_member.classList.remove('red');
  });

$no_member = document.querySelector('.no_member')

$no_member.addEventListener('click', function() {
    $no_member.classList.add('red');
    $yes_member.classList.remove('green');
  });

$reseat_member = document.querySelector('.reseat_member')

$reseat_member.addEventListener('click', function() {
      $yes_member.classList.remove('green');
      $no_member.classList.remove('red');
    });

// удалить выбранный файл
let file = document.querySelector("#file"),
delete_file = document.querySelector(".delete_file");

delete_file.addEventListener("click", function(){
   file.value = '';
   let newControl = control.cloneNode( true )
   file.replaceWith( newFile );
   file = newFile;
});