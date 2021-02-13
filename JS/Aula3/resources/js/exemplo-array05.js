function exemploArray05() {
    let nomes = []

    for(let index = 0; index < 5; index++){
        let nomeAtual = window.prompt(`Digite um nome ${index+1}/5`)
        nomes.unshift(nomeAtual) // UNSHIFT = Adiciona um elemneto na primeria posição
    }

    document.write(`<h1>Nomes Cadastrados</h1>`)
    for(let index = 0; index < nomes.length; index++){
        document.write(`<p>${nomes[index]}</p>`)
    }
}

exemploArray05()