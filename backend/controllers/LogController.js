const LogModel=require("../models/LogModel.js")

const mongoose=require("mongoose")

// CRED

// CREATE

const CreateLog=async (req,res)=>{
    const {Name,StdReg,Password}=req.body
    try{
        const data=await LogModel.create({Name,StdReg,Password})
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// GET

const GetLog=async (req,res)=>{
    const data=await LogModel.find({})
    res.status(200).json(data)
}
const GetLogS=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await LogModel.findById(id)

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
    
}

// PATCH

const PatchLog=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await LogModel.findOneAndUpdate({_id:id},{...req.body})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
}

// DELETE

const DeleteLog=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await LogModel.findOneAndDelete({_id:id})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)

}

module.exports={CreateLog,GetLog,GetLogS,PatchLog,DeleteLog}