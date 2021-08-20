const btnAdicionar = document.querySelector('#addTask')

function createElement(text){
    const lista = document.getElementById('todo-list ul')
    const li = document.createElement('li');
    li.innerHTML = `<input type='checkbox'>`
    + `<label>${text}</lable>`
    lista.appendChild(li)
}

btnAdicionar.addEventListener('click', event => {
    const tarefa = document.querySelector('#new-task')
    if(tarefa.value != "")
        createElement(tarefa.value)
});