function valorDesconto(preco, formaPagamento){
    if(formaPagamento === 'DEBITO'){
        return preco * 0.10;
    }
    else if(formaPagamento === 'PIX'){
        return preco * 0.15;
    }
    else if(formaPagamento === '2X'){
        return 0;
    }
    else if(formaPagamento === '3X'){
        return (preco * 0.10) * -1;
    }
}
function precoFinal(preco, formaPagamento){
    return preco - valorDesconto(preco, formaPagamento);
}

(function main(){
    const preco = 100;
    const formaPagamento = 'DEBITO';

    console.log('Preço final: ', precoFinal(preco, formaPagamento));
})();

