// dependencias
const restful= require('node-restful');
const mongoose = require('mongoose');
const bcrypt =  require('bcrypt-nodejs');

const Schema = mongoose.Schema;

//Schema

const usuariosSchema = new mongoose.Schema({

    //Atributos
    
    _id: Schema.ObjectId,
    Nombre: String,
    Apellido: String,
    Correo: {type: String, unique: true, lowercase: true},
    Telefono: String,
    Clave: {type: String, select: false},
    MiembroDesde: {type:Date, default: Date.now()},
    LastLogin: Date

});

usuariosSchema.pre('save', (next)=> {

    let user = this;
    if(!user.isModified('Clave')) return next

    bcrypt.genSalt(10, (err,salt)=> {

        if(err) return next(err)

        bcrypt.hash(user.Clave,salt,null,(err,hash)=>{

            if(err) return next(err)

            user.Clave = hash
            next()
        })
    })
})

//retorno modelo

module.exports = restful.model('usuarios', usuariosSchema);