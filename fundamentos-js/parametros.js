//Parâmetros de funções


//console.log(soma(245,20))
//console.log(soma(2,2))
//console.log(soma(-500,60))

//ordem dos parâmetros

//function nomeIdade (nome,idade){
 //   return `meu nome é ${nome} e minha idade é ${idade}`;
//}

//console.log(nomeIdade("Gabriel",23))


                //PARÂMETROS
function soma(numero1, numero2){
    return numero1 + numero2
}

function multiplica(numero1 =1, numero2 =1){
    return numero1 * numero2
}
                            //ARGUMENTOS (número que está dentro dos parênteses)
console.log(multiplica(soma(4,5)))