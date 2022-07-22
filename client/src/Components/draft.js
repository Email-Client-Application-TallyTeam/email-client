import React from 'react'
import { useState } from 'react';
import Navbar from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SvgFontIcons from 'react-svg-font-icons';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
const draft = () => {
    const [DraftList, setDraftList] = useState([{date:'22may',sendTo:'kevin@dmail.com'},{date:'23may',sendTo:'john@dmail.com'},{date:'24may',sendTo:'roy@yahoo.com'},{date:'25may',sendTo:'will@yahoo.com'},{date:'22may',sendTo:'kevin@dmail.com'},{date:'23may',sendTo:'john@dmail.com'},{date:'24may',sendTo:'roy@yahoo.com'},{date:'25may',sendTo:'will@yahoo.com'},{date:'22may',sendTo:'kevin@dmail.com'},{date:'23may',sendTo:'john@dmail.com'},{date:'24may',sendTo:'roy@yahoo.com'},{date:'25may',sendTo:'will@yahoo.com'},{date:'22may',sendTo:'kevin@dmail.com'},{date:'23may',sendTo:'john@dmail.com'},{date:'24may',sendTo:'roy@yahoo.com'},{date:'25may',sendTo:'will@yahoo.com'},{date:'22may',sendTo:'kevin@dmail.com'},{date:'23may',sendTo:'john@dmail.com'},{date:'24may',sendTo:'roy@yahoo.com'},{date:'25may',sendTo:'will@yahoo.com'},{date:'22may',sendTo:'kevin@dmail.com'},{date:'23may',sendTo:'john@dmail.com'},{date:'24may',sendTo:'roy@yahoo.com'},{date:'25may',sendTo:'will@yahoo.com'}]);

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
                                    <h5>{mail.sendTo} </h5>
                                    <div class="text-warning">{mail.date}</div>
                                </div>
                                <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faTrash} /></button>
                                <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div class="row">{mail.body}</div> 
                        </div>
                    </li>;
                })}
            </ul>
        </div>
        </div>
    )
}

export default draft