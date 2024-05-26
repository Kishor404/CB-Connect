const mongoose=require("mongoose")

const Schema=mongoose.Schema


const MsgModel=new Schema({
    From:{
        type:String,
        required:true
    },
    Msg:{
        type:[[String]],
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("MsgModel",MsgModel)