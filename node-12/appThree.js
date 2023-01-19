/* Exemplo 3 - REMOVE FOLDER and Conteudo*/

const fs = require('fs');


//remove folder
if(fs.existsSync('./pasta1')){
    fs.rm('./pasta1', { recursive: true}, (err) => {
        if(err){
            console.log(err);
        }
    });
}else {
    console.log('A pasta já foi apagada!');
}


console.log('terminado!');

















