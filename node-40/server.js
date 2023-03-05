//Express
const express = require('express');
const app = new express();
app.listen(3000, () => {
    console.log("API Running!");
});


//MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog_nodejs',
});


//Rotas (routes)
app.get("/", (req, res) => {
    
    connection.query("SELECT * FROM usuarios", (erro, resultados) => {
        res.send(resultados);
    });
    
    //res.send('Olá Node + MySQL!');
});