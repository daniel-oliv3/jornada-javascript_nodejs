/* Exemplo 2 - REMOVE FOLDER */

const fs = require('fs');


//remove folder
if(fs.existsSync('./pasta1')){
    fs.rmdir('./pasta1', (err) => {
        if(err){
            console.log(err);
        }
    });
}else {
    console.log('A pasta já foi apagada!');
}


console.log('terminado!');

















