function exemploArray02() {
    let nomes = []

    /* ADICIONAR ELEMENTOS ATRAVÉS DA INDEXAÇÃO */
    nomes[0] = "Maria"
    nomes[1] = "João"
    nomes[2] = "Ana"
    nomes[3] = "Deise"
    nomes[4] = "Janaina"

    document.write(`<h1>Nomes da lista</h1>`)
    for(let pos = 0; pos < nomes.length; pos++){
        document.write(`<p>${nomes[pos]}</p>`)
    }
}

exemploArray02()