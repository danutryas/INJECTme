import React from 'react'
import FaskesCard from './Cards/FaskesCard'

function FaskesList({filteredData}) {    
      

  return (
    <div className='faskes-list' id='faskes-list'>
      {filteredData.map((data) => {
        return(
          <FaskesCard jenis={data.jenis_faskes} name={data.nama} kota={data.kota} provinsi={data.provinsi} long={data.longitude} lat={data.latitude} status={data.status}/>
          )
      })}
    </div>
  )
}

export default FaskesList



