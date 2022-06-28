


var http = require('http');
const { getMaxListeners } = require('process');
var url = require('url');
var nodemailer = required('nodemailer');

var alimentos ="";

//configuracion del correo
var transporeter =nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'sandyvafi@gmail.com', //poner el correo de uds.
        pass : 'axfdtvcpenvpqupy' // cambiar esto a la clave de uds.
    }
})

http.createServer(function (request, response) {
    let q=url.parse(request.url,true); //url separada
    //comprobar que la ruta sea "comida" o "fin"
    if (q.pathname=="/comida"){


        if(Object.keys(q.query),lengt!=1){
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write("Ruta no encontrada(1)");
        }else if(Object.keys(q.query)[0]!="nombre"){
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write("Ruta no encontrada(2)");
        }else{
            alimentos+=q.query.nombre+";"
            console.log("alimentos:" + alimentos);
            response.writeHead(200,{'Content-Type': 'text/plain'});
            response.write("OK!");
        }
    }else if(q.pqthneme=="/fin"){
        //generar contenido del correo
        var correo= {
            to: "sandyvafi@gmail.com",
            from: "curso@node.cl",
            subject: "lista de ingredientes!",
            text: alimentos
        }
        //enviar correo
        transporeter.sendMail(correo,function(err,info){
            if(err){
                console.log(err.message);
            }else{
                console.log("correo enviado");
                console.log(info.response);
                alimentos="";
            }
        })
        response.write("correo enviado");
    }else{
        response.writeHead(404, {'content-Type': 'text/plain'});
    }

    
  response.end();
}).listen(8081);

console.log('Servidor iniciado');