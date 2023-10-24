function aplicarDesconto(preco,desconto){
    return (preco-(preco*(desconto/100)));
}
function aplicarJuros(preco,juros){
    return (preco+(preco*(juros/100)));

}

function calcularValor(preco, metodoPagamento){
    if(metodoPagamento === 1){
        console.log('O Novo preço é de: R$ ' + (aplicarDesconto(preco,10)).toFixed(2));
    }else if(metodoPagamento === 2){
            console.log('O Novo preço é de: R$ '+(aplicarDesconto(preco,15)).toFixed(2));
    }else if(metodoPagamento === 3){
        console.log('O Novo preço é de: R$ '+preco.toFixed(2));
    }else{
        console.log('O Novo preço é de: R$ '+(aplicarJuros(preco,10)).toFixed(2));
    }

}

(function () {
calcularValor(100,4)
    
})();