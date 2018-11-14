'use strict'

const local = require('../models/locales');

function getLocal(req,res){
    
    local.findById(req.params._id)
    .then(localFound =>{
        if(!localFound){
            return res.status(404).end();
        }
        return res.status(200).json(localFound);
    }).catch(err => next(err));

}

module.exports = {
    getLocal
}