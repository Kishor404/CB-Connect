
const mongoose=require("mongoose")

// CRED

const { parse } = require("csv-parse");
const fs = require("fs");

const path = "./Log.csv";

let logs=[]

fs.createReadStream(path)
  .pipe(parse({ delimiter: ",", from_line: 1 }))
  .on("data", function (row) {
    logs.push(row)
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("Log read successful ...");
  });

// GET

const GetLog=async (req,res)=>{
    const data=logs;
    res.status(200).json(data)
}


module.exports={GetLog}