import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/navbar';
const sent = () => {
    const [SentMailList, setSentMailList] = useState([{date:'23may',sentTo:'kevin@dmail.com'},{date:'21may',sentTo:'john@dmail.com'},{date:'22may',sentTo:'roy@yahoo.com'},{date:'20may',sentTo:'will@yahoo.com'}]);

    return (
        <div className="sentCont"> 
            <Navbar/>
        <div  id="sentListBox">
            <div class="mb-2">
                <nav class="navbar-xl navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control lg" type="search" placeholder="Search Email" aria-label="Search" />
                    </form>
                </nav>
            </div>
            <div class="p-2 bg-warning" ></div>
            <ul class="list-group">
                {SentMailList.map((mail, index)=>{
                    return <li class="list-group-item" key= { index }>
                    <div>
                        <div class="row">
                            <div class="col">
                                <h5>{mail.sentTo} </h5>
                                <div class="text-warning">{mail.date}</div>
                            </div>
                            <button class="btn btn-outline-success btn-sm col"><FontAwesomeIcon icon={faStar} />Star Mail</button>
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

export default sent