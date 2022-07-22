import React, { useEffect } from 'react'
import axios from 'axios';

import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import LoadInbox from './LoadInbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowUp,faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/navbar';

const inbox = () => {
    let history = useNavigate();
   
    const [snippetList, setSnippetList] = useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        async function fetchSnippet() {
            const currentAccess=localStorage.getItem('accessToken')
            const data= await axios.post("/getSnippet",{currentAccess});
            setLoading(false);
            console.log(data.data);
            setSnippetList(data.data);
          }
        fetchSnippet();
    },0)

    const Viewpage= async()=>{
        // const data=await axios.post("/getSnippet",{currentAccess});
        // console.log(data);
        history('/view')
    }
    
    return (
       <div className="inboxCont">
       <Navbar/>
    
        <div  id="inboxListBox">
            <div class="mb-2">
                <nav class="navbar-xl navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control lg" type="search" placeholder="Search Email" aria-label="Search" />
                    </form>
                </nav>
            </div>
            <div class="p-2 bg-info" ></div>
            {loading?<LoadInbox/>:
            <ul class="list-group">
                {snippetList.map((mail, index)=>{
                    console.log(mail[0]);
                    return <li class="list-group-item" key= { index } >
                        <div>
                            <div class="row">
                                <div class="col ">
                                    <div>
                                    <h5 className='from' >{mail.messageFrom[0].value}  </h5>
                                    <p className='Inboxdate'>{ mail.messageDate[0].value}</p>
                                    </div>
                                    <div className='snippet'>
                                        {mail.snippet}
                                        </div>
                                </div>
                                <button  class="btn  btn-sm col-1 buttom-customise" onClick={Viewpage}><FontAwesomeIcon icon={faUsersViewfinder} /></button> 
                                <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faStar} /></button>
                                <button class="btn  btn-sm col-1 buttom-customise"><FontAwesomeIcon icon={faArrowUp} /></button> 
                            </div>
                        </div>
                        </li>;
                    })}
                </ul>}
                <div>
        

        <div style={{height: '155rem'}} />

                {/*  scroll to top on button click */}
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
        </div>
    )
}

export default inbox