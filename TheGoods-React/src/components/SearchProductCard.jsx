import React from 'react'
import { MdAttachMoney } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/services/cartSlice';

const SearchProductCard = (props) => {
    const {id,thumbnail,price,category, title} = props;
    const dispatch = useDispatch();
    return (
        <div className='border border-[#5FBDFF] w-[30%] h-96'>
        <div className='flex flex-col shadow-sm mx-auto p-10'>
          <img src={thumbnail} alt={title} className='object-contain w-full h-40 mb-4' />
          <div className=''>
            <h2 className='text-lg font-semibold mb-2'>{title}</h2>
            <span className='text-[#4c4c97] border bg-[#96EFFF] rounded-md capitalize font-normal text-sm px-2 py-1'>{category.replace('-', ' ')}</span>
            <p className='text-base text-[#4c4c97] mt-2 tracking-wider flex items-center'>
            <MdAttachMoney />
            {price}
          </p>
          </div>
          <div className='mt-4 flex justify-between'>
        <button onClick={() => {
          dispatch(addToCart(props))
        }} className='bg-[#5FBDFF] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transform transition duration-300 hover:scale-105'>
          Add To Cart
        </button>
        <button className='bg-white text-[#5FBDFF] px-4 py-2 shadow-md rounded-md hover:bg-[#5FBDFF] hover:text-white focus:outline-none focus:ring focus:border-blue-300 transform transition duration-300 hover:scale-105'>
          Details
        </button>
      </div>
      
        </div>
      </div>
    )
}

export default SearchProductCard
