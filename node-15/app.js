//Streams WRITE (Exemplo 1)
const fs = require('fs');

const readStream = fs.createReadStream('./dados1.txt', { encoding: 'utf-8' });

readStream.on('data', (dados) => {
    console.log('##################################');
    console.log(dados.toString());
});