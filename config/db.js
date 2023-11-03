const mongoose = require('mongoose')

const conectarDB = async() =>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDb Conectado".bgBlue)
}

module.exports= conectarDB