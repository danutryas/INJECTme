import React from 'react'
import Banner from '../components/Banner'
import CovidStats from '../components/Cards/CovidStats'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Types from '../components/Types'
import Urgency from '../components/Urgency'

function Landing() {
  return (
    <>
        <Header />
        <div className="container">
          <Banner />
          <CovidStats />
          <Urgency />
          <Types />
        </div>
        <Footer />
    </>
  )
}

export default Landing