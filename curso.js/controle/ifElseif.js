Number.prototype.entre = function (inicios, fim) {
    return this >= inicios && this <= fim 

}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.9)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.9)) {
        console.log('Recuperacao')
    } else if (nota.entre(0, 3.9)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Invalida')
    }
    
    
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(0)