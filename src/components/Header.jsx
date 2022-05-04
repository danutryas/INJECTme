import React,{ useContext } from 'react'
import '../styles/css/header.css'
import ModalContext from './Context/ModalContext'

function Header() {
  const {changeModal} = useContext(ModalContext)
  return (
    <header className='active'>
        <div className="logo">
            <img src={process.env.PUBLIC_URL + '/syringe50.jpg'} alt="Logo" />
            <a href="/">INJECTme</a>
        </div>
        <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#urgency">Urgency</a></li>
              <li><a href="#vaccines">Vaccines</a></li>
              <li><a href="#">Vaccine Location</a></li>
              <li><button className='btn primary' onClick={()=> changeModal()}>Register</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;