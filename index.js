const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { bitModel } = require("./bituviverse.model")

const app=express()

app.use(cors())

app.use(express.json())

app.get('/',async(req,res)=>{
    try{
        const bits=await bitModel.find()
        res.send(bits)
    }catch(err){
        res.send(err)
    }
})

app.post("/add",async(req,res)=>{
    try{
        const new_bit=new bitModel(req.body)
        await new_bit.save()
        res.status(200).send({"msg":"contact added","contact":new_bit})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

app.listen(4500,async()=>{
    try{
        await connection
        console.log("connected to server")
        console.log("running on 4500")
    }catch(err){
        console.log(err)
    }
})