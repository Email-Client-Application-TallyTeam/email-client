import React, { useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import LoadInbox from './LoadInbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowUp,faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/navbar';

const inbox = () => {
    let navigate= useNavigate();
   
    const [snippetList, setSnippetList] = useState([]);
    const [searchSnippet, setSearchSnippet] = useState([]);
    const [loading,setLoading] = useState(true);
    const [searchLoad, setSearchLoad] = useState(false);
    const [searchObj, setSearchObj] = useState("");

    useEffect(()=>{
        async function fetchSnippet() {
            const currentAccess=localStorage.getItem('accessToken')
            const data= await axios.post("/getSnippet",{currentAccess});
            setLoading(false);
            setSearchLoad(false);
            setSnippetList(data.data);
          }
        fetchSnippet();
    },10)

    const Viewpage= async(messageId)=>{
        navigate('/view',{state:{ id: messageId} });
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        let count=0;

        snippetList.forEach((msg)=>{
            count++;
            const msgName = ((msg.messageFrom[0].value).match(/[\s\S]*?(?=<)/))[0];
            const msgMail = ((msg.messageFrom[0].value).match(new RegExp('<' + "(.*)" + '>')))[1];

            if( (msgName.trim() === searchObj) || (msgMail.trim() === searchObj) ){
                searchSnippet.push(msg);
            }

            if(count==snippetList.length){
                setSearchSnippet([]);
                setSearchSnippet(searchSnippet);
                console.log(searchSnippet);
                setSearchLoad(true);
            }
        });

    }   
  
    return (
       <div className="inboxCont">
        <Navbar/>
        <div  id="inboxListBox">
            <div class="mb-2">
                <nav class="navbar-xl navbar-light bg-light">
                    <form class="form-inline searchBar">
                        <input class="form-control" type="search" placeholder="Search Email" 
                        aria-label="Search" onChange={e=>setSearchObj(e.target.value)}/>
                        <button type="submit" class="btn btn-md bg-info" onClick={handleSubmit}>Search</button>
                    </form>
                </nav>
            </div>
            <div class="p-2 bg-info"></div>
                {
                loading?
                <LoadInbox/>
                :
                <ul class="list-group">
                    {
                        !searchLoad ?
                        snippetList.map((mail, index)=>{
                            return <li class="list-group-item" key= { index } >
                                        <div>
                                            <div class="row">
                                                <div class="col-11 messageCont">
                                                    <div className="messageHead">
                                                        <h6 className='from' >{(mail.messageFrom[0].value).match(/[\s\S]*?(?=<)/)}</h6>
                                                        <p className='Inboxdate'>{ moment(mail.messageDate[0].value).startOf('hour').fromNow() } </p>
                                                    </div>
                                                    <div className='snippet'>
                                                        <p><strong>{mail.messageSubject[0].value}</strong>&nbsp;-&nbsp;{mail.snippet}</p>
                                                    </div>
                                                </div>
                                                <button className="btn  btn-xs col-1 inboxBtn" title="View" style={{marginLeft:5}} onClick={e=>Viewpage(mail.messageId)}>
                                                    <FontAwesomeIcon icon={faUsersViewfinder} />
                                                </button> 
                                                <button className="btn  btn-xs col-1 inboxBtn" title="Star"><FontAwesomeIcon icon={faStar} /></button>
                                                <button className="btn  btn-xs col-1 inboxBtn" title="Reply"><FontAwesomeIcon icon={faArrowUp} /></button> 
                                            </div>
                                        </div>
                                    </li>;
                        })
                        :
                        searchSnippet.map((mail, index)=>{
                            return <li class="list-group-item" key= { index } >
                                        <div>
                                            <div class="row">
                                                <div class="col-11 messageCont">
                                                    <div className="messageHead">
                                                        <h6 className='from' >{(mail.messageFrom[0].value).match(/[\s\S]*?(?=<)/)}</h6>
                                                        <p className='Inboxdate'>{ moment(mail.messageDate[0].value).startOf('hour').fromNow() } </p>
                                                    </div>
                                                    <div className='snippet'>
                                                        <p><strong>{mail.messageSubject[0].value}</strong>&nbsp;-&nbsp;{mail.snippet}</p>
                                                    </div>
                                                </div>
                                                <button className="btn  btn-xs col-1 inboxBtn" title="View" style={{marginLeft:5}} onClick={e=>Viewpage(mail.messageId)}>
                                                    <FontAwesomeIcon icon={faUsersViewfinder} />
                                                </button> 
                                                <button className="btn  btn-xs col-1 inboxBtn" title="Star"><FontAwesomeIcon icon={faStar} /></button>
                                                <button className="btn  btn-xs col-1 inboxBtn" title="Reply"><FontAwesomeIcon icon={faArrowUp} /></button> 
                                            </div>
                                        </div>
                                    </li>;
                        })
                       
                    }
                </ul>
                }
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
                    }}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </div>
        </div>
    )
}

export default inbox