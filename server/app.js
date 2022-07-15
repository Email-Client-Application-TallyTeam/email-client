const express = require("express");
const app = express();
app.use(express.json());

const nodemailer = require('nodemailer');
const {google}= require('googleapis');
const { json } = require("express");


const REDIRECT_URI="https://www.youtube.com/watch?v=iUNkYi2ggvc";  /*isn't making diff */

app.use(require('./Inbox'));
app.use(require('./Send'));
 app.listen(8000, () => {
  console.log("server connected");
});