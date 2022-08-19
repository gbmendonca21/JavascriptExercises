const peterParker = {
    nome: "Cabeça de teia",
    idade: 18,
    profissao: "Super Herói",
    apelido: "Teioso"
}

peterParker.viloes = ["Duende Verde", "Octopus", "Abutre"]

//console.log(peterParker)

delete peterParker.profissao

//console.log(peterParker)

delete peterParker.idade

//console.log(peterParker)


//ACESSANDO AS CHAVES DENTRO DO OBJETO
const dados = ["nome", "apelido", "viloes"]

dados.forEach(chaves => console.log([peterParker[chaves]]))

//ACESSANDO UMA CHAVE ESPECÍFICA DENTRO DO OBJETO

console.log(peterParker[dados[0]])
    


