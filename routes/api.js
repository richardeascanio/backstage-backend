//dependencias

var express = require('express');
var router = express.Router();

//modelos

var eventos = require('../models/eventos');

//routes

eventos.methods(['get', 'post', 'put', 'delete']);
eventos.register(router, '/eventos');

//retorno router

module.exports= router;