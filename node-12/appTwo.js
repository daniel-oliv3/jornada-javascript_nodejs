/* Exemplo 2 - REMOVE FOLDER */

const fs = require('fs');


//remove folder
fs.rmdir('./pasta1', (err) => {
    if(err){
        console.log(err);
    }
});


console.log('terminado!');

















