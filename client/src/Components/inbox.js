import React from 'react'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowUp,faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const inbox = () => {
    const [InboxMailList, setInboxMailList] = useState([{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com'},{date:'24may',sender:'roy@yahoo.com'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'}]);
    let history = useNavigate();
    const Viewpage=()=>{
       
        history('/view')
    }

    return (
        <div  id="inboxListBox">
            <div class="mb-2">
                <nav class="navbar-xl navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control lg" type="search" placeholder="Search Email" aria-label="Search" />
                    </form>
                </nav>
            </div>
            <div class="p-2 bg-warning" ></div>
            <ul class="list-group">
                {InboxMailList.map((mail, index)=>{
                    
                    return <li class="list-group-item" key= { index } >
                        <div>
                            <div class="row">
                                <div class="col">
                                    <h5>{mail.sender} </h5>
                                   
                                    <div class="text-warning">{mail.date} </div>
                                </div>
                                <div class="col"></div>
                                <div class="col"></div>
                                <button  class="btn  btn-sm col-1 buttom-customise" onClick={Viewpage} ><FontAwesomeIcon icon={faUsersViewfinder} /></button> 
                                <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faStar} /></button>
                                <button class="btn  btn-sm col-1 buttom-customise"><FontAwesomeIcon icon={faArrowUp} /></button>
                            </div>
                            
                        </div>
                    </li>;
                })}
            </ul>
            <div>
      

      <div style={{height: '155rem'}} />

      {/* 👇️ scroll to top on button click */}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: 'grey',
          color: 'white',
          textAlign: 'center',
          borderRadius: '50px',
          border:'none'
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
        </div>
        
    )
}

export default inbox