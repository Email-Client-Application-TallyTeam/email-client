import React from 'react';
import {useNavigate} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {gapi} from "gapi-script";
import Icon from './Icon';

const login = ()=>{
  const navigateTo = useNavigate();

  const googleSuccess = (res)=>{
      console.log(res);
      navigateTo('/');
      localStorage.setItem("userData", JSON.stringify(res));
      localStorage.setItem("accessToken", gapi.auth.getToken().access_token);
      setTimeout(()=>{
        window.location.reload();
      },1000);
  }

  const googleFailure =(error)=>{
      console.log(error);
      console.log("Google Sign In Failed")
  } 

  const clientid="31675053631-ji1okm2bm45ppkqkm5f4rs2ju0nj18ji.apps.googleusercontent.com";
  return (
    <div className="loginBox">
        <div className="loginCont">
          <div className="loginHeader">
             <p>LOGIN</p>
          </div>
          <div className="loginBody">
              <p className="loginBodyPara1">
                Hello User 
                <span class="wave">👋</span>
              </p>
          </div>
          <div className="googleAuth">
                <GoogleLogin 
                    clientId={clientid}
                    scope="https://mail.google.com/"
                    render={(renderProps)=>(
                        <button
                            className="oAuthBtn"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            variant="contained">
                            <Icon/>
                            Log In With Google
                        </button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
          </div>
        </div>
    </div>
  )
}

export default login;



