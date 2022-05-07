import React,{useContext,useState,useEffect} from 'react'
import Category from '../components/Cards/Category'
import LocationSearch from '../components/Cards/LocationSearch'
import NameSearch from '../components/Cards/NameSearch'
import FaskesList from '../components/FaskesList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ModalContext from '../components/Context/ModalContext'
import '../styles/css/find-faskes.css'


function FindLocation() {  
  const { modalStatus } = useContext(ModalContext)
  const [data,setData] =useState([])
  const [provinces,setProvinces] = useState([])
  const [states,setStates] = useState([])
  const [filteredData,setFilteredData]= useState([])
  const [filterCategory,setFilterCategory] = useState("")
  const [idProvinceInput,setIdProvinceInput] = useState(0)
  const [idStateInput,setIdStateInput] = useState(0)


  const getFaskes = (e) => {
    e.preventDefault()
    const provinceName = provinces.find(el => el.id === idProvinceInput.toString())
    const provinsi = provinceName.nama.replace(" ","+") 
    const stateName = states.find(el => el.id === idStateInput.toString())
    const kabupaten = stateName.nama.replace(" ","+") 
    
    fetch(`https://kipi.covid19.go.id/api/get-faskes-vaksinasi?skip=0&province=${provinsi}&city=${kabupaten}`)
      .then(res => res.json())
      .then(res => setData(res.data))
  }
  useEffect(() => {
    const getFaskes = async () => {
      await fetch(`https://kipi.covid19.go.id/api/get-faskes-vaksinasi?skip=0&province=JAWA+BARAT&city=KOTA+BANDUNG`)
        .then(res => res.json())
        .then(res => {
          setData(res.data)
          setFilteredData(res.data)
        })
    }
    getFaskes()
  },[])
  
  useEffect(() => {
    if (filterCategory !== ""){
      const filtering = data.filter((el) => el.jenis_faskes === filterCategory||( el.jenis_faskes === "KKP" && filterCategory === "FKTP") || (el.jenis_faskes === "" && filterCategory === "FKTP"))
      setFilteredData(filtering)
    } else {
      setFilteredData(data)
    }
  },[data,filterCategory])

  const faskes = [{name:"PUSKESMAS",src:"puskesmas.png"},{name:"RUMAH SAKIT",src:"hospital.png"},{name:"KLINIK",src:"clinic.png"},{name:"FKTP",src:"fktp.png"}]  
  return (
    <>
      <Header />
      <div className={`find-container ${modalStatus ? "active":""}`} id={"home"}>
        <h1>FIND FASKES NEARBY</h1>
        <div className="search-section ">
          {/* <NameSearch 
            idProvinceInput={idProvinceInput}
            setIdProvinceInput={setIdProvinceInput}
            idStateInput={idStateInput}
            setIdStateInput={setIdStateInput}
          /> */}
          <LocationSearch 
            idProvinceInput={idProvinceInput}
            setIdProvinceInput={setIdProvinceInput}
            idStateInput={idStateInput}
            setIdStateInput={setIdStateInput}
            states={states}
            setStates={setStates}
            provinces={provinces}
            setProvinces={setProvinces}
            getFaskes={getFaskes}
          />
        </div>
        <section className='categories'>
            <h3>FASKES Category</h3>
            <div className="category-list">
              {faskes.map((faskes,index) => {
                return <Category key={index} name={faskes.name} src={process.env.PUBLIC_URL + faskes.src} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
                })}
            </div>
        </section>
        <FaskesList 
          filteredData={filteredData}
        />
      {/* <button>Load More</button> */}
      </div>
      <Footer />
    </>
  )
}

export default FindLocation