const notas = [2.2, 3.6, 5.8, 7.4, 8.3, 10]

// Exemplo sem array
const notasBaixas1 = []
for (let i in notas ) {
    if (notas[i] < 6 ) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Exemplo com callback 

const notasBaixas2 = notas.filter( function(notas)  {
    return notas < 6 
})

console.log(notasBaixas2)

const notasMenorQ7 = nota => nota < 7 
const notasBaixas3 = notas.filter(notasMenorQ7)
console.log(notasBaixas3)


