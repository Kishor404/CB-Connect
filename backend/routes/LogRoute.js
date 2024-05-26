const express = require("express")
const LogRouter=express.Router()


const {CreateLog,GetLog,GetLogS,PatchLog,DeleteLog}=require("../controllers/LogController.js")

// CRED

// POST

LogRouter.post("/",CreateLog)

// GET

LogRouter.get("/",GetLog)

LogRouter.get("/:id",GetLogS)

// PATCH 

LogRouter.patch("/:id",PatchLog)

// DELETE 

LogRouter.delete("/:id",DeleteLog)

module.exports=LogRouter