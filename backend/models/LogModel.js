const mongoose=require("mongoose")

const Schema=mongoose.Schema


const LogModel=new Schema({
    Name:{
        type:String,
        require:true
    },
    RegNo:{
        type:String,
        require:true,
        unique:true
    },
    DOB:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model("LogModel",LogModel)