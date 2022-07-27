import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Login from "./Components/login";
import Topbar from "./Components/topbar";
import Inbox from './Components/inbox';
import Sent from './Components/sent'
import Stared from './Components/stared'
import Draft from './Components/draft'
import Trash from './Components/trash'
import Compose from './Components/compose'
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ViewMail } from './Components/viewMail';
import {gapi} from 'gapi-script';

const clientid="31675053631-ji1okm2bm45ppkqkm5f4rs2ju0nj18ji.apps.googleusercontent.com";


const Routing = () =>{
  const navigateTo=useNavigate();

  useEffect(()=>{
    const token =localStorage.getItem('accessToken');
    if(!token){
        navigateTo('/login');
    }
  },[])
  return(
    <Routes>
      <Route path="/" element={<Inbox />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/sent" element={<Sent />} />
      <Route path="/starred" element={<Stared />} />
      <Route path="/drafts" element={<Draft />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/compose" element={<Compose/>}/>
      <Route path="/view" element={<ViewMail/>}/>
    </Routes>
  )
}
const App = () => {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientid,
        scope:""
      })
    };
    gapi.load('client:auth2', start);
  },[])
  
  return(
    <BrowserRouter>
        <Topbar />
        <Routing />
    </BrowserRouter>
  )
}
export default App;
