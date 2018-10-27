'use strict'
var mongoose = require('mongoose');

var empresaSchema = new mongoose.Schema({
	clave:	{type: String,	required: true, unique: true},
	nombre:	{type: String,	required: true},
	rfc:	{type: String,	required: true, min:9, max:13},
	grupo:  {type: String, default: 'Principal'},
	seBorra: Boolean,
	estatus: {type: String, enum: ['ALTA','BAJA','BLOQUEADO','SUSPENDIDO'] },
	fechaAlta: { type: Date, default: Date.now },
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
	

});
var Empresa = mongoose.model('empresas', empresaSchema);
module.exports=Empresa;







