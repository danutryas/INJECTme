import React,{useContext} from 'react'
import Banner from '../components/Banner'
import CovidStats from '../components/Cards/CovidStats'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Types from '../components/Types'
import Urgency from '../components/Urgency'
import ModalContext from '../components/Context/ModalContext'
import { ScrollProvider } from "../components/Context/ScrollContext";
import { motion } from 'framer-motion'

function Landing() {
  const { modalStatus } = useContext(ModalContext)
  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={1}>
      <ScrollProvider>
        <Header />
        <div className={`container ${modalStatus ? "active":""}`} >
          <Banner />
          <CovidStats />
          <Urgency />
          <Types />
        </div>
        <Footer />
      </ScrollProvider>
    </motion.div>
  )
}

export default Landing