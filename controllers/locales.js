'use strict'

const local = require('../models/locales');

function getLocal(req,res){
    
    local.findById(req.params._id)
    .then(localFound =>{
        if(!localFound){
            return res.status(404).end();
        }
        return res.status(200).json(localFound);
    }).catch(err => next(err));

}

function saveLocal(req,res){

    let loc = new local()
    loc.Name = req.body.Name,
    loc.Direccion = req.body.Direccion,
    loc.Calificacion = req.body.Calificacion,
    loc.Descripcion = req.body.Descripcion,
    loc.Precio = req.body.Precio,
    loc.Categoria = req.body.Categoria,
    loc.Imagen = req.body.Imagen,
    loc.Contador = req.body.Contador,
    loc.Acumulador = req.body.Acumulador
  
    loc.save((err,localStored)=>{

        if(err) return res.json({message: `Error al guardar: ${err}`})

        res.status(200).json({message: `Local guardado: ${localStored}`})
    })

}

function updateLocal(req, res){
    let _id = req.params._id
    let update = req.body

    local.findByIdAndUpdate(_id,update,(err,localUpdated)=>{

        if(err) res.status(500).send({message: `Error al actualizar el Local: ${err}`})

        res.status(200).json({message: `Local Actualizado: ${localUpdated}`})
    })

}

module.exports = {
    getLocal,
    saveLocal,
    updateLocal

}