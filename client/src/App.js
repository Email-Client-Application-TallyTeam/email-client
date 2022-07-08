import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/login";
import Home from "./Components/home";
import Topbar from "./Components/topbar";
import Navbar from './Components/navbar';
import Compose from './Components/compose'
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Routing = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/compose" element={<Compose/>}/>
    </Routes>
  )
}
const App = () => {
  return(
    <BrowserRouter>
        <Navbar />
        <Routing />
    </BrowserRouter>
  )
}
export default App;
