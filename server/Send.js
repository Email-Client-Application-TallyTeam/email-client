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
          user: "ishitamittal2912@gmail.com",
          accessToken: "ya29.A0AVA9y1tlc7b7cfdKuCTIvsBaOZ924WGSGxJKJTnRIcstZcLAqbgDCbQc7554fHcsfIdn7GFnxKdBOMPg_0rRdtSjHSsvFlCRFuSZb0kxHO_JmKxSdBH-bZ4hm5qLt0C2RlyOXvJdE7hR2w37Q3rTVHvfWht_YUNnWUtBVEFTQVRBU0ZRRTY1ZHI4ZXdsQUhHM0NuYnJiVzV1RERUSUNhdw0163",
        },
      });
                const mailOption={
                    from:'ishitamittal@gmail.com', /*No diff if ou change this*/ 
                    to:"ishitamittal2912@gmail.com" ,/* can sent to diff servers */
                    
                    text:'Hey! trial successfull',
                    subject:"Sending mail from nodemailer",
                    html: '<h1>Trial is successful if mail reached :)</h1>'
                }
                const result = await transporter.sendMail(mailOption)
                
                return result.response
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