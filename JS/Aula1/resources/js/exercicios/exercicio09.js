function escreverTime(time) {
    document.write(`<h2>${time} é o time do meu coração!</h2>`)
}

function exercicio09() {
    let time = window.prompt("Digite o time que você torce")
    escreverTime(time);
}

exercicio09()