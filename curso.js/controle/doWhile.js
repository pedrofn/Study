function aleatorio(min, max) {
    const valor = Math.random(min - max) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = aleatorio(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
}while(opcao != -1)


console.log('Terminou!')
