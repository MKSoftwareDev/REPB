'use strict'
//models
var Sucursal = require('../models/sucursal.model');

//insertar
function sucursal_new_post (req,res){
    //crear el objeto de la empresa
    var sucursal = new Sucursal();
    //recoger parametros de peticion
    var params=req.body;
    //console.log(params);
    if (params.sucursal && params.nombre){
        //asignamos las variables
        sucursal.sucursal=params.sucursal;
        sucursal.nombre=params.nombre;
        sucursal.rfc=params.rfc;
        sucursal.save((err,number) => {
            if (err){
                res.status(500).send({message:err.message});
            } else {
                if (!number){
                    res.status(404).send({message:'Error al insertar la empresa'});
                } else {
                    res.status(200).send({sucursal:number});
                }
            }
        });
    } else {
        res.status(404).send({message:'Introduce correctamente los datos'});
    }
}

function sucursal_lst (req,res){
    Sucursal.find({},(err,sucursal)=>{
        if (err) {
            res.status(500).send({messege:err.messege});
        } else {
            if (!sucursal) {
                res.status(404).send({message:'No se encontraron Registros'})
            } else {
                res.status(200).send({sucursal})
            }            
        }
    });
}
// detalle
function sucursal_det (req,res){
    var sucursalid=req.params.id;
    if (sucursalid) {
        Sucursal.find({_id:sucursalid},(err,sucursal)=>{
            if (err){
                res.status(500).send({messege:err.messege});
            } else {
                if (!sucursal){
                    res.status(404).send({messge:'No se encontro el registro'});
                } else {
                    res.status(200).send({sucursal})
                }
            }
        });
    } else {
        res.status(404).send({message:'No se encontro la llave del documento'});
    }
}

module.exports ={
    sucursal_new_post,
    sucursal_det,
    sucursal_lst
};