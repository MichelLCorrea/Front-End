function mostrarOperadoresLogicos() {

    let valor1 = 10
    let valor2 = 5
    document.write(`<h1>Operador && (E)</h1>`)
    document.write(` <p>${valor1} >= ${valor2}  && ${valor2} < ${valor1} ? ${valor1 >= valor2 && valor2 < valor1}</p> `)
    document.write(` <p>${valor1} >= ${valor2}  && ${valor2} > ${valor1} ? ${valor1 >= valor2 && valor2 > valor1}</p> `)
    document.write(` <p>${valor1} <= ${valor2}  && ${valor2} < ${valor1} ? ${valor1 <= valor2 && valor2 < valor1}</p> `)
    document.write(` <p>${valor1} <= ${valor2}  && ${valor2} > ${valor1} ? ${valor1 <= valor2 && valor2 > valor1}</p> `)

    document.write(`<h1>Operador || (OU)</h1>`)
    document.write(` <p>${valor1} >= ${valor2}  || ${valor2} < ${valor1} ? ${valor1 >= valor2 || valor2 < valor1}</p> `)
    document.write(` <p>${valor1} >= ${valor2}  || ${valor2} > ${valor1} ? ${valor1 >= valor2 || valor2 > valor1}</p> `)
    document.write(` <p>${valor1} <= ${valor2}  || ${valor2} < ${valor1} ? ${valor1 <= valor2 || valor2 < valor1}</p> `)
    document.write(` <p>${valor1} <= ${valor2}  || ${valor2} > ${valor1} ? ${valor1 <= valor2 || valor2 > valor1}</p> `)

    document.write(`<h1>Operador ! (N)</h1>`)
    document.write(` <p>!(${valor1} >= ${valor2}) ? ${!(valor1 >= valor2)}</p> `)
    document.write(` <p>!(${valor1} <= ${valor2}) ? ${!(valor1 <= valor2)}</p> `)
}

mostrarOperadoresLogicos()  