/* RESPONDER COM UMA PÁGINA HTML COMPLETA */

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    //prepara o header da resposta
    res.setHeader('Content-Type', 'text/html');

    //prepara o conteudo html da pagina
    fs.readFile('./html_pages/index.html', (err, data) => {
        if(err){
            console.log('Aconteceu um erro!');
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