function parImpar() {
    let numero = parseInt(window.prompt("Digite um número!"))
    let calculo = numero % 2
    let exercicio22 = calculo == 0 ? 'Par!' : 'Ímpar!'

    document.write(`<h1>O número é ${exercicio22}</h1>`)

}

parImpar()


