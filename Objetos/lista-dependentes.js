const cliente = {
    nome: "Gabriel",
    idade: 23,
    email: "gbmend@gmail.com",
    profissao: "desenvolvedor ",
    fones: ["19971221186", "13981323089"],
    dependentes: [{
        nome: "Alice Rodrigues de Mendonça",
        parentesco: "filha",
        dataNasc: "25/08/2025"
    }]
}

cliente.dependentes.push({
    nome: "Lucas Rodrigues de Mendonça",
    parentesco: "filho",
    dataNasc: "18/06/2030"
})

//console.log(cliente)

const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "25/08/2025")

console.log(filhoMaisNovo[0].nome)
console.log(filhoMaisNovo)


