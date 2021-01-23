function exercicio25() {
    let numero = 20
    let soma = 0
    let texto = ''

    while(numero > 0) {
        soma = soma + numero
        texto = `${texto} + ${numero}`
        numero--
    }
    texto = texto.substr(2, texto.length)
    document.write(`<h1>A soma ${texto} é igual a ${soma}.</h1>`)
}

exercicio25()