//Express
const express = require('express');
const app = new express();
app.listen(3000, () => {
    console.log("Servidor em execução!");
});


//MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    user: 'user_blog',
    password: 'LOKonI8AXobA',
    database: 'blog_nodejs'
});


//Rotas (routes)
app.get("/", (req, res) => {
    res.send('Ok');
});


app.get("/usuarios/:id", (req, res) => {
    //res.send(req.params);
    let id = req.params.id;
    //res.send(id);
    connection.query('SELECT * from usuarios WHERE id = ?', [id], (error, results) => {
        if(error){
            res.send('ERRO: ' + error.sqlMessage);
        }else {
            res.send(results);
        }
    });
});









/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    10/03/2023
*/




