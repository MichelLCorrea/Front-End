function somaNumeros(numero1, numero2, numero3) {
    let soma = numero1 + numero2 + numero3
    return soma
}

function exercicio11() {
    let valor1 = parseFloat(window.prompt("Digite o primerio valor")) 
    let valor2 = parseFloat(window.prompt("Digite o segundo valor"))  
    let valor3 = parseFloat(window.prompt("Digite o terceiro valor"))  
    const resultado = somaNumeros(valor1, valor2, valor3)
    
    document.write(`<p>${valor1} + ${valor2} + ${valor3} = ${resultado}</p>`)
}

exercicio11()