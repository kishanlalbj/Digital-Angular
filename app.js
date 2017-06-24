var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app= express();
var port = 4200; 

app.use(express.static(path.join(__dirname,'src')));

app.listen(port,function(res,err) {
	if(err) {
		console.log(err)
	}
	else{
		console.log("Server running on "+ port);
	}
})