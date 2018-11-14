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

//find by id eventos

app.get('/api/eventos/:_id', function(req,res){
 
    evento.findById(req.params._id)
    .then(enventoFound =>{
        if(!enventoFound){
            return res.status(404).end();
        }
        return res.status(200).json(enventoFound);
    }).catch(err => next(err));
})

//find by id locales

app.get('/api/locales/:_id', function(req,res){
 
    local.findById(req.params._id)
    .then(localFound =>{
        if(!localFound){
            return res.status(404).end();
        }
        return res.status(200).json(localFound);
    }).catch(err => next(err));
})

//find by id usuarios

app.get('/api/usuarios/:_id', function(req,res){
 
    local.findById(req.params._id)
    .then(usuarioFound =>{
        if(!usuarioFound){
            return res.status(404).end();
        }
        return res.status(200).json(usuarioFound);
    }).catch(err => next(err));
})


//find by id administradores

app.get('/api/administradores/:_id', function(req,res){
 
    administradores.findById(req.params._id)
    .then(administradorFound =>{
        if(!administradorFound){
            return res.status(404).end();
        }
        return res.status(200).json(administradorFound);
    }).catch(err => next(err));
})