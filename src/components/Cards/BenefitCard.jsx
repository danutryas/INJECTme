import React, { useState } from 'react'

function BenefitCard({src,title,desc}) {
  const [activeCard,setActiveCard] = useState(false)

  return (
      <div className={`benefit ${activeCard ? "active" :""}`} onClick={()=>setActiveCard(prev =>!prev)}>
          <div className="image" style={{backgroundImage:`url(${src})`}}></div>
          <div className="desc">
              <h4>{title}</h4>
              <p>{desc}</p>
          </div>
      </div>
  )
}

export default BenefitCard;