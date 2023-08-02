const preco = 100;
let formaPagamento ;
let precoFinal;

formaPagamento = '3'

if(formaPagamento === 'Debito'){
    precoFinal = preco - (preco * 0.1);
}
else if(formaPagamento === 'PIX'){
    precoFinal = preco - (preco * 0.15);
}
else if(formaPagamento === '2x'){
    precoFinal = preco;
}
else if(formaPagamento === '3'){
    precoFinal = preco + (preco * 0.10)
}

console.log('Preço final do produto: ', precoFinal.toFixed(2));
