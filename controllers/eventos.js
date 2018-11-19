'use strict'

const evento = require('../models/eventos');

function getEvento(req,res){

    evento.findById(req.params._id)
    .then(enventoFound =>{
        if(!enventoFound){
            return res.status(404).end();
        }
        return res.status(200).json(enventoFound);
    }).catch(err => next(err));

}

    function updateEvento(req, res){
        let _id = req.params._id
        let update = req.body

        evento.findByIdAndUpdate(_id,update,(err,eventoUpdated)=>{

            if(err) res.status(500).send({message: `Error al aactualizar el evento: ${err}`})

            res.status(200).json({message: `Evento Actualizado: ${eventoUpdated}`})
        })

    }

module.exports = {
    getEvento,
    updateEvento
}