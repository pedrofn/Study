let numero = 1 // let tem escopo global, funcao e bloco
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
