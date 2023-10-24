class Pessoa {
    nome;
    idade;
    anodenascimento;
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anodenascimento = 2023-idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} com da data de nascimento de ${this.anodenascimento}`);
    }
}

function compararIdade(p1,p2){
    if(p1.idade>p2.idade){
        console.log(`${p1.nome} É o mais velho`);
    }else if(p1.idade<p2.idade){
        console.log(`${p2.nome} É o mais velho`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const joao = new Pessoa('Joao',25);
const jose = new Pessoa('Jose',20);
compararIdade(joao,jose);