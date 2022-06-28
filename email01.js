var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
  let q = url.parse (request.url,true);
  let url=q.pathname;
  let comida = nombre;
  if(ruta="/comida"){
    let parametros=q.query;
    if(parametros.user="comida");
        response.writeHead(200,{'Content-type': 'text/plain'});
        response.write("Fin");
}else{
    response.writeHead(401,{})

}

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Servidor conectado puerto 8093');