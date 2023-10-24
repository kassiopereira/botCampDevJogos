function calcularimc(peso,altura){
    return peso / Math.pow(altura,2);
}
function classificarimc(imc){
    if (imc < 18.5) {
        return('Abaixo do Peso! IMC de: '+imc.toFixed(2));
    } else if (imc >= 18.5 && imc<25) {
        return('Peso Normal! IMC de: '+imc.toFixed(2));
    } else if (imc >= 25 && imc<30) {
        return('Acima do Peso! IMC de: '+imc.toFixed(2));
    } else if (imc >= 30 && imc<40) {
        return('Obeso! IMC de: '+imc.toFixed(2));
    } else if (imc >=40) {
        return('Obesidade Grave! IMC de: '+imc.toFixed(2));
    }
}
function main(){

    const peso = 85;
    const altura = 1.74;
    const imc = calcularimc(peso,altura);
    console.log(classificarimc(imc));
    
}

main();