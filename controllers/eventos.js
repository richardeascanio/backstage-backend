'use strict'

const evento = require('../models/eventos');

function getEvento(req,res){

    let _id = req.params._id

    evento.findById(_id)
    .then(enventoFound =>{
        if(!enventoFound){
            return res.status(404).end();
        }
        return res.status(200).json(enventoFound);
    }).catch(err => next(err));

}


module.exports = {
    getEvento
}