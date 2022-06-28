//carga del modulo http
var http=require('http');

//request:peticion que llega desde el cliente (navegador)
//response: la respuesta que envío desde el server al cliente
http.createServer(function(request,response){
    response.writeHeader(200,{'Content-Type':'Text/html'})
    response.write("Hola"); // envia mensaje al cliente
    response.write("<br><h1>que tal</h1>");
    let ruta=request.url; //capturo la url del request( ruta que el cliente escribe en el navegador)
    response.write("la ruta es:" + ruta);
    response.end();

}).listen(8081);

console.log("servidor iniciado");
console.log("para terminar la ejecucion, presionar crtl+c");


//boton.addEvenListener('click',sunction(e){
    //e=datos del evento
//})