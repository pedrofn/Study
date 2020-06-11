var numero = 1 // var tem escopo global e funcao
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
