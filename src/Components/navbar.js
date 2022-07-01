import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
    
          <header>
             
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
              <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                  <Link to=" " class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                  </Link>
                  <Link to="/" class="list-group-item list-group-item-action py-2 ripple active">
                    <i class="fas fa-chart-area fa-fw me-3" to="/"></i><span>Inbox</span>
                  </Link>
                  <Link to="/login" class="list-group-item list-group-item-action py-2 ripple" onClick={""}>
                  <i class="fas fa-chart-area fa-fw me-3" to="/login"></i><span>Sent</span>
                    </Link>
                  <Link to="/login" class="list-group-item list-group-item-action py-2 ripple">
                  <i class="fas fa-chart-area fa-fw me-3" to="/"></i><span>Starred</span></Link>
                  <Link to=" " class="list-group-item list-group-item-action py-2 ripple">
                  <i class="fas fa-chart-area fa-fw me-3" to="/login"></i><span>Trash</span>
                  </Link>
                  <Link to=" " class="list-group-item list-group-item-action py-2 ripple">
                  <i class="fas fa-chart-area fa-fw me-3" to="/"></i><span>Drafts</span>
                    </Link>
                  <Link to=" " class="list-group-item list-group-item-action py-2 ripple">
                  <i class="fas fa-chart-area fa-fw me-3" to="/Home"></i><span>Others</span>
                      </Link>
                  
                </div>
              </div>
            </nav>
             

            
            {/* <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
               
              <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target=" sidebarMenu"
                  aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-bars"></i>
                </button>

                 
                <Link class="navbar-brand" to=" ">
                  <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.bp" height="25" alt="Logo"
                    loading="lazy" />
                </Link>
                 

              </div>
               
            </nav>  */}
            
          </header>
          

          
          <main >
            <div class="container pt-4"></div>
          </main>
          
          </div>
  )
}

export default Navbar