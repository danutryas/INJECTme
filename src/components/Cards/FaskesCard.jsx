import React from 'react'

function FaskesCard() {
  return (
    <div className='faskes'>
      <div className="info">
        <div className="category">
          {/* home icon */}
          Puskesmas
        </div>
        {/* <div className=""></div> */}
        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
        <p>
          {/* icon location*/}
          Baleendah,Jawa Barat  {/* Kecamatan, provinsi */} 
        </p>
        <p>
          {/* icon checklist*/}
          Ready for Vaccination {/* statusvaksinasi */}
        </p>
      </div>
      <div className="cta">
        <button className='btn primary'>Register</button>
        <button className='btn secondary'>View Details</button>
      </div>
    </div>
  )
}

export default FaskesCard