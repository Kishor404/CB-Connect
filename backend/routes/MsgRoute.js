const express = require("express")
const MsgRouter=express.Router()


const {CreateMsg,GetMsg,GetMsgS,PatchMsg,DeleteMsg}=require("../controllers/MsgController.js")

// CRED

// POST

MsgRouter.post("/",CreateMsg)

// GET

MsgRouter.get("/",GetMsg)

MsgRouter.get("/:id",GetMsgS)

// PATCH 

MsgRouter.patch("/:id",PatchMsg)

// DELETE 

MsgRouter.delete("/:id",DeleteMsg)

module.exports=MsgRouter