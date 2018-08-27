'use strict'

var express=require('express');
var bodyParser = require('body-parser');
var app=express();

// Cargar rutas
var user_routes=require('./routes/user.routes');
var bill_routes=require('./routes/bill.routes');
var empresa_routes=require('./routes/empresa.routes');
var sucursal_routes=require('./routes/sucursal.routes');
var cfg_routes=require('./routes/cfg.routes');



// middleware de body-parse
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar Cabeceras y cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Autorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Ac");
  res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
  res.header('Allo','GET,POST,OPTIONS,PUT,DELETE');
  next();
});

//rutas base
app.get('/',(req,res)=>{
	res.send('el servidor esta listo');
});
//rutas base
app.get('/probando',(req,res)=>{
	res.status(200).send({message:'Esta es una prueba'});
});
app.post('/probando',(req,res)=>{
	res.status(200).send({message:'Esta es una prueba'});
});

const mkappuse='/bkd';

app.use(mkappuse,user_routes);
app.use(mkappuse,bill_routes);
app.use(mkappuse,empresa_routes);
app.use(mkappuse,sucursal_routes);
app.use(mkappuse,cfg_routes);


module.exports = app;
