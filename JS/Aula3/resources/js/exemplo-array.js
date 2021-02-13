function exemploArray01() {

    /* DEFINIÇÃO E INICIALIZAÇÃO DE ARRAYS */
    let frutas = ["Bananas", "Abacaxi", "Melão"] // Cria e inicializa um array com elementos 
    let nomes = [] // Cria e inicializa um array sem elementos
    let idades = new Array() // Cria e inicializa um array sem elementos

    /* VERIFICAÇÃO DA QUANTIDADE DE ELEMENTOS */
    alert(`A quantidade de frutas é ${frutas.length}`)
    alert(`A quantidade de nomes é ${nomes.length}`)
    alert(`A quantidade de idades é ${idades.length}`)

    /* LEITURA DE VALORES DO ARRAY ATRAVÉS DA INDEXAÇÃO */
    alert(frutas[0])
    alert(frutas[1])
    alert(frutas[2])

    for(let indice = 0; indice < frutas.length; indice++) {
        alert(frutas[indice])
    }
}

exemploArray01()