import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const stared = () => {
    const [StaredMailList, setStaredMailList] = useState([{date:'22may',sender:'kevin@dmail.com'},{date:'23may',sender:'john@dmail.com'},{date:'24may',sender:'roy@yahoo.com'},{date:'25may',sender:'will@yahoo.com'},{date:'22may',sender:'kevin@dmail.com'},{date:'23may',sender:'john@dmail.com'},{date:'24may',sender:'roy@yahoo.com'},{date:'25may',sender:'will@yahoo.com'},{date:'22may',sender:'kevin@dmail.com'},{date:'23may',sender:'john@dmail.com'},{date:'24may',sender:'roy@yahoo.com'},{date:'25may',sender:'will@yahoo.com'},{date:'22may',sender:'kevin@dmail.com'},{date:'23may',sender:'john@dmail.com'},{date:'24may',sender:'roy@yahoo.com'},{date:'25may',sender:'will@yahoo.com'},{date:'22may',sender:'kevin@dmail.com'},{date:'23may',sender:'john@dmail.com'},{date:'24may',sender:'roy@yahoo.com'},{date:'25may',sender:'will@yahoo.com'},{date:'22may',sender:'kevin@dmail.com'},{date:'23may',sender:'john@dmail.com'},{date:'24may',sender:'roy@yahoo.com'},{date:'25may',sender:'will@yahoo.com'}]);

    return (
        <div  id="staredListBox">
            <div class="mb-2">
                <nav class="navbar-xl navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control lg" type="search" placeholder="Search Email" aria-label="Search" />
                    </form>
                </nav>
            </div>
            <div class="p-2 bg-warning" ></div>
            <ul class="list-group">
                {StaredMailList.map((mail, index)=>{
                    return <li class="list-group-item" key= { index }>
                        <div>
                            <div class="row">
                                <div class="col">
                                    <h5>{mail.sender} </h5>
                                    <div class="text-warning">{mail.date}</div>
                                </div>
                                <button class="btn btn-outline-success btn-sm col"><FontAwesomeIcon icon={faStar} />UnStar Mail</button>
                            </div>
                            <div class="row">{mail.body}</div> 
                        </div>
                    </li>;
                })}
            </ul>
        </div>
    )
}

export default stared