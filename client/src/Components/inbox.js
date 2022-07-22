import React, { useEffect } from 'react'
import axios from 'axios';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowUp,faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/navbar';

const inbox = () => {
    let history = useNavigate();
   
    const [snippetList, setSnippetList] = useState([]);

    useEffect(()=>{
        async function fetchSnippet() {
            const currentAccess=localStorage.getItem('accessToken')
            const data= await axios.post("/getSnippet",{currentAccess});
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
            <div class="p-2 bg-warning" ></div>
            <ul class="list-group">
                {snippetList.map((mail, index)=>{
                    
                    return <li class="list-group-item" key= { index } >
                        <div>
                            <div class="row">
                                <div class="col">
                                    <h5>{mail.messageFrom[0].value} {mail.messageDate[0].value} </h5>
                                   
                                    <div class="text-warning">{mail.snippet}</div>
                                </div>
                                <button  class="btn  btn-sm col-1 buttom-customise" onClick={Viewpage}><FontAwesomeIcon icon={faUsersViewfinder} /></button> 
                                <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faStar} /></button>
                                <button class="btn  btn-sm col-1 buttom-customise"><FontAwesomeIcon icon={faArrowUp} /></button> 
                            </div>
                        </div>
                        </li>;
                    })}
                </ul>
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