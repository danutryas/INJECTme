import React from 'react'
import {motion} from 'framer-motion'


function Category({src,name,filterCategory,setFilterCategory}) {


  const filterSelected = (name) => {
    setFilterCategory(name)
    try {
      const li = document.getElementById("faskes-list").offsetTop
      window.scrollTo(0,li - 160)
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <motion.div className={`card category ${filterCategory === name ? "active":""}`} onClick={()=>filterSelected(name)}
      initial={{opacity:0,x:-250}}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:-250}}
      transition={{delay:.2}}  
    >
        <div className="faskes-logo">
          <img src={src} alt="faskes logo" />
        </div>
        <p>{name}</p>
    </motion.div>
  )
}

export default Category