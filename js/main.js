
const inputTarefa = document.querySelector('.input-tarefa')
const botao = document.querySelector('.botao')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function (evento) {
    if (evento.key === 'Enter') {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
        inputTarefa.value = '';
        inputTarefa.focus()
    }
})

function criabotaoApagar (li) {
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    li.innerText += '  '
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar)
}

function criaTarefa(texto) {
    const li = criaLi()
    li.innerText = texto;
    tarefas.appendChild(li)
    criabotaoApagar(li)
}

botao.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
    inputTarefa.value = '';
        inputTarefa.focus()
})
