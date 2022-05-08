import React,{useEffect} from 'react'
import {motion} from 'framer-motion'

function LocationSearch({
    setIdProvinceInput,
    setIdStateInput,
    states,
    setStates,
    provinces,
    setProvinces,
    findClick,
  }) {
 
  useEffect(() => {
    const getProvince = async () => {
      const res = await fetch('https://ibnux.github.io/data-indonesia/provinsi.json')
      const getpro = await res.json()
      setProvinces(await getpro)
    }
    getProvince();
  },[])


  const provinceSelected = (e)=> {
    const getState = async (id=0) => {
      const res = await fetch(`https://ibnux.github.io/data-indonesia/kabupaten/${id}.json`)
      const getst = await res.json()
      setStates(await getst)
    }
    getState(e.target.value)
    setIdProvinceInput(parseInt(e.target.value))
  }
  const stateSelected = (e)=> {
      setIdStateInput(parseInt(e.target.value))
  }
  

  return (
    <motion.div className='card search by-location'
      initial={{opacity:0,y:80}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:80}}
      transition={{delay:.1}}>
        <h4>Find Faskes</h4>
        <form>
            <motion.select name="province" onChange={(e)=>provinceSelected(e)} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/dropdown.svg'})`}}
              initial={{opacity:0,y:80}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:80}}
              transition={{delay:.2}}>
              <option value="null">Provinsi</option>
                {provinces.map((prov) => (
                  <option key={prov.id} value={prov.id}>{prov.nama}</option>
                ))}
            </motion.select>
            <motion.select name="state" onChange={(e) => stateSelected(e)} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/dropdown.svg'})`}}
              initial={{opacity:0,y:80}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:80}}
              transition={{delay:.3}}
            >
                <option value="null" >State</option>
                {states.map((state) => (
                    <option key={state.id}value={state.id}>{state.nama}</option>
                ))}
            </motion.select>
            <motion.button className='btn primary' onClick={(e)=>{findClick(e) }}
              initial={{opacity:0,y:80}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:80}}
              transition={{delay:.4}}
            >Find</motion.button>
        </form>
    </motion.div>
  )
}

export default LocationSearch