//NodeJS módulo File System (Exemplo 1)
const fs = require('fs');

//delete file
fs.unlink('./dados1.txt', (err) => {
    if(err){
        console.log(err);
    }else {
        console.log('Ficheiro eliminado com sucesso!');
    }
});


/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/




