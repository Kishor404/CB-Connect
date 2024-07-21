const express = require("express")
const LogRouter=express.Router()


const {GetLog}=require("../controllers/LogController.js")

// GET

LogRouter.get("/",GetLog)


module.exports=LogRouter