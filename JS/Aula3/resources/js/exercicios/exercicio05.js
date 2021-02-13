function exercicio05() {
    let materiais = []
    let quantidade = parseInt(window.prompt("Digite a quantidade de materiais que deseja cadastrar"))

    for(let index = 0; index < quantidade; index++){
        let material = window.prompt(`Digite um material ${index+1}/${quantidade}`)
        materiais.push(material)
    }

    document.write(`<h1>Materiais Cadastrados</h1>`)
    for(let pos = 0; pos < materiais.length; pos++){
        document.write(`<p>${materiais[pos]}</p>`)
    }
}

exercicio05()