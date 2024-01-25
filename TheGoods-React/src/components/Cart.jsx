import React from 'react'
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addItemsQuantity, removeFromCart, subtractItemsQuantity } from '../feature/services/cartSlice';

const Cart = (props) => {
    const {id,title,thumbnail,price,quantity} = props;
    const dispatch = useDispatch();

    const oneItemPrice = price * quantity;
  return (
    <div className=" mx-auto border p-4 my-6 rounded-md shadow-md bg-white">
   <div className='flex justify-between'>
   <div className="flex items-center space-x-4">
        <img src={thumbnail} alt={title} className="w-20 h-20 object-cover rounded-md" />
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-[#4c4c97]">Price: ${oneItemPrice.toFixed(2)}</p>
          <button onClick={() => {
            dispatch(removeFromCart(props));
          }} className='text-red-500 text-sm'>Remove From Cart</button>
        </div>
      </div>
    <div className="flex items-center space-x-2">
        <button  onClick={() => {
          dispatch(subtractItemsQuantity(props))
        }}
          className="text-white cursor-pointer p-2 rounded-full bg-[#7B66FF] hover:bg-[#8a7cea] duration-75 disabled:bg-[#8a7cea]"
          disabled={quantity === 1}
        >
          <IoMdRemove />
        </button>
        <span className="text-lg text-[#7B66FF] font-semibold px-3">{quantity}</span>
        <button onClick={() => {
          dispatch(addItemsQuantity(props))
        }} className="text-white cursor-pointer p-2 rounded-full bg-[#7B66FF] hover:bg-[#8a7cea] duration-75">
          <IoMdAdd />
        </button>
      </div>
   </div>

  </div>
  )
}

export default Cart
