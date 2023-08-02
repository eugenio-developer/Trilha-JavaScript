const nota1 = 5;
const nota2 = 5;
const nota3 = 5;

let media = ((nota1 + nota2 + nota3)/ 3).toFixed(1);

if(media < 5){
    console.log('Media: ', media, ' - Reprovado')
}
else if(media <= 7){
    console.log('Media: ', media, ' - Recuperação')
}
else{
    console.log('Media: ', media, ' - Aprovado')
}