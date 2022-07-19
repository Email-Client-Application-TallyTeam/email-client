
const express = require("express");
const router = express.Router();
router.post("/mails", async (req,res)=>{
  
console.log("hi in inbox");
   
    res.status(200).json("mails view");
    
     })
     module.exports= router;