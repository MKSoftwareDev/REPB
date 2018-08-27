'use strict'

//modulos
var bcrypt=require('bcrypt-nodejs');

//modelos
var User=require('../models/user.model');

//servicio jwt
var jwt=require('../services/jwt');

//acciones
function pruebas(req,res){
	res.status(200).send({
		message:'probando el controlador de usuarios y la accion de pruebas',
		user: req.user
	});
}

function saveUser(req,res){
	//crear el objeto del usuario
	var user = new User();
	
	//recoger parametros peticion
	var params=req.body;

	if (params.password && params.nombre && params.surname && params.email){
		user.surname=params.surname;
		user.nombre=params.nombre;
		user.paterno=params.paterno;
		user.materno=params.materno;
		user.rfc=params.rfc;
		user.curp=params.curp;		
		user.email=params.email;
		user.password=params.password;
		user.role='Admin';
		user.imagen=null;

		User.findOne({email:user.email.toLowerCase()},(err,findUser)=>{
			if(err){
				res.status(500).send({message:'Error al comprobar el usuario'})
			}else{
				if(!findUser){
					//cifrar la contraseña
					bcrypt.hash (params.password,null,null,function(err,hash){
						user.password=hash;

						user.save((err,userStored)=>{
							if (err){
								res.status(500).send({message: err.message});
								
							
							}else{
								if(!userStored){
									res.status(404).send({message:'No se ha registrado el usuario'});
								}else{
									res.status(200).send({user:userStored});
								}
							}
						});
					});

				}else{
					res.status(404).send({message:'El usuario ya esta registrado'});
				}
			}
		})
	}else{
		res.status(200).send({message:'introduce los datos correctamente para '});
	}

}

function login(req,res){
	var params = req.body;
	//var email=params.email;
	console.log(params);
	var surname=params.surname;
	var password = params.password;

	User.findOne({surname:surname.toLowerCase()},(err,user)=>{
		if(err){
			res.status(500).send({message:'Error al comprobar el usuario'})
			console.log('Error al comprobar el usuario');
		}else{
			if(user){
				//cifrar la contraseña
				//res.status(200).send({findUser})
				bcrypt.compare(password,user.password,(err,check)=>{
					if(check){
						//res.status(200).send({findUser});						
						if(params.gettoken){
							//devolver el token

							res.status(200).send({
								token: jwt.createToken(user)
							});
						}else{
							res.status(200).send({user});
						}
					}else{
						res.status(404).send({message:'El password es incorrecto'});
						console.log('El password es incorrecto');
					}
				});

			}else{
				res.status(404).send({message:'El usuario no se encuentra registrado'});
				console.log('El usuario no se encuentra registrado');
			}
		}
	})

}


	//para probar
	//res.status(200).send({
	//	message:'Metodo de registro'
	//});




module.exports= {
	pruebas,
	saveUser,
	login
};