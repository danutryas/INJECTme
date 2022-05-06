import React from 'react'

function Category({src,name,filterCategory,setFilterCategory}) {
  

  const filterSelected = (name) => {
    setFilterCategory(name)
  }
  console.log(filterCategory)

  return (
    <div className={`card category ${filterCategory === name ? "active":""}`} onClick={()=>filterSelected(name)}>
        <div className="faskes-logo">
          <img src={src} alt="faskes logo" />
        </div>
        <p>{name}</p>
    </div>
  )
}

export default Category