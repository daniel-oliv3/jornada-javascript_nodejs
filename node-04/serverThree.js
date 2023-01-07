/* Exemplo 3 */

const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
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
- http://localhost:3000/sajijs

*/