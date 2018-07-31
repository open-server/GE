'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;


mongoose.connect('mongodb://localhost:27017/ge', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("Conectado a la database de mongDB");

        app.listen(port, function(){
            console.log("Servidor corriendo jhon..." + port);
        });
    }
});