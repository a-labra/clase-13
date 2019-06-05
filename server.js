const http = require('http');
const fs = require('fs');
const port = 8000;
const historia = "texto del archivo"

const server = http.createServer(responseHandler);

/*Para buscar un archivo
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
*/
/*Para escribir y leer un archivo*/
/*
function responseHandler(req,res){
  fs.writeFile('historia.txt', historia, function(err){
   if(err){
     throw err;
   }
   });


  fs.readFile('historia.txt', 'utf-8', function(err, contenido){
   if(err){
     throw err;
   }
   res.write(contenido);
   res.end();
  })
}
*/
function responseHandler(req,res){
  fs.readFile('static/index.html', 'utf-8', function(err, contenido){
   if(err){
     throw err;
   }
   res.writeHeader(200,{"Content-Type": "text/html"});
   res.write(contenido);
   res.end();
 })
}
server.listen(port, callback);

function callback(){
  console.log("Iniciando servidor en puerto: " + port)

}

/*server.listen(port, function(){   //Aqui no tiene nombre la función
   console.log("Iniciando servidor en puerto: " + port)
})*/
