import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faInbox, faArrowAltCircleRight, faTrash, faPager, faPlus } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/navbar';
export const ViewMail = () => {
  return (
    <div>
      <Navbar/>
    
    <div className="view-box">
      
    <div class="mb-3">
<button  class="star"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></button>
<button  class="star"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
<div className='sender'>
<div className='from'> Ishita Mittal</div>
<div className='Email'>ishita@gmail.com</div>
</div>


</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"></label>
<div className='subject'>Subject sample </div>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"></label>
<div className='body'>
This is the time units converter where one can make online seconds to 
milliseconds conversion. It is one of the most popular types of time conversions, 
along with more commonly used minutes to hours, seconds to minutes, or seconds to hours conversions. This is the time units converter where one can make online seconds to 
milliseconds conversion. It is one of the most popular types of time conversions, 
along with more commonly used minutes to hours, seconds to minutes, or seconds to hours conversions. There is also a large seconds to milliseconds conversion table which is another very handy way to make conversions between the above mentioned time measurement units.There is also a large seconds to milliseconds conversion table which is another very handy way to make conversions between the above mentioned time measurement units.
</div>
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label"></label>

</div>


  </div>
  </div>
  )
}
