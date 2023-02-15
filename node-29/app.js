/* EXPRESSJS COMO PASSAR E APRESENTAR VALORES NAS VIEWS DO EJS */
const express = require('express');

//cria uma aplicação express
const app = express();

//registrar o template engine (view engine)
app.set('view engine', 'ejs');

//escutar os requests
app.listen(3000);

//routes
app.get('/', (req, res) => {    
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/about', (req, res) => {
    res.render('about');
});


/* use, sempre no final do conjunto de rotas */
app.use((req, res) => {
    res.status(404).render('404');  
});















