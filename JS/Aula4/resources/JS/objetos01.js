/*
    O que é um Objeto?
    Caracteristicas/propriedades (substantivo)
    
    Controle Remoto
    - cor
    - meterial
    - dimensões
    - temperatura
    
    ações/servem para realizar alguma atividade (verbo)

    Ações do controle
    - Ligar/Desligar
    - aumentar temperatura

    Passo 1 - Mapear as propriedades e as ações
    Passo 2 - Verificar quais propriedades e ações fazem sentido para aplicação
    Passo 3 - Transcrever as ações e propriedades para a minha difinição de classe/objeto computacional

*/

class Contato {
    constructor(nome, email, telefone) {
        // Caracteristicas/Propriedades de qualquer contato
        this.nome = nome
        this.email = email
        this.telefone = telefone
        // [this.propriedade = valor da propriedade]
    }

    enviarEmail(conteudo) { // O que o objeto vai fazer(AÇÕES) quando o comando enviarEmail for chamado
        console.log('Enviando o email para o contato ', this.nome)
        console.log('Endereço eletronico ', this.email)
        console.log('Com o conteudo \n ', conteudo)
    }

    ligar() { // O que o objeto deve fazer quando o comando ligar for chamado
        console.log('Ligando para o número ', this.telefone)
    }
}

// Contuir objetos
const contato1 = new Contato('João', 'joao@gmail.com', '9931974934')
const contato2 = new Contato('Maria', 'maria@gmail.com', '9912768124')

console.log(contato1)
console.log(contato2)

contato1.enviarEmail('Reunião agendada para segunda-feira as 15h')
contato2.enviarEmail('Reunião agendada para terça-feira as 09h')


