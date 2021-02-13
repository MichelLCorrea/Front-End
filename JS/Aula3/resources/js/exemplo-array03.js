function exemploArray03() {

    // Pegar a quantidade de carros para cadastrar
    let veiculos = []
    let quantidade = parseInt(window.prompt("Digite a quantidade que deseja cadastrar"))
    for(let index = 0; index < quantidade; index++) {
        let nomeVeiculo = window.prompt(`Informe o nome do veículo ${index +1}/ ${quantidade}`)
        veiculos[index] = nomeVeiculo
    }

    // Mostar os carros cadastrados
    document.write(`<h1>Veiculos cadastrados</h1>`)
    for(let pos = 0; pos < veiculos.length; pos++){
        document.write(`<p>${veiculos[pos]} <br></p>`)
    }

}

exemploArray03()