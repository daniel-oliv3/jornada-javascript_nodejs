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
    
    connection.query("SELECT * FROM usuarios WHERE id = ? AND nome = ?", [1, 'Daniel'], (error, results) => {

        if(error){
            res.send(error.sqlMessage);
        }

        if(results.length != 0){

            /*let html = '<ul>';
            results.forEach(row => {
                html += '<li>' + row.nome + '</li>';
            });
            html += '</ul>';*/

            //res.send(html);
            res.send(results);
        }else {
            res.send("Não existe resultados!");
        }
        //res.send(results);
        //res.send(results[0].nome);
        //res.send(results[0].nome + " " + results[0].created_at);
    });

});






/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    06/03/2023
*/




