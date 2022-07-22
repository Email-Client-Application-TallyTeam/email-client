import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
//import Spinner from 'react-bootstrap/Spinner'
function Loading() {
  return (
    <div>
      <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>
  )
}

export default Loading