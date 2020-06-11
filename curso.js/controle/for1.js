let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++ // ++ operador unario acresentando 1 unidade 
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.lenght; i++) { // lenght e o comprimento do array a forma que voce tem em verificar o tamanho do um array 
    console.log(`nota = ${notas[i]}`)
}