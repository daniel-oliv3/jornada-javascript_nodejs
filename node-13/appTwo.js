//NodeJS módulo File System (Exemplo 2)
const fs = require('fs');

//delete file
if(fs.existsSync('./dados2.txt')){
    fs.unlink('./dados2.txt', (err) => {
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