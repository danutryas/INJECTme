import React, { useState } from 'react'
import { IconContext } from "react-icons";

function BenefitCard({src,icon,title,desc}) {
  const [activeCard,setActiveCard] = useState(false)

  return (
      <div className={`benefit ${activeCard ? "active" :""}`} onClick={()=>setActiveCard(prev =>!prev)}>
          <div className="image" style={{backgroundImage:`url(${src})`}}>
            {/* <IconContext.Provider value={{  className: "content" }}>
              {icon}
            </IconContext.Provider> */}
            {/* <img src={src} alt="image" /> */}
          </div>
          <div className="desc">
              <h4>{title}</h4>
              <p>{desc}</p>
          </div>
      </div>
  )
}

export default BenefitCard;