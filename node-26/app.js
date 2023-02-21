/* */
const express = require('express');

//cria uma aplicação express
const app = express();

//escutar os requests
app.listen(3000);

//routes
app.get('/', (req, res) => {
    //res.sendFile('./views/home.html');
    //res.sendFile('C:/Users/Daniel_Oliveira/Documents/GitHub/jornada-javascript_nodejs/node-26/views/home.html');
    res.sendFile('./views/home.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    //res.sendFile('./views/about.html');
    res.sendFile('./views/about.html', { root: __dirname });
});



/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    21/02/2023
*/
















