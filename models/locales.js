// dependencias
var restful= require('node-restful');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Schema

var localesSchema = new mongoose.Schema({

    //Atributos
    
    _id: Schema.ObjectId,
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