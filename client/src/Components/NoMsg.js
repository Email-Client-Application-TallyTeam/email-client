import React from 'react'
//import Spinner from 'react-bootstrap/Spinner'
function NoMsg() {
  return (
    <div className='position-absolute top-50 start-50'>
      <div class="text-primary"  role="status"></div>
  <span class="fw-bold">No recent starred messages</span>

    </div>
  )
}

export default NoMsg;