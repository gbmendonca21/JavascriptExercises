const cliente = {
      nome: "Gabriel",
      idade: 23,
      email: "gbmend@gmail.com",
      profissão: "desenvolvedor "
  }

  console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)
                                    //índice para acessar o array de caracteres de uma string, sendo o primeiro parâmetro onde vai começar e o último parâmetro 
                                    //até onde vai parar, ou seja, começa no índice 0 e vai até o índice 3 (para antes do 3, acessa até o 2).
  console.log(cliente.email.substring(0,3))

  
