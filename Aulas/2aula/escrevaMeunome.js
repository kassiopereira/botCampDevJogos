function escreverMeuNome(nome) {
    console.log('Meu nome é: ' + nome);
}
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}
(function () {

    escreverMeuNome('kassio');
    verificarIdade(18)
})();