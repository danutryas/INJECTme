import React from 'react'

function CovidStats() {
  const status = [{status:"1",sup:"st",text:"dosage",num:181377519},{num:124334472,status:"2",sup:"nd",text:"dosage"},{num:1366227,status:"3",sup:"rd",text:"dosage"},{num:208265720,status:"",sup:"",text:"Vaccination Target"}]
  
    return (
    <div className='card covid-stats'>
        <h4>COVID-19 VACCINATION STATS</h4>
            {status.map(state => {
                return(
                    <div className="status" key={state.num}>
                        <p>{state.num}</p>
                        <p>{state.status}<sup>{state.sup}</sup>{state.text}</p>
                    </div>
                )
            }) }
    </div>
  )
}

export default CovidStats