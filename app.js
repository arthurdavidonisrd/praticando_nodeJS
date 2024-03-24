const express = require("express");

const app = express();



app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
});


app.get("/sobre", function(req, res){
    res.send("Pagina 'sobre' da minha aplicação");
})

app.get("/blog", function(req, res){
    res.send("Blog principal");
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("ola senhores")
})






app.listen(8084, function(){
    console.log("server esta rodando na porta 8084");
});
