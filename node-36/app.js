
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

app.get('/ab?cd', (req, res) => {
    res.send('lol');
});







