// dependencias

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var evento = require('./models/eventos');
var local = require('./models/locales');                                          

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

//find by id

app.get('/api/eventos/:_id', function(req,res){
 
    evento.findById(req.params._id)
    .then(enventoFound =>{
        if(!enventoFound){
            return res.status(404).end();
        }
        return res.status(200).json(enventoFound);
    }).catch(err => next(err));
})

app.get('/api/locales/:_id', function(req,res){
 
    local.findById(req.params._id)
    .then(localFound =>{
        if(!localFound){
            return res.status(404).end();
        }
        return res.status(200).json(localFound)._id;
    }).catch(err => next(err));
})
