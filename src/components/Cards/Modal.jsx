import React,{useContext} from 'react'
import ModalContext from '../Context/ModalContext'
import {RiCloseFill,RiCheckboxCircleFill} from 'react-icons/ri'
import {IconContext} from 'react-icons'

function Modal() {
  const {modalStatus, activeModal}  = useContext(ModalContext)

  return (
    <div className={`modal ${modalStatus ? "active":""}`}>
      <div className="card">
        <button className="close" onClick={(e) => activeModal(e)}>
          <IconContext.Provider value={{  className: "close-button" }}>
            <RiCloseFill />
          </IconContext.Provider>
        </button>
        <div className="content">

          <IconContext.Provider value={{  className: "check" }}>
            <RiCheckboxCircleFill />
          </IconContext.Provider>
          <div className="info"> 
            <h4>Registered</h4>
            <p>Make sure to come 30 minutes before the schedule</p>
          </div>
          <button className='btn primary download' onClick={(e) => activeModal(e)}>Download E-Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default Modal