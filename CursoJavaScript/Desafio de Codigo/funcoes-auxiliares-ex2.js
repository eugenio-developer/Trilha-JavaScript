const numeros = [5,3,4,1,10,8];
let contador=-1;
function gets(){
    contador++;
    return numeros[contador];
}
function print(texto){
    console.log(texto)
}

module.exports = {gets, print};