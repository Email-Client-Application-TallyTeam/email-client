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
const axios = require("axios");
const qs = require("qs");

let accessToken="";


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


// RECIEVING MAILS - Boilerplate Code
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
      console.log(data,"EMPty");
    })
    .catch(function (error) {
      console.log(error,"error");
    });

  return data;
};

// RECIEVING MAILS
router.post("/getSnippet", async (req,res)=>{
  accessToken=req.body.currentAccess;
  console.log(accessToken)
  const snippetsArray=[];
  const threadIdListObject = await readGmailMessages();

// console.log(threadIdListObject);

  threadIdListObject.messages.forEach(async (msg)=>{
      const message = await readGmailContent(msg.threadId);
      //console.log(JSON.stringify(message));
     
      //Populating message array
      const body=message.payload.parts[0].body.data;
      const arg=JSON.stringify(body);
      const decodedStr = Buffer.from(arg, "base64").toString("utf8");
      console.log(decodedStr);
      
      //Populating snippet array
      snippetsArray.push({
        messageId:message.id,
        snippet:message.snippet,
        messageFrom:message.payload.headers.filter((data)=>data.name==="From"?data.value:null),
        messageTo:message.payload.headers.filter((data)=>data.name==="To"?data.value:null),
        messageDate:message.payload.headers.filter((data)=>data.name==="Date"?data.value:null),
        messageSubject:message.payload.headers.filter((data)=>data.name==="Subject"?data.value:null),
        messageBody:decodedStr
      });

      if(snippetsArray.length == 50){
        console.log("passed");
        res.json(snippetsArray);
      }

  })
})




// RECIEVING DRAFTS
readDraftContent = async (messageId) => {
  var config = {
    method: "get",
    url: `https://gmail.googleapis.com/gmail/v1/users/me/drafts/${messageId}`,
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

readGmailDrafts = async () => {
  var config = {
    method: "get",
    url: `https://gmail.googleapis.com/gmail/v1/users/me/drafts`,
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

router.post("/getDraft", async (req,res)=>{
  accessToken=req.body.currentAccess;

  const DraftsnippetsArray=[];
  const draftArray=[];
  const DraftIdListObject = await readGmailDrafts();
  //console.log(DraftIdListObject, "Threads");

  DraftIdListObject.drafts.forEach(async (msg)=>{
      const draft = await readDraftContent(msg.id);
      //console.log(draft.message.payload.headers)
      //Populating snippet array
      DraftsnippetsArray.push({
        draftId:draft.id,
        Msnippet:draft.message.snippet,
        draftFrom:draft.message.payload.headers.filter((data)=>data.name==="From"?data.value:null),
        draftTo:draft.message.payload.headers.filter((data)=>data.name==="To"?data.value:null),
        draftDate:draft.message.payload.headers.filter((data)=>data.name==="Date"?data.value:null),
        draftSubject:draft.message.payload.headers.filter((data)=>data.name==="Subject"?data.value:null)
        
      });
     
      if(DraftsnippetsArray.length == 3){
        console.log("passed");
        res.json(DraftsnippetsArray);
      }
  })
})



//RECIEVING_STARRED 


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
      console.log(data,"EMPty");
    })
    .catch(function (error) {
      console.log(error,"error");
    });

  return data;
};

// RECIEVING MAILS
router.post("/getStaredSnippet", async (req,res)=>{
  accessToken=req.body.currentAccess;
  console.log(accessToken)
  const StaredsnippetsArray=[];
  const threadIdListObject = await readGmailMessages();

// console.log(threadIdListObject);
  threadIdListObject.messages.forEach(async (msg)=>{
      const message = await readGmailContent(msg.threadId);
      //console.log(JSON.stringify(message));

      //Populating message array
      const body=message.payload.parts[0].body.data;
      const arg=JSON.stringify(body);
      const decodedStr = Buffer.from(arg, "base64").toString("utf8");
      console.log(decodedStr);
      
      //Populating snippet array
      //Checking if message has field named starred
      let isStared =0;
      message.labelIds.forEach((label)=>{
        if(label=="STARRED"){
          isStared=1;
        }
      })
      if(isStared==1){
        StaredsnippetsArray.push({
          messageId:message.id,
          snippet:message.snippet,
          messageFrom:message.payload.headers.filter((data)=>data.name==="From"?data.value:null),
          messageTo:message.payload.headers.filter((data)=>data.name==="To"?data.value:null),
          messageDate:message.payload.headers.filter((data)=>data.name==="Date"?data.value:null),
          messageSubject:message.payload.headers.filter((data)=>data.name==="Subject"?data.value:null),
          messageBody:decodedStr
        });
      }


      

      if(StaredsnippetsArray.length == 8){
        console.log("passed");
        res.json(StaredsnippetsArray);
      }

  })
})




    
module.exports= router;