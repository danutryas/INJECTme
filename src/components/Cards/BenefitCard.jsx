import React from 'react'
import { IconContext } from "react-icons";

function BenefitCard({icon,title,desc}) {
  return (
      <div className='benefit '>
          <div className="image">
            <IconContext.Provider value={{  className: "content" }}>
              {icon}
            </IconContext.Provider>
          </div>
          <div className="desc">
              <h4>{title}</h4>
              <p>{desc}</p>
          </div>
      </div>
  )
}

export default BenefitCard;