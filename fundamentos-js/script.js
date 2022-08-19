//**var** 

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento; 
//console.log(area)
//var area; 

//**let** 

//let forma = 'retângulo';
//let altura = 5;
//let comprimento = 7;
//let area;

//if (forma === 'retângulo'){
//    area = altura * comprimento;
//} else{
//    area = (altura * comprimento) / 2; 
//}

//area = altura * comprimento; 
//console.log(area)

//**const**

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}

console.log(area)

//var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
//let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.