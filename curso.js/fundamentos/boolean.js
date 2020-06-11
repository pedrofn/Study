let isAtivo = false  
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!! isAtivo) // caso retire uma negacao(!) ele ira inverter o sentido ou seja ira ser false 

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!' test')
console.log(!![] )
console.log(!! {} )
console.log(!! Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('final')
console.log(!!('', null, 0, ' ')) // vai retornar o unico valor true que ele encontrar ou o primeiro valor true 

let nome = ''
console.log (nome || 'Desconhecido')

 