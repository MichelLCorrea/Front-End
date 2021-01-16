function notasAlunos(nota1, nota2, nota3) {
    let notas = nota1 + nota2 + nota3

    return notas    
}

function exercicio18() {
    let nota1 = parseFloat(window.prompt("Digite sua primeira nota!"))
    let nota2 = parseFloat(window.prompt("Digite sua segunda nota!"))
    let nota3 = parseFloat(window.prompt("Digite sua terceira nota!"))

    const media = notasAlunos(nota1, nota2, nota3) / 3

    if(media >=9) {
        document.write(`<h1>Conceito A</h1>`)
    } else if(media >= 7 && media <= 9) {
        document.write(`<h1>Conceito B</h1>`)
    } else if(media >= 5 && media < 7) {
        document.write(`<h1>Conceito C</h1>`)
    } else {
        document.write(`<h1>Conceito I</h1>`)
    }
}

exercicio18()