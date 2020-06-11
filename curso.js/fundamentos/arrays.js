const cleitons = [13.5, 14.93, 77.0]
console.log(cleitons[0], cleitons[2])

cleitons[3] = 42 
console.log(cleitons)
console.log(cleitons.length)

cleitons.push({id: 5}, false, 'teste', 29)
console.log(cleitons)

console.log(cleitons.pop()) // retira o ultimo valor do array e retorna 
delete cleitons [0] // tirar um atributo de dentro de um objeto 
console.log(cleitons)

console.log(typeof cleitons)
