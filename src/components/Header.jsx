import React from 'react'
import Modal from './Cards/Modal'

function Header() {
  return (
    <header>
        <div className="logo">
            <img src={process.env.PUBLIC_URL + '/syringe50.jpg'} alt="Logo" />
            <a href="/">INJECTme</a>
        </div>
        <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Urgency</a></li>
              <li><a href="#">Vaccines</a></li>
              <li><a href="#">Vaccine Location</a></li>
              <li><button className='btn primary'>Register</button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;