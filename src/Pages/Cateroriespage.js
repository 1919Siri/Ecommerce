import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productcard from '../Components/Productcard'

function Cateroriespage() {

  let {id}=useParams()
  const url2= "https://fakestoreapi.com/products/category/"
  let [category,setCategory]=useState([])
  let [loading,setLoading]=useState(true)

  async function productCategory()
  {
    setLoading(true)
    let response= await fetch(url2+id)
    let data=await response.json()
    setCategory(data)
    setLoading(false)
  }

  useEffect(()=>{
    productCategory()
  },[id])

  return (
    <div className='max-w-7xl mx-auto flex flex-wrap justify-between'>
      {loading ? "Fetching products":(
        category.map((product)=>{
          return(
             <>
              <Productcard key={product.id} product={product} />
             </>
          )

        })
      )}
    </div>
  )
}

export default Cateroriespage
