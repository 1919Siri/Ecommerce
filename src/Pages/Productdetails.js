import React, { useContext, useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import Appcontext from '../Context/AppContext/Appcontext'

function Productdetails() {

  let url="https://fakestoreapi.com/products/"
  let{id}=useParams()
  const [productdet,setProductdet]=useState({})
  const [Loading,setLoading]= useState(true)
  let {addProductsToCart}= useContext(Appcontext)


  async function productDet()
  {
    
    let response=await fetch(url + id)
    let data=await response.json()
    console.log(data)
    setProductdet(data)
    setLoading(false)
  }

  useEffect(()=>{
    productDet()
  },[])
  if (Loading) {
    return "fetching data...";
  }

  return (
    <>
      <div className='flex max-w-7xl mx-auto gap-10 mt-12'>
        <div className='w-1/2'>
            <img  src={productdet.image} alt={productdet.title} className='h-96' />
        </div>
        <div>
            <h1 className='text-3xl'>{productdet.title}</h1>
            <p className=' my-12'>{productdet.description}</p>
            <div className='flex justify-between items-center'>
            <p >$ {productdet.price}</p>
            <span className='capitalize  bg-purple-400'>{productdet.category}</span>
            </div>
            <div className='mt-8 flex justify-between'>
              <h3>Rating: {productdet?.rating?.rate}</h3>
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" 
              onClick={()=>{
                addProductsToCart(productdet)
              }}  >
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
              
            </div>
        </div>
        
      </div>
    </>
  )
}
export default  Productdetails