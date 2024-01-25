import React, { useState } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useCustomStateContext } from '../context/StateContext'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const {search, setSearch, state:{carts}} = useCustomStateContext();
    console.log(carts)

    const [isSticky, setIsSticky] = useState(false);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 103) {
          setIsSticky(true);
      } else {
          setIsSticky(false);
      }
  });
  

  return (
   <nav className={`transition-all bg-[#fcfafa] duration-300 ease-in-out ${isSticky ? 'fixed top-0 w-full shadow p-4 z-10' : ''}`}>
     <div className='flex flex-wrap justify-between items-center px-10 py-4'>
      <Link to={'/'}>
      <h2 className='text-3xl font-semibold'>MyShop</h2>
      </Link>
      <div className="bg-white rounded-full shadow-md flex gap-4 py-3">
            <input type="text" value={search} onChange={(event) => {
                setSearch(event.target.value);
            }} placeholder="Search..." className="w-60 px-4 py-2 bg-[#fcfafa] rounded-l-full focus:outline-none"/>
            <button className="bg-[#1D5D9B] text-white px-4 rounded-r-full hover:bg-blue-600 focus:outline-none">Search</button>
       <Link to={'/addtocart'}>
       <div className='relative'>
        <AiOutlineShoppingCart className='text-3xl mt-1 mx-2'/>
        <span className='absolute bottom-5 left-5 rounded-[100%] flex items-center justify-center text-white bg-red-500 h-6 w-6'>{carts.length}</span>
        </div>
        </Link>

        </div>
    </div>
   </nav>
  )
}

export default Navbar
