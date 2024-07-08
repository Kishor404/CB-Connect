const mongoose=require("mongoose")

const Schema=mongoose.Schema


const PerformanceModel=new Schema({
    RegNo:{
        type:String
    },
    Score:{
        type:[[String,String,String]]
    }

    // Subject$Mark|Subject$Mark

},{timestamps:true})

module.exports=mongoose.model("PerformanceModel",PerformanceModel)