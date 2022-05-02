import React from 'react'

function Banner() {
  return (
    <div className='banner'>
        <div className="text">
            <h4>PROTECT</h4>
            <h2>GET <span className='accent-color'>PROTECTION.</span> <br/> TO KEEP <br /><span className='accent-color'>MOVING FORWARD</span></h2>
            <p>Covid-19 Vaccines brings everyone closer.</p>
            <div className="cta">
                <button className='btn primary'>
                    Register
                    {/* icon */}
                </button>
                <button className='btn secondary'>Find out more</button>
            </div>
        </div>
        <div className="image">
            <img src={process.env.PUBLIC_URL + '/vaccination.png'} alt="vaccination" />
        </div>   
    </div>
  )
}

export default Banner