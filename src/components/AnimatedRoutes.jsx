import React from 'react'
import FindLocation from "../pages/FindLocation";
import Landing from "../pages/Landing";
import {Route,Routes,useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion'


function AnimatedRoutes() {
    const location = useLocation()
  return (
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Landing  />}/>
            <Route exact path="/find" element={<FindLocation />}/>
        </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes