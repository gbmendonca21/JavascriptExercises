const cliente = {
    nome: "Gabriel",
    idade: 23,
    email: "gbmend@gmail.com",
    profissao: "desenvolvedor ",
    fones: ["19971221186", "13981323089"]
}

cliente.dependentes = {
    nome: "Alice",
    parentesco: "filha",
    dataNasc: "25/08/2025"
}

console.log(cliente)

cliente.dependentes.nome = "Alice Rodrigues de Mendonça"

console.log(cliente)