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

    let event = new evento()
    event.Name = req.body.Name,
    event.Productor = req.body.Productor,
    event.Fecha = req.body.Fecha,
    event.Lugar = req.body.Lugar,
    event.Calificacion = req.body.Calificacion,
    event.Descripcion = req.body.Descripcion,
    event.Precio = req.body.Precio,
    event.Categoria = req.body.Categoria,
    event.Imagen = req.body.Imagen,
    event.Contador = req.body.Contador,
    event.Acumulador = req.body.Acumulador

    event.save((err,eventoStored)=>{

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