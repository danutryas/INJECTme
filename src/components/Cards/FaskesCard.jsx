import React,{useContext} from 'react'
import ModalContext from '../Context/ModalContext'
import { AiFillHome,AiFillCheckCircle } from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
 
function FaskesCard({jenis,name,kota,provinsi,status}) {
  const { changeModal } = useContext(ModalContext)

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

  return (
    <div className='faskes-card'>
      <div className="info">
        <div className="card-category">
          <AiFillHome className='card-icon'/>
          <p>{jenis === "" ? "FKTP": jenis}</p>
        </div>
        <h4 className='faskes-name'>{name}</h4>
        <div className="faskes-status">
          <div className="faskes-location">
            <MdLocationOn  className='card-icon'/>
            <p>{kota}, {provinsi}</p>
          </div>
          <div className="vaksin-status">
            <AiFillCheckCircle  className='card-icon'/>
            <p>{status}</p>
          </div> 
        </div>
      </div>
      <div className="cta">
        <button className='btn primary' onClick={()=> changeModal()}>Register</button>
        <button className='btn secondary'>View Details</button>
      </div>
    </div>
  )
}

export default FaskesCard