//NodeJS módulo File System
const fs = require('fs');




//delete file
fs.unlink('./dados1.txt', (err) => {
    if(err){
        console.log(err);
    }else {
        console.log('Ficheiro eliminado com sucesso!');
    }
});





