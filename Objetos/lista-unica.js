const clientes = [{
    nome: "Gabriel",
    idade: 23,
    email: "gbmend@gmail.com",
    profissao: "desenvolvedor ",
    fones: ["19971221186", "13981323089"],
    dependentes: [{
        nome: "Alice Rodrigues de Mendonça",
        parentesco: "filha",
        dataNasc: "25/08/2025"},
    {
    nome: "Lucas Rodrigues de Mendonça",
    parentesco: "filho",
    dataNasc: "18/06/2030"
    }],
},
{
    nome: "Juliana",
    cpf: "27271781283",
    dependentes: [{
    nome: "Sophia",
    parentesco: "filha",
    dataNasc: "30/08/2020"
    }],

    }
]
    const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

    console.table(listaDependentes)
    



