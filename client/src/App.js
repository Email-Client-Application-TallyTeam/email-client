import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/login";
import Home from "./Components/home";
import Topbar from "./Components/topbar";
import Navbar from './Components/navbar';
import Inbox from './Components/inbox';
import Sent from './Components/sent'
import Stared from './Components/stared'
import Draft from './Components/draft'
import Trash from './Components/trash'
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Routing = () =>{
  return(
    <Routes>
      <Route path="/" element={<Inbox />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sent" element={<Sent />} />
      <Route path="/starred" element={<Stared />} />
      <Route path="/drafts" element={<Draft />} />
      <Route path="/trash" element={<Trash />} />
    </Routes>
  )
}
const App = () => {
  return(
    <BrowserRouter>
        <Navbar />
        <Topbar />
        <Routing />
    </BrowserRouter>
  )
}
export default App;
