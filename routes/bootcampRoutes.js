const express = require('express')
const mongoose = require('mongoose')
//Traer el modelo
const BootcampModel = require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')

const router = express.Router()

//traer todos los bootcmaps 
router.get('/', async(req, res)=>{

    try {
       //seleccionar todos los moelos para traer todos los bootcamps
    const bootcamps= 
        await BootcampModel.find()

    if(bootcamps.length > 0){
        res.
        status(200).
        json({
            success: true,
            data: bootcamps
        }) 
    }else{
        res.status(400)
                .json({
                    success: false,
                    data: 'No hay Bootcamps'
                }) 
    }
         
    
    } catch (error) {
        res.status(400)
                .json({
                    success: false,
                    data: error.message
                }) 
        
    }
    
    
})

//traer un bootcamp por id 
router.get('/:id', async (req, res)=>{
    //Extraer el id por parametro de la url 
    try {
        bootcampId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
       }else{
        const bootcamp = 
            await bootcampModel.findById(bootcampId)
        if (bootcamp) {
            res.
            status(200).
            json({
            success: true,
            data : bootcamp
    })
        }else{
            res.status(400)
                .json({
                    success: false,
                    data: `No hay Bootcamp por este id: ${bootcampId}`
                }) 
        }
    
       }
        
    } catch (error) {
        res.status(400)
                .json({
                    success: false,
                    data: error.message
                }) 
    }

})

//crear un bootcamp
router.post('/', async (req, res)=>{
    //el nuevo bootcamp vendra atra vez del body de la request
    
    try {
        const newBootcamp =
        await bootcampModel.create(req.body)

        res.
            status(201)
            json({
            success: true,
            data: newBootcamp
    })
    } catch (error) {
        res
        .status(400)
        .json({
            success:false,
            message:error.message
        })
    }


})

//editar un bootcamp por id 
router.put('/:id', async (req, res)=>{

try {
    const bootcampId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
        }else{

        const updBootcamp =
        await bootcampModel.findByIdAndUpdate(
            bootcampId,
            req.body,
            {
                new:true
            })
            if (updBootcamp) {
                res
                    .status(200)
                    .json({
                        success: true,
                        data: updBootcamp
        })
        }else{
            res
                .status(400)
                .json({
                    success: false,
                    data: error.message
                }) 
        }

    }
    
} catch (error) {
    res
        .status(400)
        .json({
            success:false,
            message:error.message
        })
}



})

//eliminar un bootcamp por id 
router.delete('/:id', async (req, res)=>{
 try {
    const bootcampId = req.params.id
        if(!mongoose.Types.ObjectId.isValid(bootcampId)){
            res
            .status(500)
            .json({
              success: false,
              msg: "identificador invalido"
            })
        }else{
            const delBootcamp = await bootcampModel.findByIdAndDelete(
                bootcampId
                )
                

        }
    
 } catch (error) {
    
    res.json({
        success: true,
        data: delBootcamp
    })
 }

})

module.exports = router