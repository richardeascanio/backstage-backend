//dependencias

const express = require('express');
const router = express.Router();
const controllerEvento = require('../controllers/eventos');
const controllerLocal = require('../controllers/locales');    
const controllerUsuario = require('../controllers/usuarios');
const controllerAdministrador = require('../controllers/administradores');
const controllerAuth = require('../controllers/userauth');
const auth = require('../middlewares/auth')   


//modelos

var eventos = require('../models/eventos');
var locales = require('../models/locales');
var usuarios = require('../models/usuarios');
var administradores = require('../models/administradores');


//routes

    //eventos

    eventos.methods(['get', 'post', 'delete']);
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

    router.put('/eventos/:_id', auth, controllerEvento.updateEvento)
    
    //get by id

    //find by id eventos

    router.get('/eventos/:_id', controllerEvento.getEvento)

    //find by id locales

    router.get('/locales/:_id', controllerLocal.getLocal)

    //find by id usuarios

    router.get('/usuarios/:_id', controllerUsuario.getUsuario)

    //find by id administradores

    router.get('/administradores/:_id', controllerAdministrador.getAdministrador)

    //prueba sesion

    router.post('/signup',controllerAuth.signUp)

    router.post('/signin',controllerAuth.signIn)
    
    router.get('/private', auth, controllerAuth.Prueba)

//retorno router

module.exports= router;