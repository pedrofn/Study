let comparacao1 = function(param) {
    console.log(this === param)
}

comparacao1(global)

const obj = {}
comparacao1 = comparacao1.bind(obj)
comparacao1(global)
comparacao1(obj)

let comparacao2 = param => console.log(this === param)
comparacao2(global)
comparacao2(module.exports)



