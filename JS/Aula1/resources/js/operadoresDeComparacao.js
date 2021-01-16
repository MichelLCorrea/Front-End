function isMaiorIgual(numero1, numero2) {
    return numero1 >= numero2
}

function isMaior(numero1, numero2) {
    return numero1 > numero2
}

function isMenorIgual(numero1, numero2) {
    return numero1 <= numero2
}

function isMenor(numero1, numero2) {
    return numero1 < numero2
}

function isIgual(numero1, numero2) {
    return numero1 == numero2
}

function isDiferente(numero1, numero2) {
    return numero1 != numero2
}

function mostrarOperadoresComparacao() {
    let numero1 = parseFloat(window.prompt("Digite o primeiro número"))
    let numero2 = parseFloat(window.prompt("Digite o segundo número"))

    document.write(`<p>${numero1} >= ${numero2} ? ${isMaiorIgual(numero1, numero2)}</p>`)
    document.write(`<p>${numero1} > ${numero2} ? ${isMaior(numero1, numero2)}</p>`)
    document.write(`<p>${numero1} <= ${numero2} ? ${isMenorIgual(numero1, numero2)}</p>`)
    document.write(`<p>${numero1} < ${numero2} ? ${isMenor(numero1, numero2)}</p>`)
    document.write(`<p>${numero1} == ${numero2} ? ${isIgual(numero1, numero2)}</p>`)
    document.write(`<p>${numero1} != ${numero2} ? ${isDiferente(numero1, numero2)}</p>`)
}

mostrarOperadoresComparacao()