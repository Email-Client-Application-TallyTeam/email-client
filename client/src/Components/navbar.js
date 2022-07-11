import React from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faInbox, faArrowAltCircleRight, faTrash, faPager, faPlus } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <div>
    
          <header>
            
            <nav id="sidebarMenu" className=" d-lg-block sidebar collapse.show bg-white">
              <div className="position-sticky">
              <Link to="/compose" className=" py-4 ripple btn-lg" aria-current="true">
                  <button type="button" className="btn btn-outline-dark my-4 mx-2"> <FontAwesomeIcon icon={faPlus} /> Compose Mail</button>
                  </Link>
                <div className="list-group list-group-flush mx-3 mt-4">

                  <Link to="/" className="list-group-item list-group-item-action py-2 ">
                  <FontAwesomeIcon icon={faInbox} />
                    <i className="me-3" ></i><span>Inbox</span>
                    
                  </Link>
                  <Link to="/sent" className="list-group-item list-group-item-action py-2 ripple">
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  <i className='me-3'></i><span>Sent</span>
                    </Link>
                  <Link to="/starred" className="list-group-item list-group-item-action py-2 ripple">
                  <FontAwesomeIcon icon={faStar} />
                  <i className=" me-3" ></i><span>Starred</span></Link>
                  <Link to="/trash " className="list-group-item list-group-item-action py-2 ripple">
                  <FontAwesomeIcon icon={faTrash} />
                  <i className="me-3" ></i><span>Trash</span>
                  </Link>
                  <Link to="/drafts " className="list-group-item list-group-item-action py-2 ripple">
                  <FontAwesomeIcon icon={faPager} />
                  <i className=" me-3" ></i><span>Drafts</span>
                    </Link>
                  <Link to=" " className="list-group-item list-group-item-action py-2 ripple">
                  <i className=" me-3" ></i><span>Others</span>
                      </Link>
                  
                </div>
              </div>
            </nav>
            

            
           
            
          </header>
          

          
          <main >
            <div className="container pt-4"></div>
          </main>
          
          </div>
  )
}

export default Navbar