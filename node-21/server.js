/* REDIRECTS */

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    //prepara o header da resposta
    res.setHeader('Content-Type', 'text/html');

    //Sistema de roteamento
    switch(req.url){
        case '/':
            html_file = './views/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            html_file = './views/about.html';
            res.statusCode = 200;
            break;
        case '/acerca_de':
                res.setHeader('Location', '/about');
                res.statusCode = 301;
                res.end();
                break;      
        default:
            html_file = './views/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(html_file, (err, data) => {
        if(err){
            console.log('erro');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
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