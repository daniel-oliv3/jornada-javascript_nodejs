/* NodeJS módulo File System */

const fs = require('fs');

//create folder
fs.mkdir('./pasta1', (err) => {
    if(err){
        console.log(err)
    }else {
        console.log('Pasta criada com sucesso.');
    }
});







