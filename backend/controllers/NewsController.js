const NewsModel=require("../models/NewsModel.js")

const mongoose=require("mongoose")

// CRED

// CREATE

const CreateNews=async (req,res)=>{
    const {Header,Content,Link}=req.body
    try{
        const data=await NewsModel.create({Header,Content,Link})
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// GET

const GetNews=async (req,res)=>{
    const data=await NewsModel.find({})
    res.status(200).json(data)
}
const GetNewsS=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await NewsModel.findById(id)

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
    
}

// PATCH

const PatchNews=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await NewsModel.findOneAndUpdate({_id:id},{...req.body})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)
}

// DELETE

const DeleteNews=async (req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Error:"No Such Data"})
    }

    const data=await NewsModel.findOneAndDelete({_id:id})

    if (!data){
        return res.status(404).json({Error:"No Such Data"})
    }
    res.status(200).json(data)

}

module.exports={CreateNews,GetNews,GetNewsS,PatchNews,DeleteNews}