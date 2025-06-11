
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
    botaoApagar.style.cursor = 'pointer'
    li.appendChild(botaoApagar)
}

function criaTarefa(texto) {
    const li = criaLi()
    li.innerText = texto;
    tarefas.appendChild(li)
    criabotaoApagar(li)
    salvarTarefas()
}

botao.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
    inputTarefa.value = '';
        inputTarefa.focus()
})

document.addEventListener('click', function(e) {
    const el = e.target

    if(el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJson)
}

function saveTarefa () {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

saveTarefa()