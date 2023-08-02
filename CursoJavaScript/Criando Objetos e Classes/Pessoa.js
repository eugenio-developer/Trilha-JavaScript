class Pessoa{
    nome;
    altura;
    peso;

    constructor(nome, altura, peso,){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC(){
        return this.peso / Math.pow(this.altura, 2);
    }

    descrever(){
        return 'Oi meu nome é ' + this.nome + ', de peso ' + this.peso + ' e altura ' + this.altura + ', meu imc é ' + this.calcularIMC();
    }
    classificarImc(){
        if(this.calcularIMC() < 18){
            return 'Abaixo do peso'
        }
        else if(this.calcularIMC() >= 18.5 && this.calcularIMC() < 25){
            return 'Peso normal'
        }
        else if(this.calcularIMC()>= 25 && this.calcularIMC() < 30){
            return 'Acima do Peso'
        }
        else if(this.calcularIMC() >= 30 && this.calcularIMC() < 40){
            return 'Obeso'
        }
        else{
            return 'Obesidade Grave'
        }
    }
}

const eugenio = new Pessoa('Eugênio', 1.75, 70);

console.log(eugenio.classificarImc());