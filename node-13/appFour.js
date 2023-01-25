//NodeJS módulo File System (Exemplo 4)
const fs = require('fs');

//delete file
//if(fs.existsSync('./dados4.txt')){
//    fs.rm('./dados4.txt', (err) => {
    fs.unlink('*txt', (err) => { 
        if(err){
            console.log(err);
        }else {
            console.log('Ficheiro eliminado com sucesso!');
        }
    });
//} else {
//    console.log('Ficheiro não existe!');
//}