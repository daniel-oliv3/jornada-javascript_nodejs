//Streams WRITE (Exemplo 2)
const fs = require('fs');

const escrita = fs.createWriteStream('./output.txt');

escrita.write('O meu texto. \n');







