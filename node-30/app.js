/* EXPRESSJS APRESENTAÇÃO DE COLEÇÕES DE RESULTADOS NO EJS */
const express = require('express');

//cria uma aplicação express
const app = express();

//registrar o template engine (view engine)
app.set('view engine', 'ejs');

//escutar os requests
app.listen(3000);

//routes
app.get('/', (req, res) => {    
    res.render('home', { title: "Página Inicial"});
});

app.get('/services', (req, res) => {
    res.render('services', { title: "Serviços", subtitulo: "Sapup3"});
});

app.get('/about', (req, res) => {
    res.render('about', { title: "Página Sobre-Nós"});
});


/* use, sempre no final do conjunto de rotas */
app.use((req, res) => {
    res.status(404).render('404', { title: "404 - Página Não Encontrada"});  
});















