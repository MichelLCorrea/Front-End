function impares() {
    let soma = 0
    for (let i = 0; i <= 15; i++) {
            if (i % 2 != 0) {
            soma = soma + i
        }
        document.write(`${soma / 8} `)
    }
}

impares()