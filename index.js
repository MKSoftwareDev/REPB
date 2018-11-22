
'use strict'

//Base de Datos
var mongoose=require('mongoose');
var app=require('./app');
var port = process.env.PORT || 8080;
var MKdatabase='bonobo';

mongoose.Promise= global.Promise;
//mongodb://myServerAdmin:password@localhost:27017/admin
//mongoose.connect('mongodb://localhost:27017/admin')
mongoose.connect('mongodb://localhost:27017/'+MKdatabase).then(
	() => { console.log('La conexion a la base de datos '+MKdatabase+' se ha realizado correctamente...');
	app.listen(port,()=>{
		console.log('El servidor local con NODEJS & Express esta corriendo correctamente')
	}); },
	err => { console.log('err'); }
);


