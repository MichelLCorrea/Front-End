function mostrarOperadorPreIncremento() {

    document.write(`<h1>Pré Incremento</h1>`)
    let numero = 10
    document.write(`<p>numero = ${numero}</p>`)
    document.write(`<p>resultado = ++numero</p>`)

    let resultado = ++numero
    document.write(`<p>resultado = ${resultado}</p>`)
    document.write(`<p>numero = ${numero}</p>`)
}

function mostrarOperadorPosIncremento() {

    document.write(`<h1>Pós Incremento</h1>`)
    let numero = 10
    document.write(`<p>numero = ${numero}</p>`)
    document.write(`<p>resultado = numero++</p>`)
    
    let resultado = numero++
    document.write(`<p>resultado = ${resultado}</p>`)
    document.write(`<p>numero = ${numero}</p>`)
}

function mostrarOperadorPreDecremento() {
    
    document.write(`<h1>Pré Decremento</h1>`)
    let numero = 10
    document.write(`<p>numero = ${numero}</p>`)
    document.write(`<p>resultado = --numero</p>`)
    
    let resultado = --numero
    document.write(`<p>resultado = ${resultado}</p>`)
    document.write(`<p>numero = ${numero}</p>`)
}

function mostrarOperadorPosdecremento() {
    
    document.write(`<h1>Pós Decremento</h1>`)
    let numero = 10
    document.write(`<p>numero = ${numero}</p>`)
    document.write(`<p>resultado = numero--</p>`)
    
    let resultado = numero--
    document.write(`<p>resultado = ${resultado}</p>`)
    document.write(`<p>numero = ${numero}</p>`)
}


mostrarOperadorPreIncremento()
mostrarOperadorPosIncremento()
mostrarOperadorPreDecremento()
mostrarOperadorPosdecremento()



