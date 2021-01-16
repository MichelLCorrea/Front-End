function escreverDataNascimento(diaDoNascimento, mesDoNascimento, anoDoNascimento) {
    document.write(`<h2>Nasci no dia ${diaDoNascimento} no mês de ${mesDoNascimento} no ano de ${anoDoNascimento}</h2>`)
}

function exercicio10() {
    let diaDoNascimento = window.prompt("Digite o dia que você nasceu")
    let mesDoNascimento = window.prompt("Digite o mês que você nasceu")
    let anoDoNascimento = window.prompt("Digite o ano que você nasceu")
    escreverDataNascimento(diaDoNascimento, mesDoNascimento, anoDoNascimento);
}

exercicio10()