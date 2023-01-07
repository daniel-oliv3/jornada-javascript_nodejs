/* Exemplo 4 */

const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

});

server.listen(port, host, () => {
    console.log('Novo servidor em funcão!');
});
