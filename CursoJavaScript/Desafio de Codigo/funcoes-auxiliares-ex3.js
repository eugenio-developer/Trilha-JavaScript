const numeros = [2000, 250];
let contador=-1;
function gets(){
    contador++;
    return numeros[contador];
}
function print(texto){
    console.log(texto)
}

module.exports = {gets, print};