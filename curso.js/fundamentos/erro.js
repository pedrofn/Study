function tratarErroELancar(erro) {
    //throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
}


function imprimirNomeGritado(obj) {
try {
    console.log(obj.name.toUpper() + '!!!')
} catch (e) {
     tratarErroELancar(e)
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)