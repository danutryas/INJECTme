import React,{ useContext, useEffect, useState } from 'react'
import { useLocation, useMatch } from 'react-router-dom'
import '../styles/css/header.css'
import ModalContext from './Context/ModalContext'
import ScrollContext from './Context/ScrollContext'
import { HashLink as Link } from 'react-router-hash-link';
import {HiArrowNarrowRight} from 'react-icons/hi'
import { IconContext } from 'react-icons'



function Header() {
  const {activateModal} = useContext(ModalContext)
  const {scrollPosition} = useContext(ScrollContext)
  const findMatch = useMatch('/find')
  const [headerPosition,setHeaderPosition] = useState(0)
  const [positionState,setPositionState] = useState({
    home : 0,
    urgency : 958,
    vaccines : 1890,
    footer : 2405
  })

  const positionHandle = () =>{
    const pos = window.pageYOffset
    setHeaderPosition(pos)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', positionHandle, { passive: true });
  }, []);
  


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
  })

  return (
    <header className={headerPosition > 0 ? "active":""}>
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
          <li className={scrollPosition >= positionState.vaccines ? "active":""}>
            <Link className='nav' to={"/#vaccines"} >Vaccines</Link>
          </li>
          <li className={findMatch ? "active":""}>
            <Link to={"/find#"} className='nav'>Vaccine Location</Link>
          </li>
          <li><button className='btn primary register' onClick={(e)=> activateModal(e)}>
            Register
            <IconContext.Provider value={{ className:"arrow-btn"}}>
                <HiArrowNarrowRight/>
            </IconContext.Provider>
          </button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;