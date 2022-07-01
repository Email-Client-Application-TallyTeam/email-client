import React from 'react'

function Navbar() {
  return (
    <div>
    
          <header>
             
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
              <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                  <a href=" " class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                  </a>
                  <a href="/" class="list-group-item list-group-item-action py-2 ripple active">
                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Inbox</span>
                  </a>
                  <a href="/login" class="list-group-item list-group-item-action py-2 ripple" onClick={""}><i
                      class="fas fa-lock fa-fw me-3"></i><span>Sent</span></a>
                  <a href=" " class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-chart-line fa-fw me-3"></i><span>Drafts</span></a>
                  <a href=" " class="list-group-item list-group-item-action py-2 ripple">
                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>Starred</span>
                  </a>
                  <a href=" " class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-chart-bar fa-fw me-3"></i><span>Deleted</span></a>
                  <a href=" " class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-globe fa-fw me-3"></i><span>Others</span></a>
                  
                </div>
              </div>
            </nav>
             

            
            {/* <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
               
              <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target=" sidebarMenu"
                  aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-bars"></i>
                </button>

                 
                <a class="navbar-brand" href=" ">
                  <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.bp" height="25" alt="Logo"
                    loading="lazy" />
                </a>
                 

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