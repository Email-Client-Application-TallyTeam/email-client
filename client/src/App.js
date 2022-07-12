import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/login";
import Topbar from "./Components/topbar";
import Navbar from './Components/navbar';
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

const Routing = () =>{
  return(
    <Routes>
      
       
      <Route path="/" element={<Inbox />} />
      <Route path="/login" element={<Login />} />
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
  return(
    <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routing />
    </BrowserRouter>
  )
}
export default App;
