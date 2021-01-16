function escreverDados(rua, numero, complemento, bairro, cep, cidade) {
    document.write(`<p>Moro na rua ${rua}(${complemento}) na casa nº${numero} no bairro ${bairro} na cidade de ${cidade}, cujo o CEP é ${cep}</p>`)
}

function exercicio08() {
    let rua = window.prompt("Digite a rua que você mora")
    let numero = window.prompt("Digite o número da sua casa")
    let complemento = window.prompt("Digite algum complemento")
    let bairro = window.prompt("Digite o bairro que você mora")
    let cep = window.prompt("Digite o CEP da sua cidade")
    let cidade = window.prompt("Digite a sua cidade")
    escreverDados(rua, numero, complemento, bairro, cep, cidade);
}

exercicio08()