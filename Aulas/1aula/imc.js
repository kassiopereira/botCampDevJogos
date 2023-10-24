const peso = 85;
const altura = 1.74;
const imc = peso / Math.pow(altura,2);

if (imc < 18.5) {
    console.log('Abaixo do Peso! IMC de: '+imc.toFixed(2));
} else if (imc >= 18.5 && imc<25) {
    console.log('Peso Normal! IMC de: '+imc.toFixed(2));
} else if (imc >= 25 && imc<30) {
    console.log('Acima do Peso! IMC de: '+imc.toFixed(2));
} else if (imc >= 30 && imc<40) {
    console.log('Obeso! IMC de: '+imc.toFixed(2));
} else if (imc >=40) {
    console.log('Obesidade Grave! IMC de: '+imc.toFixed(2));
}