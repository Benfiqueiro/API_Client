const express = require('express');
const app = express()
const data = require("./data.json");
app.use(express.json());
// Verbos HTTP
// GET: Receber dados de um Resource
// POST: Enviar dados ou informações para serem processados por um Resource
// PUT: Atualizar dados de um resource
// DELETE: Deletar um resource

http://localhost:3000/clientes
app.get("/clientes", function(req, res){
    res.json(data);

});
app.post("/clientes",function(req, res){});
app.put("/clientes",function(req, res){});
app.delete("/clientes",function(req, res){});

app.listen(3000, function(){
    console.log("server is running");
});