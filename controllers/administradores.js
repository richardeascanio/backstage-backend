'use strict'

const administrador = require('../models/administrador');

function getAdministrador(req,res){

    administrador.findById(req.params._id)
    .then(administradorFound =>{
        if(!administradorFound){
            return res.status(404).end();
        }
        return res.status(200).json(administradorFound);
    }).catch(err => next(err));

}



module.exports = {
    getAdministrador,


}