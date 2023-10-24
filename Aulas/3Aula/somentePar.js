const numeros = [];
numeros.push(1);
numeros.push(2);
numeros.push(4);
numeros.push(5);

function imprimirPar(num){
    for (let i = 0; i < num.length; i++) {
        
        if((num[i]%2) === 0){
        console.log(`${num[i]} é par`);
        }
    }
}

imprimirPar(numeros);