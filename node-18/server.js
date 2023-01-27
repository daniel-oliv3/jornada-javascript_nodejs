/* CLIENTE E SERVIDOR 2 */

const http = require('http');

const server = http.createServer((req, res) => {
    //Header
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="app.css"></head>')
    res.write('<h1>Titulo</h1>');
    res.write('<h3>Sub-titulo</h3>');
    res.write('<p>Paragrafo do texto principal do conteudo e lorem ipsum</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor iniciado com sucesso!');
});