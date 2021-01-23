function banco() {
    let opcao = parseInt(window.prompt("1) Depositar \n2) Verificar saldo \n3) Sacar"))
    let resultado = ''
    switch(opcao) {
        case 1:
            resultado = 'Depositar'
            break

        case 2:
            resultado = 'Verificar saldo'
            break

        case 3:
            resultado = 'Sacar'
            break

        default:
            resultado = 'Opção Ínvalida'
    }

    document.write(`<h1>Você escolheu ${resultado}</h1>`)
}

banco()