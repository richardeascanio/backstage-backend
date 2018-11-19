'use strict' 

const services = require('../services');

function isAuth(req,res,next){

    if(!req.headers.authorization){

        return res.status(403).json({message: `No tiene autorizacion`})
    }
        const token = req.headers.authorization

        console.log(token)

        services.decodeToken(token)
        .then(response =>{
            req.user = response
            next()
        })
        .catch(response =>{
            res.status(response.status)
        })
    }

module.exports = isAuth