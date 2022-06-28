// contraseña del correo generada: (ldfn ffbt yapz hnns)
// axfdtvcpenvpqupy

//1.- cargamos el nodemailer
var nodemailer=require('nodemailer');


var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'sandyvafi@gmail.com',
        pass : 'ldfnffbtyapzhnns'
    }
});
//2.2.- construir del mensaje de correo
var mailOptions = {
    from : 'cursonode@plataforma5.cl',
    to : 'sandyvafi@gmail.com',
    subject : 'saludos desde node!!!!',
    texto : "Mi primer ejemplo de correo generados por node!!!"
};
// 3.- enviar el correo
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err.message)
    }else{
        console.log(info.response);
    }
})