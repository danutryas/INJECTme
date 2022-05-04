import React from 'react'
import VaccineDropdown from './Dropdown/VaccineDropdown'
import '../styles/css/type.css'

function Types() {
    
  return (
    <div className='vaccines' id='vaccines'>
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
            <div className="type1">
                <VaccineDropdown  title={"asdas"} desc="lorem12"/>
                <VaccineDropdown  title={"asdas"} desc="lorem12"/>
                <VaccineDropdown  title={"asdas"} desc="lorem12"/>
            </div>
            <div className="type2">
                <VaccineDropdown  title={"asdas"} desc="lorem12"/>
                <VaccineDropdown  title={"asdas"} desc="lorem12"/>
                <VaccineDropdown  title={"asdas"} desc="lorem12"/>
            </div>
        </div>
    </div>
  )
}

export default Types;