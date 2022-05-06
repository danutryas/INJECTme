import React,{useEffect} from 'react'

function LocationSearch({
    setIdProvinceInput,
    setIdStateInput,
    states,
    setStates,
    provinces,
    setProvinces,
    getFaskes,
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
    <div className='card search by-location'>
        <h4>Find Faskes by Location</h4>
        <form>
            <select name="province" onChange={(e)=>provinceSelected(e)}>
              <option value="null">Provinsi</option>
                {provinces.map((prov) => (
                  <option key={prov.id} value={prov.id}>{prov.nama}</option>
                ))}
            </select>
            <select name="state" onChange={(e) => stateSelected(e)}>
                <option value="null" >State</option>
                {states.map((state) => (
                  <option key={state.id}value={state.id}>{state.nama}</option>
                ))}
            </select>
            <button className='btn primary' onClick={(e)=>getFaskes(e)}>Find</button>
        </form>
    </div>
  )
}

export default LocationSearch