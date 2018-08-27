
'use strict'

//Base de Datos
var mongoose=require('mongoose');
var app=require('./app');
var port = process.env.PORT || 8080;

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/MKGasto' )
	.then(()=>{
		console.log('La conexion a la base de datos MKGasto se ha realizado correctamente...');
		app.listen(port,()=>{
			console.log('El servidor local con NODEJS & Express esta corriendo correctamente')
		});
	})
	.catch(err=> console.log(err));



