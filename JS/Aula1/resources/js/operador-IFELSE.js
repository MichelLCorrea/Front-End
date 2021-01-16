function mostrarOperadorIF() {

    let idade = parseInt(window.prompt("Digite sua idade!"))
    if(idade >= 18) {
        document.write(`<h1>Você pode fazer a CHN</h1>`)
    }
    document.write(`<p>Fim da execução</p>`)
}

function mostrarOperadorIfElse() {

    let idade = parseInt(window.prompt("Digite sua idade!"))
    if(idade >= 18) {
        document.write(`<h1>Você pode fazer a CHN!</h1>`)
    } else {
        document.write(`<h1>Que azar você ainda não pode fazer a CHN!</h1>`)
    }
    document.write(`<p>Fim da execução</p>`)
}

function mostrarOperadorIfElseIfElse() {

    let idade = parseInt(window.prompt("Digite sua idade!"))
    if(idade >= 18) {
        document.write(`<h1>Você é obrigado a fazer o título eleitoral.</h1>`)
    } else if(idade >= 16){
        document.write(`<h1>Você já pode fazer o título eleitoral.</h1>`)
    } else {
        document.write(`<h1>Você ainda é muito novo para fazer o título eleitoral.</h1>`)
    }
    document.write(`<p>Fim da execução</p>`)
}

mostrarOperadorIfElseIfElse()