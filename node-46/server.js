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
    // res.json({
    //     status: 'success',
    //     message: 'success',
    //     results: []
    // });
    res.json(api_response('success', 'success', []));
});


app.get("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * from usuarios WHERE id = ?', [id], (error, results) => {
        if(error){
            res.json(api_response('erro', error.sqlMessage, []));
        }else {
            res.json(api_response('success', 'success', results));
        }
    });
});

function api_response(status, message, data){
    return {
        status: status,
        message: message,
        results: data
    }
}





// app.get("/usuarios/:id", (req, res) => {
//     let id = req.params.id;
//     connection.query('SELECT * from usuarios WHERE id = ?', [id], (error, results) => {
//         if(error){
//             res.json('ERRO: ' + error.sqlMessage);
//         }else {
//             res.json(results);
//         }
//     });
// });









/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    10/03/2023
*/




