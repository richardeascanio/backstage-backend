'use strict'

// dependencias

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const controllerEvento = require('../controllers/eventos');
const controllerLocal = require('../controllers/locales');    
const controllerUsuario = require('../controllers/usuarios');
const controllerAdministrador = require('../controllers/administradores')                                                 


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

app.get('/api/eventos/:_id', controllerEvento.getEvento)

//find by id locales

app.get('/api/locales/:_id', controllerLocal.getLocal)

//find by id usuarios

app.get('/api/usuarios/:_id', controllerUsuario.getUsuario)

//find by id administradores

app.get('/api/administradores/:_id', controllerAdministrador.getAdministrador)