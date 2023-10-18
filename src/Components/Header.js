import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

export default function Header({ setOpenWish, setOpenCart}) {
  return (
    <div className='h-14 bg-purple-400 fixed w-full shadow-lg'>
        <header className='flex h-14 max-w-7xl mx-auto justify-between items-center'>
            <Link to="/">
            <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <h3 className='font-semibold'>Ecommerce</h3>
            </div>
            </Link>
            <div>
                <Navigation setOpenCart={setOpenCart} setOpenWish={setOpenWish}/>
            </div>
           
        </header>
        
    </div>
  )
}
