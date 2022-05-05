import React,{useContext} from 'react'
import Category from '../components/Cards/Category'
import LocationSearch from '../components/Cards/LocationSearch'
import NameSearch from '../components/Cards/NameSearch'
import FaskesList from '../components/FaskesList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ModalContext from '../components/Context/ModalContext'


function FindLocation() {  

  const { modalStatus } = useContext(ModalContext)

  const faskes = [{name:"Puskesmas",src:"puskesmas.png"},{name:"Hospital",src:"hospital.png"},{name:"Clinic",src:"clinic.png"},{name:"FKTP",src:"fktp.png"}]
  
  return (
    <>
      <Header />
        <div className={`container ${modalStatus ? "active":""}`} id={"home"}>

        
          <h1>FIND FASKES NEARBY</h1>
          
          <NameSearch />
          <LocationSearch />
          {faskes.map((faskes,index) => {
            return(
              <Category key={index} name={faskes.name} src={process.env.PUBLIC_URL + faskes.src}/>
              )
            })}
          <FaskesList />
        </div>
      <Footer />
    </>
  )
}

export default FindLocation