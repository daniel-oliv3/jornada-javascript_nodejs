/* NodeJS módulo File System */

const fs = require('fs');

//reading files
if(fs.existsSync('./dados.csv')){
    fs.readFile('./dados.csv', (err, data) => {
        if(err){
            console.log(err);
        }else {
            console.log(data.toString());
        }
    });
}else {
    console.log('Ficheiro não encontrado!');
}

//aparece primeiro (readfile)
console.log('Ultima operação');


/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/










