import React from 'react'
import { Link } from 'react-router-dom'
import Appcontext from '../Context/AppContext/Appcontext'
import { useContext } from 'react';

 function Productcard({product}) {
  let { addProductsToWishlist, addProductsToCart } = useContext(Appcontext);
  return (
    <div className='w-1/4 border border-black shadow-lg mr-4 mt-4 p-6 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-purple-400' >
        <div className='p-4'>
        <img src={product.image} className='h-64 mx-auto' />
        </div>
        <div className='p-4'>
        <Link to={`/productdet/${product.id}`} ><h2>{product.title}</h2></Link>
        </div>
        <div className='p-4 flex justify-between' >
            <div>
                <p>$ {product.price}</p>
            </div>
            <div  className='h-1'>
             
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="w-6 h-6"
                onClick={()=>
                {
                  addProductsToWishlist(product)
                }}
                >
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
             
            </div>
            
        </div>
    </div>
  )
}
export default Productcard