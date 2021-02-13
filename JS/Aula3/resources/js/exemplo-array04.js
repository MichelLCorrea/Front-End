function exemploArray04() {
    let nomes = []

    for(let index = 0; index < 5; index++){
        let nomeAtual = window.prompt(`Digite um nome ${index+1}/5`)
        nomes.push(nomeAtual) // PUSH = Adiciona um elemneto na ultima posição
    }

    document.write(`<h1>Nomes Cadastrados</h1>`)
    for(let index = 0; index < nomes.length; index++){
        document.write(`<p>${nomes[index]}</p>`)
    }
}

exemploArray04()