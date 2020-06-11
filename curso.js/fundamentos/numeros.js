const peso1 = 1.1
const peso2 = (2.0)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // indica se o numero e flutuante ou inteiro 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // deixa apenas 2 numeros depois da virgula 
console.log(typeof media) // tipo da constante 
console.log(typeof Number) // funcao 


