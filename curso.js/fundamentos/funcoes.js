/* funcao executa uma acao baseado nas sentencas de codigo
*  a funcao de define um bloco 
// funcao sem retorno 
*/
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma()

// Funcao com retorno
function Soma(a, b = 1) {
    return a + b
}

console.log(Soma(2, 3))
