/* NodeJS módulo File System */

const fs = require('fs');

//write file, 3*(ordem de visualização)
//fs.writeFile('./dados1.txt', 'Daniel Oliveira', () => {
//    console.log('Ficheiro escrito!');
//});

//write file Sync, 1*(ordem de visualização)
//fs.writeFileSync('./dados2.txt', 'Priscila Andrade');

//adicionando conteudo
//Write file - append
//fs.appendFile('./dados1.txt', 'PUBG\n', (err) => {
//    console.log(err)
//});

fs.appendFileSync('./dados1.txt', 'NodeJS\n');

//aparece primeiro, 2*(ordem de visualização) 
console.log('Ultima operação');



/*Notas
Sync = bloqueando o código
*/





