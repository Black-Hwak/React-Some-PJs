import React, { useState } from 'react'
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import { Link } from 'react-router-dom';
import MenuContainer from '../pages/MenuContainer';

const Navbar = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <>
    <div className='flex justify-between items-center'>
      <Link to={'/'}>
      <div className='flex items-center space-x-3 cursor-pointer'>
        <span><RestaurantSharpIcon className='p-1 rounded-full bg-[#f1e8e6] text-[#f55951] ' style={{ fontSize: '3rem' }}/></span>
        <h2 className='font-mono text-3xl tracking-wider'><span className='text-[#f55951]'>The</span>Meal</h2>
      </div>
      </Link>
      <div className='space-x-6'>
       <span>Canadian</span>
      <input
      value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value)
          }}
          type="text"
          placeholder='Search'
          className='px-3 py-1 text-[#f55951] rounded-md focus:outline-none focus:ring focus:border-blue-300'
        />
      </div>
    </div>
    <MenuContainer searchWord={searchWord}/>
    </>
  )
}

export default Navbar
