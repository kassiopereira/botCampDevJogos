const notas = [];

notas.push(10);
notas.push(10);
notas.push(8);
notas.push(8);
notas.push(8);


function calcularMedia(notas) {
     let soma = 0;
     for (let i = 0; i < notas.length; i++) {

          soma = soma + notas[i];
     }
     const media = soma / notas.length;
     console.log(media);

}
calcularMedia(notas);
