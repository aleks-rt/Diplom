
$filter = document.querySelector('.filter')
form = document.querySelector('#blablabla')
popup = document.querySelector('.popup')
burger_menu = document.querySelector('.submenu');

$searchEvents = document.querySelector('.search-events')
$buttonClosePopup = document.querySelector('.button-close-popup')
$button = document.getElementsByClassName('button-selected')

// закрыть или открыть фильтр поиска

$filter.addEventListener('click', function() {
  form.classList.add('open');
  popup.classList.add('popup_open');
  
});


$buttonClosePopup.addEventListener('click', function() {
    form.classList.remove('open');
    popup.classList.remove('popup_open');
});

// поменять цвет кнопки

for (i = 0; i < $button.length; i++) {
    $button[i].addEventListener('click', function () {
        if (this.classList.contains('selected-element')) {
            this.classList.remove('selected-element');
            this.classList.add('not-selected-element')
        } else {
            this.classList.add('selected-element')
            this.classList.remove('not-selected-element')
        }
    });
}

// показать выбор ценника в фильтре

var slider1 = document.querySelector('#min-price')
var slider2 = document.querySelector('#max-price')

var output1 = document.querySelector('#demo1')
var output2 = document.querySelector('#demo2')

output1.innerHTML = slider1.value
output2.innerHTML = slider2.value

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

slider2.oninput = function() {
    output2.innerHTML = this.value;
}



// фильтрация отелей по таблице

const $list = document.querySelector('.choice')

item = document.querySelectorAll('.items')

function filter() {
    $list.addEventListener('click', event => {
        const targetID = event.target.dataset.id
        console.log(targetID);

        switch(targetID) {
            case 'all':
                getItems(targetID)
                break
            case 'dancer':
                getItems(targetID)
                break
            case 'singer':
                getItems(targetID)
                break
            case 'artist':
                getItems(targetID)
                break
            case 'laughter':
                getItems(targetID)
                break
            case 'leading':
                getItems(targetID)
            case 'DJ':
                getItems(targetID)
                break
                
        }
    })
}

filter()

function getItems(className) {
    item.forEach(item => {
        if (item.classList.contains(className)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

// настройка поиска

btnSearch = document.querySelector('.btn-search')

document.querySelector('#search').oninput = function() {
    let val = this.value.trim().toLowerCase()
    console.log(val)
    let item = document.querySelectorAll('.items')
    console.log(item.innerText)
    if (val != '') {
        item.forEach(function(element) {
            if (element.innerText.toLowerCase().search(val) == (-1)) {
                btnSearch.addEventListener('click', function() {
                    element.classList.add('hide')
                })
               
            } else {
                btnSearch.addEventListener('click', function() {
                    element.classList.remove('hide')
                })
               
            }
        })
    }
    else {
        item.forEach(function(element) {
                element.classList.remove('hide')
            })
        }
    }


// настройка фильтра поиска

item = document.querySelectorAll('.items')
$searchEvents = document.querySelector('.search-events')
concertCheck = document.getElementById('concert-check')
partyCheck = document.getElementById('party-check')
localCheck = document.getElementById('local-check')
overCheck = document.getElementById('over-check')

$searchEvents.addEventListener('click', searchEvents)

function searchEvents() {

    form.classList.remove('open')
    popup.classList.remove('popup_open')

    var enableTypes = [];

    if (concertCheck.checked) {
        enableTypes.push('concert');
    }

    if (partyCheck.checked) {
        enableTypes.push('party');
    }

    if (localCheck.checked) {
        enableTypes.push('local')
    }

    if (overCheck.checked) {
        enableTypes.push('over')
    }

    item.forEach(function(element) {
        var allText = element.innerText
        var price = (parseInt(allText.match(/\d+/)))
        if (enableTypes.length == 0) {
            element.classList.remove('hide')
            if ((price >= slider1.value) && (price <= slider2.value)) {
                        element.classList.remove('hide');
                    } else {
                        element.classList.add('hide')
                    }
        }
        for (i = 0; i < enableTypes.length; ++i) {
            if (element.classList.contains(enableTypes[i]) && (price >= slider1.value) && (price <= slider2.value)) {
                element.classList.remove('hide')
                break
            } 
            if (i == enableTypes.length - 1) {
                element.classList.add('hide')
            }
        }
    })



}