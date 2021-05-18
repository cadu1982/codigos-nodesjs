var http = require('http');

http.createServer(function(req, res){
  res.end("Hello Word! Welcome to my website");
}).listen(8081);

console.log("O servidor rodando !");
