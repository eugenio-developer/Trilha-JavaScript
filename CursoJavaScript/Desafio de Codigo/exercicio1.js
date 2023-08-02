const {gets, print} = require('./funcoes-auxiliares-ex1');

if(gets() < 5){
    console.log('Reprovado');
}
else if(gets() < 7){
    console.log('Recuperação')
}
else{
    console.log('Aprovado')
}