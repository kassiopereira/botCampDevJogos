class Carro{
    marca;
    cor;
    autonomia;
    constructor(marca,cor,autonomia){
        this.marca = marca;
        this.cor = cor;
        this.autonomia =autonomia;
    }
    calcularConsumo(km,preco){
        return  ((km/this.autonomia)*preco);
     }
}


    

fusca = new Carro('Fusca','Azul',12);

console.log(fusca.calcularConsumo(70,5));

palio = new Carro('palio','preto',10);

console.log(palio.calcularConsumo(70,5));