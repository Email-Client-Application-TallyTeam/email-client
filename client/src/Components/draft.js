import React,{useEffect} from 'react'
import { useState } from 'react';
import Navbar from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SvgFontIcons from 'react-svg-font-icons';
import { faArrowRight,faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const draft = () => {
    const [DraftList, setDraftList] = useState([]);

    useEffect(()=>{
        async function fetchDraft() {
            const currentAccess=localStorage.getItem('accessToken')
            const data= await axios.post("/getDraft",{currentAccess});
            console.log(data.data);
            setDraftList(data.data);
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
            <div class="p-2 bg-warning" ></div>
            <ul class="list-group">
                {DraftList.map((mail, index)=>{
                    return <li class="list-group-item" key= { index }>
                        <div>
                            <div class="row">
                                <div class="col">
                                    <h5>{mail.Msnippet} </h5>

                                </div>
                                <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faTrash} /></button>
                                <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div class="row"></div> 
                        </div>
                    </li>;
                })}
            </ul>
        </div>
        </div>
    )
}

export default draft