const MsgModel=require("../models/MsgModel.js")

const mongoose=require("mongoose")

// CRED

// CREATE

const CreateMsg=async (req,res)=>{
    const {From,Msg}=req.body
    try{
        const data=await MsgModel.create({From,Msg})
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// GET

const GetMsg=async (req,res)=>{
    const data=await MsgModel.find({})
    res.status(200).json(data)
}
const GetMsgS=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await MsgModel.findById(id)

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
    
}

// PATCH

const PatchMsg=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await MsgModel.findOneAndUpdate({_id:id},{...req.body})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
}

// DELETE

const DeleteMsg=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await MsgModel.findOneAndDelete({_id:id})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)

}

module.exports={CreateMsg,GetMsg,GetMsgS,PatchMsg,DeleteMsg}