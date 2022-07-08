import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowUp,faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';

const inbox = () => {
    const [InboxMailList, setInboxMailList] = useState([{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com'},{date:'24may',sender:'roy@yahoo.com'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'22may',sender:'kevin@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'23may',sender:'john@dmail.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'24may',sender:'roy@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'},{date:'25may',sender:'will@yahoo.com',body:'asf Afdsag agsags gsgas sfgfs sfgs dsff sfgs  sfg gs  gsdfg sefg sd sg s s gsdg sgsd sg sg sg sd'}]);

    

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
                                    <div class="text-warning">{mail.date}</div>
                                </div>
                                <div class="col"></div>
                                <div class="col"></div>
                                <button class="btn  btn-sm col-sm buttom-customise" ><FontAwesomeIcon icon={faUsersViewfinder} /></button>
                                <button class="btn  btn-sm col-sm  buttom-customise"><FontAwesomeIcon icon={faStar} /></button>
                                <button class="btn  btn-sm col buttom-customise"><FontAwesomeIcon icon={faArrowUp} /></button>
                            </div>
                            
                        </div>
                    </li>;
                })}
            </ul>
        </div>
    )
}

export default inbox