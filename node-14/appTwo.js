//Streams (Exemplo 2)
const fs = require('fs');

const readStream = fs.createReadStream('./dados2.txt', { encoding: 'utf-8' });

readStream.on('data', (dados) => {
    console.log('##################################');
    console.log(dados.toString());
});






/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/