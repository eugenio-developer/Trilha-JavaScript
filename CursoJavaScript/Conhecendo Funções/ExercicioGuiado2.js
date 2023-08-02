function isMaiorIdade(idade){
    if(idade < 18){
        return false;
    }
    else{
        return true;
    }
}

console.log('é maior de idade? ', isMaiorIdade(17));