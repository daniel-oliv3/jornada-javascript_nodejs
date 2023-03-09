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
/* ======= Adicinando varios registros na base de dados ======= */
app.get("/", (req, res) => {

    let values = [
        ['0', 'Magrinosh', '2030-10-20 09:30:00'],
        ['0', 'Tectoxico', '2030-10-20 10:30:00'],
        ['0', 'Sapupaaa', '2030-10-20 11:30:00'],
        ['0', 'Betenho', '2030-10-20 12:30:00'],
        ['0', 'DJbiola', '2030-10-20 01:31:00'],
    ]
    
    connection.query('INSERT INTO usuarios VALUES ?', [values], (error, results) => {

        if(error){
            res.send('Error: ' + error.sqlMessage);
        }else {
            res.send('Okeijo!');
        }
    });

});



/* ======= Adicinando um registro a base de dados ======= */

/*app.get("/", (req, res) => {

    let values = ['0', 'ThugFeezeS', '2030-10-20 09:30:00'];
    
    connection.query('INSERT INTO usuarios VALUES(?, ?, ?)', values, (error, results) => {

        if(error){
            res.send('Error: ' + error.sqlMessage);
        }else {
            res.send('Okeijo!');
        }
    });

});*/






/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    09/03/2023
*/




