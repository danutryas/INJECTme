import React from 'react'
import VaccineDropdown from './Dropdown/VaccineDropdown'
import '../styles/css/type.css'

function Types() {
    const Type1 = [
        {id:1,title:"SINOVAC",desc:"COVID-19 Vaccine (Vero Cell) Inactivated, CoronaVac® adalah sebuah vaksin inaktivasi terhadap COVID-19 yang menstimulasi sistem kekebalan tubuh tanpa risiko menyebabkan penyakit."},
        {id:2,title:"ASTRAZENECA",desc:"Vaksin ChAdOx1-S/nCoV-19 adalah vaksin vektor adenovirus non-replikasi untuk COVID-19. Vaksin ini mengekspresikan gen protein paku SARS-CoV-2, yang menginstruksikan sel inang untuk memproduksi protein S-antigen yang unik untuk SARS-CoV-2, sehingga tubuh dapat menghasilkan respons imun dan menyimpan informasi itu di sel imun memori."},
        {id:3,title:"MODERNA",desc:"Vaksin COVID-19 Moderna adalah sebuah vaksin berbasis RNA duta (messenger RNA/mRNA) untuk COVID-19. Sel inang menerima instruksi dari mRNA untuk memproduksi protein S-antigen unik SARS-CoV-2, sehingga tubuh dapat menghasilkan respons kekebalan dan menyimpan informasi itu di dalam sel imun memori."}
    ]
    const Type2 = [
        {id:4,title:"SINOPHARM",desc:"SARS-CoV-2 Vaccine (Vero Cell) adalah sebuah vaksin inaktivasi terhadap COVID-19 yang menstimulasi sistem kekebalan tubuh tanpa risiko menyebabkan penyakit. Setelah vaksin inaktivasi ini bersentuhan dengan sistem kekebalan tubuh, produksi antibodi terstimulasi, sehingga tubuh siap memberikan respons terhadap infeksi dengan SARS-CoV-2 hidup."},
        {id:5,title:"PFIZER",desc:"COMIRNATY® adalah sebuah vaksin berbasis RNA duta (messenger RNA/mRNA) untuk COVID-19. mRNA menginstruksikan sel untuk memproduksi protein S-antigen (bagian dari protein paku (spike)) yang unik untuk SARS-CoV-2 untuk menstimulasi respons kekebalan."},
        {id:6,title:"Novovax",desc:"Vaksin Novavax mengandung protein subunit yang dibuat khusus untuk menyerupai protein alami pada virus Corona. Setelah disuntikkan ke dalam tubuh, protein tersebut akan memicu tubuh untuk menghasilkan antibodi untuk melawan virus Corona. Selain itu, vaksin ini juga mengandung matrix-M yang ditambahkan untuk meningkatkan respon sistem kekebalan tubuh dan kadar antibodi."}
    ]
  return (
    <div className='vaccines' id='vaccines'>
        <div className="top-side">
            <div className="text">
                <h3>GET TO KNOW THE TYPES</h3>
                <p>All of the covid-19 vaccines are trying to achieve the same thing – immunity to the virus, and some might also be able to stop transmission. They do so by stimulating an immune response to an antigen, a molecule found on the virus.</p>
            </div>
            <div className="image">
                <img src={process.env.PUBLIC_URL + '/vaccines.png'} alt="vaccines" />
            </div>
        </div>
        <div className="vaccine-type">
            <div className="type1">
                {Type1.map((type)=> {
                    return (
                        <VaccineDropdown key={type.id} title={type.title} desc={type.desc}/>
                    )
                })}
            </div>
            <div className="type2">
                {Type2.map((type)=> {
                    return (
                        <VaccineDropdown key={type.id} title={type.title} desc={type.desc}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Types;