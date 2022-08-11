import React, { useEffect }  from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowAltCircleLeft, faTrash} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/navbar';
import LoadInbox from './LoadInbox';

const ViewMail = () => {
  const location = useLocation();
  const navigate= useNavigate();
  const [loading,setLoading] = useState(true);
  const [currentMsg, setCurrentMsg] = useState({
    messageId:"",
    messageFrom:"",
    messageDate:"",
    messageSubject:"",
    messageBody:"",
    messageTo:""
  })
  const path=()=>{
    navigate('/')
   }

  useEffect(()=>{
      async function fetchSnippet() {
          const currentAccess=localStorage.getItem('accessToken')
          const data= await axios.post("/getSnippet",{currentAccess});
          //console.log(data.data);

          data.data.forEach(snip=>{
            if(snip.messageId==location.state.id){
              currentMsg.messageId=snip.messageId;
              currentMsg.snippet=snip.snippet;
              currentMsg.messageDate=snip.messageDate[0].value;
              currentMsg.messageSubject=snip.messageSubject[0].value;
              currentMsg.messageFrom=snip.messageFrom[0].value;
              currentMsg.messageBody=snip.messageBody;
              currentMsg.messageTo=snip.messageTo[0].value;
              console.log(currentMsg);
              setLoading(false);
            }
          })
          
        }
      fetchSnippet();
  },0)

  return (
    <div>
      <Navbar/>
      <div className="view-box">
          {loading? <LoadInbox/> :
              <div>
                  <div class="mb-3">  
                    <div className='sender'>
                      <button className="btn btn-xl col-1 inboxBtn" title='Back to inbox' onClick={path}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
                      <div className='subject'>{(currentMsg.messageSubject)}</div>
                      <p className='Inboxdate'>{ moment(currentMsg.messageDate.value).format("YYYY-MM-DD") } </p>
                      <div className='viewIcons'>
                          <button  class="viewIconCont1"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></button>
                          <button  class="viewIconCont2"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                      </div>
                      <div className='from'>{(currentMsg.messageFrom).match(/[\s\S]*?(?=<)/)}</div>
                      <div className='Email'>From :&#60;{(currentMsg.messageFrom).match(/(?<=\<).*/)}</div>
                      <div className='Email'>To : {(currentMsg.messageTo)}</div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <div className='viewsnippet'>{currentMsg.snippet}</div>
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <div className='body'>
                      {currentMsg.messageBody}
                    </div>
                  </div>
                </div>
            }
          </div>
  </div>
  )
}


export default ViewMail;