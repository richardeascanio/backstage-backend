'use strict'

const mongoose = require('mongoose');
const Usuario = require('../models/usuarios');
const service = require('../services');
const bcrypt = require('bcrypt-nodejs');

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
    .then(usuario => {
    
      if (err) return res.status(500)
      .send({message: `Error al logearse el usuario: ${err}`})

      if(!usuario)  return res.status(404)
      .send({message: `No existe el usuario`})

      req.usuario = usuario

      const password_verification = bcrypt.compareSync(  
        req.body.Clave,
        usuario.Clave
      );

      console.log(`debbug... user: ${usuario}\n Verificacion: ${pass}`)
      
      if (password_verification){

        res.status(200).
        send({
          message: 'Loggeado correctamente',
          token: service.createToken(usuario)
        })
      }else {

        res.status(500).send({ message: 'Email o Contraseña incorrectos' });
      }

    })    
}

module.exports = {

    signIn,
    signUp,
    Prueba
}