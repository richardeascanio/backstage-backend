//dependencias

var express = require('express');
var router = express.Router();

//modelos

var Status = require('../models/eventos');

//routes

Status.methods(['get', 'post', 'put', 'delete']);
Status.register(router, '/eventos');

//retorno router

module.exports= router;