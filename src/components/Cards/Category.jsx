import React from 'react'

function Category({src,name,filterCategory,setFilterCategory}) {


  const filterSelected = (name) => {
    setFilterCategory(name)
    const li = document.getElementById("faskes-list").offsetTop
    window.scrollTo(0,li - 160)
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