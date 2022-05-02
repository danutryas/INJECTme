import React from 'react'

function BenefitCard({src,title,desc}) {
  return (
    <div className='benefit'>
        <img src={src} alt="logo" />
        <div className="desc">
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default BenefitCard;