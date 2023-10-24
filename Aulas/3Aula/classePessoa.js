class Pessoa{
    nome;
    peso;
    altura;
    imc;
    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = peso / Math.pow(altura,2);
    }

    verificarImc(){
        if (this.imc < 18.5) {
            console.log('Abaixo do Peso! IMC de: '+imc.toFixed(2));
        } else if (this.imc >= 18.5 && this.imc<25) {
            console.log('Peso Normal! IMC de: '+this.imc.toFixed(2));
        } else if (this.imc >= 25 && this.imc<30) {
            console.log('Acima do Peso! IMC de: '+this.imc.toFixed(2));
        } else if (this.imc >= 30 && this.imc<40) {
            console.log('Obeso! IMC de: '+this.imc.toFixed(2));
        } else if (this.imc >=40) {
            console.log('Obesidade Grave! IMC de: '+this.imc.toFixed(2));
        }
    }
}

joao = new Pessoa('Jooao',70,1.75);
joao.verificarImc();