function calcularValorComDesconto(valor, percentual) {
    return valor - (valor * percentual)
}

function calcularPercentual(valor) {
    return valor / 100
}

function exercicio34() {
    let valorProduto = parseFloat(window.prompt("Informe o valor do produto."))

    for(; valorProduto > 0;) {
        let desconto = parseFloat(window.prompt("Informe o percentual de desconto"))
        let percentual = calcularPercentual(desconto)
        let novoValor = calcularValorComDesconto(valorProduto, percentual)
        window.alert(`O novo valor com desconto é de ${novoValor}`)
        valorProduto = parseFloat(window.prompt("Informe o valor do produto."))
    }
    document.write(`<p>Fim do programa!</p>`)
}

exercicio34()