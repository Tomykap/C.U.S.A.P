var db = {
	clave : "pitbull"	
};

console.log("Starting server...");

var express = require("express");
var web = express();
var parser = require("body-parser");
web.use( parser.urlencoded() ); 
var servidor;

servidor = web.listen(8080, function (){
	console.log("Server started :D");
});

web.get("/", function (req, res){
	res.sendfile("index.html");
});

web.post("/pit", function (req, res){
	if(req.body.clave == db.clave)
	{
		res.sendfile("entrar.html");
	}	
	else
	{
		res.sendfile("no.html");
	}
});