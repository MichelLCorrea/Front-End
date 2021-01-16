function executarSaudacao() {
    let nome = window.prompt("Digite seu nome!!!");
    let sobrenome = window.prompt("Digite seu sobrenome!!!");
    saudacao(nome, sobrenome);
}

function saudacao(nome, sobrenome) {
    let texto1 = "Texto com aspas duplas"
    let texto2 = 'Texto com aspas simples'
    let texto3 = `Texto com sinal de crase(Template String)`
    document.write(`<h1>${nome} ${sobrenome}, bem vindo ao universo JS!!!!</h1>`);
}

function escreverMensagem() {
    document.write("<h1> Meu nome Não é João!! </h1>");
    document.write('<p><strong>Olá</strong> usuário </p>');
}

escreverMensagem();