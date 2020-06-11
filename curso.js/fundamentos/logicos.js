function compras(trab1, trab2) {
    const tomarsorvete = trab1 //││ trab2
    const compratv50 = trab1 && trab2 
    const comprartv32 = trab1 != trab2
    const saudavel = !tomarsorvete   
    return { tomarsorvete, compratv50, comprartv32, saudavel }
}

cossole.log(compras(true, false)) 