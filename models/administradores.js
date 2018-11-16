// dependencias
const restful= require('node-restful');
const mongoose = require('mongoose');
const bcrypt =  require('bcrypt-nodejs');

//Schema

const administradoresSchema = new mongoose.Schema({

    //Atributos
    Nombre: String,
    Apellido: String,
    Correo: String,
    Telefono: String,
    Imagen: String,
    Ciudad: String,
    Clave: {type: String, select: false},
    MiembroDesde: {type:Date, default: Date.now()},
    LastLogin: Date

});

administradoresSchema.pre('save', (next)=> {

    let admin = this;
    if(!admin.isModified('Clave')) return next

    bcrypt.genSalt(10, (err,salt)=> {

        if(err) return next(err)

        bcrypt.hash(admin.Clave,salt,null,(err,hash)=>{

            if(err) return next(err)

            admin.Clave = hash
            next()
        })
    })
})

//retorno modelo

module.exports = restful.model('administradores', administradoresSchema);