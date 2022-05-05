import React,{ useContext, useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'
import '../styles/css/header.css'
import ModalContext from './Context/ModalContext'
import ScrollContext from './Context/ScrollContext'
import { HashLink as Link } from 'react-router-hash-link';


function Header() {
  const {changeModal} = useContext(ModalContext)
  const {scrollPosition} = useContext(ScrollContext)
  const findMatch = useMatch('/find')


  const [positionState,setPositionState] = useState({
    home : 0,
    urgency : 958,
    vaccines : 1890,
    footer : 2405
  })
  useEffect(() => {
    try{
      const urgencyPosition = document.getElementById("urgency").offsetTop
      const vaccinesPosition = document.getElementById("vaccines").offsetTop
      const footerPosition = document.getElementById("footer").offsetTop
      setPositionState({
        home:0,
        urgency:urgencyPosition - 2,
        vaccines:vaccinesPosition - 1,
        footer:footerPosition - 1
      })
    }catch(err) {
      console.log("")
    }
  },[])
  useEffect(()=> {
    window.location.hash = ""
    window.onbeforeunload = function () {
  };
  })

  return (
    <header className={scrollPosition > 0 ? "active":""}>
      <div className="logo" >
          <img src={process.env.PUBLIC_URL + '/syringe50.jpg'} alt="Logo" />
          <a>INJECTme</a>
      </div>  
      <nav>
        <ul>
          <li className={scrollPosition >= positionState.home && scrollPosition < positionState.urgency ? "active":""}>
            <Link className='nav' to={"/#"} >Home</Link>
          </li>
          <li className={scrollPosition >= positionState.urgency && scrollPosition < positionState.vaccines? "active":""}>
            <Link className='nav' to={"/#urgency"} >Urgency</Link>
          </li>
          <li className={scrollPosition >= positionState.vaccines && scrollPosition < positionState.footer? "active":""}>
            <Link className='nav' to={"/#vaccines"} >Vaccines</Link>
          </li>
          <li className={findMatch ? "active":""}>
            <Link to={"/find#"} className='nav'>Vaccine Location</Link>
          </li>
          <li><button className='btn primary register' onClick={()=> changeModal()}>Register</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;