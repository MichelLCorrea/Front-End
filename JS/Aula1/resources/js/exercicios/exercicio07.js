function escreverNomeIdade(nome, idade) {
    document.write(`<h1>Meu nome é ${nome}!</h1>`)
    document.write(`<h2>E tenho ${idade} anos!</h2>`)
}

function exercicio07() {
    let nome = window.prompt("Digite o seu nome")
    let idade = window.prompt("Digite a sua idade")
    escreverNomeIdade(nome, idade);
}

exercicio07()