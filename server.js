// dependencias

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//conexion MONGODB

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

//express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes

app.use('/api', require('./routes/api'));

//Inicio Servidor

app.listen(process.env.PORT || 3000);
console.log('Servidor corrienndo en puerto ');

//get by Id

app.get('api/eventos/:_id',function(req,res){
    Evento.findById(req.params._id)
    .then(eventoEncontrado => {
        if(!eventoEncontrado){
            return res.status(404).end();
        }
        return res.status(200).json(eventoEncontrado)
    })
    .catch(err => next(err))
})
