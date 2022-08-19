function cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const gabriel = new cliente("Gabriel", "12391839812", "gab@email", 100)

console.log(gabriel)    