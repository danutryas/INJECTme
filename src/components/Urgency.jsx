import React from 'react'
import BenefitCard from './Cards/BenefitCard'

function Urgency() {
  return (
    <div className='urgency'>
        <div className="top-side">
            <div className="image">
                <img src={process.env.PUBLIC_URL + '/vaccine.png'} alt="vaccine" />
            </div>
            <div className="text">
                <h3>WHY YOU NEED TO VACCINE ?</h3>
                <p>Getting a vaccination is a safer way to build protection from COVID-19. COVID-19 vaccination helps protect you by creating an antibody response without you having to experience sickness.</p>
            </div>
        </div>
        <div className="bottom-side">
            <h4>BENEFITS OF COVID VACCINATION:</h4>
            <div className="benefit-list">
                <BenefitCard title="Lorem" desc="lorem ipsum el mona"/>
                <BenefitCard title="Lorem" desc="lorem ipsum el mona"/>
                <BenefitCard title="Lorem" desc="lorem ipsum el mona"/>
                <BenefitCard title="Lorem" desc="lorem ipsum el mona"/>
            </div>
        </div>
    </div>
  )
}

export default Urgency