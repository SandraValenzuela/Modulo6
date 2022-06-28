var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    let q= url.parse(request.url,true);
    let url=q.pathname;
    if(ruta="/login"){
        let parametros=q.query;
        if(parametros.user="user1" & parametros.password=="12345");
            response.writeHead(200,{'Content-type': 'text/plain'});
            response.write("no Autorizado");
    }else{
        response.writeHead(401,{})

    }
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');