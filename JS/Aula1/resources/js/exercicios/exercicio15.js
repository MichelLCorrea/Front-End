function retangulo(base, altura) {
    let area = base * altura
    return area
}

function exercicio15() {
    let base = parseFloat(window.prompt("Digite o valor da base do retangulo"))
    let altura = parseFloat(window.prompt("Digite o valor da altura do retangulo"))

    const calcularArea = retangulo(base, altura)

    document.write(`<p>A area do retangulo é ${calcularArea}!!`)
}

exercicio15()