const mongoose=require("mongoose")

const Schema=mongoose.Schema

const NewsModel=new Schema({
    Header:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        require:true
    },
    Links:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("NewsModel",NewsModel)