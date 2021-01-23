function exercicio26() {
    let numero = 0
    while(numero < 10 || numero > 20) {
        //precisa ficar pedindo o número
        numero = parseInt(window.prompt("Digite um número 10 e 20!"))
    }

    while(numero >= 0) {
        document.write(`<h1>${numero}</h1>`)
        numero--
    }
    document.write(`<p>Fim do Laço!!</p>`)

}
exercicio26()