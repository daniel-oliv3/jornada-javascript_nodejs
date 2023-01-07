/* Exemplo 1 */

const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Criando output de dados do request no console');
});

server.listen(port, host, () => {
    console.log('Novo servidor em funcão!');
});
