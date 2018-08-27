'use strict'

var express=require('express');
var api=express.Router();
//Controlador
var md_auth=require('../middlewares/authenticate');
var sucursalCtlr=require('../controllers/sucursal.controller');

// Rutas
api.post  ('/sucursal/new',sucursalCtlr.sucursal_new_post);     
//api.delete('/sucursal/del/:id', md_auth.ensureAuth,sucursalCtlr.sucursal_del_delete);   
//api.put   ('/sucursal/upt/:id', md_auth.ensureAuth,sucursalCtlr.sucursal_upt_put);      
api.get   ('/sucursal/:id',sucursalCtlr.sucursal_det);
api.get   ('/sucursal',    sucursalCtlr.sucursal_lst);

module.exports = api;