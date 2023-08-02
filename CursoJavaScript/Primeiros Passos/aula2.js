let precoEtanol = 4.50;
let precoGasolina = 5.50;
const autonomia = 15
let distancia = 70;
const tipoCombustivel = 1;


if(tipoCombustivel === 1){
    console.log('O preço da viagem é: ', ((distancia / autonomia) * precoGasolina).toFixed(2));
} else if (tipoCombustivel === 2){
    console.log('O preço da viagem é: ', ((distancia / autonomia) * precoEtanol).toFixed(2));
}


