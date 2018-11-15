// dependencias
const restful= require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema

const localesSchema = new mongoose.Schema({

    //Atributos
    
    _id: Schema.ObjectId,
    Name: String,
    Direccion: String,
    Calificacion: String,
    Descripcion: String,
    Precio: String,
    Categoria: String,
    Imagen: String,
    Contador: String,
    Acumulador: String

});

//retorno modelo

module.exports = restful.model('locales', localesSchema);