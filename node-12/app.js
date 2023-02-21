/* NodeJS módulo File System */

const fs = require('fs');

//create folder
if(!fs.existsSync('./pasta1')){
    fs.mkdir('./pasta1', (err) => {
        if(err){
            console.log(err)
        }else {
            console.log('Pasta criada com sucesso.');
        }
    });
}else {
    console.log('A pasta já existe!');
}

console.log('terminado!');


/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/





