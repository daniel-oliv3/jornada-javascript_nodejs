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
    database: 'blog_nodej',
});


//Rotas (routes)
app.get("/", (req, res) => {
    
    connection.query("SELECT * FROM usuarios", (err, resultados) => {
        //res.send(resultados);

        if(err){
            console.log(err.message);
            //res.send('Erro:' + err.message);
            //res.send('Erro:' + err.errno);
            res.send('Erro:' + err.sqlMessage);
        }

        res.send(resultados[0].nome);
        //res.send(resultados[1].nome);
        //res.send(resultados[2].nome);
    });

});