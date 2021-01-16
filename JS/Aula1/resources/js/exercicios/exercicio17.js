function notasAlunos(nota1, nota2, nota3) {
    let notas = nota1 + nota2 + nota3

    return notas
}

function exercicio17() {
    let nota1 = parseFloat(window.prompt("Digite sua primeira nota!"))
    let nota2 = parseFloat(window.prompt("Digite sua segunda nota!"))
    let nota3 = parseFloat(window.prompt("Digite sua terceira nota!"))

    const media = notasAlunos(nota1, nota2, nota3) / 3

    if(media >= 7) {
        document.write("<h1>Parabens, você foi aprovado.</h1>")
    } else {
        document.write("<h1>Reprovado, escute mais da próxima vez.</h1>")
    }

}

exercicio17()