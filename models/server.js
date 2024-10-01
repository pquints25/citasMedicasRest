const express = require('express');

class Server{

    constructor (){
        this._app = express();
        this._port = 3000;
        this.routes();
    }
        routes(){
            this._app.use('/pacientes', require('../routes/pacienteRoutes'));
        }

        listen(){
            this._app.listen(this._app, () => {
                console.log(`escuchando en el puerto ${this._port}`);
                
            });
        }
}

module.exports = Server; 