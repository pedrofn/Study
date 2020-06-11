function soma () {
    let soma = 0
    for (i in arguments) { // arguments e um array interno de uma funcao 
        soma += arguments[i]
    }
    return soma 
}

console.log(soma())
console.log(soma(1.1, 2.2, 3.3))
console.log(soma('a', 'b', 'c'))

