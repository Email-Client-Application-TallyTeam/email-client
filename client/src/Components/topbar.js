import React from 'react';
import { useNavigate } from 'react-router-dom';
import {GoogleLogout} from 'react-google-login';

function topbar() {
  const clientid="31675053631-ji1okm2bm45ppkqkm5f4rs2ju0nj18ji.apps.googleusercontent.com";
  const navigateTo = useNavigate();

  const onSuccess = ()=>{
    console.log("Logout Successfull");
    localStorage.clear();
    navigateTo('/login');
  }
  return (
    <div className="navbar bg-dark fixed-top topbar">
      <div className="leftBar">
        <a className="navbar-brand text-white" href="#">TallyMail</a>
      </div>
      <div className="rightBar">
          <div className="nav-item active">
            <a className="nav-link text-white" href="#">About</a>
          </div>
          <div className="nav-item">
            <a className="nav-link text-white" href="#">Support</a>
          </div>
          <div className="nav-item">
                  <div className="dropdown">
                  {
                    window.location.pathname==="/login"?null:
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">UserAccount1</button>         
                  } 
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">UserAccount1</a>
                      <a className="dropdown-item" href="#">Useraccount2</a>
                      <a className="dropdown-item" href="#">Add another account</a>
                    </div>
                  </div>
          </div>
          <div className="logoutBtn">
                  {
                     window.location.pathname==="/login"?null:
                     <GoogleLogout 
                      clientId={clientid}
                      buttonText={"Logout"}
                      onLogoutSuccess={onSuccess}
                    />
                  }    
          </div>
      </div>
    </div>
  )
}

export default topbar