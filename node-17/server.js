/* CLIENTE E SERVIDOR 1 */

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor iniciado com sucesso!');
});




/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/

