function exercicio02() {
    let carros = ["Focus", " Fusion ", "Ferrari ", "Porche "]

    for(let index = 0; index < carros.length; index++) {
        document.write(`${carros[index]} = ${index} <br><br> `)
    }

    document.write(`Quantidade de elementos ${carros.length}.`)
}

exercicio02()
