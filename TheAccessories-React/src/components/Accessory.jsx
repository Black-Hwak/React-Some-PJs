import React from 'react'
import { useCustomStateContext } from '../context/StateContext';
import { motion } from "framer-motion"


const Accessory = (props) => {
    const {id,category,image,description,title,price} = props;
    const {dispatch} = useCustomStateContext();

  return (
    <motion.div layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{duration: 0.5}}
    className=''>
      <div className='shadow rounded w-72 px-5 py-10'>
      <div className="flex justify-center p-5">
      <img src={image} alt="" className=" cursor-pointer h-40 object-contain"/>
     
    </div>
    <hr className='w-[75%] mx-auto border-b-2 mb-5' />
        <div>
            <h3 className='text-[#071952] text-lg font-semibold my-2'>{title.substring(0,23)}...</h3>
           <div>
           <span className="bg-[#9EB8D9] text-white rounded-md py-1 px-2 text-xs">{category}</span>
           </div>
            <p className='my-3 text-[#2E4374]'>${price}</p>
           <div className='flex content-between'>
           <button onClick={() => {
                dispatch({type: "ADD_TO_CART", payload: props})
            }} className='px-6 mr-2 py-2 bg-[#7C93C3] shadow-sm rounded text-white'>Add To Cart</button>
            <button className='px-6 py-2 bg-[#9EB8D9] shadow-sm rounded text-white'>Detail</button>
           </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Accessory
