const express = require("express");
const router = express.Router();
const moment= require("moment");
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
                              path: req.body.image
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

router.post("/getSnippet", async (req,res)=>{
  accessToken=req.body.currentAccess;
  console.log(accessToken)
  const snippetsArray=[];
  
  const threadIdListObject = await readGmailMessages();
  let count=0;
// console.log(threadIdListObject);
  threadIdListObject.messages.forEach(async (msg)=>{
      count++;
      const message = await readGmailContent(msg.threadId);
      //console.log(JSON.stringify(message));
     
      //Populating message array
      const body=message.payload.parts[0].body.data;
      const arg=JSON.stringify(body);
      decodedStr = Buffer.from(arg, "base64").toString("utf8");
        

      
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

      console.log(snippetsArray.length, count);
      if(snippetsArray.length === 70){
        console.log("passed");
        snippetsArray.sort(function(a,b){
          return new Date(b.messageDate[0].value) - new Date(a.messageDate[0].value);
        });
        res.json(snippetsArray);
      }

  })
})


//RECIEVING_STARRED 
router.post("/getStaredSnippet", async (req,res)=>{
  accessToken=req.body.currentAccess;
  let count = 0;
  console.log(accessToken)
  const StaredsnippetsArray=[];
  const threadIdListObject = await readGmailMessages();

  threadIdListObject.messages.forEach(async (msg)=>{
      count++;
      const message = await readGmailContent(msg.threadId);
      //console.log(JSON.stringify(message));


      //Populating message array
      const body=message.payload.parts[0].body.data;
      const arg=JSON.stringify(body);
      const decodedStr = Buffer.from(arg, "base64").toString("utf8");
      //console.log(decodedStr);
      
      //Checking if message has field named starred
      let isStared =0;
      message.labelIds.forEach((label)=>{
        if(label==="STARRED"){
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

      console.log(StaredsnippetsArray, count, threadIdListObject.length);

      if(StaredsnippetsArray.length == 1){
        console.log("passed");
        StaredsnippetsArray.sort(function(a,b){
          return new Date(b.messageDate[0].value) - new Date(a.messageDate[0].value);
        });
        res.json(StaredsnippetsArray);
      }
      else if(count == threadIdListObject.messages.length && StaredsnippetsArray.length==0){
        res.json(true);
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
  const DraftIdListObject = await readGmailDrafts();
  //console.log(DraftIdListObject, "Threads");
  let count= 0;
  DraftIdListObject.drafts.forEach(async (msg)=>{
      count++;
      const draft = await readDraftContent(msg.id);
      let decodedStr = "";

      if(draft.payload!==undefined){
        if(draft.payload.parts!==undefined){
          if(draft.payload.parts[0]!=undefined){
            const body=draft.payload.parts[0].body.data;
            const arg=JSON.stringify(body);
            decodedStr = Buffer.from(arg, "base64").toString("utf8");
          }
        }
      }
    
      //Populating snippet array
      DraftsnippetsArray.push({
        draftId:draft.id,
        Msnippet:draft.message.snippet,
        draftFrom:draft.message.payload.headers.filter((data)=>data.name==="From"?data.value:null),
        draftTo:draft.message.payload.headers.filter((data)=>data.name==="To"?data.value:null),
        draftDate:draft.message.payload.headers.filter((data)=>data.name==="Date"?data.value:null),
        draftSubject:draft.message.payload.headers.filter((data)=>data.name==="Subject"?data.value:null),
        draftBody: decodedStr
      });

      console.log(DraftsnippetsArray.length, count);
      if(DraftsnippetsArray.length === count){
        console.log("passed");

        DraftsnippetsArray.sort(function(a,b){
          return new Date(b.draftDate[0].value) - new Date(a.draftDate[0].value);
        });
        res.json(DraftsnippetsArray);
      }
  })
})


module.exports= router;