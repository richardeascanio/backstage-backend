'use strict'

const usuario = require('../models/usuarios');

function getUsuario(req,res){
 
    let _id = req.params._id

    usuario.findById(_id)
    .then(usuarioFound =>{
        if(!usuarioFound){
            return res.status(404).end();
        }
        return res.status(200).json(usuarioFound);
    }).catch(err => next(err));

}


module.exports = {
    getUsuario
    
}