const cliente = {
    nome: "Gabriel",
    idade: 23,
    email: "gbmend@gmail.com",
    profissão: "desenvolvedor "
}

//Acessando cada chave criando uma array de chaves 
const chaves = ["nome", "idade", "email", "profissão"]

console.log(cliente[chaves[0]])


//Acessando todas as chaves pelo método forEach, ou seja, o método percorre todo o array pelo looping.
chaves.forEach(info => console.log(cliente[info]))

//Outro método de acessar uma chave é console.log(cliente["nome"]) 
//Porém esse método é quando você já sabe qual chave quer acessar


                    //Quando tentamos acessar uma chave que não existe no objeto, é mostrado undefined
console.log(cliente["conta"]) 