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
    Imagen: req.body.Imagen,
    Admin: req.body.Admin
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
  
  Usuario.findOne({ Correo: req.body.Correo})
  .then(usuario=>{
        if(!usuario) {
            
            console.log("mensaje: Usuario no encontrado " )
            return res.json({message: `Usuario no encontrado`})
    
    
    }

        console.log(`Usuario: ${JSON.stringify(usuario)}`)
        const hashed_password = usuario.Clave
        console.log(hashed_password)
        

        if(bcrypt.compareSync(req.body.Clave,
             hashed_password)){
            console.log('true')
            res.status(200)
            .json({

            message: 'A',
            token: service.createToken(usuario), 
            Name: usuario.Nombre,
            _id: usuario._id,
            Imagen: usuario.Imagen,
            Admin: usuario.Admin

            })

        }
        else {
            console.log("Email o contraseña mala")
            return res.json({ message: `B`})
            
        } 
    }).catch(err=>
        console.log('catch ', err))
}


module.exports = {

    signIn,
    signUp,
    Prueba
}