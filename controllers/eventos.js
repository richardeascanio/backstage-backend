'use strict'

const evento = require('./models/eventos');

function getEvento(req,res){

    evento.findById(req.params._id)
    .then(enventoFound =>{
        if(!enventoFound){
            return res.status(404).end();
        }
        return res.status(200).json(enventoFound);
    }).catch(err => next(err));

}


exports = {
    getEvento,
}