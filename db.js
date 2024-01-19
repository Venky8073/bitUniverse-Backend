const mongoose=require("mongoose")

// require("dotenv").config()/

const connection=mongoose.connect("mongodb+srv://venkateshgangoji:venky@cluster0.gdcxd9a.mongodb.net/bitUniverse?retryWrites=true&w=majority")

module.exports={connection}