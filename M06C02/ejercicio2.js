var http = require('http');
var url = require('url');
http.createServer(function (request, response) {

    let q=url.parse(request.url,true);
    let recurso = q.pathname;
    if(recurso=="/login"){
    //OK
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("todo ok!!");
}else{
    //not found
    response.writeHead(404,{'content-type': 'text/plain'});
    response.write("Todo mal, recurso no encontrado");
}
//response.write(recurso);
  response.end();
}).listen(8083);

console.log();