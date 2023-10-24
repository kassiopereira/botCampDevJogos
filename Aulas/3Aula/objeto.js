const pessoa = {
    nome: 0 ,
    idade: 0,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.nome = 'Joao';
pessoa.idade = 10;
pessoa.descrever();