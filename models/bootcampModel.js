const mongoose = require('mongoose')

//Definir un Schema
const BootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:[true, "Nombre ya existe"], 
        required:[
            true,
             "El nombre es requerido"
            ]
    },
    phone:{
        type: Number,
        required:[
            true,
            "Telefono requerido"
        ],
        max:[
            999999999,
            "El telefono debe de ser de 10 o menos digitos"
        ],
        min:[
            1111111,
            "El telefono debe tener almenos 7 digitos"
        ]
    },

    address:{
        type: String,
        required: [
            true, "La direccion es requerida"
        ]
    },
    topics:{
        type:[String],
        enum: [
            "Back end",
            "Front end",
            "Devops",
            "AI"
        ]
    },

    createdAt:Date

})

module.exports = mongoose.model("Bootcamp", BootcampSchema)