function exemploOperadorSwitchCase() {
    let opcao = parseInt(window.prompt('Digite um número entre 1 e 7'))
    let resultado = ''
    switch(opcao) {
        case 1:
            resultado = 'Domingo'
            break
        
        case 1:
            resultado = 'Domingo'
            break

        case 2:
            resultado = 'Domingo'
            break

        case 3:
            resultado = 'Terça-feira'
            break

        case 4:
            resultado = 'Quarta-feria'
            break
        
        case 5:
            resultado = 'Quinta-feria'
            break

        case 6:
            resultado = 'Sexta-feira'
            break

        case 7:
            resultado = 'Sábado'
            break

        default:
            resultado = 'Opção inválida'
    }

    document.write(`<h1>Você escolheu ${resultado}</h1>`)
}

exemploOperadorSwitchCase()