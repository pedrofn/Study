const imprimirNota = function (nota) {
    switch(Math.floor(nota)) {
        case 9:
        case 10:
            console.log('Quadro de honra')
            break // para executar somente 1 case e sair 
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao!')
            break 
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
            break
        default: // Se caso nao se encaixar em nenhum dos cases
            console.log('Nota invalida!')
    }
}

imprimirNota(10)
imprimirNota(8.75)
imprimirNota(5)
imprimirNota(0.5)

//switch e uma selecao multipla, nao e uma expressao relacional que retorna true ou false, por padrao usa o break.