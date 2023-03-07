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
    
    connection.query("SELECT * FROM blog_nodejs.usuarios", (error, resultados) => {

        if(error){
            res.send(error);
        }

        res.send(resultados);
    });

});






/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    06/03/2023
*/




