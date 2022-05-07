import React from 'react'
import BenefitCard from './Cards/BenefitCard'
import '../styles/css/urgency.css'
import {FaBiohazard} from 'react-icons/fa'


function Urgency() {
    const benefits = [
        {id:1,icon:<FaBiohazard />,title:"Reduces risk of infection",desc:"Once you receive the shot, your body begins producing antibodies to the coronavirus."},
        {id:2,icon:<FaBiohazard />,title:"Protects against illness",desc:"Vaccines have shown to be effective at preventing severe illness from COVID-19."},
        {id:3,icon:<FaBiohazard />,title:"Free Transportation",desc:"Almost all of public area requires you to get vaccinated"},
        {id:4,icon:<FaBiohazard />,title:"Protect people around you",desc:"By getting the shot, you also prevent the spreading of COVID-19"}
    ]

  return (
    <div className='urgency' id='urgency'>
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
            <h4>BENEFITS OF COVID VACCINATION</h4>
            <div className="benefit-list">
                {benefits.map((benefit) => {
                    return(
                        <BenefitCard key={benefit.id} icon={benefit.icon} title={benefit.title} desc={benefit.desc}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Urgency