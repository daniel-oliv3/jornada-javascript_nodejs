/* */
const express = require('express');

//cria uma aplicação express
const app = express();

//registrar o template engine (view engine)
app.set('view engine', 'ejs');

//escutar os requests
app.listen(3000);

//routes
app.get('/', (req, res) => {    
    res.status(200).sendFile('./views/home.html', { root: __dirname });
});

app.get('/services', (req, res) => {
    res.status(200).sendFile('./views/services.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.status(200).sendFile('./views/about.html', { root: __dirname });
});

app.get('/acerda-de', (req, res) => {
    res.redirect('/about');
});

//ejs
app.get('/teste-ejs', (req, res) => {
    //res.redirect('/about');
    res.render('inicio');
});


/* use, sempre no final do conjunto de rotas */
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });   
});















