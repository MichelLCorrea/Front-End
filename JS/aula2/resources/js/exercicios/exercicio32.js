function exercicio32() {
    let numero = 0
    
    while(numero < 1 || numero > 10) {
        numero = parseInt(window.prompt('Digite um número entre 1 e 10'))
    }

    let fatorial = 1
    for(let index = numero; index > 1; index--){
        fatorial = fatorial * index
    }

    document.write(`<h1>O valor do fatorial de ${numero} é ${fatorial}</h1>`)
}

exercicio32()