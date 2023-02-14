/* */
const express = require('express');

//cria uma aplicação express
const app = express();

//escutar os requests
app.listen(3000);

//routes
app.get('/', (req, res) => {
    res.send('<h1>Teste</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

















