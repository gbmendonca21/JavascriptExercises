const cliente = {
    nome: "Gabriel",
    idade: 23,
    email: "gbmend@gmail.com",
    profissao: "desenvolvedor "
}

//cliente sem o campo altura
console.log(cliente);

//add o campo altura
cliente.altura = "1,75"

//cliente com o campo altura definido com o valor de "1,75"
console.log(cliente);

//alterando o campo altura para o valor de "2,00", ou seja, quando definimos uma chave que já existe, ela sofrerá alteração para o último valor definido
cliente.altura = "2,00"

//cliente com o campo altura definido com o valor de "2,00"
console.log(cliente)