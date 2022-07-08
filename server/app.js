const express = require("express");
const app = express();
app.use(express.json());

//const nodemailer = require('nodemailer');
const {google}= require('googleapis');
const CLIENT_ID ="663864417756-dps5ba9h24jfg1mltse71rb152o5rnpr.apps.googleusercontent.com";
const CLIENT_SECRET="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";
const REFRESH_TOKEN="1//04Q4kypQzckqMCgYIARAAGAQSNwF-L9Ird8Ys30w6CMvyPoM4gbKL14D4zsBSrQgkSIj8v2caaSHXYUsqUFKi0a1ZGOU3qn5NISc";
// const REDIRECT_URI="https://developers.google.com/oauthplayground";
const REDIRECT_URI="https://www.youtube.com/watch?v=iUNkYi2ggvc";  /*isn't making diff */
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

app.post("/send", async (req, res) => {
 console.log(req.body);
 res.status(200).json("blog deleted"); 

})
app.listen(8000, () => {
    console.log("server connected");
  });