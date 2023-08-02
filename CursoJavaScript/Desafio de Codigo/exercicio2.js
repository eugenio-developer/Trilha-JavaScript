const {gets, print} = require ('./funcoes-auxiliares-ex2');
let maiorPar = 0;
let menorImpar = 0;
let controle = gets()
for(let i = 0; i < controle; i++){
    numero = gets();
    if(numero % 2 === 0){
        if(numero > maiorPar){
            maiorPar = numero;
        }
    }
    else{
        if(menorImpar === 0){
            menorImpar = numero;
        }
        else if(numero < menorImpar){
            menorImpar = numero;
        }
    }
}
print(menorImpar);
print(maiorPar);
