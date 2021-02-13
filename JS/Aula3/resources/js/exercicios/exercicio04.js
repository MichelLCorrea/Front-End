function exemploArray03() {

    // Pegar a quantidade de carros para cadastrar
    let produtos = []
    let quantidade = parseInt(window.prompt("Digite a quantidade de produtos para lista de compras"))
    for(let index = 0; index < quantidade; index++) {
        let nomeProduto = window.prompt(`Informe os produtos ${index +1}/ ${quantidade}`)
        produtos[index] = nomeProduto
    }

    // Mostar os carros cadastrados
    document.write(`<h1>produtos cadastrados</h1>`)
    for(let pos = 0; pos < produtos.length; pos++){
        document.write(`<p>${produtos[pos]} <br></p>`)
    }

}

exemploArray03()