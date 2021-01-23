function exemploOperadorTernario() {
    let numeroSecreto = 7
    let palpite = parseInt(window.prompt('Digite um número entre 1 e 100!!'))
    let mensagem = palpite == numeroSecreto ? 'Parabens vc acertou!' : 'Que pena, vc errou!'
    document.write(`<h1>${mensagem}</h1>`)
}

exemploOperadorTernario()


/*
let mensagem = ''
if(palpite == numeroSecreto) {
    mensagem = "Parabéns vc acertou"
} else {
    mensagem = "Q pena vc errou"
}
*/