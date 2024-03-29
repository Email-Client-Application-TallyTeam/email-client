import React,{useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/navbar';
import Loading from '../Components/loading'
function Compose() {
  const location = useLocation();
  let navigate= useNavigate();
  let locationDataTo='';
  let locationDataSubj='';
  let locationData='';

  if(location.state!=null){
    if(location.state.mailData.draftTo[0]!=null){
      locationDataTo=location.state.mailData.draftTo[0].value;
    }
    if(location.state.mailData.draftSubject[0]!=null){
      locationDataSubj=location.state.mailData.draftSubject[0].value;
    }
    if(location.state.mailData.Msnippet!=null){
      locationData=location.state.mailData.Msnippet;
    } 
  }

  const [attach,setAttach]= useState("");
  const [mail,setMail] = useState(
    {
      from:"",to:"",subject:"", message:"",image: "",accessToken:""
    }
  )
  const[loading,setLoading] = useState(false);
  const x= localStorage.getItem('userData');
  const a = JSON.parse(x);
  //console.log(a.wt.Ad);
  const[file1,setFile1]= useState("")
  const uploadFile=(e)=>{
        setFile1(e.target.files[0]);
       console.log(e.target.value)
        setAttach(e.target.value);
      // axios.get("https://cloudinary.com/console/c-00a7fa10a33a9f6cf645f1f1744df9/media_library/folders/home").then((res)=>{
      //   console.log(res);
      // })
      // .catch((err)=>{
      //   console.log(err);
      // })
  }
  let name,value;
  
  const handleInput=(e)=>{
    name= e.target.name;
    value= e.target.value;
    mail.from = a.profileObj.email
    mail.accessToken= localStorage.getItem('accessToken')
    setMail({...mail,[name]:value})
   // console.log({[name]:value});

  }
  const sendMail= async (e)=>{
    if(document.getElementsByClassName("border_red")!=null){
      await document.getElementById("toField").classList.remove("border_red");
      document.getElementById("exampleFormControlTextarea1").classList.remove("border_red");
    }
    
    if(mail.to === ""){
      await document.getElementById("toField").classList.add("border_red");
      window.alert("Empty credentials! Please fill the details.");
      if(mail.message!=="")
      return;
    }
    if(mail.message ===""){
      await document.getElementById("exampleFormControlTextarea1").classList.add("border_red");
      if(mail.to!=="")
        window.alert("Empty credentials! Please fill the details.");
        
        return;
    }
    setLoading(true)
   
    const formData = new FormData();
    formData.append("file",file1);
    console.log(file1);
    formData.append("upload_preset","vuejelu8");
    await axios.post("https://api.cloudinary.com/v1_1/dtengisxr/image/upload", formData).then((res)=>{
      console.log("success",res.data.secure_url);
      console.log(res.data.secure_url)
      mail.image=res.data.secure_url;
    //  setMail({...mail,["image"]:res.data.secure_url});
      console.log(mail);
    }).catch(function (error) {
      console.log("no  attach",error);
    });
  try{
  const data=await axios.post("/send",mail)
   console.log(data.status);
  if(data.status==200){

    window.alert("Mail sent successfully");
    console.log("mail add "+ mail.image);
    setLoading(false);
   }
   else{
    window.alert("Oops! Mail was not sent. Please try again later");
    setLoading(false);
   }
      setMail({["to"]:"",["subject"]:"",["message"]:"",["image"]:""});
     console.log(data);
   
     }
     catch(err){
     window.alert("Server not responding")
     setMail({["to"]:"",["subject"]:"",["message"]:"",["image"]:""});
     setLoading(false);

}

     
      
       //axios.post()
  }
  return (
    <div className="composeCont">
      <Navbar/>
    <div className="compose-box">
      <div class="mb-3">
        <label for="exampleFormControlInput1" className="form-label">From:  </label>
        {a.profileObj.email}
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" className="form-label" >To:</label>
        <input type="email" className="form-control" id='toField'  name='to'
         value={mail.to || '' || locationDataTo} 
         onChange={(e)=>handleInput(e)} placeholder=" "/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Subject:</label>
        <input type="text" className="form-control" id="exampleFormControlInput1"  name='subject' 
        value={mail.subject || '' || locationDataSubj}  
        onChange={(e)=>handleInput(e)} placeholder=" "/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" name='message' 
        value={mail.message || '' || locationData} 
        onChange={(e)=>handleInput(e)} rows="9"></textarea>
      </div>
      {loading? <Loading/>: <button  type="submit" class=" send btn btn-primary mb-3" onClick={sendMail}>Send</button>}
      <input type="file"  name='image' value={attach || '' } onChange={uploadFile} id="inputGroupFile01"  ></input>
      <button type="submit" class=" draft btn btn-primary mb-3 " onClick={uploadFile}>Save as draft</button>
    </div>
    </div>
  )
}

export default Compose