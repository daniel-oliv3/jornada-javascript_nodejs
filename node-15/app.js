//Streams WRITE (Exemplo 1)
const fs = require('fs');

const readStream = fs.createReadStream('./dados.txt', { encoding: 'utf-8' });
const escrita = fs.createWriteStream('./output.txt');

readStream.on('data', (dados) => {
    console.log('##################################');
    console.log(dados);
    escrita.write('\n=====================================\n');
    escrita.write(dados);
});




/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/