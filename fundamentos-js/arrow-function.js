//DECLARAÇÃO DE FUNÇÃO
//function apresentar(nome){
  //  return `meu nome é ${nome}`
//}

//EXPRESSÃO DE FUNÇÃO

//const soma = function (num1,num2) {return num1 + num2}

//soma(1,1)

//ARROW FUNCTION

//const apresentarArrow = nome => `meu nome é ${nome}`; 
//const soma = (num1, num2) => num1 + num2;

//ARROW FUNCTION COM MAIS DE UMA LINHA DE INSTRUÇÃO

const somaNumerosPequenos = (num1,num2) => {
    if (num1 || num2 > 10){
        return "somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}

//HOISTING = arrow function se comporta da mesma forma que a expressão de função    