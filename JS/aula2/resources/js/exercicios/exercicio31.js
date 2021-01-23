function exercicio31() {
    let numero = 0
    while(numero < 10 || numero > 20) {
        numero = parseInt(window.prompt("Digite um número 10 e 20!"))
    }

    for(let index = numero; index >= 0; index--){
        document.write(`<h1>${index}</h1>`)
    }
}

exercicio31()