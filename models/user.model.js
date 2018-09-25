'use strict'
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	surname:	{type: String,	required: true, unique: true},
	nombre:		{type: String,	required: true},
	paterno:	{type: String,	required: true},
	materno:	String,
	rfc:		{type: String,	required: true, min:9, max:13},
	curp:		{type: String,	required: true, min:9, max:13},
	email:		{type: String,	required: true},
	password: {type: String,	required: true},
	role: String,
	imagen: String,
	domicilio: [{
	tipo: String,
	direccion: String,
	numext: String,
	numint: String,
	cp: Number,
	colonia: String,
	municipio: String,
	delegacion: String,
	estado: String
	}],
	telefono:[{
		tipo: String,
		numero: String,
		extension: String
	}],
	MKdefault:{
		empresa: String,
		sucursal: String,
		almacen: String,
		cta: String
	},
	grupo: {type: String, default: 'Developers'},
	departamento: {type: String, default: 'Ventas'},
	accesoEmpresa: [{type: String}],
	accesoSucursal: [{type: String}]

});
var User = mongoose.model('users', userSchema);
module.exports=User;







