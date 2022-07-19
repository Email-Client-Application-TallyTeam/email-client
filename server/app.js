const express = require("express");
const app = express();
app.use(express.json());




const REDIRECT_URI="https://www.youtube.com/watch?v=iUNkYi2ggvc";  /*isn't making diff */

app.use(require('./router/auth'));

 app.listen(8000, () => {
  console.log("server connected");
});