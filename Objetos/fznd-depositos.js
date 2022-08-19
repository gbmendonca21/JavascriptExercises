const cliente = {
    nome: "Gabriel",
    idade: 23,
    email: "gbmend@gmail.com",
    profissao: "desenvolvedor ",
    fones: ["19971221186", "13981323089"],
    dependentes: [
        {
        nome: "Alice Rodrigues de Mendonça",
        parentesco: "filha",
        dataNasc: "25/08/2025"},
    {
    nome: "Lucas Rodrigues de Mendonça",
    parentesco: "filho",
    dataNasc: "18/06/2030"
    }
    
    ],

    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    },

}

console.log(cliente.saldo)
cliente.depositar(30);
console.log(cliente.saldo)