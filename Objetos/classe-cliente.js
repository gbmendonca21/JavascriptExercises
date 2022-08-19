class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}   

const gabriel = new Cliente("Gabriel", "gab@email", "2313121312", 100)

console.log(gabriel)

gabriel.exibirSaldo()

