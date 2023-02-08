/* NPM WATCH, PACKAGE JSON E MAIS SOBRE NPM */

const http = require('http');
const fs = require('fs');
const lodash = require('lodash');


const server = http.createServer((req, res) => {
    //prepara o header da resposta
    res.setHeader('Content-Type', 'text/html');

    console.log(lodash.random(0, 100)); /*gera um número aleatório entre 0 e 100*/

    //Sistema de roteamento
    switch(req.url){
        case '/':
            html_file = './views/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            res.write('Sapup3!');
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
    console.log('Servidor iniciado com sucesso, Sapup3!');
    //console.log(lodash.random(0, 100)); /*gera um número aleatório entre 0 e 100*/
});