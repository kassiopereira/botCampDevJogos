const preco = 100;
const metodoPagamento = 0;

if(metodoPagamento === 1){
    console.log('O Novo preço é de: R$ ' + (preco - (preco * 0.1)).toFixed(2));
}else if(metodoPagamento === 2){
        console.log('O Novo preço é de: R$ '+(preco-(preco*0.15)).toFixed(2));
}else if(metodoPagamento === 3){
    console.log('O Novo preço é de: R$ '+preco.toFixed(2));
}else{
    console.log('O Novo preço é de: R$ '+(preco+(preco*0.10)).toFixed(2));
}