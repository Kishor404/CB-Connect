const express = require("express")
const PerformanceRouter=express.Router()


const {CreatePerformance,GetPerformance,GetPerformanceS,PatchPerformance,DeletePerformance}=require("../controllers/PerformanceController.js")

// CRED

// POST

PerformanceRouter.post("/",CreatePerformance)

// GET

PerformanceRouter.get("/",GetPerformance)

PerformanceRouter.get("/:id",GetPerformanceS)

// PATCH 

PerformanceRouter.patch("/:id",PatchPerformance)

// DELETE 

PerformanceRouter.delete("/:id",DeletePerformance)

module.exports=PerformanceRouter