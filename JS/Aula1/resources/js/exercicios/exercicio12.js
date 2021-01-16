function somaNumeros(numero1, numero2, numero3) {
    let soma = numero1 + numero2 + numero3
    return soma
}

function exercicio12() {
    let numero1 = parseFloat(window.prompt("Digite o primerio valor")) 
    let numero2 = parseFloat(window.prompt("Digite o segundo valor"))  
    let numero3 = parseFloat(window.prompt("Digite o terceiro valor"))

    const resultado = somaNumeros(numero1, numero2, numero3) / 3
    document.write(`<p>${numero1} + ${numero2} + ${numero3} = ${resultado}</p>`)

}

exercicio12()