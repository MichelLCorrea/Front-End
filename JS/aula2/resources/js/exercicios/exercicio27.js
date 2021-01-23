function exercicio27() {
    let numero = 0
    
    while(numero < 1 || numero > 10) {
        numero = parseInt(window.prompt('Digite um número entre 1 e 10'))
    }

    let fatorial = 1
    while(numero > 1){
        fatorial = fatorial * numero
        numero--
    }

    document.write(`<h1>O valor do fatorial é ${fatorial}</h1>`)
}

exercicio27()