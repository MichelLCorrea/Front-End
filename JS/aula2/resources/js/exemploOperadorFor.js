function exemploOperadorFor() {
    for(let index = 1; index <= 10; index++) {
        document.write(`<h1>O valor de index é ${index}</h1>`)
    }

    document.write(`<p>Fim da Aplicação</p>`)
}

function exemploOperadorFor2() {
    let soma = 0
    for(let numero = 1; numero <= 10; numero++){
        soma = soma + numero
    }
    document.write(`A soma dos 10 primeiros números inteiros são ${soma}`)
}

exemploOperadorFor2()
