'use strict'

const administrador = require('../models/administrador');

function getAdministrador(req,res){

    let _id = req.params._id

    administrador.findById(_id)
    .then(administradorFound =>{
        if(!administradorFound){
            return res.status(404).end();
        }
        return res.status(200).json(administradorFound);
    }).catch(err => next(err));

}

module.exports = {
    getAdministrador
}