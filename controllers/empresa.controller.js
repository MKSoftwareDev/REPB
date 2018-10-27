'use strict'
//models
var Empresa = require('../models/empresa.model');
var Mensaje = require('../models/mensaje.model');
var mklog = require ('../module/l/log.module');


//insertar
function empresa_new_post(req,res){
  
    //crear el objeto de la empresa
    var empresa = new Empresa();
    //recoger parametros de peticion
    var params=req.body;
    var mkIdioma="esp";
    console.log(req.body);
    ;
    //
     if (params.clave && params.nombre){
         //asignamos las variables
         empresa.clave=params.clave;
         empresa.nombre=params.nombre;
         empresa.rfc=params.rfc;
         console.log(empresa);
         empresa.save((err,number) => {
             if (err){
                 console.log(err);
                 res.status(500).send({message:err.message});
             } else {
                 if (!number){
                     Mensaje.find({ numero: 4, idioma:mkIdioma},(err,descripcion)=>{
                         var objDescripcion =descripcion[0];
                         var mkmensaje = objDescripcion.mensaje;     
                         res.status(404).send({message:mkmensaje});                              
                     });
                    
                 } else {
                     res.status(200).send({empresa:number});
                 }
             }
         });
     } else {
         Mensaje.find({ numero: 3, idioma:mkIdioma},(err,descripcion)=>{
             var objDescripcion =descripcion[0];
             var mkmensaje = objDescripcion.mensaje;     
             res.status(404).send({message:mkmensaje});       
         });               
     }
}

function empresa_mksd(req,res){
    var params=req.body;

    console.log(req.body);
    console.log(params);

    res.status(200).send({message:'Funciona'});               

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
    empresa_lst,
    empresa_mksd

};