/* CLIENTE E SERVIDOR 2 */

const http = require('http');

const server = http.createServer((req, res) => {
    //Header
    res.setHeader('Content-Type', 'text/html');

    res.write('<h3>teste</h3>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor iniciado com sucesso!');
});
