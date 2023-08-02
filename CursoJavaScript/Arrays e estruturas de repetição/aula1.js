const notas = [];
let somaNotas = 0;
let media;
notas.push(8);
notas.push(5);
notas.push(4);
notas.push(6);
notas.push(8);

for(let i = 0; i < notas.length ; i++){
    
    somaNotas += notas[i];
}
media = somaNotas / notas.length;
console.log(media.toFixed(1));