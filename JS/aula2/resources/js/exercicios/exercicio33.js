function calcularMedia(valor1, valor2, valor3){
    return (valor1 + valor2 + valor3) / 3
}

function exercicio33() {
    let nota1 = parseFloat(window.prompt("Informe a primeira nota"))

    for(;nota1 > -1;) {
        let nota2 = parseFloat(window.prompt("Informe a segunda nota"))
        let nota3 = parseFloat(window.prompt("Informe a terceira nota"))
        let media = calcularMedia(nota1, nota2, nota3)
        window.alert(`A média das notas informadas são ${media}`)
        nota1 = parseFloat(window.prompt("Informe a primeira nota"))
    }

    document.write(`<p>Fim do programa</p>`)
}

exercicio33()
