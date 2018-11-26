// dependencias
const restful= require('node-restful');
const mongoose = require('mongoose');

//Schema

const eventosSchema = new mongoose.Schema({

    //Atributos
    Name: String,
    Productor: String,
    Fecha: String,
    Lugar: String,
    Calificacion: String,
    Descripcion: String,
    Precio: String,
    Categoria: String,
    Imagen: String,
    Contador: String,
    Acumulador: String

});

//retorno modelo

module.exports = restful.model('eventos', eventosSchema);