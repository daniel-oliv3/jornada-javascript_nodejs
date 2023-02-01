/* RESPONSE STATUS CODE */

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    //prepara o header da resposta
    res.setHeader('Content-Type', 'text/html');

    //Sistema de roteamento
    switch(req.url){
        case '/':
            html_file = './views/index.html';
            break;
        case '/about':
            html_file = './views/about.html';
            break;     
        default:
            html_file = './views/404.html';
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