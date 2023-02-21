/* Exemplo 4 -(CHARSET UTF8) no projeto */

const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

    //charset UTF8
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if(req.url == "/"){
        res.end("Página inicial do nosso website!");
    }else if(req.url == "/novo"){
        res.end("Página nova do nosso website!");
    }else if(req.url == "/contatos"){
        res.end("Página de contatos da nosso website!");
    }else {
        res.end("Página desconhecida!");
    }
});

server.listen(port, host, () => {
    console.log("Novo servidor em funcão!");
});



/*
- http://localhost:3000/novo
- http://localhost:3000/contatos

*/


/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/