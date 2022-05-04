import React,{useContext} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import '../styles/css/banner.css'
import ModalContext  from './Context/ModalContext'

function Banner() {

    const {changeModal} = useContext(ModalContext)

  return (
    <div className='banner' id='home' >
        <div className="text">
            <h4><span>PROTECT</span></h4>
            <h1>GET <span className='accent-color'>PROTECTION.</span> <br/> TO KEEP <br /><span className='accent-color'>MOVING FORWARD.</span></h1>
            <p>Covid-19 Vaccines brings everyone closer.</p>
            <div className="cta">
                <button className='btn primary register' onClick={()=> changeModal()}>
                    Register
                    <HiArrowNarrowRight/>
                </button>
                <a href="#urgency"><button className='btn secondary next' >Find out more</button></a>
            </div>
        </div>
        <div className="image">
            <img src={process.env.PUBLIC_URL + '/vaccination.png'} alt="vaccination" />
        </div>   
    </div>
  )
}

export default Banner