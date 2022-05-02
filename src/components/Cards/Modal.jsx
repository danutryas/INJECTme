import React from 'react'

function Modal() {
  return (
    <div className={`card modal`}>
        {/* x button for close the modal */}
        {/* check icon */}
        <h4>Registered</h4>
        <p>Make sure to come 30 minutes before the schedule</p>
        <button className='primary'>Download E-Ticket</button>
    </div>
  )
}

export default Modal