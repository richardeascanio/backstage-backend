//dependencias

var express = require('express');
var router = express.Router();

//modelos

var Status = require('../models/status');

//routes

Status.methods(['get', 'post', 'put', 'delete']);
Status.register(router, '/status');

//retorno router

module.exports= router;