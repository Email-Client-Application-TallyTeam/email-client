import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Components/login";
import Home from "./Components/home";
import Topbar from "./Components/topbar";
import './App.css';

const Routing = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
const App = () => {
  return(
    <BrowserRouter>
        <Topbar />
        <Routing />
    </BrowserRouter>
  )
}
export default App;
