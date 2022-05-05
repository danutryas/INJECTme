import React,{useContext} from 'react'
import Banner from '../components/Banner'
import CovidStats from '../components/Cards/CovidStats'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Types from '../components/Types'
import Urgency from '../components/Urgency'
import ModalContext from '../components/Context/ModalContext'
import { ScrollProvider } from "../components/Context/ScrollContext";


function Landing() {
  const { modalStatus } = useContext(ModalContext)
  
  return (
    <>
      <ScrollProvider>
        <Header />
        <div className={`container ${modalStatus ? "active":""}`}>
          <Banner />
          <CovidStats />
          <Urgency />
          <Types />
        </div>
        <Footer />
      </ScrollProvider>
    </>
  )
}

export default Landing