const PerformanceModel=require("../models/PerformanceModel.js")

const mongoose=require("mongoose")

// CRED

// CREATE

const CreatePerformance=async (req,res)=>{
    const {RegNo,Score}=req.body
    try{
        const data=await PerformanceModel.create({RegNo,Score})
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// GET

const GetPerformance=async (req,res)=>{
    const data=await PerformanceModel.find({})
    res.status(200).json(data)
}
const GetPerformanceS=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await PerformanceModel.findById(id)

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
    
}

// PATCH

const PatchPerformance=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await PerformanceModel.findOneAndUpdate({_id:id},{...req.body})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
}

// DELETE

const DeletePerformance=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await PerformanceModel.findOneAndDelete({_id:id})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)

}

module.exports={CreatePerformance,GetPerformance,GetPerformanceS,PatchPerformance,DeletePerformance}