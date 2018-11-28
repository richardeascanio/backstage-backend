// dependencias
const restful= require('node-restful');
const mongoose = require('mongoose');
const bcrypt =  require('bcrypt-nodejs');

//Schema

const usuariosSchema = new mongoose.Schema({

    //Atributos
    Nombre: String,
    Correo: {type: String, unique: true, lowercase: true},
    Username: {type: String, unique: true, lowercase: true},
    Clave: String,
    Imagen: String,
    MiembroDesde: {type:Date, default: Date.now()},
    Admin: Boolean,
    LastLogin: Date

});

usuariosSchema.pre('save', function(next){

    if(!this.isModified('Clave')) return next()

    bcrypt.genSalt(10, (err,salt)=> {

        if(err) return next(err)

        bcrypt.hash(this.Clave,salt,null,(err,hash)=>{

            if(err) return next(err)

            this.Clave = hash
            next()
        })
    })
})

//retorno modelo

module.exports = restful.model('usuarios', usuariosSchema);