
const {gets,print,gerarNumeros} = require('./funcoesauxiliares');

const numeroSorteados = gerarNumeros(gets());

let maiorNumero = 0
for (let i = 0; i < numeroSorteados.length; i++) {
    
    print((i+1)+" numero Sorteado: "+numeroSorteados[i])
      if(numeroSorteados[i]> maiorNumero){
        maiorNumero = numeroSorteados[i];
    }   
}

print('O maior Numero é: '+maiorNumero);
