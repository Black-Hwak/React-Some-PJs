import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';
import { IoMdCash } from 'react-icons/io';
import { IoBagHandle } from 'react-icons/io5';
import {Link} from 'react-router-dom'

const AddToCart = () => {
    const {cartItems, totalAmount} = useSelector((state) => state.cart);
  return (
    <div className="max-w-2xl mx-auto">
    {cartItems.length === 0 ? (
        <div className="text-center flex flex-col items-center justify-center h-screen">
        <IoBagHandle className="text-5xl text-[#7B66FF] mb-4" />
        <p className="text-xl text-[#4c4c97] font-semibold mb-4">Your cart is empty.</p>
        <Link to="/" className="text-[#97D2EC] hover:underline">
          Let's Buy Something
        </Link>
      </div>
    ) : (
      <>
        {cartItems.map((item) => (
          <Cart key={item.id} {...item} />
        ))}
       <div className="border-t pt-4 mx-auto my-10">
        <div className="flex justify-between mt-2 items-center">
          <span className="text-lg font-semibold flex items-center text-[#7B66FF]">
            <IoMdCash className="mr-2 text-[#00A9FF] " /> Total Amount :
          </span>
          <span className="text-lg">$ {totalAmount.toFixed(2)}</span>
        </div>
      </div>
      </>
    )}
  </div>
  );
};


export default AddToCart
