function exercicio01() {
    let familia = ["Arli", " Maciel", " Pablo", " Paolo", " Paola"]

    for(let index = 0; index < familia.length; index++) {
        document.write(`${familia[index]} = ${index} <br><br> `)
    }

    document.write(`Quantidade de elementos ${familia.length}`)

}

exercicio01()