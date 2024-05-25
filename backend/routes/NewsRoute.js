const express = require("express")
const NewsRouter=express.Router()


const {CreateNews,GetNews,GetNewsS,PatchNews,DeleteNews}=require("../controllers/NewsController.js")

// CRED

// POST

NewsRouter.post("/",CreateNews)

// GET

NewsRouter.get("/",GetNews)

NewsRouter.get("/:id",GetNewsS)

// PATCH 

NewsRouter.patch("/:id",PatchNews)

// DELETE 

NewsRouter.delete("/:id",DeleteNews)

module.exports=NewsRouter