const mongoose=require("mongoose")

const BitSchema=mongoose.Schema({
    img: String,
    tokenName: String,
    symbol: String,
    decimals: Number,
    marketcap: Number,
    chain: String,
},{
    versionKey:false
})

const bitModel=mongoose.model('coin',BitSchema)

module.exports={bitModel}