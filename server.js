'use strict'

// dependencias

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./routes/api');  
const config = require('./config');                                            

//conexion MONGODB

mongoose.connect(config.db, {useNewUrlParser: true});

//express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes

app.use('/api', api);

//Inicio Servidor

app.listen(config.port);
console.log('Servidor corrienndo en puerto: '+ config.port);

