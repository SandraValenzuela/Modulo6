
var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    //cargar la url en q separada en 2 partes
    let q=url.parse(request.url,true);
    //cargar los parametros de la url, en un objeto
    let parametros=q.query;
    
    let ruta=q.pathname

    //ejercicios ppt
    let login=q.parthname;// ejercicio 2
    //cargar el host
    let host=q.host;

  response.writeHead(200, {'Content-Type': 'text/plain'});
  //escribir al cliente el primer parametro
  response.write("el valor del parametro id es" + parametros.id);
  response.write("\nel valor del parametro ciudad es" + parametros.ciudad);
  response.write("\nla ruta es : " + ruta);
  response.write("\nel servidor es : " + host);

  //ejercicios PPt
  response.write("\nla login es: " + login);//ejercicio 2

  response.end();
}).listen(8082);

console.log('Servidoe iniciado(8082)');

/*ejemplo de q.query
si tenemos la url: http://......
tenemos dos parametros, id y ciudad
la funcion query (de q.query) crea un objeto con dos propiedades, que corresponden a los parametros

*/