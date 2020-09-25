//variaveis principais, ul e li, inputElement e button 
var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

//lista de Arrays para renderizar na tela
var todos = [
    'Fazer Café',
    'Estudar Javascript',
    'Acessar o Rocketseat'
]
//função para renderizar o Array a cima
function RenderTodo(){
    listElement.innerHTML = ''

    for (todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        
        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
    }
}

RenderTodo()

//função para adicionar um todo na lista
function addTodo(){
    var todoText = inputElement.value

    todos.push(todoText)
    inputElement.value = ''
    RenderTodo()
}

buttonElement.onclick = addTodo
inputElement.onkeypressed('enter') = addTodo