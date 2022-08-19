const notas = [10, 6.5, 8, 7.5]

//não podemos colocar a variável let dentro do for (looping) senão a mesma iria somar +1 a cada repetição
//Ela deve se iniciar apenas no 0 para poder fazer a soma dos índices do array.        
let somaDasNotas = 0 
                // 4
for(i = 0; i < notas.length; i++){
                 // O i refere-se à um número
    somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length

console.log(media)
