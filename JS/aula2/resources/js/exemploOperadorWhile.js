function exemploOperadorWhile() {
    let numero = 1 

    while(numero <= 10) {
        document.write(`<h1>${numero}</h1>`)
        numero++
    }
}

function exemploOperadorWhile2() {
    let numero = 10
    let soma = 0
    let texto = ''

    while(numero > 0) {
        soma = soma + numero
        texto = `${texto} + ${numero}`
        numero--
    }
    texto = texto.substr(2, texto.length)
    document.write(`<h1>A soma ${texto} é igual a ${soma}</h1>`)
}

exemploOperadorWhile2()