/* CLIENTE E SERVIDOR */

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor iniciado com sucesso!');
});

