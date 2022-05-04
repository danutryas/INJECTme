import React from 'react'
import '../../styles/css/covid-stats.css'

function CovidStats() {
  const status = [{status:"1",sup:"st",text:"Dosage",num:181377519},{num:124334472,status:"2",sup:"nd",text:"Dosage"},{num:1366227,status:"3",sup:"rd",text:"Dosage"},{num:208265720,status:"",sup:"",text:"Vaccination Target"}]
  
    return (
    <div className='card covid-stats'>
        <h4><span>COVID-19 VACCINATION STATS</span></h4>
        <div className="status-list">
          {status.map(state => {
            return(
              <div className="status" key={state.num}>
                {/* formating number into 123.456.789 */}
                <h5 className='number'>{new Intl.NumberFormat('de-DE').format(state.num)}</h5>
                <p>{state.status}<sup>{state.sup}</sup> {state.text}</p>
              </div>
            )
          }) }
        </div>
    </div>
  )
}

export default CovidStats