function mesDoAno() {
    let mes = parseInt(window.prompt('Digite um número entre 1 e 12:'))
    let mesEscolhido = ''
    switch(mes) {
        case 1:
            mesEscolhido = 'Janeiro'
            break

        case 2:
            mesEscolhido = 'Fevereiro'
            break

        case 3:
            mesEscolhido = 'Março'
            break

        case 4:
            mesEscolhido = 'Abril'
            break

        case 5:
            mesEscolhido = 'Maio'
            break

        case 6:
            mesEscolhido = 'Junho'
            break

        case 7:
            mesEscolhido = 'Julho'
            break

        case 8:
            mesEscolhido = 'Agosto'
            break

        case 9:
            mesEscolhido = 'Setembro'
            break

        case 10:
            mesEscolhido = 'Outubro'
            break

        case 11:
            mesEscolhido = 'Novembro'
            break

        case 12:
            mesEscolhido = 'Dezembro'
            break

        default :
            mesEscolhido = 'Opção Inválida'
    }

    document.write(`<h1>Você escolheu ${mesEscolhido}</h1>`)
}

mesDoAno()