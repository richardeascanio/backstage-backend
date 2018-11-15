'use strict'

const mongoose = require('mongoose');
const Usuario = require('../models/usuarios');
const service = require('../services');

function signUp(req,res){
    const usuario = new Usuario({
    
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Correo: req.body.Correo,
    Telefono: req.body.Telefono,
    Imagen: req.body.Imagen,
    Ciudad: req.body.Ciudad
    })
    usuario.save((err) =>{
        if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`} )

        return res.status(200).send({token: service.createToken(usuario)})
    })

}

function Prueba(req,res){

    res.status(200).send({message: `Tiene acceso`})
}


function signIn(req,res){

    
}


module.exports = {

    signIn,
    signUp,
    Prueba
}