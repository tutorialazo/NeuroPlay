const consul = new (require('consul'))();
const express = require('express');


const SERVICE_NAME='microservicio101';
const SERVICE_ID='m'+process.argv[2];
const SCHEME='http';
const HOST='192.168.45.70';
const PORT = parseInt(process.argv[2], 10);

if (isNaN(PORT) || PORT <= 0 || PORT > 65535) {
    throw new Error(`Invalid or missing port number: ${process.argv[2]}`);
}



/* Inicializamos server */
const app = express();


app.get('/health', function (req, res) {
    res.end( "Ok." );
    });


    app.get('/', function (req, res) {
        var s = "<h1>Instancia '" + SERVICE_ID + "' del servicio '" + SERVICE_NAME + "'</h1>";
        s += "<h2>Listado de servicios</h2>";
    
        consul.agent.service.list()
            .then(function (result) {
                res.end(s + JSON.stringify(result));
            })
            .catch(function (err) {
                console.error('Error al obtener la lista de servicios de Consul:', err);
                res.status(500).send('Error interno del servidor');
            });
    });
    
 
app.listen(PORT, function () {
    console.log('Sistema armado en el puerto '+SCHEME+'://'+HOST+':'+PORT+'!');
    });


/* Registro del servicio */
var check = {
  id: SERVICE_ID,
  name: SERVICE_NAME,
  address: HOST,
  port: PORT, 
  check: {
       http: SCHEME+'://'+HOST+':'+PORT+'/health',
       ttl: '5s',
       interval: '5s',
     timeout: '5s',
     deregistercriticalserviceafter: '1m'
       }
  };
 
consul.agent.service.register(check, function(err) {
    if (err) throw err;
});
