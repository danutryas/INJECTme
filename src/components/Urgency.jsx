import React from 'react'
import BenefitCard from './Cards/BenefitCard'
import '../styles/css/urgency.css'
import {FaBiohazard} from 'react-icons/fa'


function Urgency() {
    const benefits = [
        {id:1,src:"https://images.unsplash.com/photo-1610703415552-d7fca41a8857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",icon:<FaBiohazard />,title:"Reduces risk of Infection",desc:"Once you receive the shot, your body begins producing antibodies to the coronavirus."},
        {id:2,src:"https://images.unsplash.com/photo-1626697556342-2310dbc55428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",icon:<FaBiohazard />,title:"Protects against Illness",desc:"Vaccines have shown to be effective at preventing severe illness from COVID-19."},
        {id:3,src:"https://images.unsplash.com/photo-1597271479771-757112f11d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",icon:<FaBiohazard />,title:"Free Transportation",desc:"Almost all of public area requires you to get vaccinated"},
        {id:4,src:"https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",icon:<FaBiohazard />,title:"Protect people around you",desc:"By getting the shot, you also prevent the spreading of COVID-19"}
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
                        <BenefitCard key={benefit.id} src={benefit.src} icon={benefit.icon} title={benefit.title} desc={benefit.desc}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Urgency