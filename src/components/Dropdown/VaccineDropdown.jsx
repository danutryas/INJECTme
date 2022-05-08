import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'
import {motion} from 'framer-motion'


function VaccineDropdown({index,title,desc}) {
  const [activeDropdown,setActiveDropdown] = useState(false)

    const dropdownClick = () => {
        setActiveDropdown(prev => !prev)
    }

  return (
    <motion.div className={`dropdown ${activeDropdown ? "active" : ""}`} onClick={dropdownClick} 
      initial={{opacity:0,y:200}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:200}}
      transition={{delay:.45}}
    >
        <div className="heading">
            <h4>{title}</h4>
            <IconContext.Provider value={{  className: "drop-icon" }}>
              {activeDropdown ? <RiArrowUpSLine/>:<RiArrowDownSLine/>}
            </IconContext.Provider>
        </div>
        <p className="desc">{desc}</p>
    </motion.div>
  )
}

export default VaccineDropdown;