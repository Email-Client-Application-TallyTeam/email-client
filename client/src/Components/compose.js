import React,{useState} from 'react';
import axios from 'axios';

function Compose() {
  const [mail,setMail] = useState(
    {
      to:"",subject:"", message:"",file:""
    }
  )
  let name,value;
  const handleInput=(e)=>{
    name= e.target.name;
    value= e.target.value;
    setMail({...mail,[name]:value})
    
   // console.log({[name]:value});
  }
  const sendMail= async (e)=>{
    const data=await axios.post("/send",mail)
   
     setMail({["to"]:"",["subject"]:"",["message"]:"",["file"]:""});
     console.log(mail);
      //axios.post()
  }
  return (
    <div className="compose-box">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">From:</label>
        <input type="email" class="form-control"  name='from' value={mail.from || ''} onChange={(e)=>handleInput(e)} placeholder=" "/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">To:</label>
        <input type="email" class="form-control"  name='to' value={mail.to || ''} onChange={(e)=>handleInput(e)} placeholder=" "/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Subject:</label>
        <input type="text" class="form-control" id="exampleFormControlInput1"  name='subject' value={mail.subject || ''} onChange={(e)=>handleInput(e)} placeholder=" "/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" name='message' value={mail.message || ''} onChange={(e)=>handleInput(e)} rows="9"></textarea>
      </div>
      <button type="submit" class=" send btn btn-primary mb-3" onClick={sendMail}>Send</button>
      <input type="file" name='file' value={mail.file} onChange={handleInput} id="inputGroupFile01"></input>
      <button type="submit" class=" draft btn btn-primary mb-3 ">Save as draft</button>
    </div>
  )
}

export default Compose