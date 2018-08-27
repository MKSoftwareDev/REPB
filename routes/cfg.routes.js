'use strict'
var express=require('express');
var api=express.Router();

//controlador
var md_auth =require('../middlewares/authenticate');
var cgfCtlr =require('../controllers/cfg.controller');


// Rutas
api.get ('/cfg',cgfCtlr.cfg_lst);

module.exports = api;
