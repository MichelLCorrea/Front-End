function perimetro(lado) {
    let SomaLados = lado + lado + lado + lado
    return SomaLados
}

function exercicio14() {
    let lado = parseFloat(window.prompt("Digite o tamanho do lado do quadrado"))

    const quadrado = perimetro(lado, lado, lado, lado)

    document.write(`<p>O tamanho do lado do quadrado é ${quadrado}`)
}

exercicio14()