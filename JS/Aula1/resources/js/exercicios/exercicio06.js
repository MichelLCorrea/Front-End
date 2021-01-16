function escreverNome(nome) {
    document.write(`<h1>Meu nome é ${nome}!</h1>`)
}

function exercicio06() {
    let nome = window.prompt("Digite o seu nome")
    escreverNome(nome);
}

exercicio06()
