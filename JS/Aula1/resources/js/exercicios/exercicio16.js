function exercicio16() {

    let nota = parseFloat(window.prompt("Digite sua nota!!"))

    if(nota >= 7){
        document.write("<h1>Parabens, você está aprovado!</h1>")
    } else {
        document.write("<h1>Reprovado, estude mais da próxima vez!</h1>")
    }

}

exercicio16()