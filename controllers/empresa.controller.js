'use strict'
//models
var Empresa = require('../models/empresa.model');

//insertar
function empresa_new_post (req,res){
    //crear el objeto de la empresa
    var empresa = new Empresa();
    //recoger parametros de peticion
    var params=req.body;
    //console.log(params);
    if (params.empresa && params.nombre){
        //asignamos las variables
        empresa.empresa=params.empresa;
        empresa.nombre=params.nombre;
        empresa.rfc=params.rfc;
        empresa.save((err,number) => {
            if (err){
                res.status(500).send({message:err.message});
            } else {
                if (!number){
                    res.status(404).send({message:'Error al insertar la empresa'});
                } else {
                    res.status(200).send({empresa:number});
                }
            }
        });
    } else {
        res.status(404).send({message:'Introduce correctamente los datos'});
    }
}

function empresa_lst (req,res){
    Empresa.find({},(err,empresa)=>{
        if (err) {
            res.status(500).send({message:err.message});
        } else {
            if (!empresa) {
                res.status(404).send({message:'No se encontraron Registros'});                
            } else {
                res.status(200).send({empresa})
            }
        }
    });
}




// detalle
function empresa_det (req,res){
    var empresaid=req.params.id;
    if (empresaid) {
        Empresa.find({_id:empresaid},(err,empresa)=>{
            if (err){
                res.status(500).send({messege:err.messege});
            } else {
                if (!empresa){
                    res.status(404).send({messge:'No se encontro el registro'});
                } else {
                    res.status(200).send({empresa})
                }
            }
        });
    } else {
        res.status(404).send({message:'No se encontro la llave del documento'});
    }
}

module.exports={
    empresa_new_post,
    empresa_det,
    empresa_lst

};