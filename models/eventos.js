// dependencias
var restful= require('node-restful');
var mongoose = require('mongoose');

var eventosSchema = new mongoose.Schema({
    id: String,
    Name: String,
    Productor: String,
    Fecha: String,
    Lugar: String,
    Calificacion: String,
    Descripcion: String,
    Precio: String,
    Categoria: String,
    Imagen: String,
    Contador: String

});

//retorno modelo

module.exports = restful.model('eventos', eventosSchema);