//Streams (Exemplo 1)
const fs = require('fs');

const readStream = fs.createReadStream('./dados.txt');

readStream.on('data', (dados) => {
    console.log(dados.toString());
});



