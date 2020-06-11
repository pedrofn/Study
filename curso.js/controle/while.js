function aleatorio(min, max) {
    const valor = Math.random()* (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {  //enquanto o opcao for true fique executando ate q fique false 
    opcao = aleatorio(-1, 10)
    console.log(`Opcao escolhida ${opcao}.`)
} 

console.log('Terminou!')