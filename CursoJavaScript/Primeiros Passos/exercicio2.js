const peso = 54;
const altura = 1.75;

let imc = peso / (altura * altura);

if(imc < 18.5){
    console.log('Abaixo do peso')
}
else if(imc >= 18.5 && imc <= 25){
    console.log('Peso normal')
}
else if(imc < 30){
    console.log('Acima do peso')
}
else if(imc < 40){
    console.log('Obesidade')
}
else{
    console.log('Obesidade grave')
}