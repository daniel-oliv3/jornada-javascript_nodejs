//Streams (Exemplo 2)
const fs = require('fs');

const readStream = fs.createReadStream('./dados2.txt', { encoding: 'utf-8' });

readStream.on('data', (dados) => {
    console.log('##################################');
    console.log(dados.toString());
});