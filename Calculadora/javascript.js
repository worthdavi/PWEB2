var numbers_class = document.getElementsByClassName('buttons').querySelectorAll('numbers')
var operators_class = document.getElementsByClassName('buttons').querySelectorAll('operators')

function setNumber(value){
    let screen = document.getElementById('screen')
    screen.innerText = value
}

for(let n of numbers_class){
    let value = n.getAttribute('data-val')
    n.addEventListener('click', setNumber(value), false)
}
