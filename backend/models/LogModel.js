const mongoose=require("mongoose")

const Schema=mongoose.Schema


const LogModel=new Schema({
    Name:{
        type:String,
        require:true
    },
    StdReg:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Phone:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports=mongoose.model("LogModel",LogModel)