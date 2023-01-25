//Streams WRITE (Exemplo 1)
const fs = require('fs');

const escrita = fs.createWriteStream('./output.txt');

escrita.write('O meu texto. \n');







