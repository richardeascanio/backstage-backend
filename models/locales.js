// dependencias
var restful= require('node-restful');
var mongoose = require('mongoose');

var localesSchema = new mongoose.Schema({
    _id: String,
    Name: String,
    Direccion: String,
    Calificacion: String,
    Descripcion: String,
    Precio: String,
    Categoria: String,
    Imagen: String,
    Contador: String

});

//retorno modelo

module.exports = restful.model('locales', localesSchema);