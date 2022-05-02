import React from 'react'
import VaccineDropdown from './Dropdown/VaccineDropdown'

function Types() {
  return (
    <div className='vaccines'>
        <div className="top-side">
            <div className="text">
                <h3>GET TO KNOW THE TYPES</h3>
                <p>All of the covid-19 vaccines are trying to achieve the same thing – immunity to the virus, and some might also be able to stop transmission. They do so by stimulating an immune response to an antigen, a molecule found on the virus.</p>
            </div>
            <div className="image">
                <img src={process.env.PUBLIC_URL + '/vaccines.png'} alt="vaccines" />
            </div>
        </div>
        <div className="vaccine-type">
            <VaccineDropdown />
            <VaccineDropdown />
            <VaccineDropdown />
            <VaccineDropdown />
            <VaccineDropdown />
            <VaccineDropdown />
        </div>
    </div>
  )
}

export default Types;