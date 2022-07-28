import React, { useEffect }  from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faInbox, faArrowAltCircleRight, faTrash, faPager, faPlus, faBackward, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/navbar';
import LoadInbox from './LoadInbox';

export const Viewdemo = () => {
  const location = useLocation();
  const [loading,setLoading] = useState(true);
  const [currentMsg, setCurrentMsg] = useState({
    messageId:"",
    messageFrom:"",
    messageDate:"",
    messageSubject:"",
    messageBody:"",
    messageTo:""
})

  useEffect(()=>{
      async function fetchSnippet() {
          const currentAccess=localStorage.getItem('accessToken')
          const data= await axios.post("/getSnippet",{currentAccess});
          console.log(data.data);

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
          
              <div>
                  <div class="mb-3">   
                  <div className='sender'>
                    <div title='Back to inbox'><FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon></div>
                  <div className='subject'>This is subject sample for demo</div>
                  
                
                  <div className="viewIcons">
                    <button  class="star"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></button>
                    <button  class="star"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                    </div>
                    <div className='Inboxdate'>2021-july-28</div>
                    <div className='from'>ishita mittal</div>
                    <div className='Email'>From : ishita@gmail.com</div>
                    <div className='Email'>To : ishita@gmail.com</div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"></label>
                  <div className='viewsnippet'> Some apps and devices use less secure sign-in technology, which makes your account vulnerable. Learn more</div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"></label>
                  <div className='body'>
                  Some apps and devices use less secure sign-in technology, which makes your account vulnerable. You can turn off access for these apps, which we recommend, or turn it on if you want to use them despite the risks. Google will automatically turn this setting OFF if it’s not being used.
This setting is no longer available. Learn more
This setting is no longer available. Learn more
Some apps and devices use less secure sign-in technology, which makes your account vulnerable. You can turn off access for these apps, which we recommend, or turn it on if you want to use them despite the risks. Google will automatically turn this setting OFF if it’s not being used.
This setting is no longer available. Learn more
                  </div>
                </div>
              </div>
           
        </div>
    </div>
  )
}
