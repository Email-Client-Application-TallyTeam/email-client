import React from 'react'
//import Spinner from 'react-bootstrap/Spinner'
function LoadInbox() {
  return (
    <div className='position-absolute top-50 start-50'>
      <div class="spinner-border text-primary "  role="status"></div>
  <span class="fw-bold">Fetching your messages...</span>

    </div>
  )
}

export default LoadInbox;



