
const alunos = ['João', 'Juliana', 'Caio', 'Ana'] 

const mediasDosAlunos = [10, 7, 9, 6]

//includes retorna um booleano (verdadeiro ou falso)
//indexOf retorna um número 

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
       let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
                                 //[0][3] - Esse número 3 é o índice da  Ana
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]

    } else{
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota('Juliana'))