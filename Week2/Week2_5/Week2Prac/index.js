const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("Hello World!");
})

app.post('/', function(req,res){
    res.send("Hello I got a POST request")
})

app.delete('/', function(req,res){
    res.send("THIS IS A DELETE REQUEST");
})

app.put('/', function(req,res){
    res.send("This is a put request");
})

app.listen(3000);