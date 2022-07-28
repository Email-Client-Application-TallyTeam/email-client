import React,{useEffect} from 'react'
import { useState } from 'react';
import Navbar from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SvgFontIcons from 'react-svg-font-icons';
import { faArrowRight,faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LoadInbox from './LoadInbox';
import moment from 'moment';


const draft = () => {
    const [DraftList, setDraftList] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        async function fetchDraft() {
            const currentAccess=localStorage.getItem('accessToken')
            const data= await axios.post("/getDraft",{currentAccess});
            console.log(data.data);
            setDraftList(data.data);
            setLoading(false);
          }
        fetchDraft();
    },0)

    return (
        <div className='draftCont'>
            <Navbar/>
        <div  id="draftListBox">
            <div class="mb-2">
                <nav class="navbar-xl navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control lg" type="search" placeholder="Search Draft" aria-label="Search" />
                    </form>
                </nav>
            </div>
            <div class="p-2 bg-info" ></div>
            {loading?<LoadInbox/>:
            <ul class="list-group">
                {DraftList.map((mail, index)=>{
                    return (<li class="list-group-item" key= { index }>
                        <div>
                            <div class="row">
                                <div class="col">
                                    <div className="messageHead">
                                        {mail.draftTo[0]===undefined?<div>No from field</div>:<h6 className='from' >{mail.draftTo[0].value} </h6>}
                                        {mail.draftDate[0]===undefined?<div>No date spacified </div> :<p className='Inboxdate'>{ moment(mail.draftDate[0].value).startOf('hour').fromNow() } </p>}
                                    </div>
                                    <div className='snippet'>
                                        <p>&nbsp;-&nbsp;{mail.Msnippet}</p>
                                    </div>

                                </div>
                                <button class="btn  btn-xs col-1 inboxBtn"><FontAwesomeIcon icon={faTrash} /></button>
                                <button class="btn  btn-xs col-1 inboxBtn"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div class="row"></div> 
                        </div>
                    </li>);
                })}
            </ul>}
        </div>
        </div>
    )
}

export default draft