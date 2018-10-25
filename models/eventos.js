// dependencias
var restful= require('node-restful');
var mongoose = require('mongoose');

var statusSchema = new mongoose.Schema({
    Name: String,
    Productor: String,
    Fecha: String,
    Lugar: String,
    Calificacion: Number,
    Descripcion: String,
    Precio: Number


});

//retorno modelo

module.exports = restful.model('eventos', eventosSchema);