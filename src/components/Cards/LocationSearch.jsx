import React from 'react'

function LocationSearch() {
  return (
    <div className='card '>
        <h4>Find Faskes by Location</h4>
        <form>
            <select>
                <option value="null">Province</option>
            </select>
            <select>
                <option value="null">State</option>
            </select>
            <button className='btn primary'>Find</button>
        </form>
    </div>
  )
}

export default LocationSearch