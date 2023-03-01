const express = require('express');
var cors = require('cors');

class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';
        //middlewares: Funciones que siempre van a ejecutarse cuando iniciemos nuestro servidor
        this.middlewares();
        //rutas de mi aplicacion

        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use( cors() );

        //lectura y parseo del body
        this.app.use( express.json() );
        
        //direcorio público
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
        
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log('Servidor corriendo en', this.port);
            
        })
    }
}

module.exports = Server;
