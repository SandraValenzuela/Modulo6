var http = require('http');
var url = require('url');

function cuadrado(numero){
    return numero*numero;
    //math.pow(numero)

}

//A)
http.createServer(function (request, response) {
  let q=url.parse(request.url,true);
  let ruta=q.pathname;
  let partes=ruta.split("/");
  console.log(ruta);
  console.table(partes);

    if(partes.lenght!=3){
       response.writeHead(404,{'content-Type': 'text/plain'})
      response.write("recurso no encontrado. Probablemente la ruta esté mal");
    }else if(partes[1]!='numero'){
        response.writeHead(404,{'content-Type': 'text/plain'})
      response.write("El recurso no se encontró");

    }else if (!Number(partes[2]))

  //response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end();
}).listen(8081);



console.log('Servidor iniciado');

//A) 127.0.0.1:8081/numero/5
//B) 127.0.0.1:8081/numero?valor=5
//C) 127.0.0.1:8081?numero=5

