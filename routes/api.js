//dependencias

var express = require('express');
var router = express.Router();

//modelos

var eventos = require('../models/eventos');
var locales = require('../models/locales');

//routes

    //eventos

    eventos.methods(['get', 'post', 'put', 'delete']);
    eventos.register(router, '/eventos');

    //locales

    locales.methods(['get', 'post', 'put', 'delete']);
    locales.register(router, '/locales');
    


//retorno router

module.exports= router;