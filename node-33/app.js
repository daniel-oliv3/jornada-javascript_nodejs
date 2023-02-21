/* EXPRESSJS INTRODUÇÃO AO CONCEITO DE MIDDLEWARE*/
const express = require('express');

//cria uma aplicação express
const app = express();

//registrar o template engine (view engine)
app.set('view engine', 'ejs');

//escutar os requests
app.listen(3000);


//----------------------------------------------------------------------------
//Middleware
app.use((req, res, next) => {
    console.log('Novo pedido: ');
    console.log('Host: ', req.hostname);
    console.log('Path: ', req.path);
    console.log('Method: ', req.method);
    next();
});


/*app.use((req, res, next) => {
    
    console.log('Segundo Middleware');
    next();
});*/


//----------------------------------------------------------------------------
//routes
app.get('/', (req, res) => {    
    res.render('home', { title: "Página Inicial"});
});


app.use((req, res, next) => {
    
    console.log('Segundo Middleware');
    next();
});


app.get('/services', (req, res) => {

    //const servicos = [];
    const servicos = [
        { titulo_servico: "Desenvolvimento Web", descricao: "Desenvolvemos páginas a app web"},
        { titulo_servico: "Desenvolvimento Desktop", descricao: "Desenvolvemos aplicações desktop"},
        { titulo_servico: "Desenvolvimento Mobile", descricao: "Desenvolvemos aplicações mobile para Android e IOS"},
    ];

    res.render('services', { title: "Serviços", servicos });
});

app.get('/about', (req, res) => {
    res.render('about', { title: "Página Sobre-Nós"});
});


/* use, sempre no final do conjunto de rotas */
app.use((req, res) => {
    res.status(404).render('404', { title: "404 - Página Não Encontrada"});  
});












/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/


