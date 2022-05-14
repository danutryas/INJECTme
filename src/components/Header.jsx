import React,{ useContext, useEffect, useState } from 'react'
import {  useMatch } from 'react-router-dom'
import '../styles/css/header.css'
import ModalContext from './Context/ModalContext'
import ScrollContext from './Context/ScrollContext'
import { HashLink as Link } from 'react-router-hash-link';
import {HiArrowNarrowRight} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import { IconContext } from 'react-icons'
import {motion} from 'framer-motion'

function Header() {
  const {activeModal} = useContext(ModalContext)
  const {scrollPosition} = useContext(ScrollContext)
  const findMatch = useMatch('/find')
  const [headerPosition,setHeaderPosition] = useState(0)
  const [mobileNavigation,setMobileNavigation] = useState(false)
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
    window.addEventListener('scroll', positionHandle);
  }, []);
  
  const mobileNavActivation = () => {
    setMobileNavigation(prev => !prev)
  }


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
      console.error(err)
    }
  },[])

  return (
    <motion.header className={mobileNavigation ? "mobile-active" : headerPosition > 0 ? "active":""}
      initial={{opacity:0,y:-80}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-80}}
      transition={{delay:.005}}
    >
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
          <li><button className='btn primary register' onClick={(e)=> activeModal(e)}>
            Register
            <IconContext.Provider value={{ className:"arrow-btn"}}>
                <HiArrowNarrowRight/>
            </IconContext.Provider>
          </button></li>
          <li>
            <button className='btn burger-btn' onClick={mobileNavActivation}>
            <IconContext.Provider value={{ className:"burger-icon",size:"1.5em"}}>
              <GiHamburgerMenu />
            </IconContext.Provider>
            </button>
          </li>
        </ul>
      </nav>
      
    </motion.header>
  )
}

export default Header;