import React from 'react'

function Category({src,name}) {
  return (
    <div className='card category'>
        <img src={src} alt="faskes logo" />
        <p>{name}</p>
    </div>
  )
}

export default Category