var express = require('express');
var mongoose = require('mongoose')
var app = express();
var port = process.env.PORT || 3000;
var MONGODBURI = "mongodb://heroku_pkxb3vz8:9d5sc5jb4aeumftlfdkq3s92tg@ds023654.mlab.com:23654/heroku_pkxb3vz8" || "mongodb://localhost:27017/herokutest"

var Person = mongoose.model('Person', {
	name: String
})

app.get("/", function (req, res){
	Person.create({name: "Lyn"}, function(){
	res.send("Hi")

	})
	
})

mongoose.connect(MONGODBURI)

mongoose.connection.once("open", function(){
	console.log('mongodb');
})

app.listen(port, function() {
    console.log('listening');
})