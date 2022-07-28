import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {GoogleLogout} from 'react-google-login';

function topbar() {
  const clientid="31675053631-ji1okm2bm45ppkqkm5f4rs2ju0nj18ji.apps.googleusercontent.com";
  const navigateTo = useNavigate();

  let user="";
  if(localStorage.getItem("userData")){
      const userData=localStorage.getItem("userData");
      console.log(JSON.parse(userData));
      user=JSON.parse(userData).profileObj;
  }

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
                    <div>
                      <button className="btn btn-secondary" type="button" aria-haspopup="true" aria-expanded="false">
                        <img src={user.imageUrl} alt="User Image" referrerpolicy="no-referrer" className="userImage"/>
                        {user.name}
                      </button> 
                    </div>        
                  } 
                  </div>
          </div>
          <div className="logoutBtn">
                  {
                     window.location.pathname==="/login"?null:
                     <GoogleLogout 
                      className='logout'
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