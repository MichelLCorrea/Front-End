function exercicio06() {
    let tarefas = []
    let quantidade = parseInt(window.prompt("Digite a quantidade de tarefas que deseja cadastrar"))

    for(let index = 0; index < quantidade; index++){
        let tarefa = window.prompt(`Digite uma tarefa ${index+1}/${quantidade}`)
        tarefas.unshift(tarefa)
    }

    document.write(`<h1>Tarefas Cadastrados</h1>`)
    for(let pos = 0; pos < tarefas.length; pos++){
        document.write(`<p>${tarefas[pos]}</p>`)
    }
}

exercicio06()