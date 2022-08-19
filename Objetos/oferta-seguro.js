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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if (propsClientes.includes("dependentes")){
        console.log(`oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)