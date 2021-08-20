
var buttons = document.querySelectorAll('button')
var operations = []

function writeOnScreen(x, number){
    const display = document.querySelector('#display')

    if(!number)
        operations.push(x)
    if(x == "=")
        return

    display.innerText += x
}

var features = [
    '+',
    '-',
    '/',
    '*',
    ',',
    'c'
]

function executeOperation(operator, value1, value2){
    let result = 0
    if(operator == '+'){
        result = (value1 + value2);
    }else if (operator == '-') {
        result = (value1 - value2);
    }else if (operator == 'x') {
        result = (value1 * value2);
    }else if (operator == '÷') {
        result = (value1 / value2);
    }
    return result
}

function calculate(){
    const display = document.querySelector('#display')
    let text = display.innerText
    for(let i = 0; i < features.length; i++){
       text = text.replace(\d+,?\d, ' ')
    }
    let numeros = text.split(" ")
    let result = parseInt(numeros[0])
    let operator = 0
    for(let i = 0; i < numeros.length; i++){
        if(parseInt(numeros[i]) && parseInt(numeros[i + 1]) && operations[operator] != null){
            result = executeOperation(operations[operator], result, parseInt(numeros[i + 1]))
            operator++
        }
    }
    alert('Resultado: ' + result)
}

function clear(){
    const display = document.querySelector('#display')
    display.innerText = ""
    operations = []
}

buttons.forEach(button => {
    button.addEventListener('click', event => {
        let value = event.target.id;
        let isNumber = false

        if(parseInt(value))
            isNumber = true

        writeOnScreen(value, isNumber)

        if(value == "="){
            calculate()
            
        }else if(value == 'clear'){
            clear()
        }
    });
 });