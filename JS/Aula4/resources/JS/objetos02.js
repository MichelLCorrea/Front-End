// Objeto de forma literal

const meuObjeto = {}

const meuContato = {
    nome: 'Michel',
    email: 'michelplay@outlook.com.br',
    telefone: 992640506,
    enviarEmail: function(conteudo) {
        console.log('Enviando o email para o contato', this.nome)
        console.log('Endereço eletronico', this.email)
        console.log('Com o conteudo \n ', conteudo)
    },

    ligar: function() {
        console.log('Ligando para o número', this.telefone)
    }
}

console.log(meuContato.nome)
console.log(meuContato.email)
console.log(meuContato.telefone)
meuContato.enviarEmail('Confirmado pagamento no dia 20/02/2021')
meuContato.ligar()