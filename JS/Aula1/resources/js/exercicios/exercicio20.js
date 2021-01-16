function maior() {
    let num1 = parseFloat(window.prompt("Digite o primeiro número"))
    let num2 = parseFloat(window.prompt("Digite o segundo número"))
    let num3 = parseFloat(window.prompt("Digite o terceiro número"))

    if(num1 > num2 && num1 > num3){
        document.write(`<h1>O primerio é o maior</h1>`)
    } else if(num2 > 1 && num2 > 3){
        document.write(`<h1>O segundo é o maior</h1>`);
    } else if(num3 > num1 && num3 > num2) {
        document.write(`<h1>O terceiro é o maior</h1>`);
    }
}

maior()