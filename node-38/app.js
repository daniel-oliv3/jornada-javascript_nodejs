
const express = require('express');
const app = express();
app.listen(3000);


//Rotas com parâmetros
app.get("/", (req, res) => {
    res.send('Olá Mundo!');
});












