/* Criando um Servidor HTTP */
//Exemplo 3

const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
    response.end('Estudando NodeJS, JavaScript');
}).listen(port, host, () => {
    console.log('Servidor em execução!');
});


/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/
