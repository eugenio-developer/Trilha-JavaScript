const {gets , print} = require('./funcoes-auxiliares-ex3');

const valorSalario = gets();
const valorBeneficio = gets();
let valorImposto;
let salarioFinal;
if(valorSalario >= 0 && valorSalario <= 1100){
    valorImposto = valorSalario * 0.05;
}
else if(valorSalario <= 2500){
    valorImposto = valorSalario * 0.1;
}
else{
    valorImposto = valorSalario * 0.15;
}
salarioFinal = (valorSalario - valorImposto) + valorBeneficio;
print(salarioFinal);