const mongoose = require('mongoose')

//Definir un Schema
const BootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
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
        maxlength:[
            10,
            "El telefono debe de ser de 10 o menos digitos"
        ],
        minlength:[
            7,
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