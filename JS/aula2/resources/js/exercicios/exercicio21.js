function mediaAluno() {
    let nota1 = parseInt(window.prompt("Digite a primeira nota"))
    let nota2 = parseInt(window.prompt("Digite a segunda nota"))
    let nota3 = parseInt(window.prompt("Digite a terceira nota"))

    let media = (nota1 + nota2 + nota3) / 3

    let calculoMedia = media <= 7 ? 'Reprovado, estude mais!' : 'Aprovado, vc é um ótimo aluno!'

    document.write(`<h1>${calculoMedia}</h1>`)

}

mediaAluno()