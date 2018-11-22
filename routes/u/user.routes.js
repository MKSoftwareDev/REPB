'use strict'

var express=require('express');
var UserController=require('../../controllers/u/user.controller');

var api= express.Router();
var md_auth=require('../../middlewares/a/authenticate');
api.get('/pruebas-del-controlador',md_auth.ensureAuth,UserController.pruebas);
api.post('/register',UserController.saveUser);
api.post('/login',UserController.login);

module.exports = api;