// dependencias
const restful= require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
//Schema

const eventosSchema = new mongoose.Schema({

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
    Contador: String,
    Acumulador: String

});

//retorno modelo

module.exports = restful.model('eventos', eventosSchema);