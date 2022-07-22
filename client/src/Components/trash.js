import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SvgFontIcons from 'react-svg-font-icons';
import { faArrowsSpin, faRecycle, faTrashCan, faTrashRestore, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Components/navbar';



const inbox = () => {
    const [TrashList, setTrashList] = useState([{date:'22may',sender:'kevin@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'23may',sender:'john@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'24may',sender:'roy@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'25may',sender:'will@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'22may',sender:'kevin@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'23may',sender:'john@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'24may',sender:'roy@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'25may',sender:'will@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'22may',sender:'kevin@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'23may',sender:'john@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'24may',sender:'roy@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'25may',sender:'will@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'22may',sender:'kevin@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'23may',sender:'john@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'24may',sender:'roy@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'25may',sender:'will@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'22may',sender:'kevin@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'23may',sender:'john@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'24may',sender:'roy@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'25may',sender:'will@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'22may',sender:'kevin@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'23may',sender:'john@dmail.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'24may',sender:'roy@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '},{date:'25may',sender:'will@yahoo.com',body:'hello xyz,asdfagcas afa asfa aas adf asdf asdf '}]);

    return (
        <div className='trashCont'>
            <Navbar/>
        
        <div  id="trashListBox">
            <div class="mb-2">
                <nav class="navbar-xl navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control lg" type="search" placeholder="Search Email" aria-label="Search" />
                    </form>
                </nav>
            </div>
            <div class="p-2 bg-warning" ></div>
            <ul class="list-group">
                {
                TrashList.map((mail, index)=>{
                    return <li class="list-group-item" key= { index }>
                            <div>
                                <div class="row">
                                    <div class="col">
                                        <h5>{mail.sender} </h5>
                                        <div class="text-warning">{mail.date}</div>
                                    </div>
                                    <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faTrashCan} /></button>
                                    <button class="btn  btn-sm col-1  buttom-customise"><FontAwesomeIcon icon={faTrashRestore} /></button>
                                </div>  
                                <div class="row">{mail.body}</div> 
                               
                            </div> 
                        </li>;
                        }
                    )
                }
            </ul>
            </div>
        </div>
    )
}

export default inbox