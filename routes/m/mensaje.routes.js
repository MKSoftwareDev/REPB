'use strict'
var express=require('express');
var api=express.Router();
//Controlador
var md_auth=require('../../middlewares/a/authenticate');
var mensajeCtlr=require('../../controllers/m/mensaje.controller');

// Rutas    
api.get   ('/mensaje/:id',mensajeCtlr.one_mensaje);

module.exports = api;