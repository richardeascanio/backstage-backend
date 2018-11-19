'use strict'

const mongoose = require('mongoose');
const Usuario = require('../models/usuarios');
const service = require('../services');
const bcrypt = require('bcrypt-nodejs')

function signUp(req,res){
    const usuario = new Usuario({
      
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Correo: req.body.Correo,
    Telefono: req.body.Telefono,
    })
    usuario.save((err) =>{
        if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`+` usuario: ${usuario}`} )

        return res.status(200).send({token: service.createToken(usuario)})
    })

} 

function Prueba(req,res){

    res.status(200).send({message: `Tiene acceso`})
}


function signIn(req, res) {
  
  Usuario.find({ Correo: req.params.Correo})
  .then(usuario=>{
        if(!usuario) return res.status(404).send({message: `Usuario no encontrado`})

        console.log(`Usuario: ${usuario}`)
        const hashed_password = usuario.Clave

        if(bcrypt.compareSync(req.body.Clave, hashed_password)){

            res.status(200).send({
            message: 'Te has logueado correctamente',
            token: service.createToken(usuario) 
            })

        }
        else {
            res.status(401).send({ message: 'Email o Contraseña incorrectos' })
        } 
    }).catch(err=>
        console.log(err))
}


module.exports = {

    signIn,
    signUp,
    Prueba
}