/* Criando um Servidor HTTP */
//Exemplo 1

const server = require('http');


server.createServer((req, res) => {
    res.end('Olá, Mundo! Sapup3 na Área!')
}).listen(3000);














