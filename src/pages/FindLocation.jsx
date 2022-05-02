import React from 'react'
import Category from '../components/Cards/Category'
import LocationSearch from '../components/Cards/LocationSearch'
import NameSearch from '../components/Cards/NameSearch'
import FaskesList from '../components/FaskesList'
import Footer from '../components/Footer'
import Header from '../components/Header'

function FindLocation() {  
  const faskes = [{name:"Puskesmas",src:"puskesmas.png"},{name:"Hospital",src:"hospital.png"},{name:"Clinic",src:"clinic.png"},{name:"FKTP",src:"fktp.png"}]
  
  return (
    <>
        <Header />
        <h1>FIND FASKES NEARBY</h1>
        <NameSearch />
        <LocationSearch />
        {faskes.map(faskes => {
          return(
            <Category name={faskes.name} src={process.env.PUBLIC_URL + faskes.src}/>
          )
        })}
        <FaskesList />
        <Footer />
    </>
  )
}

export default FindLocation