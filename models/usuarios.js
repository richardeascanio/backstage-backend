// dependencias
const restful= require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema

var usuariosSchema = new mongoose.Schema({

    //Atributos
    
    _id: Schema.ObjectId,
    Nombre: String,
    Apellido: String,
    Correo: String,
    Telefono: String,
    Imagen: String,
    Ciudad: String,

});

//retorno modelo

module.exports = restful.model('usuarios', usuariosSchema);