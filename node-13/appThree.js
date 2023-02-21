//NodeJS módulo File System (Exemplo 3)
const fs = require('fs');

//delete file
if(fs.existsSync('./dados3.txt')){
    fs.rm('./dados3.txt', (err) => {
        if(err){
            console.log(err);
        }else {
            console.log('Ficheiro eliminado com sucesso!');
        }
    });
} else {
    console.log('Ficheiro não existe!');
}




/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/