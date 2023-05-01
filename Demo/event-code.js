// поменять картинку

var $nextPhoto = document.querySelector('#next-photo');

var n = 1;

$nextPhoto.addEventListener('click', nextPhoto)

function nextPhoto() {
    n = n + 1
    pics.innerHTML='<img class="event-img" width="600px" src="all-events/photo' + n +'.png"/><button id="next-photo" сlass="btn"> > </button>'
    if (n == 10) {
        n = 0
    }
}


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

//оставить заявку на участие

$come_in.addEventListener('click', function() {
  form.classList.add('open');
  popup.classList.add('popup_open');
  
});

$buttonClosePopup.addEventListener('click', function() {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});







