// dependencias
var restful= require('node-restful');
var mongoose = require('mongoose');

var eventosSchema = new mongoose.Schema({
    Name: String,
    Productor: String,
    Fecha: String,
    Lugar: String,
    Calificacion: String,
    Descripcion: String,
    Precio: String,
    Categoria: String,
    
});

//retorno modelo

module.exports = restful.model('eventos', eventosSchema);