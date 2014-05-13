var express = require('express'),
	http = require('http'),
	app = express(),
	server = http.createServer(app);

app.use(static(__dirname, + "/build"));
server.listen(3000, function(){
	console.log("Sever is running")
});