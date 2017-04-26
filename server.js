// server.js
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  var d=new Date().getTime();
  res.end('Hello World!,date:'+d);
});

server.listen(8899, function(){
   var host = server.address().address;
   var port = server.address().port;
  console.log('Hi Docker host:'+host+';port:'+port);
}); 