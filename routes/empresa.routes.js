'use strict'
var express=require('express');
var api=express.Router();
//Controlador
var md_auth=require('../middlewares/authenticate');
var empresaCtlr=require('../controllers/empresa.controller');

// Rutas
api.post  ('/empresa/new',     empresaCtlr.empresa_new_post);     
//api.delete('/empresa/del/:id', md_auth.ensureAuth,empresaCtlr.empresa_del_delete);   
//api.put   ('/empresa/upt/:id', md_auth.ensureAuth,empresaCtlr.empresa_upt_put);      
api.get   ('/empresa/:id',     empresaCtlr.empresa_det);
api.get   ('/empresa',         empresaCtlr.empresa_lst);



module.exports = api;
