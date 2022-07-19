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
const axios = require("axios");
const qs = require("qs");


// router.get('/',(req,res) => {
//   res.sendFile(__dirname + '/index.html')
// })
router.post("/send", async (req, res) => {
    
 //.log(req.body.accessToken);
 
  async function sendMail (){
    
        // console.log(req.files.image);
        //   path = req.file
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
                            //f path: path
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
getAcceToken = async () => {
  var data = qs.stringify({
    client_id:
      "31675053631-ji1okm2bm45ppkqkm5f4rs2ju0nj18ji.apps.googleusercontent.com",
    client_secret: "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",
    refresh_token:
      "1//0gj3wvcem0u7PCgYIARAAGBASNwF-L9IreKjJ4Luh29vp0mrDe1-p90f9LBgx6pS30chD7gtiPjbQFpNNd1iWuO8pPkHGQJ7WZAM",
    grant_type: "refresh_token",
  });
  var config = {
    method: "post",
    url: "https://accounts.google.com/o/oauth2/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  let accessToken = "";

  await axios(config)
    .then(async function (response) {
      accessToken = await response.data.access_token;

      //console.log("Access Token " + accessToken);
    })
    .catch(function (error) {
      console.log(error);
    });

  return accessToken;
};

const accessToken =getAcceToken(); 

readGmailContent = async (messageId) => {
  var config = {
    method: "get",
    url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
    headers: {
      Authorization: `Bearer ${await accessToken}`,
    },
  };

  var data = {};

  await axios(config)
    .then(async function (response) {
      data = await response.data;
      //console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return data;
};


readGmailMessages = async () => {
  var config = {
    method: "get",
    url: `https://gmail.googleapis.com/gmail/v1/users/me/messages`,
    headers: {
      Authorization: `Bearer ${await accessToken}`,
    },
  };

  var data = {};

  await axios(config)
    .then(async function (response) {
      data = await response.data;
      //console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return data;
};






router.post("/mails", async (req,res)=>{
  const threadIdListObject = await readGmailMessages();
  //console.log(threadIdListObject);
  let count =1;
  threadIdListObject.messages.forEach(async (msg)=>{
    //console.log(msg.threadId);
    const message = await readGmailContent(msg.threadId);
    const snippets=message.snippet;
    //this.inboxList.push(snippets);
    console.log(snippets);

    // const encodedMessage = await message.payload.body.data;
    // console.log(encodedMessage);

    //const decodedStr = Buffer.from(encodedMessage, "base64").toString("ascii");

    //console.log(decodedStr);

        
      })
    })
    
      module.exports= router