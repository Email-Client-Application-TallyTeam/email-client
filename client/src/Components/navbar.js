import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
    
          <header>
            
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
              <div class="position-sticky">
              <Link to="/compose" class=" py-4 ripple btn-lg" aria-current="true">
                  <button type="button" class="btn btn-outline-dark my-4 mx-2">➕Compose Mail</button>
                  </Link>
                <div class="list-group list-group-flush mx-3 mt-4">

                  <Link to="/" class="list-group-item list-group-item-action py-2 ripple">
                    <i class="fas fa-chart-area fa-fw me-3" to="/"></i><span>Inbox</span>
                  </Link>
                  <Link to="/sent" class="list-group-item list-group-item-action py-2 ripple" onClick={""}>
                  <i class="fas fa-chart-area fa-fw me-3" to="/sent"></i><span>Sent</span>
                    </Link>
                  <Link to="/starred" class="list-group-item list-group-item-action py-2 ripple">
                  <i class="fas fa-chart-area fa-fw me-3" to="/"></i><span>Starred</span></Link>
                  <Link to="/trash " class="list-group-item list-group-item-action py-2 ripple">
                  <i class="fas fa-chart-area fa-fw me-3" to="/trash"></i><span>Trash</span>
                  </Link>
                  <Link to="/drafts " class="list-group-item list-group-item-action py-2 ripple">
                  <i class="fas fa-chart-area fa-fw me-3" ></i><span>Drafts</span>
                    </Link>
                  <Link to=" " class="list-group-item list-group-item-action py-2 ripple">
                  <i class="fas fa-chart-area fa-fw me-3" to="/Home"></i><span>Others</span>
                      </Link>
                  
                </div>
              </div>
            </nav>
            

            
           
            
          </header>
          

          
          <main >
            <div class="container pt-4"></div>
          </main>
          
          </div>
  )
}

export default Navbar