//dependencias

const express = require('express');
const router = express.Router();
const controllerEvento = require('../controllers/eventos');
const controllerLocal = require('../controllers/locales');    
const controllerUsuario = require('../controllers/usuarios');
const controllerAuth = require('../controllers/userauth');
const auth = require('../middlewares/auth')   


//modelos

var eventos = require('../models/eventos');
var locales = require('../models/locales');
var usuarios = require('../models/usuarios');


//routes

    //eventos

    eventos.methods(['get', 'delete']);
    eventos.register(router, '/eventos');

    router.post('/eventos', auth, controllerEvento.saveEvento)
    router.put('/eventos/:_id', auth, controllerEvento.updateEvento)

    //locales

    locales.methods(['get', 'delete']);
    locales.register(router, '/locales');

    router.post('/locales', auth, controllerLocal.saveLocal)
    router.put('/locales/:_id', auth, controllerLocal.updateLocal)

    //usuarios

    usuarios.methods(['get', 'post', 'put', 'delete']);
    usuarios.register(router, '/usuarios');

    //get by id

    //find by id eventos

    router.get('/eventos/:_id', controllerEvento.getEvento)

    //find by id locales

    router.get('/locales/:_id', controllerLocal.getLocal)

    //find by id usuarios

    router.get('/usuarios/:_id', controllerUsuario.getUsuario)

    //Control de sesiones

    router.post('/signup',controllerAuth.signUp)

    router.post('/signin',controllerAuth.signIn)
    
    //router.get('/private', auth, controllerAuth.Prueba)

//retorno router

module.exports= router;