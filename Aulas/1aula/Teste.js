const {gets,print,gerarNumeros} = require('./funcoesauxiliares');

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
  //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
    constructor(tipo,danoItem,resistenciaItem) {
      this.tipo = tipo;
      this.danoItem = danoItem;
      this.resistenciaItem = resistenciaItem;
    
    }
  
    calcularDano() {
      return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
  }
  
  // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
  const tipoItem = 'Espada';
  const danoItem = 200;
  const resistenciaItem = 300;
  
  //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
  itemPersonalizado = new ItemMagico(tipoItem,danoItem,resistenciaItem)
  // TODO: Imprima os atributos do item personalizado
  print("Tipo: " + itemPersonalizado.tipoItem);
  print("Dano: " + itemPersonalizado.danoItem);
  print("Resistencia: " + itemPersonalizado.resistenciaItem);
  
  // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
  const danoTotal = itemPersonalizado.calcularDano();
  print("Dano em combate: " + danoTotal);