const express = require('express')
//Traer el modelo
const BootcampModel = require('../models/bootcampModel')
const bootcampModel = require('../models/bootcampModel')

const router = express.Router()

//traer todos los bootcmaps 
router.get('/', async(req, res)=>{
    //seleccionar todos los moelos para traer todos los bootcamps
    const bootcamps= await BootcampModel.find()
         
    res.json({
        success: true,
        data: bootcamps
    })
})

//traer un bootcamp por id 
router.get('/:id', async (req, res)=>{
    //Extraer el id por parametro de la url 
    bootcampId = req.params.id
    const bootcamp = await bootcampModel.findById(bootcampId)

    res.json({
        success: true,
        data : bootcamp
    })
})

//crear un bootcamp
router.post('/', async (req, res)=>{
    //el nuevo bootcamp vendra atra vez del body de la request
    const newBootcamp =
        await bootcampModel.create(req.body)

    res.json({
        success: true,
        data: newBootcamp
    })
})

//editar un bootcamp por id 
router.put('/:id', async (req, res)=>{

    const bootcampId = req.params.id

    const updBootcamp =
        await bootcampModel.findByIdAndUpdate(
            bootcampId,
            req.body,
            {
                new:true
            }
            )

    res.json({
        success: true,
        data: updBootcamp
    })
})

//eliminar un bootcamp por id 
router.delete('/:id', async (req, res)=>{

    const bootcampId = req.params.id

    const delBootcamp =
        await bootcampModel.findByIdAndDelete(
            bootcampId
            )

    res.json({
        success: true,
        data: delBootcamp
    })
})

module.exports = router