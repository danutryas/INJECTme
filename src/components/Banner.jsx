import React,{useContext} from 'react'
import '../styles/css/banner.css'
import ModalContext  from './Context/ModalContext'
import {motion} from 'framer-motion'

function Banner() {
    const {activeModal} = useContext(ModalContext)


  return (
    <div className='banner' id='home' >
        <div className="text">
            <motion.h4
                initial={{opacity:0,x:-200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-200}}
                transition={{delay:.1}}
            ><span>PROTECT</span></motion.h4>
            <motion.h1
                initial={{opacity:0,x:-200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-200}}
                transition={{delay:.15}}>
            GET <span className='accent-color'>PROTECTION.</span> <br/> TO KEEP <br /><span className='accent-color'>MOVING FORWARD.</span></motion.h1>
            <motion.p                 
                initial={{opacity:0,x:-200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-200}}
                transition={{delay:.2}}>
                Covid-19 Vaccines brings everyone closer.
            </motion.p>
            <motion.div className="cta" 
                initial={{opacity:0,x:-200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-200}}
                transition={{delay:.25}}>
                <button className='btn primary register' onClick={(e)=> activeModal(e)}>Register</button>
                <a href="#urgency"><button className='btn secondary next' >Find More</button></a>
            </motion.div>
        </div>
        <motion.div className="image"  
                initial={{opacity:0,x:200}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:200}}
                transition={{delay:.1}}>
            <img src={process.env.PUBLIC_URL + '/vaccination.png'} alt="vaccination" />
        </motion.div>   
    </div>
  )
}

export default Banner