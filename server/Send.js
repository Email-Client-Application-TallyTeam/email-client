const express = require("express");
const router = express.Router();


const nodemailer = require('nodemailer');
const {google}= require('googleapis');
const { json } = require("express");


const REDIRECT_URI="https://www.youtube.com/watch?v=iUNkYi2ggvc";  /*isn't making diff */

router.post("/send", async (req, res) => {
    
 console.log(req.body.accessToken);
  
  async function sendMail (){
    try{
            
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: req.body.from ,
          accessToken: req.body.accessToken,
        },
      });
                const mailOption={
                    from: req.body.from , /*No diff if ou change this*/ 
                    to: req.body.to ,/* can sent to diff servers */
                    
                    text: req.body.message ,
                    subject: req.body.subject ,
                    html: `<h4> ${req.body.message} </h4>`
                }
                const result = await transporter.sendMail(mailOption)
                
                return result
    }
    catch(err){
            return err;
    }
}
sendMail()
.then((result)=> console.log("Mail sent successfully...",result))
.catch((err)=>{console.log("Not sent")});

 res.status(200).json("success"); 

})
module.exports=router;