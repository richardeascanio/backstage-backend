//dependencias

var express = require('express');
var router = express.Router();

//modelos

var eventos = require('../models/eventos');
var locales = require('../models/locales');
var usuarios = require('../models/usuarios');
var administradores = require('../models/administradores');


//routes

    //eventos

    eventos.methods(['get', 'post', 'put', 'delete']);
    eventos.register(router, '/eventos');

    //locales

    locales.methods(['get', 'post', 'put', 'delete']);
    locales.register(router, '/locales');

    //usuarios

    usuarios.methods(['get', 'post', 'put', 'delete']);
    usuarios.register(router, '/usuarios');

    //administradores 

    administradores.methods(['get', 'post', 'put', 'delete']);
    administradores.register(router, '/administradores');
    
//retorno router

module.exports= router;