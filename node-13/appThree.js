//NodeJS módulo File System (Exemplo 2)
const fs = require('fs');

//delete file
if(fs.existsSync('./dados2.txt')){
    fs.rm('./dados2.txt', (err) => {
        if(err){
            console.log(err);
        }else {
            console.log('Ficheiro eliminado com sucesso!');
        }
    });
} else {
    console.log('Ficheiro não existe!');
}