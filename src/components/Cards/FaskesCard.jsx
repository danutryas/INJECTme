import React,{useContext} from 'react'
import ModalContext from '../Context/ModalContext'
import { AiFillHome,AiFillCheckCircle } from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {motion} from 'framer-motion'

function FaskesCard({jenis,name,kota,provinsi,status,lat,long}) {
  const { activateModal } = useContext(ModalContext)
  return (
    <motion.div className='faskes-card' 
      initial={{opacity:0,y:50}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:50}}
      transition={{delay:.1}}
    >
      <div className="info">
        <div className="card-category">
          <AiFillHome className='card-icon'/>
          <p className='cat'>{jenis === "" ? "FKTP": jenis}</p>
        </div>
        <div className="faskes-info">
          <h4 className='faskes-name'>{name}</h4>
          <div className="faskes-status">
            <div className="faskes-location">
              <MdLocationOn  className='card-icon'/>
              <p>{kota}, {provinsi}</p>
            </div>
            <div className="vaksin-status">
              <AiFillCheckCircle  className='card-icon'/>
              <p>{status}</p>
            </div> 
          </div>
        </div>
      </div>
      <div className="cta">
        <button className='btn primary' onClick={(e)=> activateModal(e)}>Register</button>
        <a href={`https://maps.google.com/?q=${lat},${long}`} target="_blank" rel='noreferrer'>
          View Location
        </a>
      </div>
    </motion.div>
  )
}

export default FaskesCard