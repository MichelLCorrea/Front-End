function exercicio03() {

    // Pedir as 10 cidades para usuário
    let cidades = []
    let quantidade = 10
    for(let index = 0; index < quantidade; index++) {
        let nomeCidade = window.prompt(`Informe 10 cidades para conhecer`)
        cidades[index] = nomeCidade
    }

    // Mostar as cidades cadastrados
    document.write(`<h1>Cidades que você escolheu para visitar</h1>`)
    for(let pos = 0; pos < cidades.length; pos++){
        document.write(`<p>${cidades[pos]} <br></p>`)
    }

}

exercicio03()