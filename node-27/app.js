/* */
const express = require('express');

//cria uma aplicação express
const app = express();

//escutar os requests
app.listen(3000);

//routes
app.get('/', (req, res) => {    
    res.sendFile('./views/home.html', { root: __dirname });
});

app.get('/services', (req, res) => {
    res.sendFile('./views/services.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

















