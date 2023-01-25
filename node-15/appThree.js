//Streams WRITE (Exemplo 3)
const fs = require('fs');

const readStream = fs.createReadStream('./dados.txt', { encoding: 'utf-8' });
const escrita = fs.createWriteStream('./output.txt');

readStream.on('data', (dados) => {
    //console.log('##################################');
    //console.log(dados);
    escrita.write('\n=====================================\n');
    escrita.write(dados);
});