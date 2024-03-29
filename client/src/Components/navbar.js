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
                  <button type="button" className="btn btn-outline-dark my-4 mx-8 ms-4  mt-5"  title="Compose mail"> 
                  
                    <FontAwesomeIcon icon={faPlus} /> 
                    Compose Mail
                  </button>
                </Link>
                <div className="list-group list-group-flush mt-4">
                    {
                      window.location.pathname==="/"?
                      <Link to="/" className="list-group-item list-group-item-action py-2 bg-secondary">
                          <FontAwesomeIcon icon={faInbox} />
                          <i className="me-3"></i><span>Inbox</span>
                      </Link>
                      :
                      <Link to="/" className="list-group-item list-group-item-action py-2">
                          <FontAwesomeIcon icon={faInbox} />
                          <i className="me-3"></i><span>Inbox</span>
                      </Link>
                    }
                    {
                      window.location.pathname==="/sent"?
                      <Link to="/sent" className="list-group-item list-group-item-action py-2 ripple bg-secondary">
                          <FontAwesomeIcon icon={faArrowAltCircleRight} />
                          <i className="me-3"></i><span>Sent</span>
                      </Link>
                      :
                      <Link to="/sent" className="list-group-item list-group-item-action py-2 ripple">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        <i className="me-3"></i><span>Sent</span>
                      </Link>
                    }
                    {
                      window.location.pathname==="/starred"?
                      <Link to="/starred" className="list-group-item list-group-item-action py-2 ripple bg-secondary">
                        <FontAwesomeIcon icon={faStar} />
                        <i className="me-3"></i><span>Star</span>
                      </Link>
                      :
                      <Link to="/starred" className="list-group-item list-group-item-action py-2 ripple">
                        <FontAwesomeIcon icon={faStar} />
                        <i className="me-3"></i><span>Star</span>
                      </Link>
                    }
                    {
                      window.location.pathname==="/trash"?
                      <Link to="/trash" className="list-group-item list-group-item-action py-2 ripple bg-secondary">
                        <FontAwesomeIcon icon={faTrash} />
                        <i className="me-3"></i><span>Trash</span>
                      </Link>
                      :
                      <Link to="/trash" className="list-group-item list-group-item-action py-2 ripple">
                        <FontAwesomeIcon icon={faTrash} />
                        <i className="me-3"></i><span>Trash</span>
                      </Link>
                    }
                    {
                      window.location.pathname==="/drafts"?
                      <Link to="/drafts" className="list-group-item list-group-item-action py-2 ripple bg-secondary">
                        <FontAwesomeIcon icon={faPager} />
                        <i className=" me-3"></i><span>Drafts</span>
                      </Link>
                      :
                      <Link to="/drafts" className="list-group-item list-group-item-action py-2 ripple">
                        <FontAwesomeIcon icon={faPager} />
                        <i className=" me-3"></i><span>Drafts</span>
                      </Link>
                    }
                    <Link to="/" className="list-group-item list-group-item-action py-2 ripple">
                      <i className="me-3"></i><span>Others</span>
                    </Link>
                </div>
              </div>
            </nav> 
          </header>
          
      </div>
  )
}

export default Navbar