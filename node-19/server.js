/* RESPONDER COM UMA PÁGINA HTML COMPLETA */

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    //prepara o header da resposta
    res.setHeader('Content-Type', 'text/html');

    //Sistema de roteamento
 
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor iniciado com sucesso!');
});