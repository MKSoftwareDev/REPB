'use strict'
var mongoose = require('mongoose');

var sucursalSchema = new mongoose.Schema({
	sucursal:	{type: String,	required: true, unique: true},
	nombre:		{type: String,	required: true},
	rfc:		{type: String,	required: true, min:9, max:13},
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
	grupo: {type: String, default: 'Principal'},

});
var Sucursal = mongoose.model('sucursales', sucursalSchema);
module.exports=Sucursal;