import React, { useState } from 'react'
import { IconContext } from "react-icons";

function BenefitCard({index,icon,title,desc}) {
  const [activeCard,setActiveCard] = useState(false)

  return (
      <div className={`benefit ${activeCard ? "active" :""}`} onClick={()=>setActiveCard(prev =>!prev)}>
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