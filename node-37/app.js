
const express = require('express');
const app = express();
app.listen(3000);


//Rotas
app.all('/teste', function (req, res, next) {
    console.log('Acessando a seção secreta ...');
    next(); // passar o controle para o próximo manipulador
});


app.get('/home', (req, res) => {
    res.write('home');
    res.send();
});

/*
app.get('/teste', (req, res) => {
    res.write('Sapup3 Na Area!');
    res.send();
});
*/

app.get('/ax?cd', (req, res) => {
    res.send('lol');
});

/*
app.get('/ab+cd', (req, res) => {
    res.send('lol');
});
*/

//url, começa com a, pode ter qualquer coisa no meio *, termina com x
app.get('/a*x', (req, res) => {
    res.send('lol');
});


