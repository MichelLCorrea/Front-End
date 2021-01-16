function somar(numero1, numero2) {
    return numero1 + numero2
}

function subtrair(numero1, numero2) {
    return numero1 - numero2
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2
}

function dividir(numero1, numero2) {
    return numero1 / numero2
}


function restoDaDivisao(numero1, numero2) {
    return numero1 % numero2
}

function executarCalculadora() {
    let valor1 = parseFloat(window.prompt("Digite o primerio valor"))  //valor1 === numero1
    let valor2 = parseFloat(window.prompt("Digite o segundo valor"))  //valor2 === numero2
    const soma = somar(valor1, valor2)
    const subtracao = subtrair(valor1, valor2)
    const multiplicacao = multiplicar(valor1, valor2)
    const divisao = dividir(valor1, valor2)
    document.write(`<p>${valor1} + ${valor2} = ${soma}</p>`)
    document.write(`<p>${valor1} - ${valor2} = ${subtracao}</p>`)
    document.write(`<p>${valor1} * ${valor2} = ${multiplicacao}</p>`)
    document.write(`<p>${valor1} / ${valor2} = ${divisao}</p>`)

    const resto = restoDaDivisao(valor2, valor2)
    document.write(`<p>${valor1} mod ${valor2} = ${resto}</p>`)
}

executarCalculadora()