const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']

const notas = [7, 4.5, 8, 7.5]

                                //podemos colocar o sinal de underline _ no lugar do parâmetro aluno, pois ele não está sendo usado no corpo da função
const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5)

console.log(`Reprovado: ${reprovados}`)
