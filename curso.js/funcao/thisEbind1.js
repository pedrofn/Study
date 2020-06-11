const alguem = {
    saudacao: 'Ola',
    falar() {
        console.log(this.saudacao)
    }
}

alguem.falar()
const pessoa = alguem.falar
//falar() // Conflito entre paradigmas: funcional e OO 

const falarDePessoa = alguem.falar.bind(alguem)
falarDePessoa()

