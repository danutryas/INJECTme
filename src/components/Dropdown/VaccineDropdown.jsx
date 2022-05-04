import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'

function VaccineDropdown({title,desc}) {
  const [activeDropdown,setActiveDropdown] = useState(false)

    const dropdownClick = () => {
        setActiveDropdown(prev => !prev)
    }


  return (
    <div className={`dropdown ${activeDropdown ? "active" : ""}`} onClick={dropdownClick}>
        <div className="heading">
            <h4>{title}</h4>
            <IconContext.Provider value={{  className: "drop-icon" }}>
              {activeDropdown ? <RiArrowUpSLine/>:<RiArrowDownSLine/>}
            </IconContext.Provider>
        </div>
        <p className="desc">{desc}</p>
    </div>
  )
}

export default VaccineDropdown;