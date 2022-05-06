import React from 'react'
import FaskesCard from './Cards/FaskesCard'

function FaskesList({filteredData}) {    
    
  return (
    <div className='faskes-list' id='faskes-list'>
      {filteredData.map((data) => {
        return(
          <FaskesCard jenis={data.jenis_faskes} name={data.nama} kota={data.kota} provinsi={data.provinsi} status={data.status}/>
          )
      })}
    </div>
  )
}

export default FaskesList

// alamat: "Jl. Dr. Cipto No.1, Pasir Kaliki, Kec. Cicendo, Kota Bandung, Jawa Barat 40171, Indonesia"
// detail: []
// id: 4638
// jenis_faskes: ""
// kelas_rs: ""
// kode: "N0002305"
// kota: "KOTA BANDUNG"
// latitude: "-6.9063938"
// longitude: "107.5981883"
// nama: "RSU MELINDA 2 VGR"
// provinsi: "JAWA BARAT"
// source_data: "Control Tower KPCPEN"
// status: "Siap Vaksinasi"
// telp: "(022) 4233777"