// dependencias
const restful= require('node-restful');
const mongoose = require('mongoose');

//Schema

const localesSchema = new mongoose.Schema({

    //Atributos
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