const http = require('http');
const port = 8000;

const server = http.createServer(responseHandler);

function responseHandler(req,res){
  res.write("Hola desde el servidor cambio");
  res.end();
}

server.listen(port, callback);

function callback(){
  console.log("Iniciando servidor en puerto: " + port)

}

/*server.listen(port, function(){   //Aqui no tiene nombre la función
   console.log("Iniciando servidor en puerto: " + port)
})*/
