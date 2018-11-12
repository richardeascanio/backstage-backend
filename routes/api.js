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

    eventos.get('eventos/:id',function(req,res){
        Evento.findById(req.params._id)
        .then(eventoEncontrado => {
            if(!eventoEncontrado){
                return res.status(404).end();
            }
            return res.status(200).json(eventoEncontrado)
        })
        .catch(err => next(err))
    })

    //locales

    locales.methods(['get', 'post', 'put', 'delete']);
    locales.register(router, '/locales');
    


//retorno router

module.exports= router;