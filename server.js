const http = require('http');
const fs = require('fs');
const port = 8000;

const server = http.createServer(responseHandler);

function responseHandler(req,res){
  fs.access('static/index.html', fs.constants.F_OK, function(err){
    if(err){
      res.write("El archivo no existe");
    } else {
      res.write("El archivo si existe");
    }
    res.end();
  })
  //res.write("Hola desde el servidor!");

}

server.listen(port, callback);

function callback(){
  console.log("Iniciando servidor en puerto: " + port)

}

/*server.listen(port, function(){   //Aqui no tiene nombre la función
   console.log("Iniciando servidor en puerto: " + port)
})*/
