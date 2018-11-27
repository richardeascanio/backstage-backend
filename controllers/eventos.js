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

function saveEvento(req,res){

    let evento = new evento()
    evento.Name = req.body.Name,
    evento.Productor = req.body.Productor,
    evento.Fecha = req.body.Fecha,
    evento.Lugar = req.body.Lugar,
    evento.Calificacion = req.body.Calificacion,
    evento.Descripcion = req.body.Descripcion,
    evento.Precio = req.body.Precio,
    evento.Categoria = req.body.Categoria,
    evento.Imagen = req.body.Imagen,
    evento.Contador = req.body.Contador,
    evento.Acumulador = req.body.Acumulador

    evento.save((err,eventoStored)=>{

        if(err) return res.json({message: `Error al guardar: ${err}`})

        res.status(200).json({message: `Evento guardado: ${eventoStored}`})
    })

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
    saveEvento,
    updateEvento
}