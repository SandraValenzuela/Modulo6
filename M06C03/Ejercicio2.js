





var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
    let q= url.parse(request.url,true);
    if(q.parthname=="/datos"){



        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('M06C03/Ejercicio2.js',function(err,data){
            if(err){
                console.log(err.message)
            }else{
                response.write(data.toString());
            }
            response.end();
        })
    }else{
        //ERR --está hecha de manera asincrona
        response.writeHead(404,{'Content-Type': 'text-html'});
        fs.readFile('M06C03/Ejercicio2',function(err,data){
            if(err){
                console.log(err.message)
            }else{
                //console.log(data.toString())
                response.write(data.toString());
            }
            response.end();
        })
    }

}).listen(8081);

console.log('Servidor escuchando peticiones en el puerto 8090');