import React, { useState } from 'react'

function FaskesModal() {
    const [faskesModal,setFaskesModal] = useState(false)

  
  return (
    <div className={`modal ${faskesModal ? "active" :""}`}>
        <div className="card info-faskes">
            <button className="close" onClick={() => changeModal()}>
            <IconContext.Provider value={{  className: "close-button" }}>
                <RiCloseFill />
            </IconContext.Provider>
                
            </button>
            <div className="content">


            </div>
        </div>
    </div>
  )
}

export default FaskesModal



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