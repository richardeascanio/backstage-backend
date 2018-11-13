// dependencias
var restful= require('node-restful');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
 
//Schema

var eventosSchema = new mongoose.Schema({

    //Atributos
    
    _id: Schema.ObjectId,
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