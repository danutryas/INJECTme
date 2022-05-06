import React from 'react'


function NameSearch() {
  return (
    <div className='card search by-name'>
        <h4>Find Faskes by Name</h4>
        <form>
            <input type="text" placeholder='Enter Faskes Name' />
            <button className='btn primary'>Find</button>
        </form>
    </div>
  )
}

export default NameSearch