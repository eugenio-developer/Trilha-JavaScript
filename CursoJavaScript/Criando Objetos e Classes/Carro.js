class Carro{
    marca;
    autonomia;
    cor;

    constructor (marca, autonomia, cor){
        this.marca = marca;
        this.autonomia = autonomia;
        this.cor = cor;
    }

    descrever(){
        return 'Marca: ' + this.marca + ', Autonomia: ' + this.autonomia + ', Cor: ' + this.cor;
    }
    calcularGasto(precoCombustivel, distancia){
        return (distacia / this.autonomia) * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 17, 'Prata');

console.log(uno.descrever());

