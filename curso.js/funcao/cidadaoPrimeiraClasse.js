// Funcao em javaScript e first-class object (Citzens)
// Higher-Order function

//criar de forma literal 

function fun1() { }

//Armazenar em uma constante 
const fun2 = function () { }

//Armazenar em uma array 
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0] (2, 3))

//Armazenar em um objeto 
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

//Passar funcao como parametro 
function run(fun) {
    fun()
}

run(function() { console.log('EXECUTANDO..') })

//Uma funcao pode retornar/conter uma funcao 
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3) (4)
// Pode chamar a primeira funcao armazenar o resultado que e uma funcao em uma constante e depois chamar em uma segundo momento
const CincoMais = soma(2, 3)
CincoMais(4)
