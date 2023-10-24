function gerarNumeros(alunos) {
    const numeros = [];
    for (let i = 0; i < alunos; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);

    }

    return numeros

}

function gets() {
    return  (Math.floor(Math.random() * 20) + 1);;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print,gerarNumeros };
