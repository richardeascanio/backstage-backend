'use strict'

// dependencias

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./routes/api');                                              

//conexion MONGODB

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

//express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes

app.use('/api', api);

//Inicio Servidor

app.listen(process.env.PORT || 3000);
console.log('Servidor corrienndo en puerto ');

