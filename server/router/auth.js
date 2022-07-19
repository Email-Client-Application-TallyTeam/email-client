const express = require("express");
const router = express.Router();
const multer = require('multer');
const fs= require ('fs')
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser')
const {google}= require('googleapis');
const { json } = require("express");
var path
router.use(bodyParser.json());
const REDIRECT_URI="https://www.youtube.com/watch?v=iUNkYi2ggvc";  /*isn't making diff */


// router.get('/',(req,res) => {
//   res.sendFile(__dirname + '/index.html')
// })
router.post("/send", async (req, res) => {
    
 //.log(req.body.accessToken);
 
  async function sendMail (){
    
        console.log(req.files.image);
          path = req.file
          // console.log(to)
          // console.log(subject)
          // console.log(body)
         
          console.log(req.files)

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
                          attachments: [
                            {
                             path: path
                            }
                         ],
                          html: `<h4> ${req.body.message} </h4>`
                      }
                      //const result = await transporter.sendMail(mailOption)
                       transporter.sendMail(mailOption,function(error, response){
                          if(error){
                              res.status(202).json("error")
                              console.log("Here is error"+ error);
                              
                          }else{
                              console.log(response);
                              res.status(200).json("success")
                          }
                      })
        }
        catch(err){
          return err;
  }
     
                //return result.response
    
    
}

 sendMail()
//     .then((result)=>{
//         console.log("Mail sent successfully...",result)
//         // if(result=="250 2.0.0 OK  1657899849 k4-20020a170902ce0400b0016c4e4538c9sm3677066plg.7 - gsmtp")
//         // res.status(200).json("mail  sent")
//         // else{
//         //     res.status(400).json("mail not sent");
//         // }
//     } )
//     .catch((err)=>{console.log("Not sent")});
    
    //  res.status(200).json("mail"); 

})

// RECIEVING MAILS
router.post("/mails", async (req,res)=>{
  
    console.log("hi in inbox");
       
        res.status(200).json("mails view");
        
         })
         module.exports= router;